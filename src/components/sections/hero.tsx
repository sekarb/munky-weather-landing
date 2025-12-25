import type { Dictionary } from '@/lib/i18n';
import AppStoreButton from '@/components/common/app-store-button';

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-weather pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/4 -left-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        {/* Floating moon icon */}
        <div className="mb-8 flex justify-center">
          <div className="animate-float">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-md shadow-2xl">
              <span className="text-6xl">🌙</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
          {dict.hero.title}
        </h1>

        {/* Tagline */}
        <p className="mx-auto mb-4 max-w-3xl text-xl font-semibold text-white/95 md:text-2xl">
          {dict.hero.tagline}
        </p>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 md:text-xl">
          {dict.hero.subtitle}
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <AppStoreButton text={dict.hero.cta} className="text-lg" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
