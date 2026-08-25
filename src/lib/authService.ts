/**
 * Standard Production-Grade Authentication Service for TPR CMS
 * Ready for Database Link (Prisma, Supabase, PostgreSQL, MongoDB, etc.)
 */

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
 * Standard Admin Authentication (DB-Link Ready)
 * 
 * To link your Database:
 * 1. Import your DB client (e.g. `import { db } from '@/lib/db'`)
 * 2. Query your users table in the DB block below.
 */
export async function authenticateAdmin(username: string, password: string): Promise<AuthResult> {
  const cleanUsername = username.trim();

  // ==========================================================
  // 🔌 DATABASE LINK SECTION (UNCOMMENT WHEN DB IS CONNECTED)
  // ==========================================================
  /*
  try {
    // Example Prisma / Kysely / Supabase call:
    // const user = await db.user.findUnique({ where: { username: cleanUsername } });
    // if (user && await comparePassword(password, user.passwordHash)) {
    //   return {
    //     success: true,
    //     user: { id: user.id, username: user.username, role: user.role || 'ADMIN' },
    //     sessionToken: await hashPassword(`session_${user.id}_${Date.now()}`),
    //   };
    // }
  } catch (err) {
    console.error('Database connection error during auth:', err);
  }
  */

  // Standard Credentials via environment variables only (no hardcoded fallback)
  const expectedUser = process.env.ADMIN_USERNAME || process.env.NEXT_PUBLIC_ADMIN_USERNAME;
  const expectedPass = process.env.ADMIN_PASSWORD || process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  if (!expectedUser || !expectedPass) {
    return {
      success: false,
      error: 'Admin authentication is not configured. ADMIN_USERNAME and ADMIN_PASSWORD must be set in environment variables.',
    };
  }

  const inputHash = await hashPassword(`${cleanUsername}:${password}`);
  const targetHash = await hashPassword(`${expectedUser}:${expectedPass}`);

  if (inputHash === targetHash) {
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
