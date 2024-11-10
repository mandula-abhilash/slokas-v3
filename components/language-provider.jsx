'use client';

import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('english');

  const languages = [
    { value: 'english', label: 'English' },
    { value: 'sanskrit', label: 'संस्कृत' },
    { value: 'hindi', label: 'हिंदी' }
  ];

  const value = {
    language,
    setLanguage,
    languages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}