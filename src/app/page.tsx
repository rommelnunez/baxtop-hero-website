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
    <main className="min-h-screen pt-32 pb-20 px-6 sm:px-12 max-w-screen-xl mx-auto">
      <section className="mb-24 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
          baxtop
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-gray-500 font-light leading-relaxed">
          we design videos/photos/identities for brands/artists/paul’s dad’s iraq-based juice company.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
            <div className="relative aspect-video bg-gray-200 overflow-hidden mb-4 rounded-sm">
              {/* Image would go here. Using a div for now as placeholder */}
              <div className="absolute inset-0 bg-neutral-300 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 group-hover:scale-105 transition-transform duration-700 ease-out">
                <span className="text-xs uppercase tracking-widest">Image: {project.title}</span>
              </div>
            </div>
            <div className="flex justify-between items-baseline border-b border-transparent group-hover:border-black dark:group-hover:border-white transition-colors pb-2">
              <h2 className="text-xl md:text-2xl font-medium tracking-tight group-hover:pl-2 transition-all">
                {project.title}
              </h2>
              <span className="text-sm text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                {project.client}
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
