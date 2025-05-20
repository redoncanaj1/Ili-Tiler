import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  backgroundImage 
}) => {
  return (
    <div className="relative h-screen max-h-[800px] min-h-[500px] overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center z-10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
              {title}
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-slate-200 animate-fade-in-up animation-delay-200">
              {subtitle}
            </p>
            <div className="mt-10 animate-fade-in-up animation-delay-300">
              <Link
                to={ctaLink}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-md shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700 transition duration-300 inline-block"
              >
                {ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          strokeWidth="2" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;