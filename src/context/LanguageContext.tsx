
import React, { createContext, useState, useContext, ReactNode } from "react";
import { Language } from "../types";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Try to get language from localStorage or default to browser language
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split("-")[0];
    return browserLang === "es" ? "es" : "en";
  };

  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem("language") as Language) || getBrowserLanguage()
  );

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleLanguageChange,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
