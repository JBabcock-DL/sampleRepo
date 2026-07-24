import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const cardVariants = cva('rounded-xl border bg-card text-card-foreground shadow-sm', {
  variants: {
    variant: {
      default: 'border-border',
      outlined: 'border-2 border-primary/40',
      muted: 'bg-muted/40 border-transparent shadow-none',
    },
    padding: {
      default: 'p-6',
      sm: 'p-4',
      lg: 'p-8',
      none: 'p-0',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'default',
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

/** Name-match target for a Figma "Card" component set during WO-194 connect. */
export function Card({ className, variant, padding, ...props }: CardProps) {
  return <div className={cn(cardVariants({ variant, padding }), className)} {...props} />;
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-1.5', className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('text-lg font-semibold leading-none', className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('pt-2', className)} {...props} />;
}
