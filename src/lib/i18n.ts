export type Locale = 'en' | 'es';

export const locales: Locale[] = ['en', 'es'];
export const defaultLocale: Locale = 'en';

export interface Dictionary {
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    tagline: string;
    subtitle: string;
    cta: string;
  };
  features: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  showcase: {
    title: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    contact: string;
    privacyPolicy: string;
    copyright: string;
  };
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return import(`@/data/translations/${locale}`).then((module) => module.default);
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
