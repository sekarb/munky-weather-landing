import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { type Locale } from '@/lib/i18n';
import { getPrivacyPolicy } from '@/data/privacy-policy';
import { SITE_URL } from '@/lib/constants';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const title = lang === 'en' ? 'Privacy Policy - Munky Weather' : 'Política de Privacidad - Munky Weather';
  const description =
    lang === 'en'
      ? 'Privacy Policy for Munky Weather app. Learn how we collect, use, and protect your data.'
      : 'Política de Privacidad para la aplicación Munky Weather. Aprende cómo recopilamos, usamos y protegemos tus datos.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${SITE_URL}/${lang}/privacy-policy`,
    },
  };
}

export default async function PrivacyPolicyPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: Locale }>;
  searchParams: Promise<{ ref?: string }>;
}) {
  const { lang } = await params;
  const { ref } = await searchParams;
  const hideContact = ref === 'upwork';
  const content = await getPrivacyPolicy(lang, hideContact);
  const backToHomeUrl = `/${lang}${ref ? `?ref=${ref}` : ''}`;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link
            href={backToHomeUrl}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            {lang === 'en' ? 'Back to Home' : 'Volver al Inicio'}
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <article className="prose prose-zinc dark:prose-invert mx-auto max-w-3xl">
          {content}
        </article>
      </main>
    </div>
  );
}
