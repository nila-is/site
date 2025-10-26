import type { ServiceItem } from '../types/service';

export const services: ServiceItem[] = [
  {
    label: "Automation",
    description: "Implementing AI-powered workflows to replace slow, costly, or unscalable processes."
  },
  {
    label: "Exploration",
    description: "Integrating AI capabilities into your platform. I help teams figure out what's possible with AI and integrate it into their product."
  },
  {
    label: "Enablement",
    description: "Pick the right tools, set up practical guardrails, and adopt applied-AI best practices so AI works reliably. I help your team choose IDE agents and workflows, configure linters/type-checking/tests with pre-commit hooks, and document conventions (AGENTS.md, commands). We also establish proven applied-AI approaches—evaluation harnesses, prompting standards, context management, and lightweight monitoring—so engineers ship faster with fewer mistakes."
  }
];

export const engagementModels: ServiceItem[] = [
  {
    label: "Implementation Projects",
    description: "I partner directly with your team (typically a CTO plus 1-2 staff engineers) to ship AI that works with your existing system and architecture. I write the code and we deploy it in your environment to production within 30 days."
  },
  {
    label: "Advisory Engagements",
    description: "Same as Implementation, but your team writes the code. I provide hands-on guidance throughout."
  },
  {
    label: "Team Enablement",
    description: "Hands-on, 3-day cohort for senior engineers and tech leads covering the full agentic development workflow: explore → plan → build. Live coding on real codebases, guest sessions from developer-tool teams, and a hack day to put it into practice."
  }
];

