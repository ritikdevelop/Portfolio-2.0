export interface CVType {
  analyticsCode: string;
  basics: Basics;
  skills: Array<Skill>;
  work?: Array<Work>;
  education?: Array<Education>;
  certificates?: Array<Certificate>;
  publications?: Array<Publication>;
  languages: Array<Language>;
  interests?: Array<Interests>;
  references?: Array<Reference>;
  projects?: Array<Project>;
}

interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone?: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Array<Profiles>;
}

interface Location {
  address: string;
  city: string;
  postalCode?: string;
  countryCode: string;
  region: string;
}

interface Profiles {
  icon: string,
  network: string;
  username: string;
  url: string;
}

interface Work {
  name: string;
  position: string;
  location_type?: string;
  location?: string;
  url?: string;
  startDate: string;
  endDate: string | null;
  summary: string;
  highlights?: Highlights;
  responsibilities?: Array<string>;
  skills?: Record<string, string>;
}

type DateStr = `${string}-${string}-${string}`;

interface Skill {
  icon: string,
  name: string;
  level: string;
  keywords: Array<string>;
}

interface Certificate {
  name: string;
  issueDate: DateStr;
  issuer: string;
  url: string;
}

interface Publication {
  name: string;
  publisher: string;
  releaseDate: DateStr;
  url: string;
  summary: string;
}

interface Education {
  institution: string;
  url?: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  score?: string;
  gpa?: string;
  courses?: Array<string>;
}

interface Language {
  language: string;
  fluency: string;
}

interface Project {
  name: string;
  isActive: boolean;
  description: string;
  highlights: Highlights;
  url?: string;
  github?: string;
}

interface Interests {
  name: string;
  keywords: Array<string>;
}

interface Reference {
  name: string;
  reference: string;
}

type Highlights = Array<String>;
