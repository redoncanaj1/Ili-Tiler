import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { Droplets, UtensilsCrossed, SquareStack, Sun, Wrench, Palette } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const Services: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'bathroom', name: 'Bathroom' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'floor', name: 'Floor' },
    { id: 'outdoor', name: 'Outdoor' }
  ];

  const filteredProjects = selectedIndex === 0 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === categories[selectedIndex].id);

  return (
    <div>
      <Hero
        title="Our Projects & Services"
        subtitle="Explore our portfolio of quality tiling installations across bathrooms, kitchens, floors, and outdoor spaces."
        ctaText="Contact Us"
        ctaLink="/contact"
        backgroundImage="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle 
            title="Our Tiling Services"
            subtitle="Professional tiling solutions tailored to your needs and preferences."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-5">
                <Droplets size={36} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Bathroom Tiling</h3>
              <p className="text-slate-600">
                Complete bathroom tiling solutions including walls, floors, showers, and decorative features. We specialize in waterproof installations with premium materials.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-5">
                <UtensilsCrossed size={36} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Kitchen Solutions</h3>
              <p className="text-slate-600">
                Transform your kitchen with backsplashes, countertops, and floor tiling. We offer a wide range of styles from classic subway tiles to intricate mosaics.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-5">
                <SquareStack size={36} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Floor Installations</h3>
              <p className="text-slate-600">
                Durable and beautiful floor tiling for every room in your home. We work with porcelain, ceramic, natural stone, and luxury vinyl tiles.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-5">
                <Sun size={36} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Outdoor Tiling</h3>
              <p className="text-slate-600">
                Weather-resistant tiling for patios, walkways, and pool decks. We use frost-proof, slip-resistant materials designed to withstand the elements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-5">
                <Wrench size={36} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Repair & Replacement</h3>
              <p className="text-slate-600">
                Expert repair services for damaged tiles. We can match existing patterns and replace cracked or loose tiles to revitalize your surfaces.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-5">
                <Palette size={36} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Custom Designs</h3>
              <p className="text-slate-600">
                Bring your vision to life with custom tiling designs. From intricate mosaics to unique patterns, we create personalized installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle 
            title="Our Project Gallery"
            subtitle="Browse our portfolio of completed tiling projects showcasing our skill and attention to detail."
          />
          
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className="flex space-x-2 rounded-xl bg-slate-200 p-1 mb-12 max-w-2xl mx-auto">
              {categories.map((category) => (
                <Tab
                  key={category.id}
                  className={({ selected }) =>
                    `w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all duration-300 ${
                      selected
                        ? 'bg-orange-500 text-white shadow'
                        : 'text-slate-700 hover:bg-white/[0.12] hover:text-slate-900'
                    }`
                  }
                >
                  {category.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {categories.map((_category, idx) => (
                <Tab.Panel key={idx} className="focus:outline-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                      <ProjectCard
                        key={project.id}
                        title={project.title}
                        image={project.image}
                        category={project.category}
                      />
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle 
            title="Our Working Process"
            subtitle="We follow a systematic approach to ensure every project is completed to the highest standards."
          />
          
          <div className="relative">
            {/* Process timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200"></div>
            
            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Consultation</h3>
                  <p className="text-slate-600">
                    We begin with an in-depth consultation to understand your vision, needs, and budget. Our experts will help you select the right materials and design for your project.
                  </p>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10">
                  1
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10">
                  2
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Planning & Measurement</h3>
                  <p className="text-slate-600">
                    We'll visit your property to take precise measurements and assess the site. Our team will create a detailed plan including layout designs, material quantities, and timeline.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Preparation</h3>
                  <p className="text-slate-600">
                    Proper preparation is crucial for lasting results. We'll prepare the surfaces, ensure proper waterproofing where needed, and address any underlying issues before installation.
                  </p>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10">
                  3
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10">
                  4
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Installation</h3>
                  <p className="text-slate-600">
                    Our skilled craftsmen will install your tiles with precision and care. We use industry-leading techniques and materials to ensure a flawless finish that lasts.
                  </p>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Finishing & Inspection</h3>
                  <p className="text-slate-600">
                    After installation, we apply high-quality grout and sealants as needed. We'll conduct a thorough inspection to ensure every detail meets our exacting standards and your expectations.
                  </p>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10">
                  5
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-800 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Contact us today to discuss your project and get a free, no-obligation quote. Our team is ready to bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-orange-500 text-white font-medium rounded-md shadow-lg hover:bg-orange-600 transition duration-300"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;