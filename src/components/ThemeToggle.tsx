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
            className="fixed top-6 right-6 z-50 px-4 py-2 text-sm font-bold tracking-wide uppercase bg-foreground text-background rounded-full transition-all hover:opacity-80 active:scale-95"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? "Light" : "Dark"}
        </button>
    );
}
