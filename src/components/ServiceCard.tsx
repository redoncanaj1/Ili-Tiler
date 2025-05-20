import React, { useRef, useEffect } from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
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
      className="card-3d bg-white rounded-xl overflow-hidden transition-all duration-300 hover-lift flex flex-col h-full"
      style={{ transition: 'transform 0.1s ease' }}
    >
      <div className="p-8 card-content flex-grow">
        <div className="animate-morph w-16 h-16 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gradient-animated mb-4">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>
       
      </div>
      <div className="h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600"></div>
    </div>

  );
};

export default ServiceCard;