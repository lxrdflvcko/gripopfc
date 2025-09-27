import React from 'react';
import ContactForm from '../components/ContactForm';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const handleFormSubmit = (data: ContactFormData) => {
    // In a real application, this would send the data to a backend service
    console.log('Form submitted:', data);
    // For demo purposes, we'll just log the data
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Neem contact op
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Klaar om uw financiële uitdaging aan te pakken? Neem direct contact op 
            voor een vrijblijvend gesprek over uw situatie.
          </p>
        </div>

        <ContactForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default Contact;