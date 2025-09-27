import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'gemeente-almere-bbv',
    title: 'BBV-implementatie Gemeente Almere',
    sector: 'Gemeente',
    location: 'Almere',
    roles: ['Interim Financieel Adviseur', 'Business Control Adviseur'],
    challenge: 'Implementatie nieuwe BBV-regelgeving binnen 6 maanden met beperkte interne capaciteit.',
    approach: 'Projectmatige aanpak met team van experts, procesbeschrijvingen, training medewerkers en implementatie nieuwe systemen.',
    result: 'Succesvolle BBV-implementatie op tijd, 30% efficiëntere processen, en volledig getraind team.',
    clientQuote: 'De expertise van Grip op Finance & Control was cruciaal voor onze succesvolle BBV-implementatie.',
    client: 'Wethouder Financiën',
    tags: ['BBV', 'Implementatie', 'Training', 'Gemeente']
  },
  {
    id: 'waterschap-control',
    title: 'Management Control Verbetering',
    sector: 'Waterschap',
    location: 'Rijn en IJssel',
    roles: ['Adviseur Business Control'],
    challenge: 'Onvoldoende inzicht in prestaties en kosten voor strategische besluitvorming.',
    approach: 'Ontwikkeling KPI-dashboard, nieuwe rapportagestructuur en implementatie budgetteringsproces.',
    result: 'Real-time inzicht in prestaties, 25% snellere besluitvorming, en verbeterde kostentoerekening.',
    clientQuote: 'Eindelijk hebben we de managementinformatie die we nodig hebben voor goede beslissingen.',
    client: 'Directeur Bedrijfsvoering',
    tags: ['Control', 'KPI', 'Dashboard', 'Waterschap']
  },
  {
    id: 'provincie-reorganisatie',
    title: 'Financiële Reorganisatie Provincie',
    sector: 'Provincie',
    location: 'Gelderland',
    roles: ['Teamleider Finance', 'Interim Financieel Adviseur'],
    challenge: 'Reorganisatie financiële afdeling met behoud van continuïteit en kwaliteit.',
    approach: 'Interim teamleiderschap, procesbeschrijving, kennisoverdracht en begeleiding nieuwe structuur.',
    result: 'Soepele overgang naar nieuwe organisatie, behoud van alle deadlines, en tevreden medewerkers.',
    clientQuote: 'Dankzij de stabiele leiding konden we de reorganisatie uitvoeren zonder operationele problemen.',
    client: 'Provinciesecretaris',
    tags: ['Reorganisatie', 'Teamleiding', 'Provincie', 'Change Management']
  }
];