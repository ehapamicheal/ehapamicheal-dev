"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "lucide-react";

const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const isDark = mounted && resolvedTheme === "dark";


  return (
     <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative cursor-pointer flex h-8 w-15 shrink-0 items-center rounded-full border border-border bg-surface p-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <SunIcon className="absolute left-2 h-3.5 w-3.5 text-muted" />
      <MoonIcon className="absolute right-2 h-3.5 w-3.5 text-muted" />
      <motion.span
        className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-background text-foreground shadow-soft-sm ring-1 ring-border"
        animate={{ x: isDark ? 26 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
      >
        {isDark ? (
          <MoonIcon className="h-3.5 w-3.5" />
        ) : (
          <SunIcon className="h-3.5 w-3.5" />
        )}
      </motion.span>
    </button>
  )
}

export default ThemeToggle;