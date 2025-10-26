import type { ServiceItem } from '../types/service';

export const services: ServiceItem[] = [
  {
    label: "Workflow Automation",
    description: "Implementing AI-powered workflows to replace slow, costly, or unscalable processes."
  },
  {
    label: "Product Integration",
    description: "Integrating AI capabilities into your platform."
  },
  {
    label: "AI Fluency",
    description: "Building up your team's capability to ship AI independently through hands-on training and establishing practical workflows."
  }
];

export const engagementModels: ServiceItem[] = [
  {
    label: "Implementation Projects",
    description: "I partner directly with your team (typically a CTO plus 1-2 staff engineers) to ship AI that works with your existing system and architecture. I write the code and deploy it in your environment to production within 30 days.",
    pricing: "Starting at $50k",
    duration: "Project-based"
  },
  {
    label: "Advisory Engagements",
    description: "Your team writes the code while I provide hands-on guidance throughout. I help with architecture decisions, evaluating results and data, and unblocking technical challenges as you ship AI features. When needed, I can connect you with trusted vendors in my network.",
    pricing: "Starting at $50k",
    duration: "Typically 3 months"
  },
  {
    label: "Team Trainings",
    description: "I run the AI Coding Accelerator, a hands-on 3-day cohort where your engineers learn practical AI coding workflows. Live coding sessions, guest speakers from Linear, OpenAI, and Cursor, and a hackathon on your own codebase. Teams leave with working systems they can deploy immediately.",
    link: {
      href: "https://maven.com/nila/ai-coding-accelerator",
      label: "Learn more about the course"
    }
  }
];

