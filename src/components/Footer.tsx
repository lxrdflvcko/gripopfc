import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const phoneNumber = '06 28 21 38 22';
  const email = 'info@gripfinancecontrol.nl';

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://i.imgur.com/79ZKHP3.png" 
                alt="Grip op Finance & Control" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Ervaren interim finance professionals voor gemeenten en overheidsorganisaties. 
              Specialisatie in BBV, business control en financiële organisatieontwikkeling.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigatie</h3>
            <nav className="space-y-3">
              <Link to="/" className="block text-slate-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/diensten" className="block text-slate-400 hover:text-white transition-colors">
                Diensten
              </Link>
              <Link to="/over-mij" className="block text-slate-400 hover:text-white transition-colors">
                Over mij
              </Link>
              <Link to="/contact" className="block text-slate-400 hover:text-white transition-colors">
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
                className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{phoneNumber}</span>
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{email}</span>
              </a>
              <div className="flex items-center space-x-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>Nederland</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Grip op Finance & Control. Alle rechten voorbehouden.
          </p>
          <Link 
            to="/privacy" 
            className="text-slate-400 hover:text-white text-sm transition-colors mt-2 sm:mt-0"
          >
            Privacy & Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;