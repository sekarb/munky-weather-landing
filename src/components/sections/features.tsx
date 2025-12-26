import {
  Lightbulb,
  BarChart3,
  Wind,
  Search,
  Cloud,
  Mountain,
  Clock,
  Sunrise,
  AlertTriangle,
  type LucideIcon,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { Dictionary } from '@/lib/i18n';

const iconMap: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  'bar-chart-3': BarChart3,
  wind: Wind,
  search: Search,
  cloud: Cloud,
  mountain: Mountain,
  clock: Clock,
  sunrise: Sunrise,
  'alert-triangle': AlertTriangle,
};

export default function Features({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-background py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center md:mb-8">
          <h2 className="text-foreground mb-15 text-3xl font-bold md:text-4xl">
            {dict.features.title}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {dict.features.items.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Lightbulb;
            const colorClasses = [
              'text-blue-500',
              'text-orange-500',
              'text-purple-500',
              'text-green-500',
              'text-sky-500',
              'text-amber-500',
              'text-indigo-500',
              'text-rose-500',
              'text-yellow-500',
            ];

            return (
              <Card
                key={index}
                className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="relative px-4 py-2 md:px-5 md:pb-5">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                    <div
                      className={`bg-muted rounded-lg p-3 shadow-md ${colorClasses[index % colorClasses.length]}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-foreground mb-1 text-center text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
