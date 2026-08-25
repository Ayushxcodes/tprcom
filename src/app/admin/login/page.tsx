'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useContent } from '@/context/ContentContext';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { loginAdmin } = useContent();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const result = await loginAdmin(username, password);
    setIsSubmitting(false);

    if (result.success) {
      router.push('/admin');
    } else {
      setError(result.error || 'Invalid username or password');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 50%, #F1F5F9 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        color: '#0F172A',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* SCOPED CSS STYLES FOR LIGHT THEME & AUTOFILL FIX */}
      <style jsx global>{`
        .admin-login-card input {
          background-color: #F8FAFC !important;
          color: #0F172A !important;
          border: 1.5px solid #CBD5E1 !important;
          outline: none !important;
          transition: all 0.2s ease-in-out !important;
        }
        .admin-login-card input:focus {
          border-color: #B8995E !important;
          background-color: #FFFFFF !important;
          box-shadow: 0 0 12px rgba(184, 153, 94, 0.25) !important;
        }
        .admin-login-card input::placeholder {
          color: #94A3B8 !important;
          opacity: 1 !important;
        }
        .admin-login-card input:-webkit-autofill,
        .admin-login-card input:-webkit-autofill:hover, 
        .admin-login-card input:-webkit-autofill:focus {
          -webkit-text-fill-color: #0F172A !important;
          -webkit-box-shadow: 0 0 0px 1000px #F8FAFC inset !important;
          transition: background-color 5000s ease-in-out 0s !important;
        }
      `}</style>

      {/* LIGHT DECORATIVE GLOW */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(184, 153, 94, 0.12) 0%, transparent 70%)',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />

      {/* LOGIN CARD CONTAINER */}
      <div
        className="admin-login-card"
        style={{
          width: '100%',
          maxWidth: '440px',
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '20px',
          padding: '40px 36px',
          boxShadow: '0 20px 50px -10px rgba(15, 23, 42, 0.08), 0 0 20px rgba(184, 153, 94, 0.15)',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* HEADER & LOGO */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
            <Image
              src="/Logo.png"
              alt="TPR Communications"
              width={200}
              height={50}
              style={{ height: '46px', width: 'auto', objectFit: 'contain' }}
            />
          </div>

          <div
            style={{
              fontSize: '11px',
              color: '#946E29',
              letterSpacing: '0.2em',
              fontWeight: 800,
              textTransform: 'uppercase',
              marginBottom: '6px',
            }}
          >
            CMS CONTROL PORTAL
          </div>

          <h1
            style={{
              fontSize: '24px',
              fontWeight: 800,
              color: '#0F172A',
              margin: '0 0 6px 0',
              fontFamily: 'serif',
            }}
          >
            Administrator Login
          </h1>

          <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
            Manage website content directly in real-time
          </p>
        </div>

        {/* ERROR NOTIFICATION */}
        {error && (
          <div
            style={{
              background: '#FEF2F2',
              border: '1.5px solid #FCA5A5',
              borderRadius: '10px',
              padding: '12px 14px',
              fontSize: '13.5px',
              color: '#991B1B',
              marginBottom: '20px',
              textAlign: 'center',
              fontWeight: 600,
            }}
          >
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* USERNAME FIELD */}
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '12px',
                color: '#946E29',
                letterSpacing: '0.12em',
                fontWeight: 700,
                marginBottom: '8px',
                textTransform: 'uppercase',
              }}
            >
              Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              style={{
                width: '100%',
                borderRadius: '10px',
                padding: '14px 16px',
                fontSize: '15px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* PASSWORD FIELD */}
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '12px',
                color: '#946E29',
                letterSpacing: '0.12em',
                fontWeight: 700,
                marginBottom: '8px',
                textTransform: 'uppercase',
              }}
            >
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                style={{
                  width: '100%',
                  borderRadius: '10px',
                  padding: '14px 48px 14px 16px',
                  fontSize: '15px',
                  boxSizing: 'border-box',
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#946E29',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  padding: '4px 6px',
                }}
              >
                {showPassword ? 'HIDE' : 'SHOW'}
              </button>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              marginTop: '6px',
              background: 'linear-gradient(135deg, #B8995E 0%, #946E29 100%)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '10px',
              padding: '16px',
              fontSize: '15px',
              fontWeight: 800,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.7 : 1,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              boxShadow: '0 4px 15px rgba(184, 153, 94, 0.35)',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            {isSubmitting ? 'Authenticating...' : 'Sign In to Dashboard →'}
          </button>
        </form>

        {/* RETURN LINK */}
        <div style={{ marginTop: '28px', textAlign: 'center' }}>
          <Link
            href="/"
            style={{
              fontSize: '13.5px',
              color: '#64748B',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'color 0.2s ease',
            }}
          >
            ← Return to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
