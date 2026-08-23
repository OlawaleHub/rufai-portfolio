// src/components/ProfilePhoto.js
"use client";

import Image from "next/image";
import { profile } from "@/lib/data";

// ─────────────────────────────────────────────────────────────
//  HOW TO ADD YOUR PICTURE
//
//  Option A (recommended): drop a file named `profile.jpg` into
//  the `public/` folder, then set  hasPhoto: true  in src/lib/data.js
//
//  Option B: import it directly — replace the placeholder block
//  below with:
//     import pic from "@/app/assets/profile.jpg";
//     <Image src={pic} ... />
// ─────────────────────────────────────────────────────────────

export default function ProfilePhoto() {
  return (
    <div className="relative mx-auto w-fit">
      {/* glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-amber-400/20 via-orange-500/10 to-amber-300/20 blur-2xl" />

      {/* frame */}
      <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-[2rem] p-[2px] bg-gradient-to-tr from-amber-400 via-orange-500 to-amber-300">
        <div className="h-full w-full rounded-[1.9rem] overflow-hidden bg-navy-800 grid place-items-center">
          {profile.hasPhoto ? (
            <Image
              src="/profile.jpg"
              alt={`${profile.name} portrait`}
              width={640}
              height={640}
              priority
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 text-center px-6">
              <span className="text-7xl font-bold gradient-text">RA</span>
              <span className="text-xs uppercase tracking-widest text-slate-500">
                Your photo here
              </span>
            </div>
          )}
        </div>
      </div>

      {/* floating badge */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 card px-4 py-2 flex items-center gap-2 whitespace-nowrap">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-medium text-white">Available for work</span>
      </div>

      {/* floating role chip */}
      <div className="absolute -top-3 -right-3 md:-right-6 card px-3 py-1.5">
        <span className="text-xs font-semibold text-amber-400">COO</span>
      </div>
    </div>
  );
}
