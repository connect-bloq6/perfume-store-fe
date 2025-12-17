import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-lg',
          {
            // Primary - brown/gold background
            'bg-[#C5B299] text-white hover:opacity-90': variant === 'primary',
            // Secondary - outlined
            'border border-[#E5E5E5] bg-white text-[#171717] hover:bg-gray-50': variant === 'secondary',
            // Ghost - text only
            'text-[#C5B299] hover:text-[#A8956E]': variant === 'ghost',
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-sm': size === 'md',
            'px-8 py-4 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
