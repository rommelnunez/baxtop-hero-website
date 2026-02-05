import Link from "next/link";
import { client } from "../../tina/__generated__/client";

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

export default async function Home() {
  const projectsResponse = await client.queries.projectConnection();
  const projects = projectsResponse.data.projectConnection.edges?.map((edge) => edge?.node).reverse(); // Newest first

  if (!projects) return null;

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-12 bg-background text-foreground" >
      {/* 
         Object & Animal inspired Grid:
         - 2 Columns on large screens
         - Large horizontal gap (gap-x-16 ~ 64px)
         - Loose vertical spacing (gap-y-24)
         - 0px gap between Image and Text
      */}
      < section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-24 max-w-screen-2xl mx-auto" >
        {
          projects.map((project: any) => (
            <Link
              key={project.id}
              href={`/projects/${project._sys.filename}`}
              className="group block"
            >
              {/* Image Container - 16:9 Aspect Ratio */}
              <div className="w-full aspect-video bg-neutral-100 dark:bg-neutral-900 mb-2 overflow-hidden relative">
                {/* Gego Node Accents (Subtle) - Only on corners of the image */}
                <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {project.coverImage ? (
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-foreground/20 font-mono">
                    NO IMAGE
                  </div>
                )}
              </div>

              {/* Typography - Object Animal Style */}
              {/* Flexbox for "Bracketed" look: Title Left, Client Right */}
              <div className="flex justify-between items-baseline text-sm md:text-base font-medium tracking-tight mt-1 border-t border-transparent group-hover:border-foreground/20 pt-2 transition-colors duration-300">
                <span className="uppercase tracking-widest font-bold">{project.title}</span>
                <span className="opacity-60 font-mono text-xs">{project.client}</span>
              </div>
            </Link>
          ))
        }
      </section >
    </main >
  );
}
