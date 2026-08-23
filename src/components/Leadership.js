// src/components/Leadership.js
import { Mic, Presentation, Users, Rocket } from "lucide-react";
import { leadership } from "@/lib/data";
import Reveal from "./Reveal";

const iconMap = {
  Mic,
  Presentation,
  Users,
  Rocket,
};

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-8 bg-amber-400" />
          Leadership & Volunteering
        </span>
        <h2 className="heading mt-4 text-balance">
          Speaking, leading &amp;{" "}
          <span className="gradient-text">giving back</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {leadership.map((item, i) => {
          const Icon = iconMap[item.icon] || Users;
          return (
            <Reveal key={`${item.role}-${i}`} delay={i * 80}>
              <div className="card p-6 flex gap-4 h-full hover:border-amber-400/40 transition-colors">
                <span className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-amber-400/10 text-amber-400">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{item.role}</h3>
                  <p className="text-sm text-amber-400/90">{item.org}</p>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
