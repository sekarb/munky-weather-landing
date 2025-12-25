import { Star } from 'lucide-react';

export interface Review {
  rating: number;
  reviewer: string;
  text: string;
}

interface ReviewsCardProps {
  reviews: Review[];
}

export default function ReviewsCard({ reviews }: ReviewsCardProps) {
  return (
    <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-6 shadow-xl">
      <div className="space-y-6">
        {reviews.slice(0, 2).map((review, index) => (
          <div
            key={index}
            className={index !== 0 ? 'pt-6 border-t border-white/10' : ''}
          >
            {/* Star rating */}
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={
                    i < review.rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-white/30'
                  }
                  size={16}
                />
              ))}
            </div>

            {/* Review text */}
            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-2">
              &ldquo;{review.text}&rdquo;
            </p>

            {/* Reviewer name */}
            <p className="text-white/70 text-xs md:text-sm font-medium">
              &mdash; {review.reviewer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
