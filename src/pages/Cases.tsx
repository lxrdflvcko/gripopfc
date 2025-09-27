import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Building, Tag } from 'lucide-react';
import { caseStudies } from '../data/cases';

const Cases: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('');

  // Get all unique tags
  const allTags = Array.from(new Set(caseStudies.flatMap(cs => cs.tags)));

  // Filter cases based on selected tag
  const filteredCases = selectedTag 
    ? caseStudies.filter(cs => cs.tags.includes(selectedTag))
    : caseStudies;

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Onze cases
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Succesverhalen van gemeenten, provincies en waterschappen die we hebben 
            ondersteund bij financiële en control vraagstukken.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedTag('')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedTag === ''
                ? 'bg-blue-900 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Alle cases
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredCases.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Building className="w-4 h-4" />
                  <span>{caseStudy.sector}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{caseStudy.location}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {caseStudy.title}
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Uitdaging:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Aanpak:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {caseStudy.approach}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Resultaat:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {caseStudy.result}
                  </p>
                </div>
              </div>

              <blockquote className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="text-blue-800 italic mb-2">
                  "{caseStudy.clientQuote}"
                </p>
                <cite className="text-blue-700 font-medium not-italic">
                  — {caseStudy.client}
                </cite>
              </blockquote>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">Rollen:</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.roles.map((role) => (
                      <span
                        key={role}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className="inline-flex items-center space-x-1 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs hover:bg-orange-200 transition-colors"
                      >
                        <Tag className="w-3 h-3" />
                        <span>{tag}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredCases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">
              Geen cases gevonden voor de geselecteerde filter.
            </p>
            <button
              onClick={() => setSelectedTag('')}
              className="text-blue-900 font-medium hover:text-blue-700"
            >
              Toon alle cases
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Uw organisatie in de spotlight?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Laten we bespreken hoe ik uw financiële uitdaging kan oplossen. 
              Neem contact op voor een vrijblijvend gesprek over uw situatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                <span>Bespreek uw case</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/diensten"
                className="inline-flex items-center space-x-2 border border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <span>Bekijk diensten</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;