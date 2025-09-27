import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { Send, Phone, Calendar } from 'lucide-react';

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    organization: '',
    position: '',
    email: '',
    phone: '',
    message: '',
    gdprConsent: false,
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const phoneNumber = '06 28 21 38 22';
  const calendlyUrl = 'https://calendly.com/gripfinancecontrol';
  const email = 'info@gripfinancecontrol.nl';

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Naam is verplicht';
    if (!formData.organization.trim()) newErrors.organization = 'Organisatie is verplicht';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mailadres is verplicht';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ongeldig e-mailadres';
    }
    if (!formData.message.trim()) newErrors.message = 'Bericht is verplicht';
    if (!formData.gdprConsent) newErrors.gdprConsent = 'Toestemming is verplicht';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (onSubmit) {
      onSubmit(formData);
    }
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-green-900 mb-2">
          Bedankt voor uw bericht!
        </h3>
        <p className="text-green-700 mb-6">
          We nemen binnen 24 uur contact met u op.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="flex items-center justify-center space-x-2 bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Direct bellen</span>
          </a>
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 border border-blue-900 text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Plan afspraak</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <a
          href={`tel:${phoneNumber.replace(/\s/g, '')}`}
          className="flex flex-col items-center p-6 bg-blue-50 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors group"
        >
          <Phone className="w-8 h-8 text-blue-900 mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-gray-900 mb-1">Direct bellen</h3>
          <p className="text-blue-900 font-medium">{phoneNumber}</p>
        </a>
        
        <a
          href={`mailto:${email}`}
          className="flex flex-col items-center p-6 bg-orange-50 rounded-lg border border-orange-100 hover:bg-orange-100 transition-colors group"
        >
          <Send className="w-8 h-8 text-orange-600 mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-gray-900 mb-1">E-mail sturen</h3>
          <p className="text-orange-600 font-medium">{email}</p>
        </a>
        
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-6 bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition-colors group"
        >
          <Calendar className="w-8 h-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-gray-900 mb-1">Plan afspraak</h3>
          <p className="text-green-600 font-medium">Via Calendly</p>
        </a>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Naam *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Uw volledige naam"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
              Organisatie *
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.organization ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Gemeente, provincie, waterschap..."
            />
            {errors.organization && <p className="text-red-500 text-sm mt-1">{errors.organization}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
              Functie
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Uw functie binnen de organisatie"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Telefoon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Uw telefoonnummer"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            E-mailadres *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="uw.email@organisatie.nl"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Bericht *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Beschrijf uw situatie en hoe we u kunnen helpen..."
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="gdprConsent"
            name="gdprConsent"
            checked={formData.gdprConsent}
            onChange={handleInputChange}
            className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="gdprConsent" className="text-sm text-gray-700">
            Ik ga akkoord met het verwerken van mijn gegevens conform de{' '}
            <a href="/privacy" className="text-blue-900 hover:underline">
              privacyverklaring
            </a>
            . *
          </label>
        </div>
        {errors.gdprConsent && <p className="text-red-500 text-sm">{errors.gdprConsent}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          <Send className="w-5 h-5" />
          <span>{isSubmitting ? 'Versturen...' : 'Verstuur bericht'}</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;