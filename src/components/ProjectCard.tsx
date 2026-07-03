import type { Project, ProjectCategory } from "@/data/projects";

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "var(--accent)",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-full w-full",
  "aria-hidden": true,
};

function DataAnalysisIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M4 19V10" />
      <path d="M10 19V5" />
      <path d="M16 19v-7" />
      <path d="M22 19H2" />
    </svg>
  );
}

function MachineLearningIcon() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="12" r="2" />
      <path d="M8 6h4a4 4 0 0 1 4 4" />
      <path d="M8 18h4a4 4 0 0 0 4-4" />
    </svg>
  );
}

function HouseIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

function FugaMLWordmark() {
  return (
    <span className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
      FugaML
    </span>
  );
}

// Custom thumbnails for specific projects, keyed by slug. Projects without
// an entry here fall back to a generic icon for their category.
const PROJECT_THUMBNAILS: Record<string, () => React.ReactElement> = {
  "ireland-housing-supply-analysis": HouseIcon,
  "fuga-ml": FugaMLWordmark,
};

const CATEGORY_ICONS: Record<ProjectCategory, () => React.ReactElement> = {
  "data-analysis": DataAnalysisIcon,
  "machine-learning": MachineLearningIcon,
};

function ProjectThumbnail({ project }: { project: Project }) {
  const Icon = PROJECT_THUMBNAILS[project.slug] ?? CATEGORY_ICONS[project.category];
  return (
    <div className="flex h-40 items-center justify-center rounded-t-2xl bg-gradient-to-br from-accent-tint to-[#dce3fa]">
      <div className="flex h-[70%] w-[40%] items-center justify-center">
        <Icon />
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const isExternal = project.href.startsWith("http");

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-md">
      <ProjectThumbnail project={project} />
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
