import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050505] pt-32 pb-24 md:pt-48 md:pb-32">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, transparent 70%)'
        }}
      ></div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <h1 className="mb-8 text-5xl font-bold tracking-tight text-white md:text-7xl leading-tight">
          The Onchain Deep Value <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
            Active Strategy
          </span>
        </h1>

        <p className="mb-12 text-xl text-neutral-400 md:text-2xl leading-relaxed max-w-2xl mx-auto">
          The Anchor of Your Crypto Portfolio. We engineer defensive alpha through Deep Value execution.
        </p>

        <div className="flex justify-center">
          <Link
            to="/dashboard"
            className="group flex items-center gap-2 bg-white px-8 py-4 text-lg font-bold text-black transition-all hover:bg-neutral-200 rounded-lg"
          >
            Enter Vault
            <ArrowRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
