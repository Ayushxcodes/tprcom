import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { authenticateAdmin, createSession, isSessionValid } from '@/lib/authService';

const AUTH_COOKIE_NAME = 'tpr_admin_token';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

    if (!token) {
      return NextResponse.json({ authenticated: false });
    }

    // Token exists and valid
    return NextResponse.json({ authenticated: true });
  } catch (error) {
    console.error('API GET Auth error:', error);
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body || {};

    if (!username || !password) {
      return NextResponse.json({ success: false, error: 'Username and password required' }, { status: 400 });
    }

    const authResult = await authenticateAdmin(username, password);

    if (authResult.success && authResult.user) {
      const session = createSession(authResult.user);
      const tokenString = JSON.stringify(session);

      const cookieStore = await cookies();
      cookieStore.set(AUTH_COOKIE_NAME, tokenString, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 8 * 60 * 60, // 8 hours
        path: '/',
      });

      return NextResponse.json({ success: true, user: authResult.user });
    }

    return NextResponse.json({ success: false, error: authResult.error || 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    console.error('API POST Auth error:', error);
    return NextResponse.json({ success: false, error: 'Authentication failed' }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete(AUTH_COOKIE_NAME);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API DELETE Auth error:', error);
    return NextResponse.json({ success: false, error: 'Logout failed' }, { status: 500 });
  }
}
