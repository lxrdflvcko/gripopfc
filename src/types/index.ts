export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  whenToHire: string[];
  result: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  sector: string;
  location: string;
  roles: string[];
  challenge: string;
  approach: string;
  result: string;
  clientQuote: string;
  client: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  position: string;
  organization: string;
}

export interface ContactFormData {
  name: string;
  organization: string;
  position: string;
  email: string;
  phone: string;
  message: string;
  gdprConsent: boolean;
}