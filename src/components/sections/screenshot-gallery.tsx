'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { Dictionary } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const screenshots = [
  { src: '/screenshots/screenshot-1.webp', alt: 'Munky Weather App Screenshot 1' },
  { src: '/screenshots/screenshot-2.webp', alt: 'Munky Weather App Screenshot 2' },
  { src: '/screenshots/screenshot-3.webp', alt: 'Munky Weather App Screenshot 3' },
  { src: '/screenshots/screenshot-4.webp', alt: 'Munky Weather App Screenshot 4' },
];

export default function ScreenshotGallery({ dict }: { dict: Dictionary }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track active screenshot based on scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.scrollWidth / screenshots.length;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(index);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to specific screenshot
  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const itemWidth = container.scrollWidth / screenshots.length;
    container.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth',
    });
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' && activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
    if (e.key === 'ArrowRight' && activeIndex < screenshots.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 gradient-sunset">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {dict.gallery?.title || 'See It In Action'}
          </h2>
        </div>

        {/* Screenshot carousel */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="App screenshots gallery"
            aria-live="polite"
            className="scrollbar-hide flex gap-6 md:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg"
          >
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="flex-none snap-center first:pl-[calc(50vw-152.5px)] last:pr-[calc(50vw-152.5px)] md:first:pl-[calc(50vw-164px)] md:last:pr-[calc(50vw-164px)]"
              >
                {/* iPhone mockup frame */}
                <div className="relative h-[650px] w-[305px] md:h-[700px] md:w-[328px] rounded-[3rem] bg-black p-2 shadow-2xl ring-1 ring-white/20">
                  {/* Notch */}
                  <div className="absolute left-1/2 top-4 z-10 h-6 w-22 -translate-x-1/2 rounded-3xl bg-black" />

                  {/* Screen */}
                  <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-white">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 305px, 328px"
                      priority={index < 2}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation - Counter on mobile, Dots on desktop */}
          <div className="mt-6 flex justify-center">
            {/* Mobile: Counter */}
            <div className="flex md:hidden text-white text-sm font-medium">
              {activeIndex + 1} / {screenshots.length}
            </div>

            {/* Desktop: Dots */}
            <div className="hidden md:flex gap-3">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={cn(
                    'h-3 rounded-full transition-all duration-300',
                    activeIndex === index
                      ? 'w-10 bg-white'
                      : 'w-3 bg-white/40 hover:bg-white/60'
                  )}
                  aria-label={`View screenshot ${index + 1} of ${screenshots.length}`}
                  aria-current={activeIndex === index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
