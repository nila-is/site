---
layout: ../../layouts/BlogPost.astro
title: "AI Engineering Terms, Simplified"
pubDate: "2024-12-16"
description: "A simplified guide to common AI engineering terms and concepts, explained in plain language."
---

The AI engineering industry tends to overcomplicate stuff when it's not necessary. I pretty often find myself translating jargon into simple explanations. This guide is my running list of the definitions I wish I had when I started learning about using AI.

*Remember: you often don't need to know all the details of how LLMs work. This is a starting point, and if you're curious about anything specific you can reach out. I'll be writing more blog posts on related topics.*

## LLM (Large Language Model)
A model that generates text based on a prompt. (I'm purposely skipping a lot of context on this one!)

## Prompt
The content you give to an LLM to get it to generate something.

## Prompt Engineering
The skill of writing good prompts for generative models. Some strategies for this are described below.

## AI Engineering
Building useful things with AI. Like being a regular software engineer, while also using LLMs as a tool. All engineers will eventually be AI engineers.

## Vector Embedding
Converting words into numbers that an LLM can understand. The numbers themselves will have no meaning to a human, but they represent attributes of the words. For example, words like "king" and "queen" or "cat" and "kitten" will have similar vector representations because they are related.

## Vector Database
A special database that stores these embeddings.

## Similarity search
Finding similar items in a vector database by comparing their number representations. For example, if you search for "puppy", you might find "dog" and "kitten" because they have similar vector representations.

## RAG (Retrieval-Augmented Generation)
A prompting technique. You can break the term down into three parts:

- **Retrieval:** Looking up relevant information from a knowledge base, often using similarity search in a vector database.
- **Augmented:** Adding this information to the prompt.
- **Generation:** Using the LLM to create a response based on both the original prompt and the added information.

This allows the LLM to learn from proprietary information that won't be in the LLM already.

## Chain-of-thought / Reasoning
Asking the LLM to show its work step-by-step. Some papers have shown that this can improve the output quality.

## Tool Use
Letting the LLM use other software tools, like looking things up on Google or using a calculator.

## Non-determinism
The LLM's response will be slightly different each time as it's based on probabilities. This means the system should be designed to handle different outputs from the same prompt.

## Transformers / Attention
The architecture behind how modern LLMs are trained. Unless you're interested in this, you don't need to know too much more about it.

## Eval
Testing how well an AI system performs at specific tasks. Like test-driven development except this also handles non-deterministic outputs.

## Zero-shot
Prompting an LLM without giving any examples. It can work if the task is straightforward.

## Few-shot
Prompting an LLM by giving it a few examples of the desired behavior. This gives the model more context to give a better response.

## One-shot
Prompting an LLM with exactly one example of the desired behavior.

## Fine-tuning
Training an LLM on specific data to make it better at specific tasks by showing it lots of relevant examples.

## DPO (Direct Preference Optimization)
Training an LLM to give better answers by showing it which responses humans prefer over time. This is an example of fine-tuning.

## Structured Output
Getting the LLM to format its responses in a specific way, to fit to a specific schema. This is useful when writing code that calls LLMs, as you want outputs to fit internal types.

## Agent
An AI that can make decisions and take actions on its own. In AI engineering, this often means a system that combines various techniques described above.