# FoCommand — live web demo

This repository hosts a **live, in-browser build of FoCommand** so you can try the core experience without installing anything.

**▶ Try it: https://robsprogramming.github.io/focommand-web-demo/**

FoCommand is an AI focus command centre: one goal drives the day, AI plans the tasks, a live coach re-plans as it unfolds, and a full-screen focus session holds exactly one task. The shipping product is a Windows and macOS desktop app (Electron).

- **Engineering write-up:** [focommand-showcase](https://github.com/Robsprogramming/focommand-showcase)
- **Get the full build:** [FoCommand on Gumroad](https://robssales.gumroad.com/l/FoCommand)

### What works in the browser, and what doesn't

This is the app's **renderer**, running without its Electron backend, so:

- **Works:** the goal launch, the task command deck (add tasks by hand), the focus timer and the Do! session, categories, and the general workflow.
- **Optional:** AI task generation and the coach use your own API key (Claude, GPT, or Grok), entered in setup. Without a key you can still use everything manually.
- **Desktop only:** passive activity capture, AI-Autopilot, the always-on-top widget, and the SQLite-backed knowledge areas need the desktop app and are not available in the browser build.

> This repo contains only the compiled static site (a build artifact). The application source is private. Your data stays in your browser's local storage.
