"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 w-full z-40 p-6 flex justify-between items-start pointer-events-none">
            <div className="pointer-events-auto">
                <Link href="/" className="text-xl font-bold tracking-tighter uppercase mix-blend-difference text-white">
                    baxtop
                </Link>
            </div>

            <div className="flex gap-6 pointer-events-auto">
                <Link
                    href="/"
                    className={`text-sm font-medium uppercase tracking-wide transition-opacity ${pathname === '/' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                >
                    Work
                </Link>
                <Link
                    href="/about"
                    className={`text-sm font-medium uppercase tracking-wide transition-opacity ${pathname === '/about' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                >
                    About
                </Link>
            </div>
        </nav>
    );
}
