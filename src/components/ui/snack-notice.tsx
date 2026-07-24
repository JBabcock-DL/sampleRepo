import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

/**
 * WO-194 name-mismatch smoke fixture.
 *
 * Repo export / file stem: SnackNotice / snack-notice
 * Pairing target on the Figma canvas: ComponentSet named **Callout**
 * (same `variant` axis — must NOT be named SnackNotice or name-match will auto-fire).
 *
 * Live smoke: Callout shows as Missing in repo → pick this file → Confirm → Keep Figma / Keep Repo.
 */
const snackNoticeVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive: 'border-destructive/50 text-destructive',
        info: 'border-primary/40 bg-primary/5 text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface SnackNoticeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof snackNoticeVariants> {
  title?: string;
}

export function SnackNotice({
  className,
  variant,
  title,
  children,
  ...props
}: SnackNoticeProps) {
  return (
    <div className={cn(snackNoticeVariants({ variant }), className)} role="status" {...props}>
      {title !== undefined && title.length > 0 ? (
        <div className="mb-1 font-medium">{title}</div>
      ) : null}
      {children}
    </div>
  );
}
