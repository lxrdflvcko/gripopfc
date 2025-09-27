import React from 'react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Privacy & Cookies
          </h1>
          <p className="text-lg text-gray-600">
            Laatste update: januari 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Algemene informatie
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Grip op Finance & Control ("wij", "ons", "onze") respecteert uw privacy en 
              behandelt uw persoonsgegevens zorgvuldig. Deze privacyverklaring legt uit 
              hoe wij omgaan met uw persoonsgegevens wanneer u onze website bezoekt of 
              gebruik maakt van onze diensten.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Voor vragen over deze privacyverklaring kunt u contact met ons opnemen 
              via info@gripfinancecontrol.nl of telefonisch via 06 28 21 38 22.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Welke gegevens verzamelen wij
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wij verzamelen de volgende categorieën persoonsgegevens:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Contactgegevens (naam, e-mailadres, telefoonnummer)</li>
              <li>Organisatiegegevens (bedrijfsnaam, functie)</li>
              <li>Communicatiegegevens (berichten via contactformulier)</li>
              <li>Technische gegevens (IP-adres, browsertype, bezoekgedrag)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Waarom verzamelen wij deze gegevens
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wij gebruiken uw persoonsgegevens voor:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Het beantwoorden van uw vragen en verzoeken</li>
              <li>Het leveren van onze interim finance diensten</li>
              <li>Het verbeteren van onze website en dienstverlening</li>
              <li>Het naleven van wettelijke verplichtingen</li>
              <li>Marketingdoeleinden (alleen met uw toestemming)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Rechtsbasis voor verwerking
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wij verwerken uw persoonsgegevens op basis van:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Uw toestemming (contactformulier, nieuwsbrief)</li>
              <li>Uitvoering van een overeenkomst (dienstverlening)</li>
              <li>Gerechtvaardigd belang (websiteoptimalisatie, beveiliging)</li>
              <li>Wettelijke verplichting (administratie, belasting)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Delen van gegevens
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wij delen uw persoonsgegevens niet met derden, behalve:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Technische dienstverleners (hosting, e-mail)</li>
              <li>Wettelijk verplichte instanties</li>
              <li>Met uw expliciete toestemming</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Alle externe partijen zijn contractueel verplicht uw gegevens 
              veilig te behandelen conform de AVG.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Bewaartermijnen
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wij bewaren uw gegevens niet langer dan noodzakelijk:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Contactaanvragen: 2 jaar na laatste contact</li>
              <li>Klantgegevens: 7 jaar na einde dienstverlening</li>
              <li>Websitegegevens: 2 jaar</li>
              <li>Nieuwsbriefgegevens: tot afmelding</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Uw rechten
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              U heeft de volgende rechten:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Recht op inzage van uw gegevens</li>
              <li>Recht op rectificatie (verbetering)</li>
              <li>Recht op verwijdering ("recht om vergeten te worden")</li>
              <li>Recht op beperking van verwerking</li>
              <li>Recht op dataportabiliteit</li>
              <li>Recht van bezwaar</li>
              <li>Recht om toestemming in te trekken</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Voor het uitoefenen van deze rechten kunt u contact met ons opnemen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Onze website gebruikt cookies voor:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Functionele cookies (noodzakelijk voor websitewerking)</li>
              <li>Analytische cookies (Google Analytics, anoniem)</li>
              <li>Marketing cookies (alleen met uw toestemming)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              U kunt cookies beheren via uw browserinstellingen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Beveiliging
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Wij treffen passende technische en organisatorische maatregelen om 
              uw persoonsgegevens te beschermen tegen verlies, misbruik en ongeautoriseerde toegang. 
              Dit omvat onder andere SSL-encryptie, veilige servers en toegangscontroles.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Wijzigingen
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Wij kunnen deze privacyverklaring wijzigen. De meest actuele versie 
              vindt u altijd op onze website. Bij belangrijke wijzigingen zullen wij u hiervan op de hoogte stellen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Klachten
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Heeft u een klacht over onze omgang met uw persoonsgegevens? 
              Neem dan eerst contact met ons op. U kunt ook een klacht indienen 
              bij de Autoriteit Persoonsgegevens (www.autoriteitpersoonsgegevens.nl).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Contactgegevens
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>Grip op Finance & Control</strong>
              </p>
              <p className="text-gray-700 mb-2">
                E-mail: info@gripfinancecontrol.nl
              </p>
              <p className="text-gray-700 mb-4">
                Telefoon: 06 28 21 38 22
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700 transition-colors"
              >
                Contactformulier →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;