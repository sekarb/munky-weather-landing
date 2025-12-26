import Link from 'next/link';
import Image from 'next/image';
import { APP_STORE_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface AppStoreButtonProps {
  className?: string;
}

export default function AppStoreButton({ className }: AppStoreButtonProps) {
  return (
    <Link
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('inline-block transition-transform hover:scale-105', className)}
    >
      <Image
        src="/download_on_appstore_en.svg"
        alt="Download on the App Store"
        width={120}
        height={40}
        className="h-auto w-45"
      />
    </Link>
  );
}
