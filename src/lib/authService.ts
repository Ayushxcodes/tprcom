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
 * SHA-256 Password / Token Hashing Helper
 */
export async function hashPassword(input: string): Promise<string> {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }
  return input;
}

/**
 * Database Admin Authentication (Supabase PostgreSQL Query)
 */
export async function authenticateAdmin(username: string, password: string): Promise<AuthResult> {
  const cleanUsername = username.trim();
  const inputHash = await hashPassword(password);

  const client = getSupabase();

  // 1. Direct Supabase Database Authentication
  if (client) {
    try {
      const { data, error } = await client
        .from('admin_users')
        .select('*')
        .eq('username', cleanUsername)
        .single();

      if (data && data.password_hash) {
        if (data.password_hash === inputHash || data.password_hash === password) {
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
          return {
            success: false,
            error: 'Invalid username or password',
          };
        }
      }

      if (error && error.code !== 'PGRST116') {
        console.warn('Database auth query warning:', error.message);
      }
    } catch (err) {
      console.error('Database authentication error:', err);
    }
  }

  // 2. Fallback to Environment Variables if DB user is not created yet
  const expectedUser = process.env.ADMIN_USERNAME || process.env.NEXT_PUBLIC_ADMIN_USERNAME;
  const expectedPass = process.env.ADMIN_PASSWORD || process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  if (expectedUser && expectedPass) {
    const envInputHash = await hashPassword(`${cleanUsername}:${password}`);
    const targetHash = await hashPassword(`${expectedUser}:${expectedPass}`);

    if (envInputHash === targetHash || (cleanUsername === expectedUser && password === expectedPass)) {
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
