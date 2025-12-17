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
          'fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 z-50 h-full w-full max-w-md transition-transform duration-300 ease-out',
          side === 'right' ? 'right-0' : 'left-0',
          isOpen
            ? 'translate-x-0'
            : side === 'right'
            ? 'translate-x-full'
            : '-translate-x-full',
          className
        )}
        style={{ 
          backgroundColor: '#FAFAFA',
          borderLeft: side === 'right' ? '1px solid #E5E5E5' : 'none',
          borderRight: side === 'left' ? '1px solid #E5E5E5' : 'none',
        }}
      >
        <div 
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: '1px solid #E5E5E5' }}
        >
          {title && (
            <h2 
              className="font-medium"
              style={{ fontSize: '18px', color: '#171717' }}
            >
              {title}
            </h2>
          )}
          <button
            onClick={onClose}
            className="ml-auto p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close drawer"
          >
            <X size={20} style={{ color: '#6B6B6B' }} />
          </button>
        </div>
        <div className="p-6 h-[calc(100%-80px)] overflow-y-auto">{children}</div>
      </div>
    </>
  );
}
