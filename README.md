# CGL Arena — Tier-I mock platform

Responsive, zero-dependency, static SSC CGL preparation web app. All content runs locally in the browser, no login required.

## Test inventory
- 5 full-length mocks × 100 questions × 60 minutes (25 each: General Intelligence, General Awareness, Quantitative Aptitude, English Comprehension)
- 5 sectionals per subject × 4 subjects × 25 questions = 20 sectional tests × 15 minutes.
- 1,000 scheduled question positions. Items use original practice templates and a recycled curated knowledge pool; **not 1,000 independently authored or unique questions**.

## Features
SSC-style +2 / −0.5 marking, timed practice with pause, full-screen, subject tabs, palette, previous/next, save and next, mark for review, clear response, localStorage autosave, submission confirmation, time expiry submission, analytics, explanations, answer review, 25-test catalog, search and filters, responsive desktop/mobile views.

## Run
Open `index.html` in a browser. No build step, backend, npm dependencies, or server needed. For hosting on GitHub Pages, publish the root of the `main` branch (Settings → Pages → Deploy from a branch).

## Content integrity
An independent **practice simulator**, not affiliated with SSC. Questions are generated and edited for foundational practice; they are not verified current shift questions or official previous year papers, and their difficulty is only an editorial label. Especially the General Awareness and English pool repeats across tests. The platform does not claim live rank, percentile, official cutoff, or validated difficulty equivalence. Please independently verify before treating a question as authoritative.

## Privacy
Attempt history and drafts reside solely in the browser's `localStorage` on that device. Clearing site storage erases attempts.