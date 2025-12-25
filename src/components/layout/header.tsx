'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Locale } from '@/lib/i18n';
import LanguageSwitcher from '@/components/common/language-switcher';
import ThemeToggle from '@/components/common/theme-toggle';

export default function Header({ lang }: { lang: Locale }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-transform duration-300',
        'border-b border-border/40 bg-background/80 backdrop-blur-lg',
        isScrolled ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href={`/${lang}`} className="transition-opacity hover:opacity-80">
          <Image
            src="/app_icon_1024.png"
            alt="Munky Weather"
            width={40}
            height={40}
            className="rounded-lg"
          />
        </Link>

        <nav className="flex items-center gap-2">
          <LanguageSwitcher currentLang={lang} />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
