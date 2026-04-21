"use client";

import { useRef, useState } from "react";

type Props = React.HTMLAttributes<HTMLPreElement> & {
  "data-language"?: string;
  "data-theme"?: string;
};

export default function CodeBlock(props: Props) {
  const { children, className, ...rest } = props;
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);
  const lang = props["data-language"];

  const handleCopy = async () => {
    const text = ref.current?.querySelector("code")?.textContent ?? "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API may fail in unsupported contexts; silently ignore
    }
  };

  const showLang = lang && lang !== "plaintext" && lang !== "txt";

  return (
    <div className="codeblock" data-language={lang}>
      <div className="codeblock-bar">
        <span className="codeblock-dots" aria-hidden="true">
          <span className="codeblock-dot codeblock-dot-red" />
          <span className="codeblock-dot codeblock-dot-yellow" />
          <span className="codeblock-dot codeblock-dot-green" />
        </span>
        <span className="codeblock-lang">{showLang ? lang : "\u00A0"}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="codeblock-copy"
          aria-label={copied ? "Code copied" : "Copy code"}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre ref={ref} className={className} {...rest}>
        {children}
      </pre>
    </div>
  );
}
