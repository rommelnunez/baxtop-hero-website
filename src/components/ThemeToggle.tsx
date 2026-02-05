"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center font-bold uppercase bg-background text-foreground transition-all hover:bg-[var(--accent)] hover:text-white border border-foreground group"
            aria-label="Toggle Theme"
            style={{ borderRadius: 0 }}
        >
            {/* Node Accents (Corners) */}
            <span className="absolute -top-1 -left-1 w-2 h-2 bg-foreground group-hover:bg-white transition-colors" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-foreground group-hover:bg-white transition-colors" />
            <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-foreground group-hover:bg-white transition-colors" />
            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-foreground group-hover:bg-white transition-colors" />

            {theme === "dark" ? "L" : "D"}
        </button>
    );
}
