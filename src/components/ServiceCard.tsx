import React from 'react';
import { Service } from '../types';
import { TrendingUp, BarChart3, Calculator, Users, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onContactClick?: () => void;
}

const iconMap = {
  TrendingUp,
  BarChart3,
  Calculator,
  Users,
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onContactClick }) => {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
          <IconComponent className="w-6 h-6 text-blue-900" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Wat u krijgt:</h4>
          <ul className="space-y-1">
            {service.deliverables.slice(0, 3).map((item, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm font-medium text-blue-900 mb-3">
            {service.result}
          </p>
          <button
            onClick={onContactClick}
            className="flex items-center space-x-2 text-blue-900 font-medium hover:text-blue-700 transition-colors group/button"
          >
            <span>Neem contact op</span>
            <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;