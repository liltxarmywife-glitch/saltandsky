"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const travelTypes = [
  "Ocean Cruise",
  "River Cruise",
  "All-Inclusive Resort",
  "Luxury Hotel",
  "Family Reunion",
  "Milestone Celebration",
  "Girls Trip / Bachelorette",
  "Honeymoon / Romance",
  "Faith-Based Group Travel",
  "Marriage Retreat",
  "Custom Itinerary",
  "Not Sure Yet",
];

const groupSizes = [
  "Just us (1-2)",
  "Small group (3-8)",
  "Medium group (9-20)",
  "Large group (21+)",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    travelType: "",
    groupSize: "",
    destination: "",
    dates: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("done");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="pt-40 pb-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, #1a3a5c 100%)" }}
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--sea-glass)" }}>Let&apos;s Start Planning</p>
          <h1 className="text-4xl md:text-5xl font-light text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            Tell us about your dream trip.
          </h1>
          <p className="text-lg font-light italic" style={{ color: "var(--gold)", fontFamily: "var(--font-cormorant)" }}>
            We&apos;ll take it from there.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          {status === "done" ? (
            <div className="flex flex-col gap-6 text-center py-16">
              <span className="text-5xl">🌊</span>
              <h2 className="text-3xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>
                We received your request.
              </h2>
              <p className="text-lg font-light leading-relaxed" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4a4a" }}>
                Thank you for reaching out to Salt & Sky Travel. Kelsey or Melissa will be in touch shortly to start building something worth remembering.
              </p>
              <p className="text-base italic" style={{ color: "var(--gold)", fontFamily: "var(--font-cormorant)" }}>
                Between the ocean and the horizon are the moments that matter.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>Start Here</p>
                <h2 className="text-2xl font-light" style={{ fontFamily: "var(--font-playfair)" }}>
                  A few questions to get us started.
                </h2>
                <p className="text-base font-light" style={{ fontFamily: "var(--font-cormorant)", color: "#4a4a4a" }}>
                  No pressure, no commitment — just tell us what you&apos;re dreaming of and we&apos;ll reach out to start the conversation.
                </p>
              </div>

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase" style={{ color: "var(--navy)" }}>Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="First and last name"
                  className="border-b py-3 text-base font-light outline-none bg-transparent focus:border-b-2 transition-all"
                  style={{ borderColor: "var(--fog)", fontFamily: "var(--font-cormorant)", color: "var(--navy)" }}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase" style={{ color: "var(--navy)" }}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="border-b py-3 text-base font-light outline-none bg-transparent focus:border-b-2 transition-all"
                  style={{ borderColor: "var(--fog)", fontFamily: "var(--font-cormorant)", color: "var(--navy)" }}
                />
              </div>

              {/* Travel Type */}
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase" style={{ color: "var(--navy)" }}>What kind of trip are you dreaming of?</label>
                <select
                  name="travelType"
                  value={form.travelType}
                  onChange={handleChange}
                  className="border-b py-3 text-base font-light outline-none bg-transparent"
                  style={{ borderColor: "var(--fog)", fontFamily: "var(--font-cormorant)", color: "var(--navy)" }}
                >
                  <option value="">Select one</option>
                  {travelTypes.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Group Size */}
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase" style={{ color: "var(--navy)" }}>How many people are traveling?</label>
                <select
                  name="groupSize"
                  value={form.groupSize}
                  onChange={handleChange}
                  className="border-b py-3 text-base font-light outline-none bg-transparent"
                  style={{ borderColor: "var(--fog)", fontFamily: "var(--font-cormorant)", color: "var(--navy)" }}
                >
                  <option value="">Select one</option>
                  {groupSizes.map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>

              {/* Destination */}
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase" style={{ color: "var(--navy)" }}>Dream destination or occasion</label>
                <input
                  type="text"
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                  placeholder="Caribbean cruise, European river, 25th anniversary..."
                  className="border-b py-3 text-base font-light outline-none bg-transparent"
                  style={{ borderColor: "var(--fog)", fontFamily: "var(--font-cormorant)", color: "var(--navy)" }}
                />
              </div>

              {/* Dates */}
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase" style={{ color: "var(--navy)" }}>Approximate travel dates</label>
                <input
                  type="text"
                  name="dates"
                  value={form.dates}
                  onChange={handleChange}
                  placeholder="Summer 2026, Christmas, flexible..."
                  className="border-b py-3 text-base font-light outline-none bg-transparent"
                  style={{ borderColor: "var(--fog)", fontFamily: "var(--font-cormorant)", color: "var(--navy)" }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase" style={{ color: "var(--navy)" }}>Anything else we should know?</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your group, your vision, or what would make this trip perfect..."
                  className="border-b py-3 text-base font-light outline-none bg-transparent resize-none"
                  style={{ borderColor: "var(--fog)", fontFamily: "var(--font-cormorant)", color: "var(--navy)" }}
                />
              </div>

              {status === "error" && (
                <p className="text-sm" style={{ color: "#c0392b" }}>
                  Something went wrong. Please email us directly at hello@saltandskytravel.com
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="self-start px-10 py-4 text-sm tracking-widest uppercase transition-opacity hover:opacity-80 disabled:opacity-50"
                style={{ backgroundColor: "var(--navy)", color: "var(--sand)" }}
              >
                {status === "sending" ? "Sending..." : "Send My Request"}
              </button>

              <p className="text-xs font-light" style={{ color: "#aaa", fontFamily: "var(--font-cormorant)" }}>
                We typically respond within 24 hours. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
