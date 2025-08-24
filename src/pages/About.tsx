import React from 'react';
import { Wrench, Clock, Award, Users, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

const About: React.FC = () => {
  return (
    <div>
      <Hero
        title="About Ili Tiler"
        subtitle="Learn about our company, values, and commitment to excellence in tiling craftsmanship."
        ctaText="Contact Us"
        ctaLink="/contact"
        backgroundImage="https://images.pexels.com/photos/6958526/pexels-photo-6958526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Our Story
              </h2>
              <div className="h-1 w-20 bg-orange-500 mb-6"></div>
              <p className="text-slate-600 mb-6">
                Ili Tiler was founded in 2009 by Ili, a master tiler with over two decades of experience in the construction industry. What began as a small, one-man operation has grown into a respected tiling company serving residential and commercial clients throughout the region.
              </p>
              <p className="text-slate-600 mb-6">
                Our journey has been built on a foundation of craftsmanship, integrity, and customer satisfaction. We've earned our reputation through consistent quality, attention to detail, and a commitment to treating every project - large or small - with the same level of care and professionalism.
              </p>
              <p className="text-slate-600">
                Today, Ili Tiler continues to grow, bringing our expertise to new clients while maintaining the personalized service and exceptional quality that has been our hallmark from the beginning.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6474463/pexels-photo-6474463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Ili Tiler Founder" 
                className="rounded-lg shadow-lg w-full h-auto object-cover" 
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white px-6 py-4 rounded-lg shadow-lg">
                <p className="font-semibold">Founded in 2009</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle 
            title="Why Choose Ili Tiler"
            subtitle="Discover the key qualities that set us apart and make us the preferred choice for tiling services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-5">
                <Wrench size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Expert Craftsmanship</h3>
              <p className="text-slate-600">
                Our team of skilled professionals delivers precision and quality in every tile installation, ensuring beautiful, long-lasting results.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-5">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Quality Materials</h3>
              <p className="text-slate-600">
                We use only premium materials and products from trusted suppliers to ensure durability, beauty, and performance and lasting long etc.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-5">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Timely Completion</h3>
              <p className="text-slate-600">
                We value your time and always strive to complete projects on schedule without compromising on quality or attention to detail.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-5">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Customer Focus</h3>
              <p className="text-slate-600">
                We prioritize client satisfaction through clear communication, transparency, and a commitment to exceeding expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle 
            title="Our Core Values"
            subtitle="The principles that guide our work and define our approach to every project."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle className="h-8 w-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Integrity</h3>
                <p className="text-slate-600">
                  We operate with honesty and transparency in all aspects of our business, from providing accurate quotes to using quality materials as promised.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle className="h-8 w-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Excellence</h3>
                <p className="text-slate-600">
                  We pursue excellence in every tile we lay, striving for perfection in alignment, spacing, and finishing to create installations that stand the test of time.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle className="h-8 w-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Reliability</h3>
                <p className="text-slate-600">
                  Clients can count on us to show up on time, work efficiently, and complete projects as scheduled, respecting their time and property.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle className="h-8 w-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Innovation</h3>
                <p className="text-slate-600">
                  We stay current with the latest tiling techniques, materials, and design trends to offer our clients modern solutions that enhance their spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
     
    </div>
  );
};

export default About;