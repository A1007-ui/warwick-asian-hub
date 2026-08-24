import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { OrnamentDivider } from "@/components/site/Rangoli";
import { ImageFrame, Section, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/execs")({
  head: () => ({
    meta: [
      { title: "Meet the Execs — Warwick Asian Society" },
      {
        name: "description",
        content:
          "Meet the 2026 executive committee of Warwick Asian Society — the students behind our events, culture showcases and community.",
      },
      { property: "og:title", content: "Meet the Execs — Warwick Asian Society" },
      {
        property: "og:description",
        content:
          "The student committee running Warwick Asian Society: presidents, culture, events, marketing, finance and tech.",
      },
    ],
  }),
  component: ExecsPage,
});

/**
 * Placeholder committee data. Replace with real names, bios, links and photos
 * (or fetch from a database later) — the card layout stays unchanged.
 */
type Exec = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  socials?: { instagram?: string; linkedin?: string; email?: string };
};

const leadership: Exec[] = [
  {
    name: "Name to be confirmed",
    role: "President",
    bio: "Leads the society's vision, represents members to the Students' Union and keeps the exec team moving.",
    socials: { instagram: "#", linkedin: "#", email: "#" },
  },
  {
    name: "Name to be confirmed",
    role: "Vice President",
    bio: "Supports the president across planning, partnerships and making sure every event runs smoothly.",
    socials: { instagram: "#", email: "#" },
  },
];

const committee: Exec[] = [
  {
    name: "Name to be confirmed",
    role: "Treasurer",
    bio: "Looks after budgets, ticketing and keeping our events affordable for students.",
    socials: { email: "#" },
  },
  {
    name: "Name to be confirmed",
    role: "Events Executive",
    bio: "Plans socials, formals and festival nights from first idea to final decoration.",
    socials: { instagram: "#" },
  },
  {
    name: "Name to be confirmed",
    role: "Culture Executive",
    bio: "Curates our cultural programme — dance, music, language and heritage showcases.",
    socials: { instagram: "#" },
  },
  {
    name: "Name to be confirmed",
    role: "Marketing Executive",
    bio: "Runs our socials, design and campaigns so nobody misses what's coming next.",
    socials: { instagram: "#", linkedin: "#" },
  },
  {
    name: "Name to be confirmed",
    role: "Tech Executive",
    bio: "Builds and maintains the website, ticketing tools and everything digital.",
    socials: { linkedin: "#", email: "#" },
  },
  {
    name: "Name to be confirmed",
    role: "Welfare Executive",
    bio: "First point of contact for members, championing inclusion and wellbeing.",
    socials: { email: "#" },
  },
];

function SocialIcons({ socials }: { socials?: Exec["socials"] }) {
  if (!socials) return null;
  const items = [
    socials.instagram ? { Icon: Instagram, href: socials.instagram, label: "Instagram" } : null,
    socials.linkedin ? { Icon: Linkedin, href: socials.linkedin, label: "LinkedIn" } : null,
    socials.email ? { Icon: Mail, href: socials.email, label: "Email" } : null,
  ].filter(Boolean) as { Icon: typeof Mail; href: string; label: string }[];

  return (
    <div className="mt-5 flex gap-2">
      {items.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-gold hover:text-primary"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

function ExecCard({ exec, featured = false }: { exec: Exec; featured?: boolean }) {
  return (
    <article className={`surface-card overflow-hidden ${featured ? "sm:flex" : ""}`}>
      <ImageFrame
        label="Exec photo"
        src={exec.photo}
        alt={exec.photo ? `${exec.name}, ${exec.role}` : undefined}
        ratio={featured ? "1 / 1" : "4 / 5"}
        rounded="rounded-none"
        className={featured ? "border-0 border-r border-gold/25 sm:w-56 sm:shrink-0" : "border-0"}
      />
      <div className="p-6">
        <p className="eyebrow">{exec.role}</p>
        <h3 className="mt-2 text-xl font-semibold">{exec.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{exec.bio}</p>
        <SocialIcons socials={exec.socials} />
      </div>
    </article>
  );
}

function ExecsPage() {
  return (
    <>
      <PageHeader />

      <Section className="pt-16">
        <SectionHeading
          eyebrow="Leadership"
          title="The team leading the society"
          intro="Our presidents set the direction for the year and are always happy to hear from members."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {leadership.map((exec) => (
            <ExecCard key={exec.role} exec={exec} featured />
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/60 pt-8">
        <SectionHeading
          eyebrow="Committee"
          title="Meet the wider exec team"
          intro="Each exec owns a part of society life — from finance and welfare to culture, events and tech."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {committee.map((exec) => (
            <ExecCard key={exec.role} exec={exec} />
          ))}
        </div>
        <OrnamentDivider className="mt-16" />
        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-muted-foreground">
          Interested in joining the exec team next year? Elections run each spring — come to an event
          and say hello.
        </p>
      </Section>
    </>
  );
}

function PageHeader() {
  return (
    <section className="relative overflow-hidden bg-royal py-20 text-primary-foreground sm:py-24">
      <div
        className="bg-rangoli-glow pointer-events-none absolute -top-56 right-0 h-[30rem] w-[30rem] opacity-40"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">Committee 2026</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl">Meet the Execs</h1>
        <p className="mt-5 max-w-xl text-primary-foreground/80">
          The students who plan the events, run the socials and keep Warwick Asian Society thriving.
        </p>
      </div>
    </section>
  );
}
