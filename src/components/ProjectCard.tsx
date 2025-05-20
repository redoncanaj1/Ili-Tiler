// src/components/ProjectCard.tsx
import React, { useState, useRef, useEffect } from 'react';

interface ProjectCardProps {
  image: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // 3D tilt effect (same as before)
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const mouseX = x / rect.width;
      const mouseY = y / rect.height;

      const rotateX = 20 * (mouseY - 0.5);
      const rotateY = 20 * (mouseX - 0.5);

      card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      if (card) {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="card-3d relative w-full h-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transition: 'transform 0.1s ease' }}
    >
      {/* Image container with consistent aspect ratio */}
      <div className="relative w-full h-64 overflow-hidden"> {/* Fixed height */}
        <img 
          ref={imgRef}
          src={image} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          style={{ 
            objectPosition: 'center center', // Ensure center of image is always visible
            minWidth: '100%',
            minHeight: '100%'
          }}
        />
      </div>
      
      {/* Hover overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-0'}`}>
      </div>
      
      <div className={`absolute inset-0 glass-morphism transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="text-primary-400 text-sm font-medium mb-2 animate-float">
            {category}
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;