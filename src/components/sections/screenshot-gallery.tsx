'use client';

import { useEffect, useState, type KeyboardEvent } from 'react';
import Image from 'next/image';
import type { Dictionary } from '@/lib/i18n';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

const screenshots = [
  { src: '/screenshots/screenshot-1.webp', alt: 'Munky Weather App Screenshot 1' },
  { src: '/screenshots/screenshot-2.webp', alt: 'Munky Weather App Screenshot 2' },
  { src: '/screenshots/screenshot-3.webp', alt: 'Munky Weather App Screenshot 3' },
  { src: '/screenshots/screenshot-4.webp', alt: 'Munky Weather App Screenshot 4' },
];

export default function ScreenshotGallery({ dict }: { dict: Dictionary }) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  // Track active screenshot based on carousel position
  useEffect(() => {
    if (!api) return;

    setActiveIndex(api.selectedScrollSnap());

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  // Keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!api) return;

    if (e.key === 'ArrowLeft') {
      api.scrollPrev();
    }
    if (e.key === 'ArrowRight') {
      api.scrollNext();
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
        <div
          role="region"
          aria-label="App screenshots gallery"
          aria-live="polite"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          className="relative outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: 'center',
              loop: false,
              dragFree: true,
              containScroll: 'trimSnaps',
            }}
            className="relative w-full cursor-grab active:cursor-grabbing"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {screenshots.map((screenshot, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:pl-6 basis-auto"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Screenshot ${index + 1} of ${screenshots.length}`}
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
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Screen reader context */}
          <span className="sr-only">
            Use arrow keys to navigate. Viewing screenshot {activeIndex + 1} of {screenshots.length}.
          </span>
        </div>
      </div>
    </section>
  );
}
