'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Locale } from '@/lib/i18n';

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const otherLang: Locale = currentLang === 'en' ? 'es' : 'en';

  // Replace the language in the current path and preserve query params
  const getOtherLangPath = () => {
    const newPath = pathname.replace(`/${currentLang}`, `/${otherLang}`);
    const query = searchParams?.toString() ? `?${searchParams.toString()}` : '';
    return `${newPath}${query}`;
  };

  return (
    <Link
      href={getOtherLangPath()}
      className={cn(
        'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium',
        'text-muted-foreground transition-colors hover:text-foreground hover:bg-muted'
      )}
      aria-label={`Switch to ${otherLang === 'en' ? 'English' : 'Spanish'}`}
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase">{otherLang}</span>
    </Link>
  );
}
