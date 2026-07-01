import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--navy)" }} className="mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-white text-xl tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-playfair)" }}>
              Salt <span style={{ color: "var(--gold)" }}>&</span> Sky
            </p>
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--sea-glass)" }}>Travel</p>
          </div>
          <p className="text-sm font-light leading-relaxed" style={{ color: "var(--fog)", fontFamily: "var(--font-cormorant)" }}>
            Between the ocean and the horizon are the moments that matter.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>Explore</p>
          {[
            { href: "/our-story", label: "Our Story" },
            { href: "/group-travel", label: "Group Travel" },
            { href: "/services", label: "Services" },
            { href: "/destinations", label: "Destinations" },
            { href: "/contact", label: "Contact" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-sm text-white hover:opacity-70 transition-opacity">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>Get in Touch</p>
          <a href="mailto:hello@saltandskytravel.com" className="text-sm text-white hover:opacity-70 transition-opacity">
            hello@saltandskytravel.com
          </a>
          <p className="text-sm mt-4 leading-relaxed" style={{ color: "var(--fog)", fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}>
            Creating experiences worth remembering.
          </p>
        </div>
      </div>

      <div className="border-t px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <p className="text-xs" style={{ color: "var(--fog)", opacity: 0.5 }}>
          © {new Date().getFullYear()} Salt & Sky Travel. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: "var(--fog)", opacity: 0.5 }}>
          Kelsey & Melissa · Fora Travel
        </p>
      </div>
    </footer>
  );
}
