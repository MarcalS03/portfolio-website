export type ProjectCategory = "data-analysis" | "machine-learning";

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  href: string;
}

// Replace the placeholder title, description, and href below with your
// actual project details. Add more entries as you finish new projects -
// the grid and pagination adapt automatically.
export const projects: Project[] = [
  {
    slug: "data-analysis-project-1",
    title: "Add your data analysis project title",
    description:
      "Replace with a short summary of the dataset, the analysis, and the tools used.",
    category: "data-analysis",
    href: "#",
  },
  {
    slug: "ml-project-1",
    title: "Add your machine learning project title",
    description:
      "Replace with a short summary of the model, the problem it solves, and the results.",
    category: "machine-learning",
    href: "#",
  },
];
