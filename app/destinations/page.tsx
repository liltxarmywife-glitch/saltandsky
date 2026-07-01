import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const destinations = [
  {
    name: "The Caribbean",
    icon: "🌊",
    tagline: "Where the water is always the right shade of blue.",
    description: "The Caribbean is where most great travel memories are made — and for good reason. Whether you're island hopping, boarding a cruise, or settling into an all-inclusive resort, the Caribbean offers something for every kind of traveler. We know the islands, the cruise lines, and how to make sure your group gets the experience they came for.",
    highlights: ["St. Thomas", "St. John", "St. Croix", "St. Lucia", "St. Kitts", "St. Maarten", "Antigua", "Barbados", "Grenada", "Aruba", "Curaçao", "Bonaire", "Jamaica", "Puerto Rico", "Dominican Republic", "Grand Cayman", "Belize", "Roatan", "Labadee", "Tortola", "Virgin Gorda", "Private Islands", "All-Inclusive Resorts"],
  },
  {
    name: "The Bahamas",
    icon: "🏝️",
    tagline: "Crystal water, white sand, and not enough reasons to leave.",
    description: "Close enough for a quick escape, beautiful enough to feel like you've gone somewhere extraordinary. The Bahamas are perfect for families, couples, and groups who want stunning water without a long flight. From Nassau to the Exumas, we'll help you find the right island for your trip.",
    highlights: ["Nassau", "Paradise Island", "Exumas", "Atlantis Resort", "Private Island Escapes", "Day Cruises"],
  },
  {
    name: "Mexico",
    icon: "🌅",
    tagline: "From the Pacific coast to the Yucatán — Mexico delivers every time.",
    description: "Mexico is one of the most versatile destinations in the world. Cancún and the Riviera Maya offer world-class resorts and stunning Caribbean coastline. Los Cabos brings dramatic Pacific scenery and luxury. Puerto Vallarta offers charm and culture. Wherever your group wants to land, we know exactly where to put you.",
    highlights: ["Cancún", "Riviera Maya", "Los Cabos", "Puerto Vallarta", "Cozumel", "All-Inclusive Resorts"],
  },
  {
    name: "Costa Rica",
    icon: "🌿",
    tagline: "Adventure, wildlife, and rainforest luxury all in one place.",
    description: "For the group that wants more than a beach — Costa Rica delivers adventure, nature, and stunning scenery alongside incredible resorts and eco-lodges. From zip-lining through cloud forests to relaxing on Pacific beaches, it's a destination that surprises every kind of traveler.",
    highlights: ["Manuel Antonio", "Arenal Volcano", "Guanacaste", "Eco-Lodges", "Adventure Packages", "Pacific Beaches"],
  },
  {
    name: "Alaska",
    icon: "🏔️",
    tagline: "The last frontier. The trip you'll never stop talking about.",
    description: "Alaska is in a category of its own. Glaciers, wildlife, dramatic coastline, and a scale that makes you feel small in the best possible way. Alaska cruises are bucket-list experiences for a reason — and we'll make sure yours is everything you imagined. This one is on our bucket list too, and we can't wait to help you get there.",
    highlights: ["Inside Passage", "Glacier Bay", "Juneau", "Ketchikan", "Denali", "Wildlife Excursions"],
  },
];

export default function DestinationsPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="pt-40 pb-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, #1a3a5c 100%)" }}
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--sea-glass)" }}>Where We Go</p>
          <h1 className="text-4xl md:text-5xl font-light text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            Destinations
          </h1>
          <p className="text-lg font-light leading-relaxed" style={{ color: "var(--fog)", fontFamily: "var(--font-cormorant)" }}>
            We specialize in the destinations we know deeply — so every recommendation comes from real experience, not a brochure.
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          {destinations.map((d, i) => (
            <div
              key={d.name}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-start`}
            >
              {/* Visual block */}
              <div
                className="w-full md:w-64 shrink-0 h-48 flex flex-col items-center justify-center gap-3"
                style={{ backgroundColor: "var(--navy)" }}
              >
                <span className="text-5xl">{d.icon}</span>
                <p className="text-xs tracking-[0.3em] uppercase text-white text-center px-4">{d.name}</p>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 flex-1">
                <div>
                  <h2 className="text-2xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>{d.name}</h2>
                  <p className="text-base italic mt-1" style={{ color: "var(--gold)", fontFamily: "var(--font-cormorant)" }}>{d.tagline}</p>
                </div>
                <p className="text-base font-light leading-relaxed" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4a4a" }}>
                  {d.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {d.highlights.map(h => (
                    <span
                      key={h}
                      className="text-xs tracking-wider uppercase px-3 py-1"
                      style={{ backgroundColor: "var(--sand)", color: "var(--navy)", border: "1px solid var(--fog)" }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--fog)" }}>
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-4">
          <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>Growing All the Time</p>
          <h2 className="text-2xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>
            More destinations coming soon.
          </h2>
          <p className="text-base font-light leading-relaxed" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4a4a" }}>
            We only recommend what we know. As we travel and grow, so will this list. Have a destination in mind that isn&apos;t here? Ask us — we may be able to help or point you in the right direction.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-8">
          <h2 className="text-3xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>
            Have a destination in mind?
          </h2>
          <p className="text-lg font-light" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4a4a" }}>
            Tell us where you want to go and who you&apos;re bringing. We&apos;ll build something worth remembering.
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
