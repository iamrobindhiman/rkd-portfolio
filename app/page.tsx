import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="page">
          <div className="grid-rules" aria-hidden>
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>

          <div className="hero-meta">
            <span className="dot" aria-hidden />
            <span>Available — Q2 2026</span>
            <span className="sep">/</span>
            <span>IST</span>
            <span className="sep">/</span>
            <span>Senior engineer</span>
          </div>

          <div className="hero-grid">
            <div>
              <h1 className="display">
                I build e&#8209;commerce<br />
                backends<span className="accent">.</span><br />
                Fifteen years in.
              </h1>
            </div>
            <Link href="/#contact" className="portrait" aria-label="Robin Dhiman">
              <Image
                src="/robin.jpg"
                alt="Robin Dhiman"
                width={640}
                height={640}
                priority
              />
            </Link>
          </div>

          <div className="hero-footer">
            <div>
              <h3>01 / Current</h3>
              <p>
                Shipping <Link href="https://github.com/iamrobindhiman/magento2-module-llms-txt" className="acc">magento2-module-llms-txt</Link> — a small open-source module that publishes a structured llms.txt for Magento 2 stores.
              </p>
            </div>
            <div>
              <h3>02 / Work</h3>
              <p>Lead engineer on Magento 2 and Shopify builds for European merchants. Re-platforms, performance, Hyvä migrations.</p>
            </div>
            <div>
              <h3>03 / Get in</h3>
              <p>
                <Link href="mailto:hello@robindhiman.dev" className="acc">hello@robindhiman.dev</Link>
                <br />
                <Link href="https://github.com/iamrobindhiman" className="acc" target="_blank" rel="noopener">github / iamrobindhiman</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="page">
          <div className="sec-head">
            <div>
              <span className="secnum">01 / Stack</span>
              <h2>What I work with.</h2>
            </div>
            <p>Most of my time goes to e-commerce platforms. I extend them, harden them, and keep them honest. The list is short on purpose.</p>
          </div>

          <div className="stack-table">
            {[
              { num: "001", cat: "Commerce", items: <><span className="primary">Magento 2</span>, Shopify (theme + app), WooCommerce</> },
              { num: "002", cat: "CMS", items: <>WordPress, headless content</> },
              { num: "003", cat: "Frontend", items: <>React, Next.js, TypeScript, Hyvä</> },
              { num: "004", cat: "Backend", items: <>PHP 8, Node, MySQL, Elasticsearch, Redis</> },
              { num: "005", cat: "Infra", items: <>Docker, Nginx, GitHub Actions, Vercel</> },
              { num: "006", cat: "Day-to-day", items: <>Code review, performance audits, mentoring</> },
            ].map((r) => (
              <div className="stack-row" key={r.num}>
                <span className="num">{r.num}</span>
                <span className="cat">{r.cat}</span>
                <span className="items">{r.items}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="sec">
        <div className="page">
          <div className="sec-head">
            <div>
              <span className="secnum">02 / Work</span>
              <h2>Selected projects.</h2>
            </div>
            <p>Open-source modules and merchant work I&apos;m proud of. Case studies coming — for now, source and summaries only.</p>
          </div>

          <div className="work-list">
            <Link href="https://github.com/iamrobindhiman/magento2-module-llms-txt" className="work-item" target="_blank" rel="noopener">
              <span className="wnum">W-001</span>
              <div className="wbody">
                <h3>magento2-module-llms-txt</h3>
                <p>Publishes a spec-compliant llms.txt and llms-full.txt for Magento 2 stores. Multi-store, multi-language, inventory-aware. Composer-installable, MIT.</p>
                <div className="stack">
                  <span>Magento 2</span><span>PHP 8</span><span>Composer</span>
                </div>
              </div>
              <div className="wmeta">
                2026 · open source
                <span className="ft">Featured</span>
              </div>
              <span className="warr">↗</span>
            </Link>

            <Link href="#" className="work-item">
              <span className="wnum">W-002</span>
              <div className="wbody">
                <h3>Senior engineer — merchant work</h3>
                <p>Lead engineer on Magento 2 and Shopify builds for European merchants. Re-platforms, performance work, Hyvä migrations.</p>
                <div className="stack">
                  <span>Magento 2</span><span>Shopify</span><span>Hyvä</span>
                </div>
              </div>
              <div className="wmeta">2022 — present</div>
              <span className="warr">↗</span>
            </Link>

            <Link href="#" className="work-item">
              <span className="wnum">W-003</span>
              <div className="wbody">
                <h3>[Case study placeholder]</h3>
                <p>Headless storefront rebuild — Next.js on top of Magento GraphQL. Replace with a real write-up when ready.</p>
                <div className="stack">
                  <span>Next.js</span><span>GraphQL</span><span>Vercel</span>
                </div>
              </div>
              <div className="wmeta">[year]</div>
              <span className="warr">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="page">
          <div className="sec-head">
            <div>
              <span className="secnum">03 / Writing</span>
              <h2>Notes from the work.</h2>
            </div>
            <p>Mostly e-commerce engineering, sometimes the meta-work of being a developer for a long time. <Link href="/blog" className="acc">All posts →</Link></p>
          </div>

          <div className="post-list">
            {recentPosts.length === 0 ? (
              <div style={{ padding: "22px 0", color: "var(--mute)", fontFamily: "var(--fm)", fontSize: 12 }}>
                No posts yet.
              </div>
            ) : (
              recentPosts.map((post, i) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="post-row">
                  <span className="pnum">{String(i + 1).padStart(3, "0")}</span>
                  <span className="date">{post.date}</span>
                  <span className="title">{post.title}</span>
                  <span className="read">{post.readTime}</span>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="page">
          <div className="sec-head">
            <div>
              <span className="secnum">04 / Philosophy</span>
              <h2>How I work.</h2>
            </div>
            <p>Three principles, short enough to live by.</p>
          </div>

          <div className="phil">
            <div className="phil-item">
              <span className="phnum">Principle 01</span>
              <h3>Boring is a feature.</h3>
              <p>Most production systems fail because someone reached for novelty. I reach for it last. The interesting parts of a project should be the problem, not the stack.</p>
            </div>
            <div className="phil-item">
              <span className="phnum">Principle 02</span>
              <h3>Reading code is the job.</h3>
              <p>Half of senior engineering is reading other people&apos;s plugins, modules, and vendor directories. Write so the next reader — possibly you in a year — has an easier time.</p>
            </div>
            <div className="phil-item">
              <span className="phnum">Principle 03</span>
              <h3>Ship small things often.</h3>
              <p>A small thing that does one thing well still finds users. The README usually takes longer to write than the code. That&apos;s fine — it&apos;s part of the job.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-strip">
        <div className="page">
          <h2 className="display">
            Let&apos;s build something small<span className="accent">.</span>
          </h2>
          <p style={{ color: "var(--body)", fontSize: 17, maxWidth: "36em", marginBottom: 32 }}>
            Open-source contributions, e-commerce consulting, or just hello — I read everything that lands in my inbox.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="mailto:hello@robindhiman.dev" className="btn">Say hello →</Link>
            <Link href="https://github.com/iamrobindhiman" target="_blank" rel="noopener" className="btn ghost">GitHub</Link>
          </div>
        </div>
      </section>
    </>
  );
}
