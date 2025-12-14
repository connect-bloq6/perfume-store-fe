'use client';

import { ReactNode, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  title?: string;
  side?: 'left' | 'right';
}

export function Drawer({ isOpen, onClose, children, className, title, side = 'right' }: DrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-noir-950/80 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 z-50 h-full w-full max-w-md bg-noir-900 border-noir-700 transition-transform duration-300',
          side === 'right' ? 'right-0 border-l' : 'left-0 border-r',
          isOpen
            ? 'translate-x-0'
            : side === 'right'
            ? 'translate-x-full'
            : '-translate-x-full',
          className
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-noir-700">
          {title && (
            <h2 className="font-display text-xl text-gold-500">{title}</h2>
          )}
          <button
            onClick={onClose}
            className="ml-auto text-noir-400 hover:text-gold-500 transition-colors"
            aria-label="Close drawer"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6 h-[calc(100%-80px)] overflow-y-auto">{children}</div>
      </div>
    </>
  );
}

