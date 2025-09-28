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
    <div className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Wat onze klanten zeggen
          </h2>
          <p className="text-lg text-slate-600">
            Ervaring van gemeenten en overheidsorganisaties
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl p-10 shadow-lg border border-slate-200">
            <Quote className="w-10 h-10 text-amber-500 mb-6" />
            
            <blockquote className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div>
                <cite className="font-bold text-slate-900 not-italic text-lg">
                  {testimonials[currentIndex].author}
                </cite>
                <p className="text-slate-600 text-sm mt-1">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-slate-500 text-sm">
                  {testimonials[currentIndex].organization}
                </p>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors shadow-sm"
                  aria-label="Vorige testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors shadow-sm"
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
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-indigo-600 scale-125' : 'bg-slate-300'
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