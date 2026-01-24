export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  url: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Vignesh has transformed our engineering team's relationship with AI development. Working across our entire organization, from individual contributors to leadership, he's delivered both immediate tactical wins and long-term strategic capability building. This engagement exemplifies how external AI expertise should work - practical, results-driven, and immediately applicable to our business goals.",
    author: 'Matt Kinman',
    title: 'CTO',
    company: 'Furnished Finder',
    url: 'https://furnishedfinder.com',
  },
  {
    quote:
      'Vignesh helped our staff engineers build a strong understanding of applied AI and showed them how to use AI tools to speed up development in meaningful ways. He played a key role in shaping our AI roadmap, helping the team get clear on both what to build and how to build it. He also designed the systems that let us run all our models on internal infrastructure, ensuring customer data stays private and secure. His guidance helped us move faster in the near term while laying the groundwork for long-term growth in our AI capabilities.',
    author: 'Paul Klicnik',
    title: 'CTO',
    company: 'Relay',
    url: 'https://relayfi.com',
  },
  {
    quote:
      'Vignesh quickly understood our team and existing processes, then architected a solution that will serve as the foundation to save significant hours every month on manual work while improving accuracy. He has a strong understanding of where to apply AI. He worked well with the engineers on our team, taking their perspectives into account and working alongside them to develop their understanding of AI and its deployment.',
    author: 'Sean Scott',
    title: 'CTO',
    company: 'Foxen',
    url: 'https://foxen.com',
  },
  {
    quote:
      'Vignesh helped us build our LLM infrastructure from scratch, cutting through buzzwords to implement solutions that deliver measurable improvements. His deep understanding of how LLMs work in production and ability to write high-quality code that actually works, not just demos, was invaluable. He helped us across the stack—from data pipelines to prompts to testing.',
    author: 'Kiran Cherukuri',
    title: 'CEO',
    company: 'Perdiem',
    url: 'https://perdiem.xyz',
  },
  {
    quote:
      'Vignesh helped us get our AI system to production within a month with an architecture designed to support future product goals we had in mind. He set us up to improve our systems over time by building an evaluation system and upleveling our team on best practices in applied AI engineering.',
    author: 'Patrick Vatterott',
    title: 'CTO',
    company: 'Vitally',
    url: 'https://vitally.io',
  },
  {
    quote:
      'Our onboarding flow needed to capture user preferences in a natural and effective way. Vignesh experimented with generative AI approaches and developed a system that turned chatbot conversations into structured insights. His work was essential to delivering the experience we envisioned.',
    author: 'Charles DePue',
    title: 'CEO',
    company: 'Sitch',
    url: 'https://joinsitch.com',
  },
  {
    quote:
      'Our team needed to build a frontend interface for a conversational AI application for a large prospective customer on a tight timeline. Vignesh stepped in and integrated our chat SDK and NLX platform into a solution that could easily be productized. The solution worked to specification and was a key part of how we showcased our capabilities to the client. His ability to deliver under pressure made all the difference.',
    author: 'Andrei Papancea',
    title: 'CEO',
    company: 'NLX',
    url: 'https://nlx.ai',
  },
  {
    quote:
      'Vignesh quickly understood our market, platform, and team, helping us clarify our Gen AI direction and prioritize the right next steps. His support meaningfully accelerated our timeline.',
    author: 'Viki Zabala',
    title: 'CMO',
    company: 'First Insight',
    url: 'https://firstinsight.com',
  },
];
