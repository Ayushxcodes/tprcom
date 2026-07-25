'use client';

import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('tpr_theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('tpr_theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      <header id="site-header" className={isScrolled ? 'scrolled' : ''}>
        <div className="wrap">
          <div className="header-inner">
            <nav className="wrap">
              <a href="#top" className="logo">
                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="30" r="27" fill="#0B1F3A" />
                  <path d="M30 30 L30 8 A22 22 0 0 1 47 39 Z" fill="#2F6FED" opacity="0.85" />
                  <path d="M30 30 L47 39 A22 22 0 0 1 15 45 Z" fill="#FF6A2B" opacity="0.9" />
                  <text x="30" y="35" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="15" fill="#ffffff" fontWeight="600">
                    TPR
                  </text>
                </svg>
                <span className="logo-text">
                  <span className="top">TPR Communication</span>
                  <br />
                  <span className="bottom">Strategic PR &amp; Corp. Comms</span>
                </span>
              </a>

              <div
                className="nav-links"
                style={
                  isMobileMenuOpen
                    ? {
                        display: 'flex',
                        position: 'absolute',
                        top: '76px',
                        left: 0,
                        right: 0,
                        background: 'var(--bg-glass)',
                        backdropFilter: 'blur(20px)',
                        flexDirection: 'column',
                        padding: '28px',
                        gap: '20px',
                        borderRadius: '16px',
                        border: '1px solid var(--border-color)',
                        boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                      }
                    : undefined
                }
              >
                <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                <a href="#work" onClick={() => setIsMobileMenuOpen(false)}>Work</a>
                <a href="#sectors" onClick={() => setIsMobileMenuOpen(false)}>Sectors</a>
                <a href="#approach" onClick={() => setIsMobileMenuOpen(false)}>Approach</a>
                <a href="#leadership" onClick={() => setIsMobileMenuOpen(false)}>About</a>

                <button
                  className="theme-toggle-btn"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${theme === 'dark' ? 'Day' : 'Night'} mode`}
                  title={`Switch to ${theme === 'dark' ? 'Day' : 'Night'} mode`}
                >
                  {theme === 'dark' ? (
                    /* Sun icon for switching to Day mode */
                    <svg className="icon" style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                  ) : (
                    /* Moon icon for switching to Night mode */
                    <svg className="icon" style={{ width: '18px', height: '18px' }} viewBox="0 0 24 24">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  )}
                </button>

                <a href="#contact" className="nav-cta" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
              </div>

              <button
                className="menu-btn"
                aria-label="Open menu"
                id="menuBtn"
                onClick={toggleMobileMenu}
              >
                <span style={isMobileMenuOpen ? { transform: 'rotate(45deg) translate(5deg, 5deg)' } : undefined}></span>
                <span style={isMobileMenuOpen ? { opacity: 0 } : undefined}></span>
                <span style={isMobileMenuOpen ? { transform: 'rotate(-45deg) translate(5deg, -5deg)' } : undefined}></span>
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
