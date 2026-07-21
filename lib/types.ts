import { IconType } from "react-icons";

export interface NavItem {
  id: string;
  label: string;
  icon: IconType;
}

export interface SkillItem {
  name: string;
  category: "Core ML & AI" | "Backend & Distributed Systems" | "DevOps, Cloud & Infrastructure" | "Frontend & Application Frameworks" | "Research & Institutions" | string;
  logo?: string;
  url?: string;
}

export interface IndustryExperienceItem {
  image?: string;
  company: string;
  title: string;
  externalUrl: string;
  technologies: string[];
  keywords: string[];
  date: string;
  details: string[];
}

export interface AcademicInstitutionItem {
  institutionAcronym: string;
  institutionName: string;
  degree?: string;
  major?: string;
  image?: string;
  externalLink: string;
  summary: string;
  startDate: string;
  endDate: string;
  notableCurriculum?: string[];
  status?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  canonical_url?: string;
  summary: string;
  content: string;
  readTimeMinutes: number;
}
