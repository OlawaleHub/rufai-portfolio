// src/components/Certifications.js
import { Terminal, ShieldCheck, Code2 } from "lucide-react";
import { certifications, education } from "@/lib/data";
import Reveal from "./Reveal";

const iconMap = {
  Terminal,
  ShieldCheck,
  Code2,
};

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-8 bg-amber-400" />
          Education & Certifications
        </span>
        <h2 className="heading mt-4 text-balance">
          Credentials &amp; <span className="gradient-text">learning</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {/* Education */}
        <Reveal>
          <div className="card p-6 h-full">
            <h3 className="font-semibold text-white">Education</h3>
            <div className="mt-4 border-l-2 border-amber-400/40 pl-4">
              {education.map((e, i) => (
                <div key={i} className="mb-4 last:mb-0">
                  <p className="font-medium text-white">{e.degree}</p>
                  <p className="text-sm text-amber-400/90">{e.school}</p>
                  {e.period && (
                    <p className="text-xs text-slate-500 mt-1">{e.period}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Certifications */}
        <Reveal delay={120}>
          <div className="card p-6 h-full">
            <h3 className="font-semibold text-white">Certifications</h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((c, i) => {
                const Icon = iconMap[c.icon] || Terminal;
                return (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 hover:border-amber-400/40 transition-colors"
                  >
                    <span className="grid place-items-center h-9 w-9 shrink-0 rounded-lg bg-amber-400/10 text-amber-400">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-white">{c.name}</p>
                      <p className="text-xs text-slate-400">{c.issuer}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
