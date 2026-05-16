# Civic Gallery

Civic Gallery is a cultural venue registration site for exhibitions, curator talks, member previews, visitor details, structured submissions, and confirmation routing.

This website is powered by Wix Headless and built using [wix-headless.dev](https://www.wix-headless.dev).

## Links

- Live site: [https://civic.gallery](https://civic.gallery/)
- Source: [https://github.com/wix-incubator/civicgallery](https://github.com/wix-incubator/civicgallery)
- Wix site ID: `3046fcc4-b139-4823-8d87-cf8d3c270434`

## What It Showcases

- A custom Astro registration surface backed by Wix Forms.
- Dynamic form loading from Wix and structured form field mapping.
- Submission handling through Wix Headless APIs.
- Success routing and branded confirmation states.
- Public `robots.txt` and `llms.txt` configured through Wix SEO txt APIs.
- Deployment with `wix release`.

## Wix Solutions Used

- Wix Headless Site for the managed site/runtime foundation.
- Wix Forms for the registration form schema and submissions.

## Wix SDKs And Packages

- `@wix/astro`
- `@wix/astro-pages`
- `@wix/sdk`
- `@wix/forms`

## Local Development

Create a local env file from `.env.example` or run the Wix CLI env setup for the connected site.

```bash
npm install
npm run dev
```

## Build And Release

```bash
npm run build
npm run release
```
