"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 w-full z-40 flex justify-between items-stretch pointer-events-none mix-blend-exclusion pt-4 px-4">
            <div className="pointer-events-auto bg-background text-foreground p-3 select-none border border-foreground relative">
                {/* Node Accents */}
                <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-foreground" />
                <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-foreground" />

                <Link href="/" className="text-2xl font-black tracking-tighter uppercase leading-none block hover:text-[var(--accent)] transition-colors">
                    baxtop
                </Link>
            </div>

            <div className="flex pointer-events-auto bg-background/90 backdrop-blur-sm border border-foreground">
                <Link
                    href="/"
                    className={`px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center hover:bg-[var(--bauhaus-blue)] hover:text-white transition-colors border-r border-foreground ${pathname === '/' ? 'bg-foreground text-background' : 'text-foreground'}`}
                >
                    Work
                </Link>
                <Link
                    href="/about"
                    className={`px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center hover:bg-[var(--bauhaus-yellow)] hover:text-black transition-colors ${pathname === '/about' ? 'bg-foreground text-background' : 'text-foreground'}`}
                >
                    About
                </Link>
            </div>
        </nav>
    );
}
