import { permanentRedirect } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';

export default function RootPage() {
  //308, so Google treats /en as the home page for good
  permanentRedirect(`/${defaultLocale}`);
}
