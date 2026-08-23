// src/components/Experience.js
import { MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-8 bg-amber-400" />
          Experience
        </span>
        <h2 className="heading mt-4 text-balance">
          Roles &amp; <span className="gradient-text">impact</span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl">
          Leading operations, marketing, and growth across tech companies that
          build digital products — from websites and web apps to Web3 platforms.
        </p>
      </Reveal>

      <div className="mt-14 relative">
        {/* timeline line */}
        <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-amber-400/50 via-white/10 to-transparent" />

        <div className="space-y-6">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 60}>
              <div className="relative pl-12">
                {/* dot */}
                <span className="absolute left-0 top-3 h-4 w-4 rounded-full bg-amber-400 ring-4 ring-navy-950" />

                <div className="card p-6 hover:border-amber-400/40 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-white">
                      {job.role}
                    </h3>
                    {job.period && (
                      <span className="text-xs font-medium text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full">
                        {job.period}
                      </span>
                    )}
                  </div>

                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="font-medium text-amber-400/90">
                      {job.company}
                    </span>
                    {job.location && (
                      <span className="flex items-center gap-1 text-slate-500">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                    )}
                  </div>

                  {job.summary && (
                    <p className="mt-3 text-sm text-slate-300">{job.summary}</p>
                  )}

                  <ul className="mt-4 space-y-2">
                    {job.points.map((p, j) => (
                      <li
                        key={j}
                        className="text-sm text-slate-400 leading-relaxed flex gap-2"
                      >
                        <span className="text-amber-400 mt-1 shrink-0">▸</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
