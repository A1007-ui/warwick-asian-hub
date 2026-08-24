import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------- Buttons / links ---------- */

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60";

const variants = {
  primary:
    "bg-royal text-primary-foreground px-6 py-3 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5",
  gold: "bg-[image:var(--gradient-gold)] text-primary-deep px-6 py-3 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5",
  outline:
    "border border-gold/60 bg-transparent text-foreground px-6 py-3 hover:bg-secondary hover:border-gold",
  ghost: "text-foreground/80 px-3 py-2 hover:text-foreground",
} as const;

type Variant = keyof typeof variants;

export function ActionLink({
  to,
  children,
  variant = "primary",
  className,
  onClick,
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)} onClick={onClick}>
      {children}
    </Link>
  );
}

export function ActionButton({
  children,
  variant = "primary",
  className,
  type = "button",
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button type={type} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

/* ---------- Layout helpers ---------- */

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-5 py-20 sm:px-8 sm:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl animate-rise",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p> : null}
    </div>
  );
}

/* ---------- Image placeholder ----------
 * Swap `src` in later: <ImageFrame src={logo} alt="..." /> renders the real
 * asset with the same framing, so no placeholder art is baked into the design.
 */
export function ImageFrame({
  label,
  ratio = "4 / 3",
  src,
  alt,
  className,
  rounded = "rounded-xl",
}: {
  label?: string;
  ratio?: string;
  src?: string;
  alt?: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border border-gold/30 bg-secondary",
        rounded,
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <img src={src} alt={alt ?? ""} loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <>
          <div className="bg-jaali absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-primary/50"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="1.3" />
              <circle cx="9" cy="10" r="1.6" strokeWidth="1.3" />
              <path d="M4 18l5-5 4 4 3-3 4 4" strokeWidth="1.3" />
            </svg>
            <span className="text-xs font-medium tracking-wide text-muted-foreground">
              {label ?? "Image coming soon"}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
