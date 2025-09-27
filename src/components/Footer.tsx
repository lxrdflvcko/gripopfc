import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const phoneNumber = '06 28 21 38 22';
  const email = 'info@gripfinancecontrol.nl';

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-semibold text-xl">
                Grip op Finance & Control
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Ervaren interim finance professionals voor gemeenten en overheidsorganisaties. 
              Specialisatie in BBV, business control en financiële organisatieontwikkeling.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/gripfinancecontrol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigatie</h3>
            <nav className="space-y-3">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/diensten" className="block text-gray-400 hover:text-white transition-colors">
                Diensten
              </Link>
              <Link to="/cases" className="block text-gray-400 hover:text-white transition-colors">
                Cases
              </Link>
              <Link to="/over-mij" className="block text-gray-400 hover:text-white transition-colors">
                Over mij
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{phoneNumber}</span>
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{email}</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Nederland</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Grip op Finance & Control. Alle rechten voorbehouden.
          </p>
          <Link 
            to="/privacy" 
            className="text-gray-400 hover:text-white text-sm transition-colors mt-2 sm:mt-0"
          >
            Privacy & Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;