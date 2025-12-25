import type { Dictionary } from '@/lib/i18n';
import AppStoreButton from '@/components/common/app-store-button';

export default function CtaSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden py-20 gradient-sky">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          {dict.cta.title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
          {dict.cta.subtitle}
        </p>
        <div className="flex justify-center">
          <AppStoreButton text={dict.cta.button} className="text-lg" />
        </div>
      </div>
    </section>
  );
}
