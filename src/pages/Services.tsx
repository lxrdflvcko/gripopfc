import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, BarChart3, Calculator, Users } from 'lucide-react';
import { services } from '../data/services';

const iconMap = {
  TrendingUp,
  BarChart3,
  Calculator,
  Users,
};

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Onze interim diensten
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professionele interim finance & control ondersteuning voor gemeenten en overheidsorganisaties. 
            Van BBV-compliance tot business control verbetering.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-blue-900" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Wat u van mij krijgt:
                    </h3>
                    <ul className="space-y-3">
                      {service.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Wanneer mij inhuren:
                    </h3>
                    <ul className="space-y-3">
                      {service.whenToHire.map((situation, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <ArrowRight className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{situation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 mb-8">
                    <h3 className="font-semibold text-blue-900 mb-2">Verwacht resultaat:</h3>
                    <p className="text-blue-800">{service.result}</p>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                  >
                    <span>Neem contact op</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <img
                      src={`https://images.pexels.com/photos/${
                        index === 0 ? '3184301' : 
                        index === 1 ? '7414034' : 
                        index === 2 ? '3184325' : '3182795'
                      }/pexels-photo-${
                        index === 0 ? '3184301' : 
                        index === 1 ? '7414034' : 
                        index === 2 ? '3184325' : '3182795'
                      }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={service.title}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">
                        Typische projectduur: 3-12 maanden
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {['BBV', 'Gemeenten', 'Finance', 'Control'].map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Niet zeker welke dienst u nodig heeft?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Neem contact op voor een vrijblijvend gesprek. We bespreken uw situatie 
              en bepalen samen welke ondersteuning het beste past bij uw organisatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                <span>Plan gesprek</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:0628213822"
                className="inline-flex items-center space-x-2 border border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <span>Bel direct</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;