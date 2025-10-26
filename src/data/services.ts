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
    description: "Pick the right tools, set up practical guardrails, and adopt applied-AI best practices so AI works reliably. I help your team choose IDE agents and workflows, configure linters/type-checking/tests with pre-commit hooks, and document conventions (AGENTS.md, commands). We also establish proven applied-AI approaches—evaluation harnesses, prompting standards, context management, and lightweight monitoring—so engineers ship faster with fewer mistakes."
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
    description: "I run the <a href='https://maven.com/nila/ai-coding-accelerator' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>AI Coding Accelerator</a>, a hands-on 3-day cohort where your engineers learn practical AI coding workflows. Live coding sessions, guest speakers from Linear, OpenAI, and Cursor, and a hackathon on your own codebase. Teams leave with working systems they can deploy immediately. I offer a generous discount when you send a team."
  }
];

