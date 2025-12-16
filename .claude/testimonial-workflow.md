# Add Testimonial Workflow

## Command: `add testimonial`

### Process
When adding a testimonial, follow these steps:

1. **Gather Information**
   - Quote/testimonial text
   - Author name
   - Author title (e.g., "CTO", "CEO", "Co-Founder & CTO")
   - Company name
   - Company website URL

2. **Download Company Favicon**
   ```bash
   # First, check the website's HTML for favicon
   curl -sL https://{company-url} | grep -i "rel=\"icon\""
   
   # Download the favicon (try PNG first, then ICO)
   curl -sL {favicon-url} -o public/favicons/{company}-favicon.{ext}
   
   # Verify it's a valid image
   file public/favicons/{company}-favicon.{ext}
   ```

3. **Add to Testimonials**
   - Edit `src/pages/index.astro`
   - Insert testimonial in order of strength:
     1. Comprehensive technical endorsements (CTOs showing breadth & depth)
     2. Strong technical impact (infrastructure, team development)
     3. Fast delivery with measurable results
     4. Specific product features
     5. Strategic guidance

4. **Commit & Deploy**
   ```bash
   cd /Users/vigneshmohankumar/Projects/nila-homepage
   git add src/pages/index.astro public/favicons/*-favicon.*
   git commit -m "Add {Company} testimonial"
   git push
   ```

## Testimonial Template
```astro
<Testimonial
  quote="..."
  author="Full Name"
  role="Title"
  company="Company Name"
  url="https://company.com"
  favicon="/favicons/company-favicon.png"
/>
```

## Ordering Criteria
Rank testimonials by:
1. **Scope** - How many areas of impact (roadmap, team, infrastructure, etc.)
2. **Depth** - Technical specificity and detail
3. **Results** - Measurable outcomes mentioned
4. **Role** - CTOs/Founders > VPs > Others
5. **Length** - More substantial testimonials first

