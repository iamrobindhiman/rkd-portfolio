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
  const triggerRef = useRef<HTMLElement | null>(null);

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

  // While open: remember the trigger, make the rest of the page inert (so a
  // screen reader / keyboard user can't reach background content), focus the
  // input, and on close restore focus + un-inert. This makes the overlay a real
  // modal dialog per the accessibility review.
  useEffect(() => {
    if (!open) return;
    triggerRef.current = (document.activeElement as HTMLElement) ?? null;
    const bg = Array.from(document.querySelectorAll<HTMLElement>("header, main, footer"));
    bg.forEach((el) => el.setAttribute("inert", ""));
    const t = setTimeout(() => inputRef.current?.focus(), 10);
    return () => {
      clearTimeout(t);
      bg.forEach((el) => el.removeAttribute("inert"));
      triggerRef.current?.focus?.();
    };
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

  // The input is the only focusable control; trap Tab so focus can't leave the
  // dialog into the (inert) background.
  function onTrapKey(e: React.KeyboardEvent) {
    if (e.key === "Tab") { e.preventDefault(); inputRef.current?.focus(); }
  }

  if (!open) return null;

  const activeId = results[active] ? `rd-cmd-opt-${active}` : undefined;

  return (
    <div className="rd-cmd-overlay" onClick={close} onKeyDown={onTrapKey}>
      <div
        className="rd-cmd"
        role="dialog"
        aria-modal="true"
        aria-label="Site search"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rd-cmd-input">
          <span className="rd-cmd-prompt" aria-hidden>→ /search:</span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => { setQ(e.target.value); setActive(0); }}
            onKeyDown={onInputKey}
            placeholder="Find a post, project, or page…"
            aria-label="Search posts, projects and pages"
            role="combobox"
            aria-expanded="true"
            aria-controls="rd-cmd-list"
            aria-activedescendant={activeId}
            autoComplete="off"
          />
        </div>
        <ul className="rd-cmd-list" id="rd-cmd-list" role="listbox" aria-label="Search results">
          {results.length === 0 && <li className="rd-cmd-empty" role="option" aria-selected={false}>No matches.</li>}
          {results.map((item, i) => (
            <li
              key={item.href + item.label}
              id={`rd-cmd-opt-${i}`}
              role="option"
              aria-selected={i === active}
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
