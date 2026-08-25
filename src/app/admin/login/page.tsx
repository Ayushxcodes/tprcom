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

  const handleFillDefaults = () => {
    setUsername('admin');
    setPassword('tpr2026admin');
    setError('');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: '#040911',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        color: '#FFFFFF',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* SCOPED CSS STYLES FOR HIGH CONTRAST IN ALL THEMES & AUTOFILL FIX */}
      <style jsx global>{`
        .admin-login-card input {
          background-color: #0D1626 !important;
          color: #FFFFFF !important;
          border: 1.5px solid #334155 !important;
          outline: none !important;
        }
        .admin-login-card input:focus {
          border-color: #B8995E !important;
          box-shadow: 0 0 12px rgba(184, 153, 94, 0.35) !important;
        }
        .admin-login-card input::placeholder {
          color: #94A3B8 !important;
          opacity: 1 !important;
        }
        .admin-login-card input:-webkit-autofill,
        .admin-login-card input:-webkit-autofill:hover, 
        .admin-login-card input:-webkit-autofill:focus {
          -webkit-text-fill-color: #FFFFFF !important;
          -webkit-box-shadow: 0 0 0px 1000px #0D1626 inset !important;
          transition: background-color 5000s ease-in-out 0s !important;
        }
      `}</style>

      {/* BACKGROUND AMBIENT GLOW */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(184, 153, 94, 0.18) 0%, transparent 70%)',
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
          maxWidth: '450px',
          background: '#0A121E',
          border: '2px solid #B8995E',
          borderRadius: '20px',
          padding: '40px 32px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(184, 153, 94, 0.2)',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* HEADER & LOGO */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <Image
              src="/Logo.png"
              alt="TPR Communications"
              width={200}
              height={50}
              style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
            />
          </div>

          <div
            style={{
              fontSize: '11px',
              color: '#B8995E',
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
              fontSize: '22px',
              fontWeight: 800,
              color: '#FFFFFF',
              margin: '0 0 6px 0',
              fontFamily: 'serif',
            }}
          >
            Administrator Login
          </h1>

          <p style={{ fontSize: '13.5px', color: '#94A3B8', margin: 0 }}>
            Manage website content directly in real-time
          </p>
        </div>

        {/* ERROR NOTIFICATION */}
        {error && (
          <div
            style={{
              background: 'rgba(239, 68, 68, 0.2)',
              border: '1.5px solid #EF4444',
              borderRadius: '10px',
              padding: '12px 14px',
              fontSize: '13.5px',
              color: '#FCA5A5',
              marginBottom: '20px',
              textAlign: 'center',
              fontWeight: 600,
            }}
          >
            ⚠️ {error}
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
                color: '#B8995E',
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
                color: '#B8995E',
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
                  color: '#B8995E',
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

          {/* DEMO CREDENTIALS AUTOFILL BOX */}
          <div
            style={{
              fontSize: '12px',
              color: '#CBD5E1',
              background: '#111C2E',
              padding: '12px 14px',
              borderRadius: '10px',
              border: '1px solid #1E293B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <span style={{ color: '#94A3B8' }}>Default: </span>
              <strong style={{ color: '#B8995E' }}>admin</strong> /{' '}
              <strong style={{ color: '#B8995E' }}>tpr2026admin</strong>
            </div>
            <button
              type="button"
              onClick={handleFillDefaults}
              style={{
                background: '#B8995E',
                color: '#040911',
                border: 'none',
                borderRadius: '6px',
                fontSize: '11px',
                padding: '5px 10px',
                fontWeight: 800,
                cursor: 'pointer',
                letterSpacing: '0.05em',
              }}
            >
              AUTO FILL
            </button>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              marginTop: '4px',
              background: '#B8995E',
              color: '#040911',
              border: 'none',
              borderRadius: '10px',
              padding: '16px',
              fontSize: '15px',
              fontWeight: 800,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.7 : 1,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              boxShadow: '0 4px 15px rgba(184, 153, 94, 0.4)',
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
              fontSize: '13px',
              color: '#94A3B8',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            ← Return to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
