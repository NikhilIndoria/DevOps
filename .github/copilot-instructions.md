# Copilot instructions

## Projects and architecture

This repository contains separate project directories; commands and dependencies are scoped to the relevant project rather than the repository root.

- `Swiggy_Clone` is the implemented app: a Create React App frontend. `src/index.js` mounts `App`, which composes the page from the navigation, offer/category banners, restaurant sections, and footer in `src/Components`. These sections are primarily static JSX content; there is no application API or data layer in the current implementation.
- Components import their CSS directly. The UI combines React-Bootstrap/Bootstrap classes with component-specific CSS and image assets in `src/Photos`; several images are loaded from external Swiggy URLs. Preserve the existing import paths and filename casing (some CSS names do not exactly match their component names).
- `Swiggy_Clone/Dockerfile.yaml` builds the React app with Node 18, then serves the generated static build using Nginx. It is named `Dockerfile.yaml`, not Docker's default `Dockerfile`.
- `Netflix_Clone` currently contains deployment notes only; its `ReadMe.md` describes a planned Jenkins, Docker/Kubernetes, and monitoring setup, not a runnable application.

## Build, test, and lint

Run these commands from `Swiggy_Clone`:

```sh
npm start
npm run build
npm test -- --watchAll=false
npm test -- --watchAll=false --runTestsByPath src/Components/YourComponent.test.js
```

The final command runs one Jest test file; substitute the path of the test you want to run. The project has no dedicated lint script. ESLint is configured through the `react-app` and `react-app/jest` presets in `package.json`.

To build the container image, run from `Swiggy_Clone` so the Docker build context includes the app:

```sh
docker build -f Dockerfile.yaml -t swiggy-clone .
```

## Deployment configuration

`buildspec.yaml` describes an AWS CodeBuild stage and publishes `appspec.yaml`; the app spec targets an ECS service with a fixed task-definition reference and container mapping (`swiggy` on port `3000`). CodeBuild reads Docker registry credentials and a Sonar token from Parameter Store, and its post-build phase sends a build-status email through AWS SES. The test and Docker build/push commands are currently echo-only or commented out, so do not assume the pipeline actually runs tests or produces/pushes an image. Keep any deployment changes consistent across the buildspec, app spec, and Docker build context.

## Code conventions

- Use function components with a default export, matching the existing components.
- Keep page section composition in `src/App.js`; keep section markup in its corresponding component rather than moving the static page content into a new data or service layer without a need.
- Use the existing Bootstrap utility classes for common layout and component CSS for specific styling. Import component styles from the component file that uses them.
- Import local image assets from `src/Photos` and retain exact path casing. Existing remote image URLs and icon/font links are part of the current static UI.
