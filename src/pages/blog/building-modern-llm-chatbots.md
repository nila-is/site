---
layout: ../../layouts/BlogPost.astro
title: "Building Modern LLM Chatbots"
pubDate: "2024-12-18T14:00:00-05:00"
description: "Understanding the challenges and considerations when building LLM-powered chatbots."
---

Building a chatbot using an LLM seems like a great place to start, but it's a much harder problem to solve than it looks. Here are some high-level aspects of building a modern chatbot powered by LLMs.

## Conversation flows
There needs to be a way to direct the conversation. Since your chatbot is meant to do specific tasks related to your product, you can't just directly call OpenAI. You need a system that handles a conversation's starting, ending, and transition conditions. For example, if you have a chatbot as an airline for support, you may have different flows for booking a flight, canceling a flight, or upgrading your seat.

## Tone
The default tone from LLMs is very monotonous and robotic. You'll need to find a way to get it to fit your brand. This can be done through prompt engineering or fine-tuning.

## Guardrails
We've all seen examples of chatbots giving customers deals that they shouldn't, responding with inappropriate comments, or writing Python code. Getting guardrails right is tricky, but it needs to be built into the system early on.

## Memory
As the user talks to you more, you'll want to remember attributes or specifics about them to use in future responses. There are many ways to architect this, but you'll usually want some combination of structured output parsing and storing embeddings.

## Evals
While you can start by testing if a chatbot is working by going through the flows, testing this will eventually be nearly impossible. Especially given all the potential permutations of how a chatbot could work. Instead, you'll want to set up an eval system to confirm that you don't regress as you iterate on your bot.

## Integrations
You'll likely need a way for your bot to get other information, take action, or make suggestions in your system. To do this, you can look into function calling or structured output. This can be hard from a UX perspective since the potential requests from users can be infinite, but you'll need to be clear about what the bot can do.

---

There's a lot more to consider when building a chatbot assistant. I often tell companies that may be better off starting with a specific automation or product use case using LLMs. The surface area of what a chatbot needs to solve is usually large, making shipping something useful much harder. Once you have many capabilities built out, it can be worth setting up a chatbot around them.
