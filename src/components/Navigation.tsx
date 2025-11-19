import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  next: () => void;
  prev: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentSlide, totalSlides, next, prev }) => {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      {/* Ultra-thin Progress Bar */}
      <div className="w-full h-[2px] bg-gray-900">
        <div 
          className="h-full bg-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between items-center p-6">
        <div className="flex gap-4 items-center text-[10px] md:text-xs font-mono tracking-widest uppercase text-gray-500">
           <span className="text-white">Marco Ferrara</span>
           <span className="hidden md:inline">/</span>
           <span className="hidden md:inline">Bending Spoons Pitch</span>
        </div>
        
        <div className="flex gap-2 items-center">
          <span className="font-mono text-xs text-gray-500 mr-4 tracking-widest">{currentSlide + 1} / {totalSlides}</span>
          <button 
            onClick={prev} 
            disabled={currentSlide === 0}
            className="p-2 hover:bg-gray-900 text-white rounded-full disabled:opacity-20 transition-colors border border-transparent hover:border-gray-800"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={next} 
            disabled={currentSlide === totalSlides - 1}
            className="p-2 hover:bg-gray-900 text-white rounded-full disabled:opacity-20 transition-colors border border-transparent hover:border-gray-800"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};