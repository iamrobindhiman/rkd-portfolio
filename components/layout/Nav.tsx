import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import BrandWordmark from "@/components/layout/BrandWordmark";

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="Robin Dhiman — senior engineer">
          <BrandWordmark />
          <span className="tag">senior engineer</span>
        </Link>
        <nav className="nav-right">
          <div className="nav-links">
            <Link href="/#work">Work</Link>
            <Link href="/blog">Writing</Link>
            <Link href="/#contact">Contact</Link>
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
