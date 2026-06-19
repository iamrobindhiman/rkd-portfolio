"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { SearchItem } from "@/lib/searchIndex";

export default function CommandPalette({ items }: { items: SearchItem[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    const list = s
      ? items.filter((i) => i.label.toLowerCase().includes(s) || i.kind.toLowerCase().includes(s))
      : items;
    return list.slice(0, 8);
  }, [q, items]);

  useEffect(() => {
    function close() { setOpen(false); setQ(""); setActive(0); }
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        close();
      }
    }
    function onOpen() { setOpen(true); }
    window.addEventListener("keydown", onKey);
    window.addEventListener("rd:open-search", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("rd:open-search", onOpen);
    };
  }, []);

  // Focus the input when the palette opens (no state writes here).
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 10);
    return () => clearTimeout(t);
  }, [open]);

  function close() { setOpen(false); setQ(""); setActive(0); }

  function go(item: SearchItem) {
    close();
    if (item.external) window.open(item.href, "_blank", "noopener");
    else router.push(item.href);
  }

  function onInputKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === "Enter") { e.preventDefault(); if (results[active]) go(results[active]); }
  }

  if (!open) return null;

  return (
    <div className="rd-cmd-overlay" onClick={close} role="dialog" aria-modal="true" aria-label="Search">
      <div className="rd-cmd" onClick={(e) => e.stopPropagation()}>
        <div className="rd-cmd-input">
          <span className="rd-cmd-prompt" aria-hidden>→ /search:</span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => { setQ(e.target.value); setActive(0); }}
            onKeyDown={onInputKey}
            placeholder="Find a post, project, or page…"
            aria-label="Search posts, projects and pages"
          />
        </div>
        <ul className="rd-cmd-list">
          {results.length === 0 && <li className="rd-cmd-empty">No matches.</li>}
          {results.map((item, i) => (
            <li
              key={item.href + item.label}
              className={"rd-cmd-item" + (i === active ? " is-active" : "")}
              onMouseEnter={() => setActive(i)}
              onClick={() => go(item)}
            >
              <span className="rd-cmd-label">{item.label}</span>
              <span className="rd-cmd-kind">{item.kind}</span>
            </li>
          ))}
        </ul>
        <div className="rd-cmd-foot">
          <span>↑↓ navigate</span><span>↵ open</span><span>esc close</span>
        </div>
      </div>
    </div>
  );
}
