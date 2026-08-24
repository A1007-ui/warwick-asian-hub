import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ActionLink, ImageFrame } from "./ui";

const links = [
  { to: "/", label: "About" },
  { to: "/execs", label: "Meet the Execs" },
  { to: "/events", label: "Events" },
  { to: "/membership", label: "Membership" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gold/25 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8"
      >
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          {/* Replace with the society logo asset when available */}
          <ImageFrame label="Logo" ratio="1 / 1" rounded="rounded-md" className="w-10 shrink-0" />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold">Warwick Asian Society</span>
            <span className="hidden text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase sm:block">
              University of Warwick
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
          <ActionLink to="/membership" variant="gold" className="ml-3 px-5 py-2.5">
            Join us
          </ActionLink>
        </div>

        <button
          type="button"
          className="rounded-md border border-border p-2 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-gold/20 bg-background px-5 pb-5 md:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium text-muted-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
            <ActionLink
              to="/membership"
              variant="gold"
              className="mt-4"
              onClick={() => setOpen(false)}
            >
              Join us
            </ActionLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
