"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Rewards() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="relative py-24">
      {/* Blend gradients for smooth transitions to sections above and below */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#06080C] to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div>
            <h2 className="text-zinc-200 text-[34px] font-semibold tracking-tight text-neutral-900 leading-tight">
              Built for the makers
              <br />
              who build the market
            </h2>
            <p className="mt-3 text-[14px] text-neutral-400 max-w-md">
              Liquidity is not free. Makers who quote tighter and deeper are
              rewarded for the market quality they create.
            </p>
          </div>
        </div>



        <p className={`text-center mt-12 text-[14px] text-neutral-300 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '300ms' }}>
          Quote safely, scale your size, and earn rebates that reflect the
          quality of your liquidity.
        </p>
      </div>
    </section>
  );
}
