"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#copilot", label: "AI Copilot" },
  { href: "#search", label: "Multi-Source Search" },
  { href: "#pricing", label: "Pricing" },
];

function Header() {
  const [theme, setTheme] = useState<string>(() =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark")
      ? "dark"
      : "light"
  );

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      document.documentElement.classList.toggle("dark", stored === "dark");
      setTheme(stored);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b border-border/50 bg-background/70">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-lg font-semibold story-link"
        >
          Leelu.ai
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground story-link"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/50 hover-scale"
          >
            {theme === "dark" ? (
              <Sun className="text-foreground" />
            ) : (
              <Moon className="text-foreground" />
            )}
          </button>
          <Button asChild variant="default" className="btn-glow">
            <a href="#cta">Start Free Trial →</a>
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
