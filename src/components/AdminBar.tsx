'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContent } from '@/context/ContentContext';

export function AdminBar() {
  const { isAdminLoggedIn, logoutAdmin } = useContent();
  const pathname = usePathname();

  // Hide AdminBar when on the login or full admin page
  if (pathname.startsWith('/admin')) {
    return null;
  }

  if (!isAdminLoggedIn) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 99999,
        background: '#0B1521',
        border: '1.5px solid var(--gold)',
        borderRadius: '50px',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        boxShadow: '0 10px 35px rgba(0,0,0,0.5)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#10B981',
            boxShadow: '0 0 10px #10B981',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '12px',
            color: 'var(--gold)',
            fontWeight: 700,
            letterSpacing: '0.1em',
          }}
        >
          CMS ACTIVE
        </span>
      </div>

      <Link
        href="/admin"
        style={{
          background: 'var(--gold)',
          color: '#050E1A',
          padding: '6px 14px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 800,
          textDecoration: 'none',
          letterSpacing: '0.05em',
          transition: 'transform 0.2s ease',
        }}
      >
        Edit Content
      </Link>

      <button
        onClick={logoutAdmin}
        style={{
          background: 'transparent',
          border: 'none',
          color: '#94A3B8',
          fontSize: '12px',
          cursor: 'pointer',
          padding: '4px',
        }}
        title="Log out from Admin CMS"
      >
        Logout
      </button>
    </div>
  );
}
