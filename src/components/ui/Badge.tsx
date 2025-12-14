import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'new' | 'sale' | 'soldout';
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-1 text-xs font-medium tracking-wide',
        {
          'bg-gold-500 text-noir-950': variant === 'default',
          'bg-emerald-500 text-white': variant === 'new',
          'bg-rose-500 text-white': variant === 'sale',
          'bg-noir-600 text-noir-300': variant === 'soldout',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

