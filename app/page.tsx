import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { work, type WorkItem } from "@/lib/work";

function WorkCard({ w }: { w: WorkItem }) {
  const content = (
    <>
      <span className="wnum">{w.id}</span>
      <div className="wbody">
        <h3>{w.title}</h3>
        <p>{w.blurb}</p>
        <div className="stack">
          {w.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
      <div className="wmeta">
        {w.year}
        {w.category && ` · ${w.category}`}
        {w.badge && <span className="ft">{w.badge}</span>}
      </div>
      {w.href && <span className="warr">↗</span>}
    </>
  );
  if (w.href) {
    return (
      <Link
        href={w.href}
        className="work-item"
        target={w.external ? "_blank" : undefined}
        rel={w.external ? "noopener" : undefined}
      >
        {content}
      </Link>
    );
  }
  return <div className="work-item work-item--nolink">{content}</div>;
}

function SelectedRow({ w }: { w: WorkItem }) {
  const content = (
    <>
      <span className="snum">{w.id}</span>
      <div className="sbody">
        <span className="stitle">{w.title}</span>
        <span className="sblurb">{w.blurb}</span>
      </div>
      <span className="stags">{w.tags.join(" · ")}</span>
      <span className="syear">{w.year}</span>
      {w.href && <span className="sarr">↗</span>}
    </>
  );
  if (w.href) {
    return (
      <Link
        href={w.href}
        className="selected-item"
        target={w.external ? "_blank" : undefined}
        rel={w.external ? "noopener" : undefined}
      >
        {content}
      </Link>
    );
  }
  return <div className="selected-item selected-item--nolink">{content}</div>;
}

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
                <span className="word-swap" aria-label="backends and frontends">
                  <span className="word-swap-track" aria-hidden="true">
                    <span>backends</span>
                    <span>frontends</span>
                    <span>backends</span>
                  </span>
                </span><span className="accent">.</span><br />
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
              <p>Lead engineer on e-commerce builds. Magento 2 at the center, with Shopify, Laravel, and WordPress around it.</p>
            </div>
            <div>
              <h3>03 / Get in</h3>
              <p>
                <Link href="mailto:hello@devrob.in" className="acc">hello@devrob.in</Link>
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
              { num: "001", cat: "Platforms", items: <><span className="primary">Magento 2</span>, Shopify, WordPress, Webflow</> },
              { num: "002", cat: "Frontend", items: <>React, Next.js, TypeScript, Hyvä</> },
              { num: "003", cat: "Backend", items: <>PHP 8, Laravel, MySQL, Elasticsearch, GraphQL, Redis</> },
              { num: "004", cat: "Infra", items: <>Docker, Nginx, Fastly, Vercel, GitHub Actions</> },
              { num: "005", cat: "Integrations", items: <>Klaviyo, Klevu, Stripe, Montonio/Esto, eBay/TradeMe APIs</> },
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
            <p>Open-source modules and client builds across Magento, WordPress, Shopify, and Webflow. Case studies coming — for now, source and summaries.</p>
          </div>

          <div className="work-list">
            {work.filter((w) => w.featured).map((w) => (
              <WorkCard key={w.id} w={w} />
            ))}
          </div>

          <div className="work-sub-head">
            <h3>More work</h3>
          </div>

          <div className="selected-list">
            {work.filter((w) => !w.featured).map((w) => (
              <SelectedRow key={w.id} w={w} />
            ))}
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
              <p>A small thing that does one thing well still finds users. Every release is a chance to learn what they actually want — a bigger release is a bigger guess.</p>
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
            <Link href="mailto:hello@devrob.in" className="btn">Say hello →</Link>
            <Link href="https://github.com/iamrobindhiman" target="_blank" rel="noopener" className="btn ghost">GitHub</Link>
            <Link href="https://www.linkedin.com/in/iamrobindhiman/" target="_blank" rel="noopener" className="btn ghost">LinkedIn</Link>
          </div>
        </div>
      </section>
    </>
  );
}
