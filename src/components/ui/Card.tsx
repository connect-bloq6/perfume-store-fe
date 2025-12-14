import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass';
}

export function Card({ className, variant = 'default', children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-none',
        {
          'bg-noir-900 border border-noir-800': variant === 'default',
          'glass-effect': variant === 'glass',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

