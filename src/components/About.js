// src/components/About.js
import { profile, stats } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <Reveal className="md:col-span-3">
          <span className="eyebrow">
            <span className="h-px w-8 bg-amber-400" />
            About
          </span>
          <h2 className="heading mt-4 text-balance">
            Turning strategy into{" "}
            <span className="gradient-text">shipped products</span>
          </h2>
          <p className="mt-6 text-slate-300 leading-relaxed text-lg">
            {profile.intro}
          </p>
        </Reveal>

        <Reveal className="md:col-span-2" delay={150}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card p-5 text-center">
                <div className="text-4xl font-bold gradient-text">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-slate-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
