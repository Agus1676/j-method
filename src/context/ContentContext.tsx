import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent, SkillDefinition, FaqItem } from '../types';
import { DEFAULT_CONTENT } from '../data/defaultContent';

const STORAGE_KEY = 'jmethod_cms_content_v1';
const PASSWORD_HASH_KEY = 'jmethod_admin_hash_v1';
// Default SHA-256 hash for "jmethod2026"
const DEFAULT_PASS_HASH = 'e2b347b85a3d702d84dd6c4290744d084050ebfaecb6ea5582f3c31a78377be8';

interface ContentContextType {
  content: SiteContent;
  updateContent: (newContent: SiteContent) => void;
  resetToDefaults: () => void;
  exportConfigJson: () => string;
  importConfigJson: (jsonStr: string) => { success: boolean; error?: string };
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  getWhatsAppLink: (message: string) => string;
  verifyPassword: (password: string) => Promise<boolean>;
  changePassword: (newPassword: string) => Promise<boolean>;
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

// Helper for SHA-256 in browser
export async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Deep merge with DEFAULT_CONTENT to guarantee schema resilience
        return {
          ...DEFAULT_CONTENT,
          ...parsed,
          coach: { ...DEFAULT_CONTENT.coach, ...(parsed.coach || {}) },
          hero: { ...DEFAULT_CONTENT.hero, ...(parsed.hero || {}) },
          metrics: { ...DEFAULT_CONTENT.metrics, ...(parsed.metrics || {}) },
          coachingFeatures: { ...DEFAULT_CONTENT.coachingFeatures, ...(parsed.coachingFeatures || {}) },
          skills: parsed.skills && Array.isArray(parsed.skills) ? parsed.skills : DEFAULT_CONTENT.skills,
          faq: parsed.faq && Array.isArray(parsed.faq) ? parsed.faq : DEFAULT_CONTENT.faq,
        };
      }
    } catch (e) {
      console.warn('Failed to load customized content from localStorage:', e);
    }
    return DEFAULT_CONTENT;
  });

  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Auto-listen to URL hash '#admin' or keyboard shortcut Ctrl + Shift + A
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#admin') {
        setIsAdminOpen(true);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
    } catch (e) {
      console.error('Failed to save content to localStorage:', e);
    }
  };

  const resetToDefaults = () => {
    setContent(DEFAULT_CONTENT);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear localStorage:', e);
    }
  };

  const exportConfigJson = (): string => {
    return JSON.stringify(content, null, 2);
  };

  const importConfigJson = (jsonStr: string): { success: boolean; error?: string } => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (!parsed || typeof parsed !== 'object') {
        return { success: false, error: 'Formato JSON inválido.' };
      }
      const validated: SiteContent = {
        ...DEFAULT_CONTENT,
        ...parsed,
        coach: { ...DEFAULT_CONTENT.coach, ...(parsed.coach || {}) },
        hero: { ...DEFAULT_CONTENT.hero, ...(parsed.hero || {}) },
        metrics: { ...DEFAULT_CONTENT.metrics, ...(parsed.metrics || {}) },
        coachingFeatures: { ...DEFAULT_CONTENT.coachingFeatures, ...(parsed.coachingFeatures || {}) },
        skills: Array.isArray(parsed.skills) ? parsed.skills : DEFAULT_CONTENT.skills,
        faq: Array.isArray(parsed.faq) ? parsed.faq : DEFAULT_CONTENT.faq,
      };
      updateContent(validated);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || 'Error al procesar el archivo.' };
    }
  };

  const verifyPassword = async (password: string): Promise<boolean> => {
    const hash = await sha256(password);
    const storedHash = localStorage.getItem(PASSWORD_HASH_KEY) || DEFAULT_PASS_HASH;
    return hash === storedHash;
  };

  const changePassword = async (newPassword: string): Promise<boolean> => {
    if (!newPassword || newPassword.length < 6) return false;
    const hash = await sha256(newPassword);
    localStorage.setItem(PASSWORD_HASH_KEY, hash);
    return true;
  };

  const getWhatsAppLink = (message: string): string => {
    const phone = content.coach.phoneRaw.replace(/\D/g, '') || '5493874667930';
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        updateContent,
        resetToDefaults,
        exportConfigJson,
        importConfigJson,
        isAdminOpen,
        setIsAdminOpen,
        getWhatsAppLink,
        verifyPassword,
        changePassword,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = (): ContentContextType => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
