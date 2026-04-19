import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[var(--border)] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-wrap gap-4 items-center justify-between text-sm text-[var(--muted-foreground)] font-mono">
        <div>© {new Date().getFullYear()} Robin Dhiman. MIT where applicable.</div>
        <div className="flex gap-5">
          <Link href="https://github.com/iamrobindhiman" target="_blank" rel="noopener" className="hover:text-[var(--foreground)]">GitHub</Link>
          <Link href="/blog" className="hover:text-[var(--foreground)]">Blog</Link>
          <Link href="mailto:hi@rkd.dev" className="hover:text-[var(--foreground)]">Email</Link>
        </div>
      </div>
    </footer>
  );
}
