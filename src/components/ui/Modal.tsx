'use client';

import { ReactNode, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  title?: string;
}

export function Modal({ isOpen, onClose, children, className, title }: ModalProps) {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="absolute inset-0 bg-noir-950/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="flex items-center justify-center min-h-screen p-4">
        <div
          className={cn(
            'relative bg-noir-900 border border-noir-700 w-full max-w-lg p-6',
            'animate-fade-in',
            className
          )}
        >
          <div className="flex items-center justify-between mb-6">
            {title && (
              <h2 className="font-display text-xl text-gold-500">{title}</h2>
            )}
            <button
              onClick={onClose}
              className="ml-auto text-noir-400 hover:text-gold-500 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

