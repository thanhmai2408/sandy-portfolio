# sandy-project

A lightweight React + Vite prototype starter for exploring interaction flows and turning ideas into something clickable, fast.

## Getting started

```bash
cd sandy-project
npm install
npm run dev
```

The dev server will open at `http://localhost:5173` with hot reload.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — produce a production build in `dist/`
- `npm run preview` — preview the production build locally

## Structure

```
sandy-project/
├── DESIGN_BRIEF.md      # Problem, users, goals, success metrics
├── index.html           # Vite entry
├── package.json
├── vite.config.js
├── public/              # Static assets (served at /)
└── src/
    ├── App.jsx          # Root component — start here
    ├── main.jsx         # React mount
    └── index.css        # Global styles
```

## Prototyping tips

- Keep the brief (`DESIGN_BRIEF.md`) open while iterating — update goals and open questions as you learn.
- Start with the hardest moment of the flow, not the splash screen.
- Prototype to answer a question, not to look finished. Throwaway code is the goal.
