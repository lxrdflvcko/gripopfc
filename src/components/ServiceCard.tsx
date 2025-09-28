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
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-14 h-14 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-indigo-200 transition-all duration-300 shadow-sm">
          <IconComponent className="w-7 h-7 text-indigo-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
      </div>
      
      <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Wat u krijgt:</h4>
          <ul className="space-y-1">
            {service.deliverables.slice(0, 3).map((item, index) => (
              <li key={index} className="text-sm text-slate-600 flex items-start">
                <span className="text-amber-500 mr-2 mt-1 font-bold">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-4 border-t border-slate-100">
          <p className="text-sm font-medium text-indigo-600 mb-4 bg-indigo-50 p-3 rounded-lg">
            {service.result}
          </p>
          <button
            onClick={onContactClick}
            className="flex items-center space-x-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group/button"
          >
            <span>Neem contact op</span>
            <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;