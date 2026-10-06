# FourZ

Official website source for **FourZ**, built with React 18 and Vite.

Live site: **https://alaa-ghalep.github.io/fourZ_site**

## Project structure

The application lives in the `my-app/` directory:

```
.
├── .gitignore
└── my-app/                 # React + Vite application
    ├── public/
    ├── src/
    │   ├── assets/         # images and SVG icons
    │   ├── Components/     # page sections
    │   ├── styles/         # component stylesheets
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## Getting started

```bash
cd my-app
npm install      # install dependencies
npm run dev      # start dev server on http://localhost:5173
npm run build    # production build into my-app/dist
npm run preview  # preview the production build
npm run lint     # run ESLint
```

> **Note:** all commands are run from inside `my-app/`, since that is where
> `package.json` lives.

## Deploying to GitHub Pages

`homepage` in `my-app/package.json` is set to
`https://Alaa-ghalep.github.io/fourZ_site`, so asset paths in the production
build resolve correctly for a project-pages site.

To deploy from your machine:

```bash
cd my-app
npm run deploy
```

This builds the app and publishes `my-app/dist` to the `gh-pages` branch.

## Stack

- **React 18** — UI
- **Vite 5** — build tool and dev server
- **Bootstrap 5** — grid and base styles
- **Font Awesome 4** — icon font
- **AOS** — scroll animations

## Notes

- `node_modules/` and `dist/` are excluded via `.gitignore` and are never
  committed. Run `npm install` to restore them.
