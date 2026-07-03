export type ProjectCategory = "data-analysis" | "machine-learning";

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  href: string;
}

// Add more entries as you finish new projects - the grid and pagination
// adapt automatically. Give a project a custom thumbnail by adding a case
// for its slug in PROJECT_THUMBNAILS (src/components/ProjectCard.tsx).
export const projects: Project[] = [
  {
    slug: "ireland-housing-supply-analysis",
    title: "Irish Housing Supply Analysis",
    description:
      "An analysis of housing supply trends across Ireland, exploring regional construction rates and delivery against demand.",
    category: "data-analysis",
    href: "https://github.com/MarcalS03/ireland-housing-supply-analysis",
  },
  {
    slug: "fuga-ml",
    title: "FugaML",
    description:
      "A customer churn prediction API built with FastAPI and Docker, serving a trained ML model behind a lightweight REST interface.",
    category: "machine-learning",
    href: "https://github.com/MarcalS03/fuga-ml",
  },
];
