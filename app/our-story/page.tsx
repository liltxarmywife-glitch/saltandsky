import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function OurStoryPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 text-center relative overflow-hidden" style={{ minHeight: "400px" }}>
        <Image src="/images/road-sunset.jpg" alt="Life on the road at sunset" fill className="object-cover object-center" />
        <div className="absolute inset-0" style={{ background: "rgba(10,29,47,0.75)" }} />
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <p className="relative z-10 text-xs tracking-[0.4em] uppercase" style={{ color: "var(--sea-glass)" }}>Who We Are</p>
          <h1 className="relative z-10 text-4xl md:text-5xl font-light text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            Our Story
          </h1>
          <p className="relative z-10 text-xl font-light italic" style={{ color: "var(--gold)", fontFamily: "var(--font-cormorant)" }}>
            Between the ocean and the horizon are the moments that matter.
          </p>
        </div>
      </section>

      {/* The Brand Story */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-6" style={{ fontFamily: "var(--font-cormorant)" }}>
            <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>How It Started</p>
            <h2 className="text-3xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>
              We weren&apos;t looking to start a travel company.
            </h2>
            <p className="text-lg font-light leading-relaxed" style={{ color: "#4a4a4a" }}>
              We were already living it. Between a retired military husband whose passion for serving Veterans has kept them on the road, and a family that has always found its way back to each other somewhere between the ocean and the horizon, travel became something we understood deeply — not just as logistics, but as the setting where the most meaningful moments of our lives have happened.
            </p>
            <p className="text-lg font-light leading-relaxed" style={{ color: "#4a4a4a" }}>
              At some point Melissa looked around and thought — why not help other families do what we&apos;ve been doing for years? And why not bring Kelsey along to make it even better?
            </p>
            <p className="text-lg font-light leading-relaxed" style={{ color: "#4a4a4a" }}>
              Salt & Sky was born from a simple belief that the best memories don&apos;t happen by accident. They happen when someone who cares puts the right people in the right place at the right time.
            </p>
            <p className="text-xl italic" style={{ color: "var(--gold)" }}>
              That&apos;s what we do.
            </p>
          </div>
        </div>
      </section>

      {/* Family photo */}
      <section className="px-6 pb-8">
        <div className="max-w-4xl mx-auto relative overflow-hidden" style={{ height: "420px" }}>
          <Image src="/images/family.jpg" alt="The Cates family" fill className="object-cover" style={{ objectPosition: "center top" }} />
          <div className="absolute inset-0 flex items-end p-6" style={{ background: "linear-gradient(to top, rgba(10,29,47,0.7), transparent)" }}>
            <p className="text-sm italic text-white" style={{ fontFamily: "var(--font-cormorant)" }}>The family behind Salt & Sky.</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px" style={{ backgroundColor: "var(--fog)" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
          <div className="flex-1 h-px" style={{ backgroundColor: "var(--fog)" }} />
        </div>
      </div>

      {/* Meet the Team */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-20">
          <div className="text-center flex flex-col gap-3">
            <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>The Team</p>
            <h2 className="text-3xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>
              Meet Kelsey & Melissa
            </h2>
          </div>

          {/* Kelsey */}
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-56 h-72 shrink-0 relative overflow-hidden">
              <Image src="/images/kelsey.jpg" alt="Kelsey" fill className="object-cover object-top" />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-2xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>Kelsey</h3>
                <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "var(--sea-glass)" }}>
                  Co-Founder · Group Experience Coordinator
                </p>
              </div>
              <div className="flex flex-col gap-4" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4a4a" }}>
                <p className="text-lg font-light leading-relaxed">
                  Kelsey is the reason the group actually shows up at the right gate. Married to Austin and mom to Rory and Levi, she brings the same energy to coordinating a family reunion cruise that she brings to everything — completely organized, completely decisive, and completely in charge.
                </p>
                <p className="text-lg font-light leading-relaxed">
                  While Melissa handles the booking, Kelsey handles the people. She keeps the itinerary moving, the group together, and the energy exactly where it needs to be. Planning a bachelorette trip or girls getaway? Kelsey also offers mobile spray tan services so your crew arrives glowing before they even step on the ship.
                </p>
                <p className="text-lg font-light italic" style={{ color: "var(--navy)" }}>
                  If there&apos;s a plan, she&apos;s already three steps ahead of it.
                </p>
              </div>
            </div>
          </div>

          {/* Melissa */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
            <div className="w-56 h-72 shrink-0 relative overflow-hidden">
              <Image src="/images/melissa-ken.jpg" alt="Melissa and Ken" fill className="object-cover object-top" />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-2xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>Melissa</h3>
                <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "var(--sea-glass)" }}>
                  Co-Founder · Travel Advisor
                </p>
              </div>
              <div className="flex flex-col gap-4" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4a4a" }}>
                <p className="text-lg font-light leading-relaxed">
                  Melissa and her husband have been married for nearly 27 years — and they&apos;ve spent much of that time on the road. Ken, a retired military man with a deep passion for serving Veterans, has kept them traveling, and along the way Melissa became the kind of person who always knows the best cabin category, the right loyalty program, and exactly how to make a trip feel like more than just a vacation.
                </p>
                <p className="text-lg font-light leading-relaxed">
                  She became a travel advisor because she was already doing it. This Christmas the whole family — kids, grandkids, and all — is boarding a cruise together. Alaska is next on the bucket list.
                </p>
                <p className="text-lg font-light italic" style={{ color: "var(--navy)" }}>
                  She knows travel. She knows family. She knows how to put them together in a way that lasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-8">
          <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>What We Believe</p>
          <h2 className="text-3xl md:text-4xl font-light text-white leading-relaxed" style={{ fontFamily: "var(--font-playfair)" }}>
            Travel isn&apos;t about where you go.
          </h2>
          <p className="text-xl font-light italic" style={{ color: "var(--gold)", fontFamily: "var(--font-cormorant)" }}>
            It&apos;s about who you share it with.
          </p>
          <p className="text-lg font-light leading-relaxed" style={{ color: "var(--fog)", fontFamily: "var(--font-cormorant)" }}>
            Every recommendation we make, every itinerary we build, every group we coordinate comes back to one question: will this create a moment worth remembering? If the answer is yes, we&apos;re in.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-8">
          <h2 className="text-3xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>
            Ready to start planning?
          </h2>
          <p className="text-lg font-light" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4a4a" }}>
            Tell us about your people and your dream trip. We&apos;ll handle the rest.
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
