import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import SearchTrigger from "@/components/search/SearchTrigger";

export default function Nav() {
  return (
    <header className="rd-nav">
      <div className="rd-nav-inner">
        <Link href="/" className="rd-brand" aria-label="devrob.in — Robin Dhiman">
          devrob.in<span>Magento · e-commerce · AI</span>
        </Link>
        <nav className="rd-nav-right" aria-label="Primary">
          <Link className="rd-navlink" href="/blog">Writing</Link>
          <Link className="rd-navlink" href="/work">Work</Link>
          <Link className="rd-navlink" href="/about">About</Link>
          <SearchTrigger />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
