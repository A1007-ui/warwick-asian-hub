import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BadgeCheck, Check, PartyPopper, Ticket, Users2 } from "lucide-react";
import { OrnamentDivider } from "@/components/site/Rangoli";
import { ActionButton, ImageFrame, Section, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — Join Warwick Asian Society" },
      {
        name: "description",
        content:
          "Join Warwick Asian Society for discounted event tickets, priority access to Diwali night, socials, sports and a welcoming student community.",
      },
      { property: "og:title", content: "Membership — Join Warwick Asian Society" },
      {
        property: "og:description",
        content:
          "Membership benefits, tiers and how to join Warwick Asian Society for the 2026 season.",
      },
    ],
  }),
  component: MembershipPage,
});

const benefits = [
  {
    Icon: Ticket,
    title: "Discounted tickets",
    body: "Reduced entry to Diwali night, the annual formal and every ticketed social we run.",
  },
  {
    Icon: PartyPopper,
    title: "Priority access",
    body: "Early booking windows for our flagship events before general release.",
  },
  {
    Icon: Users2,
    title: "A ready-made community",
    body: "Course-agnostic friendships, mentorship from older years and a group chat that never sleeps.",
  },
  {
    Icon: BadgeCheck,
    title: "Society perks",
    body: "Discounts with local partner restaurants and businesses, plus society merch drops.",
  },
];

const tiers = [
  {
    name: "Annual membership",
    price: "£6",
    period: "per year",
    highlight: true,
    features: [
      "Discounted tickets to all events",
      "Priority access to flagship nights",
      "Members-only socials and group chats",
      "Partner and merch discounts",
    ],
  },
  {
    name: "Life membership",
    price: "£15",
    period: "for your degree",
    highlight: false,
    features: [
      "Everything in annual membership",
      "Valid for your whole time at Warwick",
      "Alumni network invitations",
      "Best value after two years",
    ],
  },
];

function MembershipPage() {
  // Frontend-only for now: a real membership/payment flow can replace this handler.
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-royal py-20 text-primary-foreground sm:py-24">
        <div
          className="bg-rangoli-glow pointer-events-none absolute -top-56 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 opacity-40"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="eyebrow">Membership</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl">
            Join Warwick Asian Society
          </h1>
          <p className="mt-5 max-w-xl text-primary-foreground/80">
            One membership, a full year of celebrations. Open to every Warwick student, whatever your
            background.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Why join"
          title="What your membership gives you"
          intro="More than a ticket discount — membership is the fastest way into the community."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {benefits.map(({ Icon, title, body }) => (
            <article key={title} className="surface-card flex gap-4 p-6">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[image:var(--gradient-gold)] text-primary-deep">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/60">
        <SectionHeading eyebrow="Options" title="Choose your membership" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`surface-card relative overflow-hidden p-8 ${
                tier.highlight ? "border-gold/60" : ""
              }`}
            >
              {tier.highlight ? (
                <span className="absolute top-6 right-6 rounded-full bg-[image:var(--gradient-gold)] px-3 py-1 text-[0.68rem] font-semibold tracking-wide text-primary-deep uppercase">
                  Most popular
                </span>
              ) : null}
              <h3 className="text-2xl font-semibold">{tier.name}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-4xl font-semibold text-primary">
                  {tier.price}
                </span>
                <span className="text-sm text-muted-foreground">{tier.period}</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <ActionButton
                variant={tier.highlight ? "gold" : "outline"}
                className="mt-8 w-full"
                onClick={() => setSubmitted(false)}
              >
                Select {tier.name.split(" ")[0]}
              </ActionButton>
            </article>
          ))}
        </div>
      </Section>

      {/* Join form — presentation only, ready to wire to a real membership system */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="eyebrow">Register your interest</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Tell us you&apos;re joining and we&apos;ll take it from there.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Payments currently run through the Warwick Students&apos; Union page. Leave your details
              and we&apos;ll send you the link plus an invite to our next social.
            </p>

            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Priya Sharma" />
                <Field
                  label="University email"
                  name="email"
                  type="email"
                  placeholder="you@warwick.ac.uk"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Course" name="course" placeholder="BSc Computer Science" />
                <Field label="Year of study" name="year" placeholder="First year" />
              </div>
              <ActionButton type="submit" variant="primary" className="w-full sm:w-auto">
                Register interest
              </ActionButton>
              <p aria-live="polite" className="min-h-5 text-sm text-primary">
                {submitted
                  ? "Thanks! Membership sign-up isn't live yet — we'll email you as soon as it opens."
                  : ""}
              </p>
            </form>
          </div>

          <div className="grid gap-4">
            <ImageFrame label="Members at an event" ratio="4 / 3" />
            <div className="grid grid-cols-2 gap-4">
              <ImageFrame label="Society photo" ratio="1 / 1" />
              <ImageFrame label="Society photo" ratio="1 / 1" />
            </div>
          </div>
        </div>
        <OrnamentDivider className="mt-20" />
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="font-medium text-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
    </label>
  );
}
