"use client";

export default function SearchTrigger() {
  return (
    <button
      type="button"
      className="rd-navlink rd-search-trigger"
      aria-label="Open search (press Command or Control + K)"
      onClick={() => window.dispatchEvent(new Event("rd:open-search"))}
    >
      <span aria-hidden>⌘K</span>
    </button>
  );
}
