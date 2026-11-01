import { projects } from "@/data/projects";
import { ProjectGrid } from "./ProjectGrid";

// Machine Learning Projects tab is hidden while the Data Analysis project
// lineup grows; FugaML will come off the CV once replacement projects are
// ready. Re-add the category switcher from git history if there is a new ML
// project to show.
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
