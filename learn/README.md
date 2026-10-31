# History Quest — playable Modern Indian History portal

This folder is a **standalone game inside CGL Arena**, hosted at `/pro/learn/`. It uses the existing CGL Arena signed-in browser session and links back to the main exam app.

## Files

- `index.html` — portal entry point; loads the existing original study data from `../learn-history-data.js`.
- `art.js` — original vector drawings for five eras and stylized collectible character portraits.
- `core.js` — navigation, saved progress, unlock system, profile storage and XP.
- `world.js` — five-region illustrated adventure map, chronological milestone pathways and SSC memory cards.
- `play.js` — hero dossiers, flashcards, Boss Battle, retry missed questions and progress vault.
- `quest.css` — responsive game design, animations, mobile layouts and accessibility fallbacks.

## Game rules

- Explore the first world immediately. Unlock the next by capturing at least 60% of the current world’s events (all earlier worlds must also meet their thresholds).
- Capturing an event awards 10 XP once. Mastering a quiz question awards 20 XP once. Fully capturing a chapter earns an additional 60 XP.
- `Memory Forge` uses active recall. `Boss Battle` contains 26 original SSC-style practice questions. After a completed run, weak-zone rematch uses missed questions from the three most recent completed runs.
- XP and attempts are kept in browser localStorage under `cgl-arena-history-world-v1:<username>`. The portal also migrates earlier History Quest memory flags, bookmarks, and correctly answered quiz questions when available.
- Source content is original educational revision material, **not a verified SSC paper**. Illustrations are stylized and not intended as authentic historical portraits.

## Integration

The main CGL Arena sidebar and home feature tile navigate to `./learn/`. Users must sign in to CGL Arena using the same browser session first.

## Accessibility

Semantic controls, keyboard-reachable navigation, reduced-motion CSS, responsive layouts and no required audio. Most gameplay works without hover.
