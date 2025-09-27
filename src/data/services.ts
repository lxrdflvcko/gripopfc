import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'interim-financial-advisor',
    title: 'Interim Financieel Adviseur',
    description: 'Ervaren ondersteuning bij complexe financiële vraagstukken en beleidsvorming conform BBV.',
    deliverables: [
      'Financiële beleidsadvisering',
      'BBV-compliance controle', 
      'Meerjarenraming opstellen',
      'Begrotingsanalyse en -optimalisatie'
    ],
    whenToHire: [
      'Bij complexe financiële besluitvorming',
      'Voor BBV-implementatie projecten',
      'Bij ziekte of verloop van sleutelfuncties',
      'Voor specifieke expertise op korte termijn'
    ],
    result: 'Verbeterde financiële sturing en BBV-conforme processen binnen 6-12 weken.',
    icon: 'TrendingUp'
  },
  {
    id: 'business-control-advisor',
    title: 'Adviseur Business Control',
    description: 'Strategische business control voor betere prestaties en risicobeheersing.',
    deliverables: [
      'Management rapportages',
      'KPI dashboard ontwikkeling',
      'Procesoptimalisatie',
      'Risicoanalyse en -beheersing'
    ],
    whenToHire: [
      'Voor verbeterde managementinformatie',
      'Bij implementatie nieuwe systemen',
      'Voor projectmatige control vraagstukken',
      'Bij reorganisaties of fusies'
    ],
    result: 'Inzicht in prestaties en risico\'s met actionable management informatie.',
    icon: 'BarChart3'
  },
  {
    id: 'senior-financial-employee',
    title: 'Senior Financieel Medewerker',
    description: 'Hands-on uitvoering van financiële processen en administratieve werkzaamheden.',
    deliverables: [
      'Maand- en jaarafsluiting',
      'Crediteuren/debiteuren beheer',
      'Subsidieadministratie',
      'Financiële rapportages'
    ],
    whenToHire: [
      'Bij personeelstekorten',
      'Voor piekbelasting opgevangen',
      'Bij specifieke projecten',
      'Voor vakantie- en ziektevervanging'
    ],
    result: 'Continuïteit van financiële processen en tijdige rapportages.',
    icon: 'Calculator'
  },
  {
    id: 'team-leader-finance',
    title: 'Teamleider Finance',
    description: 'Leiderschap en coördinatie van financiële teams en processen.',
    deliverables: [
      'Teamaansturing en -ontwikkeling',
      'Procescoördinatie',
      'Kwaliteitsborging',
      'Stakeholder management'
    ],
    whenToHire: [
      'Bij uitval van teamleider',
      'Voor reorganisatie begeleiding',
      'Bij teamontwikkeling projecten',
      'Voor interim management periodes'
    ],
    result: 'Stabiel, goed presterend financieel team met heldere processen.',
    icon: 'Users'
  }
];