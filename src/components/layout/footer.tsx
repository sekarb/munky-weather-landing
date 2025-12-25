import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/constants';
import type { Locale, Dictionary } from '@/lib/i18n';

export default function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              {dict.footer.contact}{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href={`/${lang}/privacy-policy`}
              className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              {dict.footer.privacyPolicy}
            </Link>
          </div>

          <p className="text-xs text-muted-foreground">{dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
