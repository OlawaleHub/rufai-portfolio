// src/components/Hero.js
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import ProfilePhoto from "./ProfilePhoto";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-grid">
      {/* ambient glows */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-amber-500/10 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-600/10 blur-[130px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/0 via-navy-950/0 to-navy-950" />

      <div className="relative mx-auto max-w-6xl px-5 grid md:grid-cols-2 gap-12 items-center">
        {/* left: text */}
        <div>
          <span className="eyebrow">
            <span className="h-px w-8 bg-amber-400" />
            Tech Operations Leader
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] text-balance">
            Rufai
            <br />
            <span className="gradient-text">Abdulrahmon</span>
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-lg text-balance">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
            <a href="#experience" className="btn-secondary">
              View experience
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-amber-400" />
              {profile.location}
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <a href={`mailto:${profile.email}`} className="hover:text-amber-400 transition-colors truncate">
              {profile.email}
            </a>
          </div>
        </div>

        {/* right: photo placeholder */}
        <div className="order-first md:order-last">
          <ProfilePhoto />
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 hover:text-amber-400 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
