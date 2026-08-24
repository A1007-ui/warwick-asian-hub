import { createFileRoute } from "@tanstack/react-router";
import { Heart, Sparkles, Users, CalendarHeart } from "lucide-react";
import { Rangoli, OrnamentDivider } from "@/components/site/Rangoli";
import { ActionLink, ImageFrame, Section, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Warwick Asian Society — Culture, Community, Belonging" },
      {
        name: "description",
        content:
          "Warwick Asian Society brings together students to celebrate Asian culture at the University of Warwick through socials, festivals, food, dance and a welcoming community.",
      },
      { property: "og:title", content: "Warwick Asian Society — Culture, Community, Belonging" },
      {
        property: "og:description",
        content:
          "Discover who we are: a student society celebrating Asian heritage at Warwick with festivals, socials and a community that welcomes everyone.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    Icon: Heart,
    title: "Our mission",
    body: "To celebrate Asian heritage at Warwick and create a space where every student — whatever their background — feels seen, included and proud.",
  },
  {
    Icon: Users,
    title: "Our community",
    body: "Hundreds of members across every year and course, connected through socials, sports, food nights, culture showcases and lifelong friendships.",
  },
  {
    Icon: CalendarHeart,
    title: "What to expect",
    body: "From Diwali celebrations and cultural showcases to chai-and-chat evenings, formals and collaborations with societies across campus.",
  },
];

const stats = [
  { value: "500+", label: "Members" },
  { value: "30+", label: "Events a year" },
  { value: "20+", label: "Exec team" },
  { value: "2026", label: "Season" },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-royal text-primary-foreground">
        <div
          className="bg-rangoli-glow pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 opacity-40"
          aria-hidden="true"
        />
        <Rangoli className="animate-spin-slow pointer-events-none absolute -right-32 -bottom-40 h-[34rem] w-[34rem] text-gold/20" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-rise">
            <p className="eyebrow">University of Warwick</p>
            <h1 className="mt-4 text-4xl leading-[1.05] font-semibold sm:text-6xl">
              Where Asian culture <span className="text-gradient-gold">finds its home</span> at
              Warwick.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              We are Warwick Asian Society — a student-led community celebrating the traditions,
              music, food and stories of Asia, and welcoming everyone who wants to be part of it.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ActionLink to="/membership" variant="gold">
                Become a member
              </ActionLink>
              <ActionLink
                to="/events"
                variant="outline"
                className="border-gold/50 text-primary-foreground hover:bg-gold/10"
              >
                See upcoming events
              </ActionLink>
            </div>
          </div>

          <div className="relative animate-rise">
            <ImageFrame
              label="Society photo"
              ratio="4 / 5"
              className="border-gold/40 bg-primary-deep/40"
            />
            <div className="absolute -bottom-6 -left-6 hidden w-40 sm:block">
              <ImageFrame
                label="Event photo"
                ratio="1 / 1"
                className="border-gold/40 bg-primary-deep/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="border-y border-gold/25 bg-secondary">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-6 px-5 py-10 sm:px-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-semibold text-primary sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs tracking-[0.18em] text-muted-foreground uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Who we are */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              A society built on heritage, run by students.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Warwick Asian Society exists to make a big campus feel like home. We bring students
                together across cultures, languages and courses through the things that unite us —
                food, music, dance, sport and celebration.
              </p>
              <p>
                Everything we run is organised by a volunteer exec team who care deeply about
                representation on campus. Whether you grew up with these traditions or are
                discovering them for the first time, there is a place for you here.
              </p>
            </div>
            <OrnamentDivider className="mt-8 justify-start" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ImageFrame label="Culture night" ratio="3 / 4" />
            <ImageFrame label="Members" ratio="3 / 4" className="mt-8" />
          </div>
        </div>
      </Section>

      {/* Pillars */}
      <Section className="bg-secondary/60">
        <SectionHeading
          eyebrow="What we stand for"
          title="Mission, community and what members can expect"
          intro="Three simple commitments shape every event we put on and every member we welcome."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map(({ Icon, title, body }) => (
            <article key={title} className="surface-card p-7">
              <span className="inline-flex rounded-lg bg-[image:var(--gradient-gold)] p-3 text-primary-deep">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl bg-royal px-6 py-16 text-center text-primary-foreground sm:px-14">
          <div className="bg-jaali absolute inset-0 opacity-20" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <Sparkles className="mx-auto h-6 w-6 text-gold" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              Your Warwick experience, made warmer.
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Join hundreds of students at our next social, festival or showcase. Membership takes a
              minute.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ActionLink to="/membership" variant="gold">
                Join the society
              </ActionLink>
              <ActionLink
                to="/execs"
                variant="outline"
                className="border-gold/50 text-primary-foreground hover:bg-gold/10"
              >
                Meet the execs
              </ActionLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
