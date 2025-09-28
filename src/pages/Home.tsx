import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, ArrowRight, Shield, Clock, Award, CheckCircle, Star } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { services } from '../data/services';

const Home: React.FC = () => {
  const phoneNumber = '06 28 21 38 22';
  const calendlyUrl = 'https://calendly.com/gripfinancecontrol';

  const handleServiceContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Grip op Finance & Control
                <span className="block text-amber-400 text-3xl sm:text-4xl lg:text-5xl mt-2">
                  voor gemeenten
                </span>
              </h1>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Ervaren interim finance professionals voor BBV-compliance, business control 
                en financiële organisatieontwikkeling binnen overheidsorganisaties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Plan kennismaking</span>
                </a>
                <Link
                  to="/diensten"
                  className="flex items-center justify-center space-x-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-200 backdrop-blur-sm"
                >
                  <span>Bekijk diensten</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/7414017/pexels-photo-7414017.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professionele financiële advisering"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl flex items-center justify-center shadow-sm">
                <Shield className="w-7 h-7 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">BBV Specialist</h3>
                <p className="text-slate-600">Volledig up-to-date met regelgeving</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl flex items-center justify-center shadow-sm">
                <Clock className="w-7 h-7 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">Snelle inzet</h3>
                <p className="text-slate-600">Direct beschikbaar voor uw project</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-50 to-green-100 rounded-xl flex items-center justify-center shadow-sm">
                <Star className="w-7 h-7 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">Bewezen resultaat</h3>
                <p className="text-slate-600">15+ jaar ervaring in overheidssector</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Onze interim diensten
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Professionele ondersteuning op het gebied van finance en control, 
              specifiek toegesneden op gemeenten en overheidsorganisaties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onContactClick={handleServiceContact}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/diensten"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>Alle diensten bekijken</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Financieel adviseur"
                className="rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                15+ jaar ervaring in overheidsfinance
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Als ervaren finance professional help ik gemeenten, provincies en waterschappen 
                bij complexe financiële vraagstukken. Van BBV-implementatie tot business control 
                verbetering - altijd met focus op praktische resultaten.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-slate-700">Register Controller (RC) gecertificeerd</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-slate-700">Specialist BBV en overheidsaccounting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-slate-700">Ervaring met 50+ overheidsorganisaties</span>
                </li>
              </ul>
              <Link
                to="/over-mij"
                className="inline-flex items-center space-x-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group"
              >
                <span>Meer over mijn ervaring</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Klaar om uw financiële uitdaging aan te pakken?
          </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
            Neem direct contact op voor een vrijblijvend gesprek over uw situatie 
            en hoe ik u kan ondersteunen.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              <span>Bel {phoneNumber}</span>
            </a>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-200 backdrop-blur-sm"
            >
              <Calendar className="w-5 h-5" />
              <span>Plan kennismaking</span>
            </a>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;