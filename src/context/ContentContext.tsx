'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialSiteContent, SiteContent } from '@/data/initialContent';
import { isSessionValid, SessionPayload } from '@/lib/authService';

interface ContentContextType {
  content: SiteContent;
  isLoading: boolean;
  isAdminLoggedIn: boolean;
  updateContent: (newContent: SiteContent) => Promise<{ success: boolean; error?: string }>;
  resetToDefault: () => Promise<{ success: boolean; error?: string }>;
  loginAdmin: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logoutAdmin: () => Promise<void>;
  checkAuthStatus: () => Promise<boolean>;
  exportContentJson: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'tpr_site_content_v1';
const AUTH_STORAGE_KEY = 'tpr_admin_session_v1';

function getInitialContent(): SiteContent {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return { ...initialSiteContent, ...JSON.parse(saved) };
      }
    } catch (err) {
      console.error('Error loading content from localStorage:', err);
    }
  }
  return initialSiteContent;
}

function getInitialAuthStatus(): boolean {
  if (typeof window !== 'undefined') {
    const rawSession = localStorage.getItem(AUTH_STORAGE_KEY);
    if (rawSession) {
      try {
        const session: SessionPayload = JSON.parse(rawSession);
        if (isSessionValid(session)) {
          return true;
        } else {
          localStorage.removeItem(AUTH_STORAGE_KEY);
        }
      } catch {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    }
  }
  return false;
}

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(getInitialContent);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(getInitialAuthStatus);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchContent = async () => {
    try {
      const res = await fetch('/api/cms/content');
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.content) {
          setContent(data.content);
          if (typeof window !== 'undefined') {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data.content));
          }
          setIsLoading(false);
          return;
        }
      }
    } catch {
      // Offline / Static fallback
    }

    setIsLoading(false);
  };

  const checkAuthStatus = async (): Promise<boolean> => {
    try {
      const res = await fetch('/api/admin/auth');
      if (res.ok) {
        const data = await res.json();
        if (data.authenticated) {
          setIsAdminLoggedIn(true);
          return true;
        }
      }
    } catch {
      // Local fallback
    }

    return getInitialAuthStatus();
  };

  useEffect(() => {
    fetchContent();
    checkAuthStatus();
  }, []);

  const updateContent = async (newContent: SiteContent): Promise<{ success: boolean; error?: string }> => {
    try {
      // Immediate UI feedback
      setContent(newContent);
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContent));
        } catch (lsErr) {
          console.warn('localStorage quota warning (ignored to preserve server save):', lsErr);
        }
      }

      // Dynamic DB Server Persistence
      const res = await fetch('/api/cms/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newContent }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success && data.content) {
          setContent(data.content);
          return { success: true };
        }
      }

      return { success: true };
    } catch (err) {
      console.error('Error updating content:', err);
      return { success: false, error: 'Failed to update content on server' };
    }
  };

  const resetToDefault = async (): Promise<{ success: boolean; error?: string }> => {
    try {
      setContent(initialSiteContent);
      if (typeof window !== 'undefined') {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }

      const res = await fetch('/api/cms/content', { method: 'DELETE' });
      if (res.ok) {
        return { success: true };
      }

      return { success: true };
    } catch (err) {
      console.error('Error resetting content:', err);
      return { success: false, error: 'Failed to reset content' };
    }
  };

  const loginAdmin = async (username: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsAdminLoggedIn(true);
        return { success: true };
      }

      return {
        success: false,
        error: data.error || 'Invalid username or password',
      };
    } catch {
      return {
        success: false,
        error: 'Authentication server unreachable. Please check network connection.',
      };
    }
  };

  const logoutAdmin = async () => {
    try {
      await fetch('/api/admin/auth', { method: 'DELETE' });
    } catch {
      // Ignored
    }
    setIsAdminLoggedIn(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  };

  const exportContentJson = () => {
    if (typeof window === 'undefined') return;
    const jsonStr = JSON.stringify(content, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        isLoading,
        isAdminLoggedIn,
        updateContent,
        resetToDefault,
        loginAdmin,
        logoutAdmin,
        checkAuthStatus,
        exportContentJson,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
