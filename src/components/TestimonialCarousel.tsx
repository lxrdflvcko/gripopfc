import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Wat onze klanten zeggen
          </h2>
          <p className="text-lg text-gray-600">
            Ervaring van gemeenten en overheidsorganisaties
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <Quote className="w-8 h-8 text-orange-500 mb-6" />
            
            <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div>
                <cite className="font-semibold text-gray-900 not-italic">
                  {testimonials[currentIndex].author}
                </cite>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonials[currentIndex].organization}
                </p>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Vorige testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Volgende testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-900' : 'bg-gray-300'
                }`}
                aria-label={`Ga naar testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;