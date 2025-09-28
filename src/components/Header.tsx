import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const calendlyUrl = 'https://calendly.com/gripfinancecontrol';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://i.imgur.com/79ZKHP3.png" 
              alt="Grip op Finance & Control" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-all duration-200 ${
                isActive('/') 
                  ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' 
                  : 'text-slate-700 hover:text-indigo-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/diensten"
              className={`text-sm font-medium transition-all duration-200 ${
                isActive('/diensten') 
                  ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' 
                  : 'text-slate-700 hover:text-indigo-600'
              }`}
            >
              Diensten
            </Link>
            <Link
              to="/over-mij"
              className={`text-sm font-medium transition-all duration-200 ${
                isActive('/over-mij') 
                  ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' 
                  : 'text-slate-700 hover:text-indigo-600'
              }`}
            >
              Over mij
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-all duration-200 ${
                isActive('/contact') 
                  ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' 
                  : 'text-slate-700 hover:text-indigo-600'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Plan kennismaking</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-slate-700 hover:text-indigo-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/diensten"
                className="text-slate-700 hover:text-indigo-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Diensten
              </Link>
              <Link
                to="/over-mij"
                className="text-slate-700 hover:text-indigo-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Over mij
              </Link>
              <Link
                to="/contact"
                className="text-slate-700 hover:text-indigo-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-slate-200">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-4 py-2 rounded-lg font-medium hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200"
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