// src/components/ImageModal.tsx
import React, { useEffect } from 'react';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose}) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-6xl w-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="flex justify-center items-center h-full">
          <img 
            src={imageUrl} 
            className="max-h-[80vh] max-w-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;