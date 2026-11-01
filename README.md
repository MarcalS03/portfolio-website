# Portfolio Website

Personal portfolio site for Marcal Soteras, a data analyst job hunter.
Built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind
CSS, and deployed on Vercel.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/page.tsx` - assembles the single-page layout: `Hero`, `About`, `Projects`.
- `src/components/Hero.tsx` - name, title, scatter/regression-line visual,
  Download CV / Preview CV buttons, and contact links (email, LinkedIn,
  GitHub).
- `src/components/About.tsx` - short bio and education summary.
- `src/components/Projects.tsx` - renders only the Data Analysis projects from
  `src/data/projects.ts` for now. Machine-learning entries in that file are
  currently not displayed.
- `src/components/ProjectGrid.tsx` - responsive project grid with pagination
  (6 projects per page).
- `src/components/ProjectCard.tsx` - individual project card with thumbnail,
  description, and a link to the project. The description is hidden on
  mobile viewports to keep cards compact. Thumbnails default to a generic
  icon per category, or can be overridden per project by adding a slug entry
  to `PROJECT_THUMBNAILS`.
- `src/data/projects.ts` - project content. Add a new entry here with a
  `category` of `data-analysis` to add a project to the grid; the grid and
  pagination adapt automatically. Entries with a `category` of
  `machine-learning` are kept in the file but not displayed.
- `public/resume.pdf` - the CV served by the Hero's "Download CV" and
  "Preview CV" buttons. Replace this file to update the resume.
- `src/app/icon.svg`, `src/app/favicon.ico`, `src/app/apple-icon.png` - MS
  monogram favicon and app icons, picked up automatically by Next.js.

## Deployment

Deploys to Vercel. A custom domain will be pointed here once the site is
finished and approved.

To deploy your own instance, use the
[Vercel Platform](https://vercel.com/new).
Check out the
[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
for more details.
