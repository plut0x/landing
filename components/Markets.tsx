"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function ShineBorder({ color }: { color: string | string[] }) {
  const bg = Array.isArray(color) 
    ? `conic-gradient(from 0deg at 50% 50%, ${[...color, color[0]].join(", ")})`
    : `conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 35%, ${color} 50%, transparent 65%, transparent 100%)`;

  return (
    <div 
      className="pointer-events-none absolute inset-0 z-0 opacity-100 transition-opacity duration-700 rounded-2xl overflow-hidden" 
      style={{
        padding: '1.5px',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
      }}
    >
      <div 
        className="absolute inset-[-100%] animate-spin" 
        style={{ 
          animationDuration: '3s',
          background: bg 
        }} 
      />
    </div>
  );
}

export function Markets() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="relative py-24 bg-[#06080C] overflow-hidden  bg-cover bg-center">
      {/* Blend gradients for smooth transitions to sections above and below */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none z-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06080C] to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <div className={`max-w-md transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h3 className="text-[#3b82f6] text-[11px] font-bold tracking-[0.2em] uppercase mb-5">
              Built for a healthier market
            </h3>
            <h2 className="text-[38px] md:text-[44px] font-semibold tracking-tight text-white leading-[1.1] mb-6">
              Maker Protection
              <br />
              from Adverse selection
            </h2>
            <p className="text-neutral-400 text-[15px] leading-relaxed">
              A protected environment for makers to quote
              <br />
              with confidence and grow the market.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {/* Card 1 */}
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '200ms' }}>
              <div className="relative rounded-2xl bg-gradient-to-r from-[#111622]/80 to-[#101828]/60 border border-white/5 transition-all duration-500 p-6 flex items-center gap-6 overflow-hidden backdrop-blur-md cursor-default">
                <ShineBorder color="#3b82f6" />
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#1A233A] grid place-items-center transition-transform duration-500 relative z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <div className="flex-grow z-10 pr-12 relative">
                  <h4 className="text-white font-medium text-[15px] mb-1.5 transition-colors duration-500">
                    Deeper pools from makers
                    <br />
                    who can quote without being picked off.
                  </h4>
                  <p className="text-neutral-500 text-[13px] leading-relaxed transition-colors duration-500">
                    Stronger depth, more resilience,
                    <br />
                    and liquidity that lasts.
                  </p>
                </div>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 text-4xl font-light text-zinc-400 transition-colors duration-500 pointer-events-none z-10">
                  01
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '400ms' }}>
              <div className="relative rounded-2xl bg-gradient-to-r from-[#111622]/80 to-[#0F1C18]/60 border border-white/5 transition-all duration-500 p-6 flex items-center gap-6 overflow-hidden backdrop-blur-md cursor-default">
                <ShineBorder color="#22c55e" />
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#162923] grid place-items-center transition-transform duration-500 relative z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="15" width="4" height="5" rx="1" fill="#22c55e" fillOpacity="0.2" stroke="none" />
                    <rect x="10" y="11" width="4" height="9" rx="1" fill="#22c55e" fillOpacity="0.2" stroke="none" />
                    <rect x="16" y="5" width="4" height="15" rx="1" fill="#22c55e" fillOpacity="0.2" stroke="none" />
                    <polyline points="2 14 8 8 12 12 20 4" stroke="#4ade80" />
                    <polyline points="15 4 20 4 20 9" stroke="#4ade80" />
                  </svg>
                </div>
                <div className="flex-grow z-10 pr-12 relative">
                  <h4 className="text-white font-medium text-[15px] mb-1.5 transition-colors duration-500">
                    Better prices as safer quoting
                    <br />
                    brings more committed liquidity.
                  </h4>
                  <p className="text-neutral-500 text-[13px] leading-relaxed transition-colors duration-500">
                    More confidence from makers
                    <br />
                    leads to better prices for traders.
                  </p>
                </div>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 text-4xl font-light text-zinc-400 transition-colors duration-500 pointer-events-none z-10">
                  02
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '600ms' }}>
              <div className="relative rounded-2xl bg-gradient-to-r from-[#111622]/80 to-[#101828]/60 border border-white/5 transition-all duration-500 p-6 flex items-center gap-6 overflow-hidden backdrop-blur-md cursor-default">
                <ShineBorder color="#60a5fa" />
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#1A233A] grid place-items-center transition-transform duration-500 relative z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 20V4l-4 4" stroke="#4ade80"/>
                    <path d="M16 4v16l4-4" stroke="#3b82f6"/>
                    <line x1="12" y1="4" x2="12" y2="20" strokeDasharray="4 4" stroke="#6b7280" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="flex-grow z-10 pr-12 relative">
                  <h4 className="text-white font-medium text-[15px] mb-1.5 transition-colors duration-500">
                    Tighter spreads and fairer
                    <br />
                    execution for every trader.
                  </h4>
                  <p className="text-neutral-500 text-[13px] leading-relaxed transition-colors duration-500">
                    Improved market quality,
                    <br />
                    better outcomes for all.
                  </p>
                </div>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 text-4xl font-light text-zinc-400 transition-colors duration-500 pointer-events-none z-10">
                  03
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}