"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/group-travel", label: "Group Travel" },
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Destinations" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "var(--sand)", borderBottom: "1px solid var(--fog)" }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Salt & Sky Travel" width={160} height={107} className="object-contain" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-xs tracking-widest uppercase hover:opacity-70 transition-opacity" style={{ color: "var(--navy)" }}>
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-xs tracking-widest uppercase px-5 py-2 border transition-colors"
            style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
          >
            Start Planning
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" style={{ color: "var(--navy)" }} onClick={() => setOpen(!open)}>
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-px transition-all ${open ? "rotate-45 translate-y-2" : ""}`} style={{ backgroundColor: "var(--navy)" }} />
            <span className={`block w-6 h-px transition-all ${open ? "opacity-0" : ""}`} style={{ backgroundColor: "var(--navy)" }} />
            <span className={`block w-6 h-px transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} style={{ backgroundColor: "var(--navy)" }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ backgroundColor: "var(--sand)", borderTop: "1px solid var(--fog)" }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm tracking-widest uppercase" style={{ color: "var(--navy)" }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
