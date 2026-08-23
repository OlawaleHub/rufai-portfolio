// src/components/Projects.js
import { ExternalLink, FolderOpen, Sparkles } from "lucide-react";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-8 bg-amber-400" />
          Projects &amp; Initiatives
        </span>
        <h2 className="heading mt-4 text-balance">
          Featured <span className="gradient-text">work</span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl">
          Blockchain, community, and strategy work — including speaking
          engagements and event galleries.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <a
              href={p.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group card p-0 block overflow-hidden h-full hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-300"
            >
              {/* visual header band — placeholder for event imagery */}
              <div className="relative h-44 bg-gradient-to-br from-navy-800 via-navy-900 to-black overflow-hidden">
                {/* subtle blockDAG-style grid */}
                <div className="absolute inset-0 bg-grid opacity-60" />
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-amber-500/20 blur-3xl group-hover:bg-amber-500/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      <Sparkles className="h-3.5 w-3.5" />
                      Blockchain
                    </span>
                    <p className="mt-3 text-2xl font-bold text-white tracking-tight">
                      {p.name}
                    </p>
                  </div>
                </div>
                {/* image drop hint — replace with <Image/> when event photo is ready */}
                <span className="absolute bottom-2 right-3 text-[10px] uppercase tracking-widest text-slate-500/70">
                  Event gallery on Google Drive
                </span>
              </div>

              {/* body */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                    {p.name}
                  </h3>
                  <ExternalLink className="h-5 w-5 shrink-0 text-slate-500 group-hover:text-amber-400 group-hover:rotate-12 transition-all" />
                </div>
                <p className="mt-1 text-sm text-amber-400/90">{p.tagline}</p>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {p.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-amber-400">
                  <FolderOpen className="h-4 w-4" />
                  Open in Google Drive
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
