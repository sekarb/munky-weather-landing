import Image from 'next/image';
import type { Dictionary, Locale } from '@/lib/i18n';
import AppStoreButton from '@/components/common/app-store-button';
import LanguageSwitcher from '@/components/common/language-switcher';
import ThemeToggle from '@/components/common/theme-toggle';
import ScrollIndicator from '@/components/common/scroll-indicator';
import ReviewsCard from '@/components/common/reviews-card';

// Screenshot data - showing only first screenshot in hero
const screenshot = {
  src: '/screenshots/screenshot-1.webp',
  alt: 'Munky Weather App Screenshot 1',
};

interface HeroWithScreenshotsProps {
  dict: Dictionary;
  lang: Locale;
}

export default function HeroWithScreenshots({ dict, lang }: HeroWithScreenshotsProps) {
  return (
    <section className="gradient-sunset relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Top header row with app icon (left) and controls (right) */}
      <div className="absolute top-4 left-4 z-20 md:top-8 md:left-8">
        <div className="relative h-18 w-18 md:h-18 md:w-18">
          <Image
            src="/app_icon_1024.png"
            alt="Munky Weather App Icon"
            width={96}
            height={96}
            className="rounded-2xl shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Floating navigation controls - top right */}
      <div className="absolute top-4 right-4 z-20 md:top-8 md:right-8">
        <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 p-2 shadow-lg backdrop-blur-lg [&_a]:text-white [&_button]:text-white">
          <LanguageSwitcher currentLang={lang} />
          <div className="h-6 w-px bg-white/20" />
          <ThemeToggle />
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 animate-pulse rounded-full bg-white blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 animate-pulse rounded-full bg-white blur-3xl delay-1000" />
      </div>

      {/* Main content grid */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          {/* Text Content + Reviews - order-1 on mobile (text first), order-1 on desktop */}
          <div className="order-1 text-center lg:text-left">
            {/* Title */}
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {dict.hero.title}
            </h1>

            {/* Tagline */}
            <p className="mx-auto mb-3 max-w-xl text-lg font-semibold text-white/95 md:text-xl lg:mx-0">
              {dict.hero.tagline}
            </p>

            {/* Subtitle */}
            <p className="mx-auto mb-6 max-w-lg text-base text-white/80 md:text-lg lg:mx-0">
              {dict.hero.subtitle}
            </p>

            {/* CTA Button */}
            <div className="mb-9 flex justify-center lg:justify-start">
              <AppStoreButton text={dict.hero.cta} className="text-lg" />
            </div>

            {/* Reviews Card */}
            {dict.hero.reviews && dict.hero.reviews.length > 0 && (
              <ReviewsCard reviews={dict.hero.reviews} />
            )}
          </div>

          {/* Single Screenshot - order-2 on mobile (after text), order-2 on desktop */}
          <div className="order-2">
            <div className="mx-auto w-fit">
              {/* iPhone mockup frame */}
              <div className="relative h-[650px] w-[305px] rounded-[3rem] bg-black p-2 shadow-2xl ring-1 ring-white/20 md:h-[700px] md:w-[328px]">
                {/* Notch */}
                <div className="absolute top-4 left-1/2 z-10 h-6 w-22 -translate-x-1/2 rounded-3xl bg-black" />

                {/* Screen */}
                <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-white">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 305px, 328px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Bottom fade */}
      <div className="from-background absolute bottom-0 h-32 w-full bg-gradient-to-t to-transparent" />
    </section>
  );
}
