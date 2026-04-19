import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type PopButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  withArrow?: boolean;
  external?: boolean;
};

export default function PopButton({
  href,
  children,
  variant = "primary",
  withArrow = false,
  external = false,
}: PopButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-bold rounded-full border-2 border-[var(--shadow-color)] px-6 py-3 transition-all duration-200 ease-[var(--ease-bounce)]";
  const variants = {
    primary:
      "bg-[var(--accent)] text-[var(--accent-foreground)] shadow-pop hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-pop-md active:translate-y-0.5 active:translate-x-0.5 active:shadow-pop-sm",
    secondary:
      "bg-transparent text-[var(--foreground)] hover:bg-[var(--tertiary)] hover:text-[var(--shadow-color)]",
  };

  const cls = `${base} ${variants[variant]}`;
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={cls} {...linkProps}>
      <span>{children}</span>
      {withArrow && (
        <span className="grid place-items-center w-6 h-6 rounded-full bg-white/20 text-current">
          <ArrowRight size={14} strokeWidth={3} />
        </span>
      )}
    </Link>
  );
}
