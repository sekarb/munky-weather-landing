import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Geist, Geist_Mono } from 'next/font/google';
import { getDictionary, isValidLocale, type Locale, locales } from '@/lib/i18n';
import { SITE_URL } from '@/lib/constants';
import { ThemeProvider } from '@/contexts/theme-context';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    return {};
  }

  const dict = await getDictionary(lang);
  const localeCode = lang === 'en' ? 'en_US' : 'es_ES';
  const alternateLocale = lang === 'en' ? 'es_ES' : 'en_US';

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      type: 'website',
      locale: localeCode,
      alternateLocale: alternateLocale,
      url: `${SITE_URL}/${lang}`,
      siteName: 'Munky Weather',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: dict.metadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: {
        en: `${SITE_URL}/en`,
        es: `${SITE_URL}/es`,
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en`} />
        <link rel="alternate" hrefLang="es" href={`${SITE_URL}/es`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/en`} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
