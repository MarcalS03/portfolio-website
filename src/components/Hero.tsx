const SCATTER_POINTS: { x: number; y: number }[] = [
  { x: 60, y: 235 },
  { x: 90, y: 255 },
  { x: 120, y: 200 },
  { x: 150, y: 215 },
  { x: 180, y: 165 },
  { x: 210, y: 190 },
  { x: 240, y: 140 },
  { x: 270, y: 160 },
  { x: 300, y: 105 },
  { x: 330, y: 130 },
  { x: 360, y: 80 },
  { x: 390, y: 100 },
  { x: 410, y: 55 },
];

// Line runs from (40, 260) to (440, 60). Keep in sync with the
// stroke-dasharray/offset (448, the line's pixel length) in globals.css.
const LINE_START = { x: 40, y: 260 };
const LINE_END = { x: 440, y: 60 };

const CONTACT_LINKS = [
  { label: "Email", href: "mailto:marcalsj03@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/marcalsoteras/" },
  { label: "GitHub", href: "https://github.com/MarcalS03" },
];

export function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-8 pt-20 sm:px-10 sm:pb-10 sm:pt-28 md:flex-row md:items-center md:gap-16">
      <div className="flex-1">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Marcal Soteras
        </h1>
        <p className="mt-4 text-lg text-foreground-muted">
          Data Analyst &amp; ML Engineer
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3f50b3]"
          >
            Download CV
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3f50b3]"
          >
            Preview CV
          </a>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {CONTACT_LINKS.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="flex-1"
      >
        <svg
          viewBox="0 0 480 320"
          className="mx-auto h-auto w-full max-w-md md:mx-0"
        >
          <g stroke="var(--border)" strokeWidth="1.5">
            <line x1="30" y1="20" x2="30" y2="280" />
            <line x1="30" y1="280" x2="460" y2="280" />
          </g>
          <g fill="#8b98e8">
            {SCATTER_POINTS.map((point) => (
              <circle key={`${point.x}-${point.y}`} cx={point.x} cy={point.y} r="6" />
            ))}
          </g>
          <line
            x1={LINE_START.x}
            y1={LINE_START.y}
            x2={LINE_END.x}
            y2={LINE_END.y}
            stroke="var(--accent)"
            strokeWidth="3"
            strokeLinecap="round"
            className="hero-regression-line"
          />
        </svg>
      </div>
    </section>
  );
}
