import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const pillars = [
  { icon: "❤️", label: "Connection", description: "Travel that brings people closer together." },
  { icon: "🎉", label: "Celebration", description: "Milestones that deserve more than a dinner out." },
  { icon: "🌊", label: "Adventure", description: "New horizons for the curious and the brave." },
  { icon: "📸", label: "Memories", description: "Moments you'll still talk about in twenty years." },
  { icon: "✨", label: "Milestones", description: "Anniversaries, reunions, and once-in-a-lifetime." },
];

const services = [
  { label: "Family Reunions", icon: "👨‍👩‍👧‍👦", description: "Bring everyone together in a way they'll never forget." },
  { label: "Milestone Celebrations", icon: "🥂", description: "Anniversaries, birthdays, retirements — done right." },
  { label: "Group Getaways", icon: "🚢", description: "Friends, church groups, and co-workers creating memories." },
  { label: "Couples Journeys", icon: "🌅", description: "Reconnect, celebrate, and rediscover each other." },
  { label: "Faith-Based Travel", icon: "✝️", description: "Group trips built around shared values and community." },
  { label: "Bachelor & Bachelorette", icon: "💍", description: "Send them off in unforgettable style." },
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20" style={{ backgroundColor: "var(--sand)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
          <h1 className="sr-only">Salt &amp; Sky Travel</h1>
          <Image src="/images/logo.png" alt="Salt & Sky Travel" width={900} height={600} className="object-contain w-full max-w-4xl" priority />

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/contact"
              className="px-8 py-4 text-sm tracking-widest uppercase transition-opacity hover:opacity-80"
              style={{ backgroundColor: "var(--navy)", color: "var(--sand)" }}
            >
              Start Planning
            </Link>
            <Link
              href="/our-story"
              className="px-8 py-4 text-sm tracking-widest uppercase border transition-opacity hover:opacity-70"
              style={{ borderColor: "var(--navy)", color: "var(--navy)" }}
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Grandma + grandchild — full bleed photo break */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image src="/images/grandma-grandchild-sunset.jpg" alt="Grandmother and grandchild watching the sunset together" fill className="object-cover object-center" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(10,29,47,0.6) 100%)" }} />
        <div className="absolute bottom-10 left-0 right-0 text-center">
          <p className="text-white text-xl font-light italic tracking-wide" style={{ fontFamily: "var(--font-cormorant)" }}>
            "I wish that were my memory."
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-8">
          <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>Our Why</p>
          <h2 className="text-3xl md:text-4xl font-light leading-relaxed" style={{ fontFamily: "var(--font-playfair)" }}>
            We believe the best memories happen between the ocean and the horizon.
          </h2>
          <p className="text-lg font-light leading-relaxed" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4a4a" }}>
            People rarely remember the price of a trip. They remember who they became while they were there — the grandparent who danced on the cruise deck, the couple who fell in love again at sunset, the friends who laughed until they cried. Salt & Sky exists to create those moments for the people who matter most to you.
          </p>
          <p className="text-xl italic" style={{ color: "var(--gold)", fontFamily: "var(--font-cormorant)" }}>
            Let us help you create them.
          </p>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {pillars.map(p => (
              <div key={p.label} className="flex flex-col items-center text-center gap-3">
                <span className="text-3xl">{p.icon}</span>
                <p className="text-xs tracking-[0.3em] uppercase text-white">{p.label}</p>
                <p className="text-xs font-light leading-relaxed" style={{ color: "var(--fog)", opacity: 0.6, fontFamily: "var(--font-cormorant)" }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          <div className="text-center flex flex-col gap-4">
            <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>What We Create</p>
            <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>
              Every journey begins with a reason.
            </h2>
            <p className="text-lg font-light max-w-xl mx-auto" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4a4a" }}>
              Tell us yours and we&apos;ll handle the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map(s => (
              <div
                key={s.label}
                className="flex flex-col gap-3 p-8 border transition-shadow hover:shadow-md"
                style={{ borderColor: "var(--fog)", backgroundColor: "#ffffff" }}
              >
                <span className="text-2xl">{s.icon}</span>
                <p className="text-sm tracking-widest uppercase" style={{ color: "var(--navy)", fontFamily: "var(--font-playfair)" }}>
                  {s.label}
                </p>
                <p className="text-sm font-light leading-relaxed" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4a4a" }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block px-8 py-4 text-xs tracking-widest uppercase border transition-opacity hover:opacity-70"
              style={{ borderColor: "var(--navy)", color: "var(--navy)" }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Photo triptych — families, couples, friends */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-0">
        <div className="relative h-80 overflow-hidden">
          <Image src="/images/family-kids-waves.jpg" alt="Family watching children run into the waves" fill className="object-cover object-center hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0" style={{ background: "rgba(10,29,47,0.25)" }} />
          <p className="absolute bottom-5 left-0 right-0 text-center text-xs tracking-[0.3em] uppercase text-white">Families</p>
        </div>
        <div className="relative h-80 overflow-hidden">
          <Image src="/images/couple-dancing-sunset.jpg" alt="Senior couple dancing on the beach at sunset" fill className="object-cover object-center hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0" style={{ background: "rgba(10,29,47,0.25)" }} />
          <p className="absolute bottom-5 left-0 right-0 text-center text-xs tracking-[0.3em] uppercase text-white">Couples</p>
        </div>
        <div className="relative h-80 overflow-hidden">
          <Image src="/images/friends-dock-sunset.jpg" alt="Friends sitting on a dock watching the sunset" fill className="object-cover object-center hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0" style={{ background: "rgba(10,29,47,0.25)" }} />
          <p className="absolute bottom-5 left-0 right-0 text-center text-xs tracking-[0.3em] uppercase text-white">Friends</p>
        </div>
      </section>

      {/* Anniversary + church group — quiet pair */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="relative h-72 overflow-hidden">
          <Image src="/images/anniversary-couple.jpg" alt="Anniversary couple walking the beach at sunset" fill className="object-cover object-center hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0" style={{ background: "rgba(10,29,47,0.2)" }} />
        </div>
        <div className="relative h-72 overflow-hidden">
          <Image src="/images/church-group.jpg" alt="Church group gathered at sunset by the water" fill className="object-cover object-center hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0" style={{ background: "rgba(10,29,47,0.2)" }} />
        </div>
      </section>

      {/* Breakfast balcony — quiet moment divider */}
      <section className="relative h-48 overflow-hidden">
        <Image src="/images/breakfast-balcony.jpg" alt="Breakfast on a villa balcony overlooking the ocean" fill className="object-cover object-top" />
        <div className="absolute inset-0" style={{ background: "rgba(10,29,47,0.35)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-sm tracking-[0.4em] uppercase font-light">Every trip begins with a quiet morning.</p>
        </div>
      </section>

      {/* About Mel */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-64 h-80 shrink-0 relative overflow-hidden">
            <Image src="/images/mel-kelsey-sunset.jpg" alt="Melissa and Kelsey on a cruise deck at sunset" fill className="object-cover object-top" />
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>Your Travel Advisors</p>
            <h2 className="text-3xl font-light text-white" style={{ fontFamily: "var(--font-playfair)" }}>
              Kelsey & Melissa
            </h2>
            <div className="flex flex-col gap-4" style={{ fontFamily: "var(--font-cormorant)" }}>
              <p className="text-lg font-light leading-relaxed" style={{ color: "var(--fog)" }}>
                Ken and I have been married for nearly 27 years, and travel has always been woven into the fabric of our life together. Between my husband&apos;s work supporting Veterans and the road we&apos;re always on, we&apos;ve learned what makes a trip truly meaningful — and what doesn&apos;t.
              </p>
              <p className="text-lg font-light leading-relaxed" style={{ color: "var(--fog)" }}>
                I became a travel advisor because I was already doing it. Why not help other families create the same kinds of moments we&apos;ve been building for years? This Christmas, our whole family — kids, grandkids, and all — is boarding a cruise together. Alaska is next on the bucket list.
              </p>
              <p className="text-lg font-light italic" style={{ color: "var(--gold)" }}>
                I know what it feels like to want everyone together in one place, doing something worth remembering. Let me help you make that happen.
              </p>
            </div>
            <Link
              href="/our-story"
              className="self-start text-xs tracking-widest uppercase border-b pb-1 text-white hover:opacity-70 transition-opacity"
              style={{ borderColor: "var(--gold)" }}
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>
            Ready to create something worth remembering?
          </h2>
          <p className="text-lg font-light" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4a4a" }}>
            Tell us about your people, your dream, and your occasion. We&apos;ll take it from there.
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
