# CGL Arena — SSC CGL Tier-I Mock Platform

Mobile-first, zero-dependency HTML/CSS/JavaScript exam simulator hosted on GitHub Pages.

## Test inventory
- 5 full mocks, each 100 questions, 60 minutes, 200 marks
- 20 sectional tests: five per subject (Reasoning, GA, Quant, English), each 25 questions
- +2 correct, −0.5 wrong, 0 skipped
- Practice questions are template/generated material; **not** independently authenticated 2026 SSC shift questions, and are **not** 1,000 independently authored unique questions.

## Features
- Responsive phone, tablet and desktop test-taking experience
- Public, direct links for overview, full mocks, all sectionals, subject-specific sectionals, performance, attempts and every individual test (`#/test/{test-id}`)
- Local username/password profiles with PBKDF2 salted hashes and separate saved data for each username
- Save-and-next, clear answer, mark review, question navigation, subject tabs, full screen, practice pause
- Persisted drafts and answer choices; score breakdown, solution review and per-question time record
- Local browser storage only; no backend, account recovery, server-side authentication or cross-device synchronization

## Local development
Run a local static web server inside this directory, e.g. `python -m http.server 8000`; visit `http://localhost:8000`.

## Authentication privacy note
This is a **local-device profile gate**, not secure authentication. Password hashes and scores are stored in browser localStorage and are not sent to any server. Do not reuse sensitive passwords. Because GitHub Pages hosts public files, anyone can download the practice question bank or bypass this client-side gate. For enforceable account access and cloud saving, a private database and managed auth provider are required.

## Deployment
GitHub Pages: Settings → Pages → Deploy from a branch → main / (root). The old GitHub Actions Pages workflow is unnecessary.