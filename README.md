# Astro 3 Portfolio

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Commands](#commands)
- [Credits](#credits)

## Demo

📌 [portafolio-blesy.vercel.app](https://portafolio-blesy.vercel.app)

## Features

✔️ Integration with **Tailwind CSS** ([@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)) supporting **Dark mode**.

✔️ Uses the following integrations:

- @astrojs/mdx
- @astrojs/tailwind - with prettier class sorting plugin
- @astro-i18next
- @astro-icon
- @astro-seo
- @astro-navbar

✔️([@Playwright](https://github.com/microsoft/playwright)) e2e tests are setted up.

✔️Multilanguage

🔜 404 error page

Astro looks for `.astro`, `.md` or `.mdx` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

`src/components/` is where we put any Astro components and similarly `src/layouts/` for layouts.

Images can be placed in `src/images/`.

Blog and documentation content are created as collections of Markdown or MDX files in `src/content`.

Any static assets, eg. images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `npm i`             | Installs dependencies                              |
| `npm run dev`       | Starts local dev server at `localhost:3000`        |
| `npm run build`     | Build your production site to `./dist/`            |
| `npm run preview`   | Preview your build locally, before deploying       |
| `npx astro ...`     | Run CLI commands like `astro add`, `astro preview` |
| `npx astro --help`  | Get help using the Astro CLI                       |
| `npm run test`      | Run Playwright tests                               |

## Credits

Desgin Based on [Veranika's](https://github.com/veranikabarel/astro-portfolio) Design
