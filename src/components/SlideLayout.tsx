import React from 'react';

interface SlideLayoutProps {
  children: React.ReactNode;
  isActive: boolean;
  className?: string;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ children, isActive, className = '' }) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full flex flex-col justify-center items-center px-8 md:px-20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${
        isActive ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto delay-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      } ${className}`}
    >
      {children}
    </div>
  );
};