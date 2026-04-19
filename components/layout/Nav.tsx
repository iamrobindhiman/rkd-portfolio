import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="rkd — senior engineer">
          <span className="brand-name">rkd<i className="brand-dot" aria-hidden /></span>
          <span className="tag">/ senior engineer</span>
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
