import type { Locale } from '@/lib/i18n';

export async function getPrivacyPolicy(locale: Locale, hideContact = false) {
  const module = await import(`./${locale}`);
  return module.default(hideContact);
}
