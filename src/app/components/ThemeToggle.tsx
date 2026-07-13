"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

type ThemeToggleProps = {
  onToggle?: () => void;
};

export default function ThemeToggle({ onToggle }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      setTheme("system");
      applyTheme(systemTheme);
    }
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (selectedTheme: Theme) => {
    let finalTheme: "light" | "dark";
    if (selectedTheme === "system") {
      finalTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } else {
      finalTheme = selectedTheme;
    }

    setResolvedTheme(finalTheme);
    document.documentElement.classList.toggle("dark", finalTheme === "dark");
    localStorage.setItem("theme", selectedTheme);
  };

  const toggleTheme = () => {
    const themes: Theme[] = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
    onToggle?.();
  };

  const getThemeLabel = () => {
    switch (theme) {
      case "dark":
        return "🌙 Dark";
      case "light":
        return "☀️ Light";
      default:
        return "🔄 System";
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-muted transition-colors w-24 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <span className="text-sm font-medium">{getThemeLabel()}</span>
    </button>
  );
}
