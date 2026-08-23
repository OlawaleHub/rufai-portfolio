// src/components/Contact.js
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <Reveal>
        <div className="card p-8 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-60 w-60 rounded-full bg-amber-500/15 blur-[110px]" />

          <span className="eyebrow relative">
            <span className="h-px w-8 bg-amber-400" />
            Contact
          </span>

          <h2 className="relative mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight text-balance">
            Let&apos;s build something that{" "}
            <span className="gradient-text">scales</span>
          </h2>

          <p className="relative mt-4 text-slate-300 max-w-xl mx-auto">
            Open to COO, operations, and marketing strategy roles — and to
            conversations about building great digital products.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="relative mt-8 btn-primary"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <p className="relative mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-amber-400" />
            {profile.location}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
