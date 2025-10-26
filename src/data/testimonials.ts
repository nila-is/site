import type { Testimonial } from '../types/testimonial';

// Implementation testimonials
export const implementationTestimonials: Testimonial[] = [
  {
    quote: "Vignesh helped us get our AI system to production within a month with an architecture designed to support future product goals we had in mind. He set us up to improve our systems over time by building an evaluation system and upleveling our team on best practices in applied AI engineering.",
    author: "Patrick Vatterott",
    role: "CTO",
    company: "Vitally",
    url: "https://vitally.io",
    projectUrl: "https://www.vitally.io/product/ai",
    projectLabel: "See Vitally AI",
    favicon: "/favicons/vitally-favicon.png"
  },
  {
    quote: "Our team needed to build a frontend interface for a conversational AI application for a large prospective customer on a tight timeline. Vignesh stepped in and integrated our chat SDK and NLX platform into a solution that could easily be productized. The solution worked to specification and was a key part of how we showcased our capabilities to the client. His ability to deliver under pressure made all the difference.",
    author: "Andrei Papancea",
    role: "CEO",
    company: "NLX",
    url: "https://nlx.ai",
    projectUrl: "https://techcrunch.com/video/toyota-and-nlx-making-ai-work-in-the-world-of-car-repairs/",
    projectLabel: "Watch TechCrunch feature",
    favicon: "/favicons/nlx-favicon.ico"
  },
  {
    quote: "Our onboarding flow needed to capture user preferences in a natural and effective way. Vignesh experimented with generative AI approaches and developed a system that turned chatbot conversations into structured insights. His work was essential to delivering the experience we envisioned.",
    author: "Charles DePue",
    role: "CEO",
    company: "Sitch",
    url: "https://joinsitch.com",
    favicon: "/favicons/sitch-favicon.png"
  }
];

// Advisory testimonials
export const advisoryTestimonials: Testimonial[] = [
  {
    quote: "Vignesh helped our staff engineers build a strong understanding of applied AI and showed them how to use AI tools to speed up development in meaningful ways. He played a key role in shaping our AI roadmap, helping the team get clear on both what to build and how to build it. He also designed the systems that let us run all our models on internal infrastructure, ensuring customer data stays private and secure. His guidance helped us move faster in the near term while laying the groundwork for long-term growth in our AI capabilities.",
    author: "Paul Klicnik",
    role: "CTO",
    company: "Relay",
    url: "https://relayfi.com",
    projectUrl: "https://medium.com/relay-financial/how-we-built-ai-powered-expense-categorization-with-rag-23a640fa3e78",
    projectLabel: "Read about AI-powered expense categorization",
    favicon: "/favicons/relay-favicon.ico"
  },
  {
    quote: "Vignesh helped us build our LLM infrastructure from scratch, cutting through buzzwords to implement solutions that deliver measurable improvements. His deep understanding of how LLMs work in production and ability to write high-quality code that actually works, not just demos, was invaluable. He helped us across the stack—from data pipelines to prompts to testing.",
    author: "Kiran Cherukuri",
    role: "Founder",
    company: "Perdiem",
    url: "https://perdiem.xyz",
    favicon: "/favicons/perdiem-favicon.png"
  }
];

// Team enablement / training testimonials
export const trainingTestimonials: Testimonial[] = [
  {
    quote: "This was really enlightening in the way the instructors focused on demonstrating their real workflows. It will absolutely change the way I get work done. I currently spend most of my time managing & directing a team, but now in addition to this, I will be teaching my team how to manage & direct their coding agent(s), as well as being able to have the time to implement things myself with agentic help. Course was a great balance of practical advice & a cool peek at some really useful tools.",
    author: "Timothy Morton",
    role: "Sr Director, Research Data Science",
    company: "Tatari",
    url: "https://www.tatari.tv",
    favicon: "/favicons/tatari-favicon.png"
  },
  {
    quote: "Jason and Vignesh were incredibly engaging throughout the course. I really appreciated how open they were to questions. It never felt rushed or overly scripted. The whole experience felt less like a formal training and more like a lunchroom conversation with experienced engineers who genuinely enjoy sharing their knowledge. You really get as much out of it as the effort you put into digging into their wealth of experience.",
    author: "Scott Hsieh",
    role: "Software Development Manager",
    company: "Acuity Insights",
    url: "https://www.acuityinsights.com",
    favicon: "/favicons/acuityinsights-favicon.png"
  },
  {
    quote: "Both instructors were clearly very invested in the success of the course. I loved the hands on live coding. There is so much detail there that would be hard to convey any other way. Overall a really great course that felt productive and packed with useful info. The condensed 3 day schedule is great and I think works better than a drawn out course over several weeks.",
    author: "Nelson Ramirez",
    role: "Staff Software Engineer",
    company: "Galileo",
    url: "https://www.galileo.io",
    favicon: "/favicons/galileo-favicon.png"
  }
];

// Backwards-compatible default export used by older imports
export const appliedTestimonials = [...implementationTestimonials, ...advisoryTestimonials];
export const courseTestimonials = trainingTestimonials;
export const testimonials = appliedTestimonials;

