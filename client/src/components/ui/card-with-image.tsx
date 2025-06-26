import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CardWithImageProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  linkText?: string;
  linkHref?: string;
  className?: string;
}

export default function CardWithImage({
  title,
  description,
  imageUrl,
  imageAlt,
  linkText,
  linkHref = '#',
  className,
}: CardWithImageProps) {
  return (
    <Card className={cn("treatment-card overflow-hidden shadow-md transition-all", className)}>
      <div className="h-60 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        {linkText && (
          <a 
            href={linkHref} 
            className="text-primary font-medium hover:underline"
          >
            {linkText}
          </a>
        )}
      </CardContent>
    </Card>
  );
}
