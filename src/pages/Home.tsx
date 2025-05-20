// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, UtensilsCrossed, SquareStack, Sun, Wrench, Palette, ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import services from '../data/services';
import projects from '../data/projects';
import images from '../img';

const iconComponents: { [key: string]: React.ReactNode } = {
  Droplets: <Droplets size={24} />,
  UtensilsCrossed: <UtensilsCrossed size={24} />,
  SquareStack: <SquareStack size={24} />,
  Sun: <Sun size={24} />,
  Wrench: <Wrench size={24} />,
  Palette: <Palette size={24} />
};

const Home: React.FC = () => {
  // Display only featured projects (first 3)
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <div>
      <Hero
        title="Expert Tiling Solutions for Your Home"
        subtitle="Professional, reliable, and high-quality tiling services for bathrooms, kitchens, floors, and outdoor spaces."
        ctaText="Get a Free Quote"
        ctaLink="/contact"
        backgroundImage={images.bathroom1} // Using imported image
      />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Welcome to Ili Tiler
              </h2>
              <div className="h-1 w-20 bg-orange-500 mb-6"></div>
              <p className="text-slate-600 mb-6">
                With over 10 years of experience, Ili Tiler provides premium tiling services for residential and commercial properties.
              </p>
              <p className="text-slate-600 mb-8">
                Whether you're renovating a bathroom, updating your kitchen, or installing new flooring, our skilled team delivers beautiful, durable results.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
              >
                Learn more about us
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={images.bathroom2} 
                  alt="Bathroom Tiling" 
                  className="rounded-lg shadow-md h-40 w-full object-cover" 
                />
                <img 
                  src={images.kitchen1} 
                  alt="Kitchen Tiling" 
                  className="rounded-lg shadow-md h-64 w-full object-cover" 
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src={images.floor1} 
                  alt="Floor Tiling" 
                  className="rounded-lg shadow-md h-64 w-full object-cover" 
                />
                <img 
                  src={images.kitchen2} 
                  alt="Outdoor Tiling" 
                  className="rounded-lg shadow-md h-40 w-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle 
            title="Our Services"
            subtitle="We offer a comprehensive range of professional tiling services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard
                key={service.id}
                icon={iconComponents[service.icon]}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-slate-800 text-white font-medium rounded-md shadow-sm hover:bg-slate-700 transition-colors duration-300"
            >
              View All Services
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle 
            title="Featured Projects"
            subtitle="Browse our recent tiling projects showcasing our quality and craftsmanship."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard
                key={project.id}
                image={project.image}
                category={project.category}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-medium rounded-md shadow-sm hover:bg-orange-600 transition-colors duration-300"
            >
              View All Projects
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;