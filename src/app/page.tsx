import Link from "next/link";

// Mock Data until TinaCMS Client is fully integrated
const projects = [
  {
    title: "FALLOUT",
    client: "Low.bo",
    coverImage: "https://baxtop.agency/images/fallout.jpg", // Placeholder - needs real assets
    slug: "fallout",
  },
  {
    title: "Alchemical",
    client: "Rachel Bochner",
    coverImage: "https://baxtop.agency/images/alchemical.jpg",
    slug: "alchemical",
  },
  {
    title: "You, Me, and Her",
    client: "Black Hibiscus",
    coverImage: "https://baxtop.agency/images/you-me-her.jpg",
    slug: "you-me-her",
  },
  {
    title: "Jersey in July",
    client: "Dom Innarella",
    coverImage: "https://baxtop.agency/images/jersey-july.jpg",
    slug: "jersey-july",
  },
  {
    title: "rightwhereyouwantme",
    client: "Issadora Ava",
    coverImage: "https://baxtop.agency/images/rightwhereyouwantme.jpg",
    slug: "rightwhereyouwantme",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-12 max-w-screen-xl mx-auto">
      {/* Hero Statement - Wireframe Box */}
      <section className="mb-24 flex flex-col items-start border-l border-foreground pl-8 py-4 relative">
        <span className="absolute top-0 left-0 w-2 h-0.5 bg-foreground transform -translate-x-1/2"></span>
        <span className="absolute bottom-0 left-0 w-2 h-0.5 bg-foreground transform -translate-x-1/2"></span>

        <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter uppercase leading-[0.85]">
          bax<br />top
        </h1>
        <p className="max-w-xl text-lg md:text-2xl font-medium leading-tight bg-[var(--bauhaus-yellow)] text-black p-4 inline-block transform -rotate-1 border border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
          we design videos/photos/identities for brands/artists/paul’s dad’s iraq-based juice company.
        </p>
      </section>

      {/* Constructivist "Net" Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-px bg-foreground border border-foreground">
        {projects.map((project, index) => {
          // Dynamic span logic
          const colSpan = index % 3 === 0 ? "lg:col-span-8" : index % 3 === 1 ? "lg:col-span-4" : "lg:col-span-12";
          const bgColor = index % 2 === 0 ? "hover:bg-[var(--accent)]" : "hover:bg-[var(--bauhaus-blue)]";

          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`${colSpan} group relative block bg-background overflow-hidden`}
            >
              <div className="aspect-video relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                {/* Image Placeholder with Wireframe Overlay */}
                <div className={`absolute inset-0 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-400 ${bgColor} group-hover:text-white transition-colors duration-300`}>
                  {/* Gego Lines */}
                  <div className="absolute inset-0 border-[0.5px] border-black/10 m-4 scale-95 group-hover:scale-100 transition-transform duration-700"></div>
                  <div className="absolute inset-0 border-[0.5px] border-black/10 m-8 scale-90 group-hover:scale-95 transition-transform duration-700 delay-75"></div>

                  <span className="text-sm font-mono uppercase tracking-widest z-10 relative">
                    <span className="w-2 h-2 bg-current inline-block mr-2 rounded-full"></span>
                    {project.title}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-background group-hover:bg-foreground group-hover:text-background transition-colors duration-300 flex flex-col justify-between h-24 border-t border-foreground">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl md:text-2xl font-bold tracking-tighter uppercase leading-none">
                    {project.title}
                  </h2>
                  <span className="font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest">{project.client}</span>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
