import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { work } from "@/lib/work";

export default function Home() {
  const posts = getAllPosts();
  const featured = work.filter((w) => w.featured).slice(0, 3);

  return (
    <div className="rd-page">
      <div className="rd-wrap">
        <div className="rd-bento">
          {/* About / hero */}
          <section className="rd-tile rd-tile--accent rd-about rd-s2 rd-r2">
            <div>
              <div className="rd-avatar" aria-hidden>RD</div>
              <p className="rd-meta rd-meta--accent">{"// About · Robin Dhiman"}</p>
              <h1 className="rd-h1">I build e&#8209;commerce that&rsquo;s fast, safe, and legible to AI.</h1>
              <p className="rd-lede">
                Senior Magento&nbsp;2 &amp; e-commerce engineer — fifteen years shipping production storefronts.
                Performance, security, and catalogs that machines can actually read.
              </p>
              <Link href="/about" className="rd-link">Read my story →</Link>
            </div>
            <div className="rd-term">
              <span className="pr">whoami</span><br />
              <span className="out">magento 2 · hyvä · php 8 · next.js · graphql</span>
            </div>
          </section>

          {/* Featured / latest writing */}
          {posts[0] && (
            <Link href={`/blog/${posts[0].slug}`} className="rd-tile rd-card rd-s2">
              <span className="rd-arr" aria-hidden>↗</span>
              <div>
                <p className="rd-meta">Featured · Writing</p>
                <h2 className="rd-h3">{posts[0].title}</h2>
                <p className="rd-sub">{posts[0].description}</p>
              </div>
              <div className="rd-term">
                <span className="pr">cat {posts[0].slug}.mdx</span><br />
                <span className="out">{posts[0].readTime} · {posts[0].tags.join(" · ")}</span>
              </div>
            </Link>
          )}

          {/* Experience stat */}
          <div className="rd-tile rd-card">
            <p className="rd-meta">Experience</p>
            <h2 className="rd-h3">Years shipping commerce</h2>
            <div className="rd-stat">15+</div>
          </div>

          {/* Second post */}
          {posts[1] && (
            <Link href={`/blog/${posts[1].slug}`} className="rd-tile rd-card">
              <span className="rd-arr" aria-hidden>↗</span>
              <div>
                <p className="rd-meta">{posts[1].tags[0] ?? "Writing"}</p>
                <h2 className="rd-h3">{posts[1].title}</h2>
                <p className="rd-sub">{posts[1].description}</p>
              </div>
            </Link>
          )}

          {/* Selected work */}
          <Link href="/work" className="rd-tile rd-card rd-s2">
            <span className="rd-arr" aria-hidden>↗</span>
            <div>
              <p className="rd-meta">Selected work</p>
              <h2 className="rd-h3">{featured.map((w) => w.title).join(" · ")}</h2>
              <p className="rd-sub">
                Magento&nbsp;2 storefronts at scale — multi-country, headless, Hyvä, performance-tuned — plus open source.
              </p>
            </div>
          </Link>

          {/* Open-source module */}
          <Link
            href="https://github.com/iamrobindhiman/magento2-module-llms-txt"
            target="_blank"
            rel="noopener"
            className="rd-tile rd-card"
          >
            <span className="rd-arr" aria-hidden>↗</span>
            <div>
              <p className="rd-meta">Open source</p>
              <h2 className="rd-h3">magento2-module-llms-txt</h2>
            </div>
            <div className="rd-term">
              <span className="pr">curl devrob.in/llms.txt</span><br />
              <span className="out">200 OK · catalog, AI-ready</span><span className="rd-cursor" aria-hidden></span>
            </div>
          </Link>

          {/* Third post */}
          {posts[2] && (
            <Link href={`/blog/${posts[2].slug}`} className="rd-tile rd-card">
              <span className="rd-arr" aria-hidden>↗</span>
              <div>
                <p className="rd-meta">{posts[2].tags[0] ?? "Writing"}</p>
                <h2 className="rd-h3">{posts[2].title}</h2>
                <p className="rd-sub">{posts[2].description}</p>
              </div>
            </Link>
          )}

          {/* Elsewhere */}
          <div className="rd-tile rd-card">
            <p className="rd-meta">Elsewhere</p>
            <h2 className="rd-h3">Find me</h2>
            <div className="rd-term rd-links">
              <a href="https://github.com/iamrobindhiman" target="_blank" rel="noopener">github.com/iamrobindhiman</a>
              <a href="https://www.linkedin.com/in/iamrobindhiman/" target="_blank" rel="noopener">linkedin.com/in/iamrobindhiman</a>
              <a href="https://dev.to/iamrobindhiman" target="_blank" rel="noopener">dev.to/iamrobindhiman</a>
              <a href="mailto:hello@devrob.in">hello@devrob.in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
