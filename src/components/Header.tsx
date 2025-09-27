import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const phoneNumber = '06 28 21 38 22';
  const calendlyUrl = 'https://calendly.com/gripfinancecontrol';

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="font-semibold text-gray-900 text-lg">
              Grip op Finance & Control
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-900 border-b-2 border-blue-900 pb-1' 
                  : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Home
            </Link>
            <Link
              to="/diensten"
              className={`text-sm font-medium transition-colors ${
                isActive('/diensten') 
                  ? 'text-blue-900 border-b-2 border-blue-900 pb-1' 
                  : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Diensten
            </Link>
            <Link
              to="/cases"
              className={`text-sm font-medium transition-colors ${
                isActive('/cases') 
                  ? 'text-blue-900 border-b-2 border-blue-900 pb-1' 
                  : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Cases
            </Link>
            <Link
              to="/over-mij"
              className={`text-sm font-medium transition-colors ${
                isActive('/over-mij') 
                  ? 'text-blue-900 border-b-2 border-blue-900 pb-1' 
                  : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Over mij
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-blue-900 border-b-2 border-blue-900 pb-1' 
                  : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="flex items-center space-x-2 text-sm text-gray-700 hover:text-blue-900 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{phoneNumber}</span>
            </a>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Plan kennismaking</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/diensten"
                className="text-gray-700 hover:text-blue-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Diensten
              </Link>
              <Link
                to="/cases"
                className="text-gray-700 hover:text-blue-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Cases
              </Link>
              <Link
                to="/over-mij"
                className="text-gray-700 hover:text-blue-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Over mij
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-900"
                >
                  <Phone className="w-4 h-4" />
                  <span>{phoneNumber}</span>
                </a>
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Plan kennismaking</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;