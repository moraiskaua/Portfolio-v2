'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Switch } from './ui/Switch';
import { useState, useEffect } from 'react';

const LanguageToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [isPortuguese, setIsPortuguese] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    setIsPortuguese(pathname.startsWith('/pt'));
  }, [pathname]);

  const handleLanguageChange = () => {
    const newLocale = isPortuguese ? 'en' : 'pt';
    const newPath = pathname.replace(/^\/(en|pt)/, `/${newLocale}`);

    router.push(newPath);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-4 mb-3">
      EN
      <Switch onCheckedChange={handleLanguageChange} checked={isPortuguese} />
      PT
    </div>
  );
};

export default LanguageToggle;
