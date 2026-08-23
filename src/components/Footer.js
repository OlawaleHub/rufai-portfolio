// src/components/Footer.js
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <span className="grid place-items-center h-7 w-7 rounded-md bg-gradient-to-br from-amber-400 to-orange-500 text-navy-950 font-extrabold text-xs">
            RA
          </span>
          <span>
            © {year} {profile.name}. All rights reserved.
          </span>
        </div>
        <p>Built with Next.js + Tailwind CSS</p>
      </div>
    </footer>
  );
}
