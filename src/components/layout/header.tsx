import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import type { Locale, Dictionary } from '@/lib/i18n';
import LanguageSwitcher from '@/components/common/language-switcher';
import ThemeToggle from '@/components/common/theme-toggle';

export default function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href={`/${lang}`} className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
            <span className="text-2xl">🌙</span>
          </div>
          <span className="text-xl font-bold">{APP_NAME}</span>
        </Link>

        <nav className="flex items-center gap-2">
          <LanguageSwitcher currentLang={lang} />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
