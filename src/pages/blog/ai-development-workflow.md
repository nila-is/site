---
layout: ../../layouts/BlogPost.astro
title: "How I Use LLMs to Build Software"
pubDate: "2024-12-17T14:00:00-05:00"
description: "My step-by-step process for using AI to write better software, faster."
---

LLMs have completely changed my process for building software. It's part of why I've been able to complete consulting projects independently. Here's my general flow.

## Research
- Research the problem with ChatGPT (GPT-4o), since it formats the results better than Claude
- Manually summarize what I learned. I could probably use LLMs for this, but this helps me make sure I understand the problem and remove the unnecessary context

## Architecture
- Give the summary to Claude (Sonnet 3.5), and describe my high-level idea of how to design the system. This is based on my experience writing design documents over the past 10 years. I ask it to give suggestions as a list, and I'll confirm/deny them
- Ask Claude to create a design doc. I give examples of docs I've written manually before, which is important so it understands my style
- Give a list of feedback on the doc, and have Claude give me a list of updates to approve. I repeat this a few times
- After a little while, it's not worth prompting Claude to edit the doc anymore. Then I take over and finish the doc myself

## Scaffolding
- I have starter templates I use for various types of LLM projects. I upload the files plus directory structure into a Claude project and add the design doc. Then I ask Claude to set up the initial codebase
- This part doesn't always work out, but I usually get at least some usable pieces. If I have opinions on technical choices I'll give feedback
- Again, I only prompt like this for a few cycles before stopping. Sometimes I'll go back a few steps and reset the context so it doesn't confuse itself. It doesn't always work out, and I can code manually if needed

## Coding
- From there, I mostly use Cursor (w/ Sonnet 3.5) and GitHub Copilot to write most of the code. I have a bunch of techniques to get this to work properly (mostly, giving small enough chunks of work with the minimal necessary context)
- I could probably write an entire blog post about just this piece!

I find working with LLMs automates most of the boring parts of starting a project: writing documentation, debugging, scaffolding, etc. Plus, it's like being able to ask unlimited questions to a domain expert who also can code at a Principal Engineer level.

I'd guess that I'm 2-10x as efficient with all these tools, depending on the project! Sometimes even more because I can work in areas I don't have much experience in.