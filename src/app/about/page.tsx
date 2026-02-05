export default function About() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <div className="max-w-2xl space-y-8">
                <h1 className="text-4xl font-bold tracking-tighter">About baxtop</h1>
                <div className="text-xl md:text-2xl font-light leading-relaxed space-y-6">
                    <p>
                        **baxtop** is a creative studio based in New York, founded in 2024 by Paul Hanna and Rommel Nunez.
                    </p>
                    <p className="text-gray-500">
                        we design videos/photos/identities for brands/artists/paul’s dad’s iraq-based juice company.
                    </p>
                </div>

                <div className="pt-12">
                    <a href="mailto:hello@baxtop.agency" className="inline-block px-8 py-3 rounded-full border border-current text-sm font-bold uppercase hover:bg-foreground hover:text-background transition-colors">
                        Contact Us
                    </a>
                </div>
            </div>
        </main>
    );
}
