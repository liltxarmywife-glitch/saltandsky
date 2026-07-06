import Image from "next/image";

export const metadata = {
  title: "Salt & Sky Travels | Coming Soon",
  description:
    "Between the ocean and the horizon are the moments that matter. Salt & Sky Travels — family reunions, milestone celebrations, cruises, and group getaways — is launching soon.",
};

export default function ComingSoon() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center"
      style={{ backgroundColor: "var(--sand)", color: "var(--navy)" }}
    >
      <div className="flex flex-col items-center gap-8 max-w-2xl">
        <Image
          src="/images/logo.png"
          alt="Salt & Sky Travels"
          width={320}
          height={320}
          priority
          className="w-56 sm:w-72 h-auto object-contain"
        />

        <div className="flex items-center gap-4" aria-hidden="true">
          <span className="h-px w-10" style={{ backgroundColor: "var(--gold)" }} />
          <span
            className="text-xs sm:text-sm uppercase"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "var(--gold)",
              letterSpacing: "0.35em",
            }}
          >
            Coming Soon
          </span>
          <span className="h-px w-10" style={{ backgroundColor: "var(--gold)" }} />
        </div>

        <p
          className="text-2xl sm:text-3xl leading-relaxed"
          style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
        >
          Between the ocean and the horizon are the moments that matter.
        </p>

        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-playfair)", opacity: 0.82 }}
        >
          We&rsquo;re creating a place devoted to the moments that matter &mdash; family
          reunions, milestone celebrations, cruises, and meaningful journeys shared with the
          people you love most.
        </p>

        <p
          className="text-lg sm:text-xl leading-relaxed"
          style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", opacity: 0.9 }}
        >
          The horizon is closer than you think.
        </p>
      </div>
    </main>
  );
}
