import React from 'react';

export type IconName =
  | 'megaphone'
  | 'shield'
  | 'newspaper'
  | 'chat'
  | 'chart'
  | 'landmark'
  | 'users'
  | 'pen'
  | 'bank'
  | 'crane'
  | 'heart'
  | 'chip'
  | 'leaf'
  | 'bag'
  | 'cap'
  | 'ear'
  | 'compass'
  | 'broadcast';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  className?: string;
}

export function Icon({ name, className = 'icon', ...props }: IconProps) {
  switch (name) {
    case 'megaphone':
      return (
        <svg className={className} viewBox="0 0 24 24" {...props}>
          <path d="M3 10v4a1 1 0 0 0 1 1h2l7 4V5L6 9H4a1 1 0 0 0-1 1z" />
          <path d="M17 9a4 4 0 0 1 0 6" />
          <path d="M20 6a8 8 0 0 1 0 12" />
        </svg>
      );
    case 'shield':
      return (
        <svg className={className} viewBox="0 0 24 24" {...props}>
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          <path d="M12 8v5" />
          <circle cx="12" cy="16.2" r="0.7" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'newspaper':
      return (
        <svg className={className} viewBox="0 0 24 24" {...props}>
          <rect x="3" y="5" width="14" height="14" rx="1" />
          <path d="M17 8h4v9a2 2 0 0 1-2 2h-2" />
          <path d="M6 9h8M6 12h8M6 15h5" />
        </svg>
      );
    case 'chat':
      return (
        <svg className={className} viewBox="0 0 24 24" {...props}>
          <path d="M4 5h16v10H8l-4 4V5z" />
          <path d="M8 9h8M8 12h5" />
        </svg>
      );
    case 'chart':
      return (
        <svg className={className} viewBox="0 0 24 24" {...props}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="M7 16l4-5 3 3 5-7" />
        </svg>
      );
    case 'landmark':
      return (
        <svg className={className} viewBox="0 0 24 24" {...props}>
          <path d="M3 21h18" />
          <path d="M4 21V9l8-5 8 5v12" />
          <path d="M9 21v-7M15 21v-7" />
        </svg>
      );
    case 'users':
      return (
        <svg className={className} viewBox="0 0 24 24" {...props}>
          <circle cx="9" cy="8" r="3" />
          <path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6" />
          <circle cx="17.5" cy="9" r="2.3" />
          <path d="M15.6 14.2c2.7.4 5 2.1 5.4 5.8" />
        </svg>
      );
    case 'pen':
      return (
        <svg className={className} viewBox="0 0 24 24" {...props}>
          <path d="M4 20l4-1 10-10-3-3L5 16l-1 4z" />
          <path d="M14 6l3 3" />
        </svg>
      );
    case 'bank':
      return (
        <svg className={className} viewBox="0 0 24 24" {...props}>
          <path d="M4 10h16M4 10l8-5 8 5M5 10v9M9 10v9M15 10v9M19 10v9M3 21h18" />
        </svg>
      );
    case 'crane':
      return (
        <svg className={className} viewBox="0 0 24 24" {...props}>
          <path d="M4 21V9l10-5v4M14 8h6v13M8 21V13h6" />
        </svg>
      );
    case 'heart':
      return (
        <svg className={className} viewBox="0 0 24 24" {...props}>
          <path d="M12 20s-7-4.4-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 5c-2.5 4.6-9.5 9-9.5 9z" />
          <path d="M6 13h3l1.5-3L12 16l1.5-3H18" />
        </svg>
      );
    case 'chip':
      return (
        <svg className={className} viewBox="0 0 24 24" {...props}>
          <rect x="7" y="7" width="10" height="10" rx="1" />
          <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
        </svg>
      );
    case 'leaf':
      return (
        <svg className={className} viewBox="0 0 24 24" {...props}>
          <path d="M20 4C10 4 4 10 4 18c0 0 8 2 12-2s4-8 4-12z" />
          <path d="M8 18c3-3 6-6 10-10" />
        </svg>
      );
    case 'bag':
      return (
        <svg className={className} viewBox="0 0 24 24" {...props}>
          <path d="M6 8h12l-1 12H7L6 8z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
      );
    case 'cap':
      return (
        <svg className={className} viewBox="0 0 24 24" {...props}>
          <path d="M2 9l10-4 10 4-10 4-10-4z" />
          <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
          <path d="M22 9v6" />
        </svg>
      );
    case 'ear':
      return (
        <svg className={className} viewBox="0 0 24 24" {...props}>
          <path d="M8 6a5 5 0 0 1 8 4c0 2-1.5 3-1.5 5a2.5 2.5 0 0 1-5 0" />
          <path d="M8 6a6 6 0 0 0-2 4.5c0 2 1 3 1 5" />
        </svg>
      );
    case 'compass':
      return (
        <svg className={className} viewBox="0 0 24 24" {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M15 9l-2 6-6 2 2-6 6-2z" />
        </svg>
      );
    case 'broadcast':
      return (
        <svg className={className} viewBox="0 0 24 24" {...props}>
          <path d="M12 3v4M8 6l2 2M16 6l-2 2M5 12a7 7 0 0 1 14 0" />
          <circle cx="12" cy="17" r="2" />
          <path d="M9 20a4 4 0 0 1 6 0" />
        </svg>
      );
    default:
      return null;
  }
}
