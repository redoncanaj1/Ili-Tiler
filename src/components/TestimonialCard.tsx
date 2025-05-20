import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  avatar
}) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl card-hover">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white transform transition-transform group-hover:scale-110 group-hover:rotate-6">
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>
      
      <blockquote className="text-slate-700 text-center text-lg italic mb-6 transform transition-all duration-300 group-hover:scale-105">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center justify-center space-x-4">
        {avatar ? (
          <img 
            src={avatar} 
            alt={author} 
            className="w-14 h-14 rounded-full border-4 border-primary-100" 
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xl font-bold">
            {author.charAt(0)}
          </div>
        )}
        <div className="text-center">
          <h4 className="font-bold text-slate-800 group-hover:text-primary-500 transition-colors">
            {author}
          </h4>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;