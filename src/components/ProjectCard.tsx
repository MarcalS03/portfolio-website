import type { Project, ProjectCategory } from "@/data/projects";

function ProjectThumbnail({ category }: { category: ProjectCategory }) {
  return (
    <div className="flex h-40 items-center justify-center rounded-t-2xl bg-gradient-to-br from-accent-tint to-[#dce3fa]">
      {category === "data-analysis" ? (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 19V10" />
          <path d="M10 19V5" />
          <path d="M16 19v-7" />
          <path d="M22 19H2" />
        </svg>
      ) : (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="6" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="12" r="2" />
          <path d="M8 6h4a4 4 0 0 1 4 4" />
          <path d="M8 18h4a4 4 0 0 0 4-4" />
        </svg>
      )}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const isExternal = project.href.startsWith("http");

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-md">
      <ProjectThumbnail category={project.category} />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
        <p className="flex-1 text-sm text-foreground-muted">{project.description}</p>
        <a
          href={project.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="mt-2 inline-flex w-fit items-center rounded-md border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
