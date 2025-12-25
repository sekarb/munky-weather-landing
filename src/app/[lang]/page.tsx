import { getDictionary, type Locale } from '@/lib/i18n';
import { APP_NAME } from '@/lib/constants';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroWithScreenshots from '@/components/sections/hero-with-screenshots';
import Features from '@/components/sections/features';
import ScreenshotGallery from '@/components/sections/screenshot-gallery';
import CtaSection from '@/components/sections/cta-section';

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // Structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: APP_NAME,
    applicationCategory: 'WeatherApplication',
    operatingSystem: 'iOS',
    description: dict.metadata.description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang={lang} />
      <main>
        <HeroWithScreenshots dict={dict} lang={lang} />
        <Features dict={dict} />
        <ScreenshotGallery dict={dict} />
        <CtaSection dict={dict} />
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
