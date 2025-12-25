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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            {dict.features.title}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start gap-4">
                    <div className={`rounded-lg bg-muted p-3 ${colorClasses[index % colorClasses.length]}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
