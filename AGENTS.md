# Portfolio Website - Agent Instructions

## Project Context

- Personal portfolio site built with Next.js (App Router), TypeScript, Tailwind CSS.
- Deploying to Vercel. Custom domain will be pointed here once the site is finished and approved.
- Audience: recruiters and hiring managers evaluating for junior data analyst / data scientist / ML engineer roles.

## Lessons Learned

(Corrections and preferences discovered during development get added below, most recent last.)

- Mobile layout: the project card description is intentionally hidden below
  the `sm` breakpoint (recruiters mostly view on desktop, and the text made
  mobile cards too tall). This is a deliberate content decision, not a bug.
- Hero visual: keep the scatter/regression SVG `viewBox` at its original
  `0 0 480 320`. Cropping the viewBox to hug the axis lines was tried and
  explicitly reverted after review; only the mobile width/centering
  (`w-4/5 max-w-[260px] mx-auto`) should change on small screens.
