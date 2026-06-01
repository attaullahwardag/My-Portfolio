/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  name: string;
  level: number; // percentage (e.g., 90)
  category: 'programming' | 'web-dev' | 'ai-nlp' | 'tools';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'AI & NLP' | 'Web Apps' | 'Research';
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  stats?: {
    accuracy?: string;
    datasetSize?: string;
    stars?: number;
  };
  metrics?: { label: string; value: string }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  details: string[];
  grade?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string;
  venue: string;
  date: string;
  abstract: string;
  status: 'Published' | 'Under Review' | 'Accepted' | 'In Preparation';
  link?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}
