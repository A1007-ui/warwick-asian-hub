import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Linkedin } from "lucide-react";
import { Rangoli } from "./Rangoli";
import { ImageFrame } from "./ui";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-royal text-primary-foreground">
      <Rangoli className="animate-spin-slow pointer-events-none absolute -right-24 -bottom-32 h-96 w-96 text-gold/20" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <ImageFrame label="Logo" ratio="1 / 1" rounded="rounded-md" className="w-11 shrink-0" />
            <span className="font-display text-xl font-semibold">Warwick Asian Society</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            A home for South and East Asian culture at the University of Warwick — celebrating
            heritage, building friendships and welcoming everyone.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram", href: "#" },
              { Icon: Linkedin, label: "LinkedIn", href: "#" },
              { Icon: Mail, label: "Email us", href: "#" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="rounded-md border border-gold/40 p-2.5 transition-colors hover:bg-gold/15"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer" className="text-sm">
          <h3 className="eyebrow">Explore</h3>
          <ul className="mt-4 space-y-2.5">
            {[
              { to: "/", label: "About" },
              { to: "/execs", label: "Meet the Execs" },
              { to: "/events", label: "Events" },
              { to: "/membership", label: "Membership" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-primary-foreground/75 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <h3 className="eyebrow">Find us</h3>
          <ul className="mt-4 space-y-2.5 text-primary-foreground/75">
            <li>Students&apos; Union, University of Warwick</li>
            <li>Coventry CV4 7AL</li>
            <li>Socials and contact details coming soon</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-gold/20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Warwick Asian Society. All rights reserved.</p>
          <p>Affiliated with Warwick Students&apos; Union.</p>
        </div>
      </div>
    </footer>
  );
}
