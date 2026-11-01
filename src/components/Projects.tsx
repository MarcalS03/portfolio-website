import { projects } from "@/data/projects";
import { ProjectGrid } from "./ProjectGrid";

// Machine Learning Projects tab is hidden for now (FugaML is being pulled
// from the CV). Re-add the category switcher from git history once there
// are ML projects to show again.
const visibleProjects = projects.filter(
  (project) => project.category === "data-analysis",
);

export function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
      <div>
        <h2 className="mb-6 text-xl font-semibold text-foreground">
          Data Analysis Projects
        </h2>
        <ProjectGrid projects={visibleProjects} />
      </div>
    </section>
  );
}
