import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Clock, MapPin, Ticket } from "lucide-react";
import { OrnamentDivider } from "@/components/site/Rangoli";
import { ActionButton, ImageFrame, Section, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Warwick Asian Society" },
      {
        name: "description",
        content:
          "Upcoming and past events from Warwick Asian Society: Diwali night, culture showcases, formals, food socials and collaborations across campus.",
      },
      { property: "og:title", content: "Events — Warwick Asian Society" },
      {
        property: "og:description",
        content:
          "Browse upcoming and past Warwick Asian Society events, with dates, venues and ticket details.",
      },
    ],
  }),
  component: EventsPage,
});

/**
 * Placeholder event data. Shape mirrors what a real events table / API would
 * return, so this array can be swapped for a loader + query without touching UI.
 */
type SocietyEvent = {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  ticketUrl?: string;
  status: "upcoming" | "past";
  tag?: string;
};

const events: SocietyEvent[] = [
  {
    id: "welcome-social",
    name: "Welcome Social",
    date: "Thu 8 October 2026",
    time: "19:00 – 22:00",
    location: "Copper Rooms, Warwick SU",
    description:
      "Kick off the year with music, games and free chai. The easiest way to meet the exec team and other members.",
    ticketUrl: "#",
    status: "upcoming",
    tag: "Free entry",
  },
  {
    id: "diwali-night",
    name: "Diwali Night",
    date: "Sat 7 November 2026",
    time: "18:30 – 23:30",
    location: "Panorama Room, Rootes Building",
    description:
      "Our flagship celebration of light — performances, a full catered dinner, rangoli making and an after-party.",
    ticketUrl: "#",
    status: "upcoming",
    tag: "Flagship",
  },
  {
    id: "culture-showcase",
    name: "Culture Showcase",
    date: "Fri 27 November 2026",
    time: "18:00 – 21:00",
    location: "Warwick Arts Centre Studio",
    description:
      "Student-led dance, music and spoken word from across Asia, followed by a street-food style social.",
    ticketUrl: "#",
    status: "upcoming",
  },
  {
    id: "annual-formal",
    name: "Annual Formal",
    date: "Sat 14 March 2026",
    time: "19:00 – late",
    location: "Coventry city centre venue",
    description:
      "Our black-tie dinner and awards evening closing out the year with over 200 members attending.",
    status: "past",
  },
  {
    id: "holi-social",
    name: "Holi on the Piazza",
    date: "Sun 1 March 2026",
    time: "13:00 – 16:00",
    location: "Warwick Piazza",
    description:
      "Colours, dhol drums and photos on campus — one of the biggest turnouts in society history.",
    status: "past",
  },
  {
    id: "chai-chat",
    name: "Chai & Chat",
    date: "Wed 11 February 2026",
    time: "17:00 – 19:00",
    location: "The Bread Oven, SU",
    description:
      "A relaxed midweek catch-up with chai, samosas and space to talk about anything but deadlines.",
    status: "past",
  },
];

function EventCard({ event }: { event: SocietyEvent }) {
  const isPast = event.status === "past";

  return (
    <article className={`surface-card flex flex-col overflow-hidden ${isPast ? "opacity-95" : ""}`}>
      <div className="relative">
        <ImageFrame
          label="Event image"
          src={event.image}
          alt={event.image ? event.name : undefined}
          ratio="16 / 9"
          rounded="rounded-none"
          className="border-0"
        />
        {event.tag && !isPast ? (
          <span className="absolute top-3 left-3 rounded-full bg-[image:var(--gradient-gold)] px-3 py-1 text-[0.68rem] font-semibold tracking-wide text-primary-deep uppercase">
            {event.tag}
          </span>
        ) : null}
        {isPast ? (
          <span className="absolute top-3 left-3 rounded-full bg-primary-deep/85 px-3 py-1 text-[0.68rem] font-semibold tracking-wide text-primary-foreground uppercase">
            Past event
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold">{event.name}</h3>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-gold" aria-hidden="true" />
            {event.date}
          </li>
          <li className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gold" aria-hidden="true" />
            {event.time}
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
            {event.location}
          </li>
        </ul>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {event.description}
        </p>
        {!isPast ? (
          <ActionButton variant="primary" className="mt-6 w-full">
            <Ticket className="h-4 w-4" aria-hidden="true" />
            Register interest
          </ActionButton>
        ) : (
          <p className="mt-6 text-xs tracking-[0.16em] text-muted-foreground uppercase">
            Recap coming to our socials
          </p>
        )}
      </div>
    </article>
  );
}

function EventsPage() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <>
      <section className="relative overflow-hidden bg-royal py-20 text-primary-foreground sm:py-24">
        <div
          className="bg-rangoli-glow pointer-events-none absolute -top-56 left-1/3 h-[30rem] w-[30rem] opacity-40"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="eyebrow">What&apos;s on</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl">Events</h1>
          <p className="mt-5 max-w-xl text-primary-foreground/80">
            Festivals, formals, food socials and showcases — there is always something happening.
            Members get early access and discounted tickets.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Upcoming"
          title="Save the date"
          intro="Ticketing links go live a couple of weeks before each event."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/60">
        <SectionHeading
          eyebrow="Archive"
          title="Previously at Warwick Asian Society"
          intro="A look back at the nights our members still talk about."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {past.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <OrnamentDivider className="mt-16" />
      </Section>
    </>
  );
}
