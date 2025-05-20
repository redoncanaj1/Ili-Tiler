import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill out all required fields.',
        isError: true
      });
      return;
    }

    // This would normally send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    setFormStatus({
      message: 'Thanks for your message! We will get back to you soon.',
      isError: false
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 md:p-8">
      {formStatus && (
        <div className={`mb-6 p-4 rounded-md ${formStatus.isError ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
          {formStatus.message}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">Select a subject</option>
            <option value="Bathroom Tiling">Bathroom Tiling</option>
            <option value="Kitchen Tiling">Kitchen Tiling</option>
            <option value="Floor Tiling">Floor Tiling</option>
            <option value="Outdoor Tiling">Outdoor Tiling</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      
      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          required
        ></textarea>
      </div>
      
      <div className="mt-6">
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-orange-500 text-white font-medium rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-300 flex items-center justify-center"
        >
          <Send className="h-4 w-4 mr-2" />
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;