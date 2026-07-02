import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: "🚢",
    label: "Ocean Cruises",
    description: "From the Caribbean to the Mediterranean, we know the ships, the cabins, the cruise lines, and exactly how to get you the best experience for your family. Whether it's your first cruise or your fiftieth, we'll match you with the right sailing.",
    details: ["Caribbean", "Mediterranean", "Alaska", "European Rivers", "Bahamas", "Mexico"],
  },
  {
    icon: "🛶",
    label: "River Cruises",
    description: "A different pace, a different kind of beautiful. River cruises are intimate, scenic, and perfect for travelers who want to go deeper into a destination without the crowds. We currently specialize in US river cruises and are expanding our expertise to international sailings.",
    details: ["Mississippi River", "Columbia River", "American South", "Pacific Northwest"],
  },
  {
    icon: "🌴",
    label: "All-Inclusive Resorts",
    description: "Everything taken care of before you even arrive. We know the resorts worth booking and the ones worth skipping — and we'll match you with the experience that fits your group, your budget, and your idea of a perfect trip.",
    details: ["Caribbean", "Mexico", "Jamaica", "Dominican Republic", "Cancún", "Punta Cana"],
  },
  {
    icon: "🏨",
    label: "Luxury Hotels",
    description: "For the traveler who wants the best room, the right location, and someone who knows how to get it. We work with luxury properties around the world and know how to make your stay feel like more than just a hotel.",
    details: ["Europe", "Caribbean", "United States", "Asia", "Mexico", "South America"],
  },
  {
    icon: "👨‍👩‍👧‍👦",
    label: "Family Reunions",
    description: "Getting the whole family together in one place is no small thing. We handle the group coordination, the cabin categories, the dining reservations, and all the details that make the difference between a stressful trip and one everyone talks about for years.",
    details: ["Group cruise packages", "Resort buyouts", "Multi-generational itineraries", "Group dining", "Custom excursions", "Onboard celebrations"],
  },
  {
    icon: "🥂",
    label: "Milestone Celebrations",
    description: "Anniversaries, milestone birthdays, retirements, graduations — some moments deserve more than a dinner out. We'll help you mark the occasion with a trip that feels as significant as the moment itself.",
    details: ["Anniversary trips", "Milestone birthdays", "Retirement travel", "Graduation getaways", "Vow renewals", "Celebration cruises"],
  },
  {
    icon: "👯",
    label: "Girls Trips & Getaways",
    description: "Whether it's a long-overdue friend reunion or a once-in-a-lifetime girls trip, we know how to put together an itinerary that gives everyone exactly what they came for. Planning a bachelorette? Ask about Kelsey's mobile spray tan services — your crew will arrive glowing.",
    details: ["Girls cruises", "Resort getaways", "Bachelorette trips", "Friend reunions", "Spa escapes", "European adventures"],
  },
  {
    icon: "💍",
    label: "Honeymoons & Romance",
    description: "Your honeymoon should feel like the beginning of something extraordinary. We'll help you find the destination, the resort, and the details that set the tone for everything that comes after.",
    details: ["Honeymoon packages", "Anniversary trips", "Couples cruises", "Private villas", "Overwater bungalows", "Romantic Europe"],
  },
  {
    icon: "✝️",
    label: "Faith-Based Group Travel",
    description: "We specialize in group travel for church communities, ministry teams, and faith-based organizations. We understand the importance of shared values in travel and know how to create an experience that reflects them.",
    details: ["Church group cruises", "Ministry retreats", "Faith community getaways", "Group devotional experiences"],
  },
  {
    icon: "💑",
    label: "Marriage Retreats & Reboot Cruises",
    description: "Coming soon. We believe travel has the power to restore, reconnect, and renew. We're building something special for couples who want more than a vacation — a dedicated retreat experience designed to bring them back to each other.",
    details: ["Coming Soon"],
  },
  {
    icon: "🗺️",
    label: "Custom Itineraries",
    description: "Not every trip fits a category. If you have a vision, we'll build it — from the first flight to the last dinner reservation. Tell us what you're dreaming of and we'll make it happen.",
    details: ["Multi-destination trips", "Independent travel", "Escorted tours", "Custom Europe itineraries", "Bucket list journeys", "Once-in-a-lifetime trips"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="pt-40 pb-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, #1a3a5c 100%)" }}
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--sea-glass)" }}>What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-light text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            Services
          </h1>
          <p className="text-lg font-light leading-relaxed" style={{ color: "var(--fog)", fontFamily: "var(--font-cormorant)" }}>
            Every journey begins with a reason. Tell us yours and we&apos;ll handle the rest.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(s => (
            <div
              key={s.label}
              className="flex flex-col gap-5 p-8 border"
              style={{ borderColor: "var(--fog)", backgroundColor: "#ffffff" }}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{s.icon}</span>
                <h2 className="text-lg tracking-wide" style={{ fontFamily: "var(--font-playfair)", color: "var(--navy)" }}>
                  {s.label}
                </h2>
              </div>
              <p className="text-base font-light leading-relaxed" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4a4a" }}>
                {s.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {s.details.map(d => (
                  <span
                    key={d}
                    className="text-xs tracking-wider uppercase px-3 py-1"
                    style={{ backgroundColor: "var(--sand)", color: "var(--navy)" }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Loyalty Programs */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>A Note on Loyalty</p>
          <h2 className="text-2xl md:text-3xl font-light text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            We know the loyalty programs inside and out.
          </h2>
          <p className="text-lg font-light leading-relaxed" style={{ color: "var(--fog)", fontFamily: "var(--font-cormorant)" }}>
            Years of travel have given us a deep understanding of cruise line loyalty programs, hotel status, and how to maximize what you already have. We&apos;ll make sure you&apos;re using every point, every perk, and every upgrade available to you.
          </p>
        </div>
      </section>

      {/* Photo break — couples + friends */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="relative h-72 overflow-hidden">
          <Image src="/images/couple-coffee-balcony.jpg" alt="Couple sharing coffee on a balcony with ocean views" fill className="object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "rgba(10,29,47,0.2)" }} />
        </div>
        <div className="relative h-72 overflow-hidden">
          <Image src="/images/friends-fire-pit.jpg" alt="Friends toasting around a beach fire pit at sunset" fill className="object-cover object-center" />
          <div className="absolute inset-0" style={{ background: "rgba(10,29,47,0.2)" }} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-8">
          <h2 className="text-3xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>
            Not sure where to start?
          </h2>
          <p className="text-lg font-light" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4a4a" }}>
            That&apos;s exactly what we&apos;re here for. Tell us about your people and your dream and we&apos;ll take it from there.
          </p>
          <Link
            href="/contact"
            className="self-center px-10 py-4 text-sm tracking-widest uppercase transition-opacity hover:opacity-80"
            style={{ backgroundColor: "var(--navy)", color: "var(--sand)" }}
          >
            Let&apos;s Plan Your Journey
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
