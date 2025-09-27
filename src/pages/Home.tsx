import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, ArrowRight, Shield, Clock, Award, CheckCircle } from 'lucide-react';
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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Grip op Finance & Control
                <span className="block text-orange-400 text-3xl sm:text-4xl lg:text-5xl mt-2">
                  voor gemeenten
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Ervaren interim finance professionals voor BBV-compliance, business control 
                en financiële organisatieontwikkeling binnen overheidsorganisaties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Plan kennismaking</span>
                </a>
                <Link
                  to="/diensten"
                  className="flex items-center justify-center space-x-2 border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
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
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-900" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">BBV Specialist</h3>
                <p className="text-gray-600">Volledig up-to-date met regelgeving</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Snelle inzet</h3>
                <p className="text-gray-600">Direct beschikbaar voor uw project</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Bewezen resultaat</h3>
                <p className="text-gray-600">15+ jaar ervaring in overheidssector</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Onze interim diensten
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              className="inline-flex items-center space-x-2 bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              <span>Alle diensten bekijken</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Financieel adviseur"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                15+ jaar ervaring in overheidsfinance
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Als ervaren finance professional help ik gemeenten, provincies en waterschappen 
                bij complexe financiële vraagstukken. Van BBV-implementatie tot business control 
                verbetering - altijd met focus op praktische resultaten.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Register Controller (RC) gecertificeerd</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Specialist BBV en overheidsaccounting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Ervaring met 50+ overheidsorganisaties</span>
                </li>
              </ul>
              <Link
                to="/over-mij"
                className="inline-flex items-center space-x-2 text-blue-900 font-semibold hover:text-blue-700 transition-colors"
              >
                <span>Meer over mijn ervaring</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Uitgelichte Case
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  BBV-implementatie Gemeente Almere
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Succesvolle implementatie van nieuwe BBV-regelgeving binnen 6 maanden, 
                  inclusief procesbeschrijvingen, training van medewerkers en systeem optimalisatie.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-blue-900">6 mnd</div>
                    <div className="text-sm text-gray-600">Implementatietijd</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">30%</div>
                    <div className="text-sm text-gray-600">Efficiëntiewinst</div>
                  </div>
                </div>
                <Link
                  to="/cases"
                  className="inline-flex items-center space-x-2 text-blue-900 font-semibold hover:text-blue-700 transition-colors"
                >
                  <span>Alle cases bekijken</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/3184324/pexels-photo-3184324.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="BBV implementatie project"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Klaar om uw financiële uitdaging aan te pakken?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Neem direct contact op voor een vrijblijvend gesprek over uw situatie 
            en hoe ik u kan ondersteunen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="flex items-center justify-center space-x-2 bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Bel {phoneNumber}</span>
            </a>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              <span>Plan kennismaking</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;