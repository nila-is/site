import type { ServiceItem } from '../types/service';
import type { Testimonial } from '../types/testimonial';
import {
  implementationTestimonials,
  advisoryTestimonials,
  trainingTestimonials,
} from './testimonials';

export const services: ServiceItem[] = [
  {
    label: 'Workflow Automation',
    description:
      'Implementing AI-powered workflows to replace slow, costly, or unscalable processes.',
  },
  {
    label: 'Product Integration',
    description: 'Integrating AI capabilities into your platform.',
  },
  {
    label: 'Team Enablement',
    description:
      "Building up your team's capability to ship AI independently through hands-on training and establishing practical workflows.",
  },
];

export interface Engagement extends ServiceItem {
  testimonials: Testimonial[];
  testimonialsId: string;
}

export const engagements: Engagement[] = [
  {
    label: 'Implementation Projects',
    description:
      'I embed with a small tactical team (typically a CTO plus 1-2 staff engineers) to ship AI that works with your existing system and architecture. I write the code and deploy it in your environment to production within 30 days.',
    pricing: 'Starting at $50k',
    duration: 'Project-based',
    testimonials: implementationTestimonials,
    testimonialsId: 'implementation',
  },
  {
    label: 'Advisory Engagements',
    description:
      'Your engineers write the code while I provide hands-on technical guidance. I work with a small tactical team throughout—helping with architecture decisions, evaluating results and data, and unblocking challenges as you ship AI features. When needed, I can connect you with trusted vendors in my network.',
    pricing: 'Starting at $50k',
    duration: 'Typically 3 months',
    testimonials: advisoryTestimonials,
    testimonialsId: 'advisory',
  },
  {
    label: 'Team Trainings',
    description:
      'I run the <a href="https://maven.com/nila/ai-coding-accelerator" target="_blank" rel="noopener noreferrer">AI Coding Accelerator</a>, a hands-on 3-day cohort where your engineers learn practical AI coding workflows. Live coding sessions, guest speakers from Linear, OpenAI, and Cursor, and a hackathon on your own codebase. Teams leave with working systems they can deploy immediately.',
    testimonials: trainingTestimonials,
    testimonialsId: 'training',
  },
];
