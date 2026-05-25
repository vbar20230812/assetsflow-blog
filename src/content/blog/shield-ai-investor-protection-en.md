---
title: "Shield: How AI Can Protect Retail Real Estate Investors from Bad Deals"
slug: "shield-ai-investor-protection"
date: 2026-05-23
excerpt: "Three layers of AI-powered investor protection. Screening companies against public registries, regulatory warning lists, and adverse media in real time — at the moment the investor is considering the deal."
author: "Victor"
lang: "en"
layout: "post.html"
permalink: "/en/posts/shield-ai-investor-protection/"
tags: ["shield", "ai", "investor-protection", "fraud", "regtech", "fca"]
---

UK investment fraud hit **£649 million** in 2024. That's 25,843 reports in a single year. In Israel, the Or City scheme alone cost 600 victims ₪142 million before the mastermind was sentenced to 7.5 years in prison.

These aren't sophisticated cyberattacks. They're simple schemes: promise above-market returns, target a specific community, disappear when the money runs out. The information to catch them exists in public databases. Companies House knows who owns what. The FCA publishes warnings. Court records show enforcement actions. The ISA maintains a blacklist.

The problem isn't missing data. It's that no one checks before handing over their money.

We're building **Assets Flow Shield** to close that gap.

## What Shield Does

Shield is a three-layer AI system that screens real estate investment opportunities against public data sources in real time. When a user considers investing in a company or project, Shield runs automated checks and presents the findings with direct links to the sources.

The output is not "this is a scam" or "this is safe." It is: **"Here is what public sources say about this company, with citations, so you can judge for yourself."**

## The Three Layers

### Layer 1: Agentic LLM Compliance Agent

This is the core. When a user enters a company name, an orchestrator dispatches specialised AI agents to public databases in parallel:

- **Registry Agent** — Checks whether the company exists as a registered legal entity. Companies House (UK), Rasham HaChavarot (Israel), OpenCorporates (US). An unregistered entity is an immediate red flag.
- **Warning List Agent** — Searches FCA Warning List, IOSCO I-SCAN (130+ jurisdictions), ISA Blacklist, and SEC enforcement records. Any exact match is flagged immediately.
- **Adverse Media Agent** — Scans GDELT global events database and CourtListener for negative coverage, enforcement actions, and fraud signals associated with the company or its directors.
- **Cross-Reference Agent** — Checks Companies House PSC (People with Significant Control) and OpenCorporates for related entities, director overlaps, and networks of dissolved companies.
- **LLM Pattern Analysis** — An AI model evaluates all collected evidence against a curated fraud typology: guaranteed high returns, Ponzi structures, affinity fraud targeting, complex entity webs, pressure tactics, and more. It produces a plain-language summary with pattern matches and confidence levels.

All agents run simultaneously. A deterministic scoring algorithm combines their outputs into a 0-100 risk score. The LLM synthesis runs last, adding interpretive context on top of the hard data.

### Layer 2: Behavioural Risk Engine

Layer 2 looks at the investor's own portfolio, not the company. It detects concentration risk (too much in one deal), age/income mismatches, first-time syndication exposure, and other behavioural patterns that indicate an investor may be taking on more risk than they realise. Calibrated against synthetic consumer behaviour datasets from the FCA Innovation Platform.

### Layer 3: Custom Fraud Classifier

A binary classifier trained on a labelled corpus of 20,000-50,000 records drawn from FCA Warning Lists, SEC enforcement actions, court records, and known fraud cases. Target: ROC-AUC ≥ 0.80. This is the deepest layer, requiring GPU training time, and will be operational in the later months of the FCA Sandbox programme.

## How It Works in Practice

A premium user creates a new investment project in Assets Flow and enters the company name. Behind the scenes:

1. All enabled agents run in parallel against public databases (under 30 seconds).
2. The LLM synthesis evaluates the collected evidence against known fraud patterns.
3. A deterministic score (0-100) is computed and stored.
4. The user sees a Shield badge with the assessment: Clear, Info, Caution, or Warning.
5. Premium users see the registry status and warning list hits. Premium+ users see the full AI analysis with evidence and source links.

Every screening is stored immutably. Every flag requires at least two corroborating sources. Every report includes a disclaimer: this is informational screening, not investment advice.

## Ongoing Monitoring

Screening once isn't enough. Companies can pass an initial check and go bad months later. Shield includes continuous monitoring that polls regulatory feeds (FCA, ISA, IOSCO) every 15 minutes. When a new warning matches a company that investors are tracking, every investor receives an alert — regardless of their subscription tier.

Withholding the existence of a regulatory warning based on subscription level is an ethics problem. Free users get the basic alert. Premium users see the source. Premium+ users get the full detail with links. But everyone gets notified.

## The Fraud Typology

The LLM pattern analysis checks against a curated set of known fraud patterns:

- **Guaranteed high returns** — Promises above-market returns with a "guarantee"
- **Ponzi structure** — New investor money paying returns to earlier investors
- **Unregistered securities** — Offering securities without regulatory registration
- **Affinity fraud** — Targeting a specific community or religious group
- **Complex entity web** — Unnecessarily complex corporate structure to obscure ownership
- **Pressure tactics** — "Limited time," "act now" urgency signals
- **No physical presence** — No verifiable office, staff, or operations
- **Recently incorporated** — Very new entity claiming an established track record
- **Director dissolved history** — Directors with a pattern of dissolved companies
- **Offshore opaque** — Offshore entity with no public registry access

The typology is expandable. As new fraud patterns emerge from enforcement data, we add them.

## Data Sources (All Public, All Free)

| Source | What It Provides | Coverage |
|--------|-----------------|----------|
| Companies House | Company registration, PSC, directors | UK |
| Rasham HaChavarot | Company registration | Israel |
| OpenCorporates | Entity search, director overlap | Global |
| FCA Warning List | Known scam firms | UK |
| IOSCO I-SCAN | Cross-border enforcement alerts | 130+ jurisdictions |
| ISA Blacklist | Unlicensed entities | Israel |
| SEC EDGAR / CourtListener | Enforcement actions, fraud judgments | US |
| GDELT 2.0 | Global adverse media monitoring | Global |

No private databases. No paid data brokers. Everything is public record. Shield just automates the checks that any diligent investor should do manually but rarely does.

## The FCA Sandbox

Assets Flow has applied to the **FCA Supercharged Sandbox Cohort 2**, running July to December 2026 in partnership with NVIDIA. This would give us access to enterprise AI tooling, synthetic datasets for fraud detection, and mentorship from FCA coordinators.

The programme culminates in a Demo Day on 26 November 2026 in London, where we plan to demonstrate a live end-to-end investor protection scenario: a portfolio with real investments, a simulated regulatory warning published in real time, and Shield alerts reaching every investor within 15 minutes.

## Defamation Guardrails

Accusing a legitimate company of fraud is a serious legal risk. Shield includes several safeguards:

- Every amber or red flag requires **at least two corroborating sources**
- All flags cite verifiable public sources with direct URLs
- Every report includes a clear disclaimer: informational screening, not investment advice
- An appeal pathway exists for screened entities to challenge findings
- All results are immutable — stored permanently, never edited after creation
- Fuzzy matches are always labelled "similar name, please verify" — never presented as certain

## What Shield Does NOT Do

Shield is a screening tool, not an oracle:

- It does not move capital or connect to financial institutions
- It does not make binary "scam/safe" judgments
- It does not replace professional due diligence
- It does not block users from recording an investment
- It does not access user financial data beyond what the user entered

The goal is to surface public information at the moment of decision. The investor still decides.

## Why This Matters

Retail real estate investors are particularly vulnerable. The minimum investment is often high ($50,000+). The deals are opaque. The sponsors are unknown entities promising double-digit returns. And the victims are usually first-time investors who trust the person who introduced them to the deal.

The Or City case in Israel is a textbook example. 600 victims. ₪142 million. The scheme targeted a specific community with guaranteed returns. Every red flag was visible in public data. Nobody checked.

Shield automates the check. Not after the money is gone. At the moment the investor is considering the deal.

## What's Next

- **July 2026:** FCA Sandbox kickoff. Layer 1 (Compliance Agent) deployed with registry and warning list agents operational.
- **August 2026:** Full gate screening live. 500-deal evaluation benchmark. Precision/recall metrics published.
- **September 2026:** Layer 2 (Behavioural Risk Engine) prototype. Monitoring feeds active.
- **October 2026:** Layer 3 (Fraud Classifier) first training run on GPU. Evaluation complete.
- **November 2026:** Full integration. Live demo at FCA Demo Day in London.
- **Q1 2027:** UK soft launch. B2B distribution with RE crowdfunding platforms.

---

*Assets Flow is an independent, bootstrapped startup based in Israel. Shield is being developed as part of the FCA AI Supercharged Sandbox Cohort 2 (2026). This article describes the product design and is not a guarantee of specific outcomes.*

*Published May 2026 · [assetsflow.work](https://assetsflow.work)*
