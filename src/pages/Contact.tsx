import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

const Contact: React.FC = () => {
  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, quotes, or to schedule a consultation."
        ctaText="Call Now"
        ctaLink="tel:+447367783732"
        backgroundImage="https://images.pexels.com/photos/4331595/pexels-photo-4331595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle 
            title="Get In Touch"
            subtitle="We're here to answer your questions and help with your tiling project."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium text-slate-800">Phone</h4>
                    <p className="text-slate-600">
                      <a href="tel:+447367783732" className="hover:text-orange-500 transition-colors">
                      +44 7367 783732
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium text-slate-800">Email</h4>
                    <p className="text-slate-600">
                      <a href="mailto:Balamelaim@gmail.com" className="hover:text-orange-500 transition-colors">
                      Balamelaim@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium text-slate-800">Address</h4>
                    <p className="text-slate-600">
                    Moorcroft Rd,
 B13 8LS
Birmingham
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium text-slate-800">Business Hours</h4>
                    <div className="text-slate-600">
                      <p>Monday - Sunday: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-slate-100 hover:bg-orange-100 text-slate-700 hover:text-orange-500 transition-colors rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-slate-100 hover:bg-orange-100 text-slate-700 hover:text-orange-500 transition-colors rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle 
            title="Our Location"
            subtitle="Visit our office for a consultation or to view tile samples."
          />
          
          <div className="mt-12">
            <Map />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our tiling services."
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">What areas do you service?</h3>
              <p className="text-slate-600">
                We provide tiling services throughout New York City and surrounding areas within a 50-mile radius, including New Jersey and Connecticut.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Do you offer free estimates?</h3>
              <p className="text-slate-600">
                Yes, we provide free, no-obligation estimates for all tiling projects. We'll visit your property to take measurements and discuss your vision before providing a detailed quote.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">How long does a typical tiling project take?</h3>
              <p className="text-slate-600">
                Project duration varies based on size and complexity. A standard bathroom might take 3-5 days, while larger projects could take 1-2 weeks. We'll provide a timeline estimate during consultation.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Do you help with tile selection?</h3>
              <p className="text-slate-600">
                Absolutely! Our design specialists can help you choose the perfect tiles for your space, considering factors like style, durability, maintenance, and budget.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Are you licensed and insured?</h3>
              <p className="text-slate-600">
                Yes, Ili Tiler is fully licensed and insured. We carry liability insurance and workers' compensation coverage for your peace of mind.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Do you offer warranties on your work?</h3>
              <p className="text-slate-600">
                Yes, we provide a 2-year warranty on our workmanship. This is in addition to any manufacturer warranties on the materials used for your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  );
};

export default Contact;