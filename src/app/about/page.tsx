export default function About() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[var(--background)]">
            <div className="max-w-4xl space-y-12 border border-foreground p-8 md:p-16 relative bg-background z-10">
                {/* Gego Connection Lines */}
                <span className="absolute -top-10 left-1/2 w-px h-10 bg-foreground"></span>
                <span className="absolute -bottom-10 left-1/2 w-px h-10 bg-foreground"></span>

                {/* Corner Nodes */}
                <span className="absolute -top-1 -left-1 w-2 h-2 bg-foreground"></span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-foreground"></span>
                <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-foreground"></span>
                <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-foreground"></span>

                <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none text-[var(--accent)]">
                    About<br />baxtop
                </h1>
                <div className="text-2xl md:text-4xl font-bold leading-tight space-y-8 uppercase">
                    <p>
                        <span className="border-b-2 border-foreground px-1">baxtop</span> is a creative studio based in New York, founded in 2024 by Paul Hanna and Rommel Nunez.
                    </p>
                    <p className="text-[var(--bauhaus-blue)] font-medium">
                        we design videos/photos/identities for brands/artists/paul’s dad’s iraq-based juice company.
                    </p>
                </div>

                <div className="pt-12">
                    <a href="mailto:hello@baxtop.agency" className="inline-block px-12 py-4 border border-foreground text-lg font-black uppercase hover:bg-foreground hover:text-background transition-colors tracking-widest relative group">
                        <span className="absolute left-0 top-1/2 -translate-x-full w-4 h-px bg-foreground opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        Contact Us
                        <span className="absolute right-0 top-1/2 translate-x-full w-4 h-px bg-foreground opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </a>
                </div>
            </div>
        </main>
    );
}
