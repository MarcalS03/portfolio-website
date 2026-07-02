"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/data/projects";
import { ProjectGrid } from "./ProjectGrid";

const CATEGORIES: { key: ProjectCategory; label: string }[] = [
  { key: "data-analysis", label: "Data Analysis Projects" },
  { key: "machine-learning", label: "Machine Learning Projects" },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    "data-analysis",
  );

  const activeLabel =
    CATEGORIES.find((category) => category.key === activeCategory)?.label ?? "";
  const visibleProjects = projects.filter(
    (project) => project.category === activeCategory,
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
      <nav className="mb-12 flex justify-center gap-3 text-sm font-medium" role="tablist">
        {CATEGORIES.map((category) => {
          const isActive = category.key === activeCategory;
          return (
            <button
              key={category.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(category.key)}
              className={`rounded-md px-4 py-2 transition-colors ${
                isActive
                  ? "bg-accent-tint text-accent"
                  : "text-foreground-muted hover:text-accent"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </nav>

      <div>
        <h2 className="mb-6 text-xl font-semibold text-foreground">{activeLabel}</h2>
        <ProjectGrid projects={visibleProjects} />
      </div>
    </section>
  );
}
