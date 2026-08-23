// src/app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen grid place-items-center px-5 text-center relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="relative">
        <p className="text-7xl md:text-8xl font-bold gradient-text">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-white">
          Page not found
        </h1>
        <p className="mt-2 text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back home
        </Link>
      </div>
    </section>
  );
}
