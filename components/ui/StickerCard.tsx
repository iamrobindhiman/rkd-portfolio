import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type StickerCardProps = {
  href?: string;
  children: ReactNode;
  shadowColor?: "default" | "secondary" | "tertiary" | "quaternary" | "accent";
  className?: string;
};

const shadowMap = {
  default: "shadow-pop-border",
  secondary: "shadow-pop-secondary",
  tertiary: "shadow-pop-tertiary",
  quaternary: "shadow-pop-quaternary",
  accent: "shadow-pop-accent",
};

export default function StickerCard({
  href,
  children,
  shadowColor = "default",
  className = "",
}: StickerCardProps) {
  const base =
    `group relative block bg-[var(--card)] text-[var(--foreground)] border-2 border-[var(--shadow-color)] rounded-2xl p-7 ${shadowMap[shadowColor]} transition-all duration-300 ease-[var(--ease-bounce)]`;
  const interactive =
    href
      ? " hover:-rotate-1 hover:scale-[1.02] hover:-translate-y-1"
      : "";

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={`${base}${interactive} ${className}`}
      >
        {children}
        <ArrowUpRight
          size={18}
          strokeWidth={2.5}
          className="absolute top-5 right-5 text-[var(--muted-foreground)] group-hover:text-[var(--accent)] transition-colors"
        />
      </Link>
    );
  }

  return <div className={`${base} ${className}`}>{children}</div>;
}
