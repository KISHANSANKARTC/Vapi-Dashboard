import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  onExplore?: () => void;
}

export function HeroSection({ title, subtitle, backgroundImage, onExplore }: HeroSectionProps) {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-slow-zoom"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      </div>
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          {subtitle}
        </p>
        {onExplore && (
          <button
            onClick={onExplore}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center space-x-2 mx-auto transition-all transform hover:scale-105"
          >
            <span>Explore Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
    </div>
  );
}