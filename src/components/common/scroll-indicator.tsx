'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide indicator when user scrolls down more than 100px
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transition-opacity duration-500',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm animate-bounce-slow">
        <ChevronDown className="h-6 w-6 text-white" />
      </div>
    </div>
  );
}
