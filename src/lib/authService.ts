import crypto from 'crypto';
import { getSupabase } from '@/lib/supabase';

export interface AuthUser {
  id: string;
  username: string;
  role: string;
}

export interface AuthResult {
  success: boolean;
  user?: AuthUser;
  error?: string;
  sessionToken?: string;
}

export interface SessionPayload {
  userId: string;
  username: string;
  role: string;
  expiresAt: number;
}

// 8 hours session duration
const SESSION_EXPIRY_MS = 8 * 60 * 60 * 1000;

/**
 * Universal SHA-256 Password / Token Hashing Helper (Node.js & Browser Safe)
 */
export async function hashPassword(input: string): Promise<string> {
  if (!input) return '';

  // Server-side (Node.js environment in Next.js API Routes)
  if (typeof window === 'undefined') {
    try {
      return crypto.createHash('sha256').update(input).digest('hex');
    } catch {
      return input;
    }
  }

  // Client-side (Browser environment)
  if (window.crypto && window.crypto.subtle) {
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(input);
      const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    } catch {
      return input;
    }
  }

  return input;
}

/**
 * Database Admin Authentication (Supabase PostgreSQL Query + Env Fallback)
 */
export async function authenticateAdmin(username: string, password: string): Promise<AuthResult> {
  const cleanUsername = (username || '').trim();
  const cleanPassword = (password || '').trim();
  const inputHash = await hashPassword(cleanPassword);

  const client = getSupabase();

  // 1. Direct Supabase Database Authentication
  if (client) {
    try {
      const { data, error } = await client
        .from('admin_users')
        .select('*')
        .ilike('username', cleanUsername)
        .single();

      if (data && data.password_hash) {
        const dbPass = String(data.password_hash).trim();

        // Matches plain-text password OR SHA-256 hashed password
        if (
          dbPass === cleanPassword ||
          dbPass === inputHash ||
          dbPass.toLowerCase() === inputHash.toLowerCase() ||
          (await hashPassword(dbPass)) === inputHash
        ) {
          const sessionToken = await hashPassword(`session_${data.id}_${Date.now()}`);
          return {
            success: true,
            user: {
              id: String(data.id),
              username: data.username,
              role: data.role || 'SUPER_ADMIN',
            },
            sessionToken,
          };
        } else {
          console.warn(`[AUTH] Password mismatch for DB user '${cleanUsername}'`);
          return {
            success: false,
            error: 'Invalid username or password',
          };
        }
      }

      if (error && error.code !== 'PGRST116') {
        console.warn('[AUTH] Supabase query notice:', error.message);
      }
    } catch (err) {
      console.error('[AUTH] Supabase authentication exception:', err);
    }
  }

  // 2. Environment Variables & Fallback Check
  const expectedUser = (process.env.ADMIN_USERNAME || process.env.NEXT_PUBLIC_ADMIN_USERNAME || 'admin').trim();
  const expectedPass = (process.env.ADMIN_PASSWORD || process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'tpr2026admin').trim();

  if (cleanUsername.toLowerCase() === expectedUser.toLowerCase()) {
    const expectedPassHash = await hashPassword(expectedPass);

    if (
      cleanPassword === expectedPass ||
      inputHash === expectedPass ||
      inputHash === expectedPassHash ||
      inputHash.toLowerCase() === expectedPassHash.toLowerCase()
    ) {
      const sessionToken = await hashPassword(`session_${Date.now()}_${Math.random()}`);
      return {
        success: true,
        user: {
          id: 'admin_1',
          username: cleanUsername,
          role: 'SUPER_ADMIN',
        },
        sessionToken,
      };
    }
  }

  console.warn(`[AUTH] Authentication failed for username: '${cleanUsername}'`);
  return {
    success: false,
    error: 'Invalid username or password',
  };
}

/**
 * Creates a standard session payload
 */
export function createSession(user: AuthUser): SessionPayload {
  return {
    userId: user.id,
    username: user.username,
    role: user.role,
    expiresAt: Date.now() + SESSION_EXPIRY_MS,
  };
}

/**
 * Checks if a session payload is valid and not expired
 */
export function isSessionValid(session: SessionPayload | null): boolean {
  if (!session) return false;
  return session.expiresAt > Date.now();
}
