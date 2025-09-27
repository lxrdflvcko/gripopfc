import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ArrowRight, Award, BookOpen, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const phoneNumber = '06 28 21 38 22';
  const calendlyUrl = 'https://calendly.com/gripfinancecontrol';

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Uw interim finance partner
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              15+ jaar ervaring in het ondersteunen van gemeenten, provincies en waterschappen 
              bij complexe financiële vraagstukken. Specialist in BBV-compliance en business control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="flex items-center justify-center space-x-2 bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Bel {phoneNumber}</span>
              </a>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 border border-blue-900 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                <span>Plan kennismaking</span>
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Financieel adviseur voor gemeenten"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Expertise Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Mijn expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">BBV Specialist</h3>
              <p className="text-gray-600 text-sm">
                Volledig up-to-date met BBV-regelgeving en implementatie
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Business Control</h3>
              <p className="text-gray-600 text-sm">
                Management informatie en prestatie-indicatoren
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Teamleiding</h3>
              <p className="text-gray-600 text-sm">
                Ervaring in het aansturen van financiële teams
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Procesverbetering</h3>
              <p className="text-gray-600 text-sm">
                Optimalisatie van financiële processen en systemen
              </p>
            </div>
          </div>
        </section>

        {/* Background Section */}
        <section className="mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Mijn achtergrond
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Na mijn studie Bedrijfseconomie ben ik direct begonnen in de publieke sector. 
                De complexiteit en maatschappelijke relevantie van overheidsfinance heeft mij 
                altijd gefascineerd. In de loop der jaren heb ik me gespecialiseerd in BBV-compliance, 
                business control en organisatieontwikkeling binnen de overheid.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mijn ervaring varieert van kleine gemeenten tot grote provincies en complexe 
                waterschappen. Ik ben gewend om snel te schakelen, processen te analyseren en 
                praktische oplossingen te ontwikkelen die passen bij de organisatiecultuur.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Als interim professional vind ik het belangrijk om niet alleen tijdelijke 
                ondersteuning te bieden, maar ook kennis over te dragen zodat de organisatie 
                sterker wordt na afloop van de samenwerking.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Numbers */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-gray-600">Jaar ervaring</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Organisaties geholpen</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-600">Projecten afgerond</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Tevreden klanten</div>
            </div>
          </div>
        </section>

        {/* Certifications & Education */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Opleidingen & Certificaten
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-blue-900 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Register Controller (RC)</h4>
                    <p className="text-gray-600 text-sm">Nederlandse Orde van Controllers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Master Bedrijfseconomie</h4>
                    <p className="text-gray-600 text-sm">Universiteit van Amsterdam</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">BBV Specialist Certificaat</h4>
                    <p className="text-gray-600 text-sm">VNG Academy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Leiderschapsvaardigheden</h4>
                    <p className="text-gray-600 text-sm">Nijenrode Business Universiteit</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Werkwijze
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">1. Intake & Analyse</h4>
                  <p className="text-gray-600 text-sm">
                    Grondige analyse van uw situatie en uitdagingen
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">2. Plan van Aanpak</h4>
                  <p className="text-gray-600 text-sm">
                    Concrete planning met duidelijke mijlpalen en resultaten
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">3. Uitvoering</h4>
                  <p className="text-gray-600 text-sm">
                    Hands-on implementatie met regelmatige voortgangsupdates
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">4. Kennisoverdracht</h4>
                  <p className="text-gray-600 text-sm">
                    Borging van resultaten en overdracht aan uw team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-blue-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Laten we kennismaken
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Nieuwsgierig hoe ik uw organisatie kan ondersteunen? 
              Neem contact op voor een vrijblijvend gesprek over uw financiële uitdagingen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="inline-flex items-center space-x-2 bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Bel {phoneNumber}</span>
              </a>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 border border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                <span>Plan kennismaking</span>
              </a>
            </div>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 text-blue-900 font-medium hover:text-blue-700 transition-colors"
              >
                <span>Of stuur een bericht</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;