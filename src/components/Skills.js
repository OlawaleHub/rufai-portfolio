// src/components/Skills.js
import { Briefcase, TrendingUp, Cpu } from "lucide-react";
import { skills } from "@/lib/data";
import Reveal from "./Reveal";

const iconMap = {
  Briefcase,
  TrendingUp,
  Cpu,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-8 bg-amber-400" />
          Skills
        </span>
        <h2 className="heading mt-4 text-balance">
          Core <span className="gradient-text">competencies</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = iconMap[group.icon] || Briefcase;
          return (
            <Reveal key={group.group} delay={i * 90}>
              <div className="card p-6 h-full flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center h-10 w-10 rounded-lg bg-amber-400/10 text-amber-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold text-white">{group.group}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 hover:border-amber-400/40 hover:text-white transition-colors cursor-default"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
