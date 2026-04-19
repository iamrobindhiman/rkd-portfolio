import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b-2 border-[var(--border)] bg-[var(--background)]/85 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="font-display font-extrabold text-xl tracking-tight">
          Robin <span className="text-[var(--accent)]">.</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-[var(--muted-foreground)]">
          <Link href="/#work" className="hover:text-[var(--foreground)] transition-colors">Work</Link>
          <Link href="/blog" className="hover:text-[var(--foreground)] transition-colors">Blog</Link>
          <Link href="/#contact" className="hover:text-[var(--foreground)] transition-colors">Contact</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
