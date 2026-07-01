import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const experiences = [
  {
    icon: "👨‍👩‍👧‍👦",
    label: "Family Reunions",
    description: "Getting the whole family in one place is no small feat. We handle the logistics so you can focus on the moments. From cabin categories to group dining to custom excursions — we make sure everyone from the grandparents to the grandkids has the time of their lives.",
  },
  {
    icon: "⛪",
    label: "Church & Faith Groups",
    description: "We specialize in group travel for church communities and faith-based organizations. Whether it's a leadership retreat, a congregation cruise, or a mission-adjacent trip, we understand the importance of shared values and community in travel.",
  },
  {
    icon: "👯",
    label: "Girls Trips & Bachelorette",
    description: "The ultimate girls trip starts here. We'll plan the cruise, the resort, the excursions — and Kelsey will handle the group energy and coordination to make sure everyone has exactly the trip they came for. Bachelorette parties? Ask about our mobile spray tan service so your crew arrives glowing.",
  },
  {
    icon: "🥂",
    label: "Milestone Celebrations",
    description: "50th birthdays. 25th anniversaries. Retirements. Some moments deserve more than a party — they deserve a trip. We specialize in group celebrations that feel as significant as the milestone itself.",
  },
  {
    icon: "💑",
    label: "Couples Retreats",
    description: "Coming soon. We're building something special for couples who want more than a vacation — a dedicated retreat experience designed to bring them back to each other. Stay tuned.",
  },
  {
    icon: "🎓",
    label: "Friend Groups & Reunions",
    description: "College friends. Work crews. Neighborhood groups. Friend reunions are some of the most meaningful trips people take — and some of the hardest to coordinate. That's exactly what Kelsey is here for.",
  },
];

const steps = [
  { number: "01", title: "Tell us about your group", description: "Who's coming, what's the occasion, and what does the perfect trip look like to you?" },
  { number: "02", title: "We build your options", description: "Melissa puts together cruise and resort options that fit your group size, budget, and vision." },
  { number: "03", title: "Kelsey takes it from there", description: "Once you pick your trip, Kelsey coordinates the group — keeping everyone informed, organized, and excited." },
  { number: "04", title: "You just show up", description: "We handle the details. You make the memories." },
];

export default function GroupTravelPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 text-center relative overflow-hidden" style={{ minHeight: "420px" }}>
        <Image src="/images/beach-chairs.jpg" alt="Beach chairs by the ocean" fill className="object-cover object-center" />
        <div className="absolute inset-0" style={{ background: "rgba(10,29,47,0.72)" }} />
        <div className="max-w-3xl mx-auto flex flex-col gap-6 relative z-10">
          <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--sea-glass)" }}>Bring Everyone Together</p>
          <h1 className="text-4xl md:text-5xl font-light text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            Group Travel
          </h1>
          <p className="text-lg font-light italic" style={{ color: "var(--gold)", fontFamily: "var(--font-cormorant)" }}>
            The bigger the group, the bigger the memory.
          </p>
          <p className="text-base font-light leading-relaxed" style={{ color: "var(--fog)", fontFamily: "var(--font-cormorant)" }}>
            Group travel is what we do best. Melissa books it. Kelsey coordinates it. You enjoy it.
          </p>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          <div className="text-center flex flex-col gap-4">
            <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>What We Specialize In</p>
            <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>
              Every group has a reason to travel.
            </h2>
            <p className="text-lg font-light max-w-xl mx-auto" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4a4a" }}>
              Tell us yours and we'll build something worth remembering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {experiences.map(e => (
              <div
                key={e.label}
                className="flex flex-col gap-4 p-8 border"
                style={{ borderColor: "var(--fog)", backgroundColor: "#ffffff" }}
              >
                <span className="text-3xl">{e.icon}</span>
                <h3 className="text-base tracking-wide" style={{ fontFamily: "var(--font-playfair)", color: "var(--navy)" }}>
                  {e.label}
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4a4a" }}>
                  {e.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          <div className="text-center flex flex-col gap-4">
            <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>How It Works</p>
            <h2 className="text-3xl font-light text-white" style={{ fontFamily: "var(--font-playfair)" }}>
              Simple from start to finish.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {steps.map(s => (
              <div key={s.number} className="flex flex-col gap-3">
                <p className="text-4xl font-light" style={{ color: "var(--gold)", fontFamily: "var(--font-playfair)", opacity: 0.6 }}>{s.number}</p>
                <h3 className="text-lg font-light text-white" style={{ fontFamily: "var(--font-playfair)" }}>{s.title}</h3>
                <p className="text-base font-light leading-relaxed" style={{ color: "var(--fog)", fontFamily: "var(--font-cormorant)" }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kelsey callout */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>Meet Your Group Coordinator</p>
          <h2 className="text-3xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>
            Kelsey keeps the group together.
          </h2>
          <p className="text-lg font-light leading-relaxed" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4a4a" }}>
            Married to Austin and mom to Rory and Levi, Kelsey knows what it takes to keep a group moving, happy, and on time. While Melissa handles the booking, Kelsey handles the people — the itinerary, the communication, the energy, and all the details that make a group trip actually work.
          </p>
          <p className="text-lg font-light italic" style={{ color: "var(--navy)", fontFamily: "var(--font-cormorant)" }}>
            If there&apos;s a plan, she&apos;s already three steps ahead of it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--sand)" }}>
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-8">
          <h2 className="text-3xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>
            Ready to bring your group together?
          </h2>
          <p className="text-lg font-light" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4a4a" }}>
            Tell us about your group, your occasion, and your dream destination. We&apos;ll take it from there.
          </p>
          <Link
            href="/contact"
            className="self-center px-10 py-4 text-sm tracking-widest uppercase transition-opacity hover:opacity-80"
            style={{ backgroundColor: "var(--navy)", color: "var(--sand)" }}
          >
            Start Planning
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
