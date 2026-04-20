# Inventive Bakes

Inventive Bakes is a static React site now built with Vite for faster local development and more reliable dependency maintenance.

## Scripts

- `npm start`: Run the Vite dev server.
- `npm test`: Run Vitest in CI mode with coverage.
- `npm run test:watch`: Run Vitest in watch mode.
- `npm run build`: Create a production build in `build/`.
- `npm run preview`: Preview the production build locally.

## Local setup

1. Install dependencies: `npm ci`.
2. Start development server: `npm start`.
3. Run tests and coverage: `npm test`.
4. Build for production: `npm run build`.

## Coverage and CI policy

- Tests run with Vitest and v8 coverage.
- Coverage thresholds are enforced in config and are part of CI.
- GitHub Actions runs install, test, and build on push/PR to `master`.

## Renovate policy

- Renovate manages npm dependency updates.
- Patch/minor npm updates are configured for automerge after CI passes.
- Major updates remain manual.

## Deployment

Deployment remains manual via Netlify UI from merged PRs to `master`.

## Instagram feed status

The Instagram feed implementation exists in local files but is intentionally not active in the app runtime path for this modernization pass.
