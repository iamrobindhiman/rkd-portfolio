import PopButton from "@/components/ui/PopButton";
import StickerCard from "@/components/ui/StickerCard";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div
            aria-hidden
            className="absolute -top-20 -left-24 w-[360px] h-[360px] rounded-full bg-[var(--tertiary)] opacity-60 blur-[0.5px]"
          />
          <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
          <div className="relative">
            <p className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[var(--muted-foreground)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--quaternary)] animate-pulse" />
              Available for new work
            </p>
            <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-4xl">
              I build e-commerce backends that stay{" "}
              <span className="relative inline-block">
                <span className="relative z-10">maintainable</span>
                <span aria-hidden className="absolute left-0 right-0 bottom-1 h-3 bg-[var(--secondary)] -z-0" />
              </span>{" "}
              as catalogs grow
              <span className="text-[var(--accent)]">.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl max-w-2xl text-[var(--muted-foreground)]">
              Senior web engineer, fifteen years in. Currently shipping{" "}
              <a href="https://github.com/iamrobindhiman/magento2-module-llms-txt" className="text-[var(--foreground)] underline decoration-[var(--accent)] decoration-2 underline-offset-4">
                magento2-module-llms-txt
              </a>
              {" "}— a module that makes Magento stores legible to AI assistants.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <PopButton href="#work" withArrow>See my work</PopButton>
              <PopButton href="/blog" variant="secondary">Read the blog</PopButton>
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <p className="text-xs font-mono tracking-widest uppercase text-[var(--accent)] mb-3">Stack</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl">What I work with</h2>
          <p className="mt-3 text-[var(--muted-foreground)] max-w-xl">
            Most of my time goes to e-commerce platforms — extending them, hardening them, and keeping them honest.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: "Commerce", color: "accent", items: ["Magento 2", "Shopify", "WooCommerce"] },
            { label: "CMS", color: "secondary", items: ["WordPress", "Headless"] },
            { label: "Frontend", color: "tertiary", items: ["React", "Next.js", "TypeScript"] },
            { label: "Backend", color: "quaternary", items: ["PHP 8", "Node", "MySQL"] },
            { label: "Infra", color: "accent", items: ["Docker", "Nginx", "GitHub Actions"] },
            { label: "Day-to-day", color: "secondary", items: ["Code review", "Performance audits", "Mentoring"] },
          ].map((group) => (
            <div key={group.label} className="bg-[var(--card)] border-2 border-[var(--shadow-color)] rounded-2xl p-5 shadow-pop-border">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="inline-block w-4 h-4 rounded-md border-2 border-[var(--shadow-color)]"
                  style={{ background: `var(--${group.color})` }}
                  aria-hidden
                />
                <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--muted-foreground)]">
                  {group.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="font-mono text-xs px-2 py-1 rounded-md border-2 border-[var(--border)] bg-[var(--muted)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <p className="text-xs font-mono tracking-widest uppercase text-[var(--accent)] mb-3">Selected work</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl">A few things I&apos;ve shipped</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <StickerCard
            href="https://github.com/iamrobindhiman/magento2-module-llms-txt"
            shadowColor="secondary"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[11px] tracking-wider uppercase text-[var(--muted-foreground)]">
                2026 · open source
              </span>
              <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--secondary)] font-bold">
                Featured
              </span>
            </div>
            <h3 className="font-display font-bold text-xl mb-2">magento2-module-llms-txt</h3>
            <p className="text-[var(--muted-foreground)] mb-4">
              A Magento 2 module that publishes spec-compliant llms.txt so AI assistants can describe a store accurately. Composer-installable, multi-language aware.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Magento 2", "PHP 8", "Composer"].map((t) => (
                <span key={t} className="font-mono text-[11px] px-2 py-1 rounded-md border-2 border-[var(--border)] bg-[var(--muted)]">{t}</span>
              ))}
            </div>
          </StickerCard>

          <StickerCard href="#" shadowColor="tertiary">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[11px] tracking-wider uppercase text-[var(--muted-foreground)]">
                2022 — present
              </span>
            </div>
            <h3 className="font-display font-bold text-xl mb-2">Senior engineer — merchant work</h3>
            <p className="text-[var(--muted-foreground)] mb-4">
              Lead engineer on Magento 2 and Shopify builds for European merchants. Re-platforms, performance work, Hyvä migrations.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Magento 2", "Shopify", "Hyvä"].map((t) => (
                <span key={t} className="font-mono text-[11px] px-2 py-1 rounded-md border-2 border-[var(--border)] bg-[var(--muted)]">{t}</span>
              ))}
            </div>
          </StickerCard>

          <StickerCard href="#" shadowColor="quaternary">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[11px] tracking-wider uppercase text-[var(--muted-foreground)]">
                [Project name — year]
              </span>
            </div>
            <h3 className="font-display font-bold text-xl mb-2">Headless storefront rebuild</h3>
            <p className="text-[var(--muted-foreground)] mb-4">
              Replace with a real case study — the Next.js front on top of Magento GraphQL, performance improvements, etc.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "GraphQL", "Vercel"].map((t) => (
                <span key={t} className="font-mono text-[11px] px-2 py-1 rounded-md border-2 border-[var(--border)] bg-[var(--muted)]">{t}</span>
              ))}
            </div>
          </StickerCard>

          <StickerCard href="#" shadowColor="accent">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[11px] tracking-wider uppercase text-[var(--muted-foreground)]">
                [Project name — year]
              </span>
            </div>
            <h3 className="font-display font-bold text-xl mb-2">WooCommerce optimisation</h3>
            <p className="text-[var(--muted-foreground)] mb-4">
              Replace with a real case study — stripping plugin stack, improving renewal pipeline, etc.
            </p>
            <div className="flex flex-wrap gap-2">
              {["WooCommerce", "PHP", "Stripe"].map((t) => (
                <span key={t} className="font-mono text-[11px] px-2 py-1 rounded-md border-2 border-[var(--border)] bg-[var(--muted)]">{t}</span>
              ))}
            </div>
          </StickerCard>
        </div>
      </section>

      {/* WRITING */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-mono tracking-widest uppercase text-[var(--accent)] mb-3">Writing</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl">Notes from the work</h2>
          </div>
          <a href="/blog" className="text-sm font-medium text-[var(--accent)] hover:underline whitespace-nowrap">
            All posts →
          </a>
        </div>
        <div className="border-t-2 border-[var(--border)]">
          {recentPosts.length === 0 ? (
            <p className="py-10 text-[var(--muted-foreground)] font-mono text-sm">No posts yet. Check back soon.</p>
          ) : (
            recentPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="grid grid-cols-[auto_1fr_auto] gap-6 py-5 border-b-2 border-[var(--border)] hover:pl-2 transition-[padding] duration-200 items-baseline group"
              >
                <span className="font-mono text-xs text-[var(--muted-foreground)] tracking-wide whitespace-nowrap">
                  {post.date}
                </span>
                <span className="font-display font-bold text-lg md:text-xl group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </span>
                <span className="font-mono text-xs text-[var(--muted-foreground)] whitespace-nowrap">
                  {post.readTime}
                </span>
              </a>
            ))
          )}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <p className="text-xs font-mono tracking-widest uppercase text-[var(--accent)] mb-3">Philosophy</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl">How I work</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { n: "01", color: "accent", t: "Boring is a feature", b: "Most production systems fail because someone reached for novelty. I reach for it last. The interesting parts of a project should be the problem, not the stack." },
            { n: "02", color: "tertiary", t: "Reading code is the job", b: "Half of senior engineering is reading other people's plugins, modules, and vendor directories. Write so the next reader — possibly you in a year — has an easier time." },
            { n: "03", color: "secondary", t: "Ship small things often", b: "A small thing that does one thing well still finds users. The README usually takes longer to write than the code. That's fine — it's part of the job." },
          ].map((p) => (
            <div key={p.n}>
              <div
                className="font-display font-extrabold text-6xl mb-3 leading-none"
                style={{ color: `var(--${p.color})`, WebkitTextStroke: "2px var(--shadow-color)" }}
              >
                {p.n}
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{p.t}</h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
        <div className="relative border-2 border-[var(--shadow-color)] rounded-3xl bg-[var(--card)] p-10 md:p-16 shadow-pop-lg overflow-hidden">
          <div aria-hidden className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[var(--quaternary)] opacity-70" />
          <div aria-hidden className="absolute -bottom-12 -left-8 w-32 h-32 rounded-tr-[96px] rounded-br-[96px] rounded-tl-[96px] bg-[var(--tertiary)] opacity-60" />
          <div className="relative">
            <h2 className="font-display font-extrabold text-3xl md:text-5xl max-w-3xl leading-tight">
              Let&apos;s build something small together<span className="text-[var(--accent)]">.</span>
            </h2>
            <p className="mt-6 text-[var(--muted-foreground)] text-lg max-w-2xl">
              Open-source contributions, e-commerce consulting, or just hello — I read everything that lands in my inbox.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PopButton href="mailto:hi@rkd.dev" withArrow>Say hello</PopButton>
              <PopButton href="https://github.com/iamrobindhiman" variant="secondary" external>GitHub</PopButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
