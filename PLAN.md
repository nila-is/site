## Nila Homepage Improvement Plan

### Goals

- **Clarify positioning and target audience** for Nila as an AI consulting practice.
- **Increase conversion** to the primary CTA (intro call / contact form).
- **Showcase credibility quickly** through background and testimonials.
- **Keep implementation small and maintainable** within the current Astro/Tailwind setup.

### 1. Hero & Above-the-Fold

- **1.1 Refine core value proposition**
  - Make the first sentence explicitly outcome- and audience-focused (e.g., B2B SaaS / eng leaders).
  - Emphasize speed to production and reliability of AI systems.
- **1.2 Strengthen proof points near the top**
  - Add 1–2 short, scannable bullets under the hero with concrete proof (e.g., acquisitions, time-to-production, number of teams helped).
  - Optionally include a small logos row (subset of testimonial companies) near the hero.
- **1.3 Clarify primary & secondary CTAs**
  - Keep a single primary CTA (e.g., “Schedule an intro call” / “Let’s talk about your AI roadmap”) above the fold.
  - Add an optional secondary CTA (e.g., “See how I work”) that scrolls to a process section.

### 2. Services & “How I Work”

- **2.1 Connect Advisory / Implementation / Training to a concrete process**
  - Introduce a short “How I work” section describing a 3–4 step engagement:
    - Diagnose (understand product, data, infra, constraints).
    - Design (architecture & roadmap).
    - Implement (hands-on shipping to production).
    - Enable (training & documentation for the team).
  - Map each step to the existing Advisory / Implementation / Training framing.
- **2.2 Add “Who I work with” / best-fit section**
  - 3–4 bullets that describe ideal clients (e.g., B2B SaaS, have a product but lack AI infra, want to ship in weeks, etc.).
  - Include 1 bullet for non-ideal fits to help self-qualification (e.g., pure research, no engineering team yet).

### 3. Testimonials & Social Proof

- **3.1 Maintain testimonial ordering by impact**
  - Keep strategic/CTO-level and broad technical endorsements at the top.
  - Group remaining testimonials loosely by outcome type (infra/roadmap, shipping features, team enablement).
- **3.2 Improve scannability**
  - For each testimonial, add a short bolded summary line at the top (e.g., “Got our AI system to production in under a month.”).
  - Keep the full paragraph text, but consider slightly lighter styling for long bodies (smaller font or lighter color).
- **3.3 Add a simple logo strip**
  - Use existing favicons to render a horizontal row of company marks (with accessible text) either above testimonials or near the hero.

### 4. Background & About

- **4.1 Tighten the “Background” narrative**
  - Add a line explicitly connecting experience at Drift/Kensho to what you now do for clients (production-grade AI systems, strong infra, etc.).
  - Keep this section concise and focused on relevance to current consulting work.
- **4.2 Refine About section layout**
  - Improve small-screen layout so the headshot is larger on mobile (e.g., full width above text, then side-by-side on larger screens).
  - Add a short “Why Nila?” sentence that explains the name and ties it to your personal story.
- **4.3 Surface social links more intentionally**
  - Keep LinkedIn as the primary professional link, with X and blog as secondary.
  - Ensure external links are clearly labeled and accessible.

### 5. Navigation, Layout, and Visual Hierarchy

- **5.1 Light-weight in-page navigation**
  - Consider adding hash-based nav links (e.g., Services, How I Work, Testimonials, About) near the top of the page or in the header.
  - Ensure smooth scrolling and clear section IDs.
- **5.2 Section separation**
  - Use subtle background tints or borders on alternating sections (e.g., process or testimonials) to break the vertical stack.
  - Maintain consistent spacing and heading sizes for a clear visual rhythm.
- **5.3 CTA styling**
  - Style the primary CTA as a button with clear visual prominence.
  - Keep secondary links visually lighter to avoid competing with the main action.

### 6. Technical & SEO Improvements

- **6.1 Semantic structure**
  - Ensure there is a single H1 (site/hero title) and that section headings are H2/H3 in a logical hierarchy.
  - Add `aria-label`s where useful and keep link text descriptive (no “click here”).
- **6.2 Meta & structured data**
  - Refine `<title>` and meta description towards the target audience (e.g., “AI consulting for B2B SaaS engineering teams | Nila”).
  - Add JSON-LD schema for `Person`/`Organization` and service description, including links to LinkedIn, X, and your blog.
- **6.3 Performance & assets**
  - Confirm images (headshot, logos) are sized appropriately and lazy-loaded where suitable.
  - Reuse existing favicon/testimonial logo assets where possible to avoid bloat.

### 7. Implementation Phases

- **Phase 1: Copy & structure**
  - Update hero copy, add proof bullets, and tighten Background/About text.
  - Introduce “How I work” and “Who I work with” sections using existing components.
- **Phase 2: Testimonial UX & logos**
  - Add summary lines to testimonials and a simple logo strip.
  - Verify responsiveness and readability across breakpoints.
- **Phase 3: Visual & navigation polish**
  - Adjust spacing, section backgrounds, and CTA/button styles.
  - Optionally add in-page navigation in the header or just below.
- **Phase 4: SEO & technical**
  - Add structured data, refine meta tags, and verify accessibility (headings, link text, color contrast).
  - Run a quick Lighthouse/axe pass and address any obvious issues.
