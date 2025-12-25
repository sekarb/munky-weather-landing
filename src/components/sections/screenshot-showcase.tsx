'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { Dictionary } from '@/lib/i18n';
import { cn } from '@/lib/utils';

// Screenshot data - will be dynamically loaded
const screenshots = [
  { src: '/screenshots/screenshot-1.webp', alt: 'Munky Weather App Screenshot 1' },
  { src: '/screenshots/screenshot-2.webp', alt: 'Munky Weather App Screenshot 2' },
  { src: '/screenshots/screenshot-3.webp', alt: 'Munky Weather App Screenshot 3' },
  { src: '/screenshots/screenshot-4.webp', alt: 'Munky Weather App Screenshot 4' },
];

export default function ScreenshotShowcase({ dict }: { dict: Dictionary }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const itemWidth = container.scrollWidth / screenshots.length;
    container.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative overflow-hidden py-20 gradient-sunset">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            {dict.showcase.title}
          </h2>
        </div>

        {/* Screenshot scroll container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-8 md:gap-8 md:px-8"
          >
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="flex-none snap-center first:pl-[calc(50vw-140px)] last:pr-[calc(50vw-140px)]"
              >
                {/* iPhone mockup frame */}
                <div className="relative h-[600px] w-[280px] rounded-[3rem] bg-black p-2 shadow-2xl ring-1 ring-white/20">
                  {/* Notch */}
                  <div className="absolute left-1/2 top-2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-3xl bg-black" />

                  {/* Screen */}
                  <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-white">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover object-top"
                      sizes="280px"
                      priority={index < 2}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="mt-8 flex justify-center gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  activeIndex === index
                    ? 'w-8 bg-white'
                    : 'w-2 bg-white/40 hover:bg-white/60'
                )}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
