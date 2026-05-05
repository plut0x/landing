export function Markets() {
  return (
    <section className="relative py-24 bg-[#06080C] overflow-hidden bg-[url('/bg-5.png')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <div className="max-w-md">
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
            <div className="relative rounded-2xl bg-gradient-to-r from-[#111622]/80 to-[#101828]/60 border border-white/5 p-6 flex items-center gap-6 overflow-hidden backdrop-blur-md">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#1A233A] grid place-items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className="flex-grow z-10 pr-12">
                <h4 className="text-white font-medium text-[15px] mb-1.5">
                  Deeper pools from makers
                  <br />
                  who can quote without being picked off.
                </h4>
                <p className="text-neutral-500 text-[13px] leading-relaxed">
                  Stronger depth, more resilience,
                  <br />
                  and liquidity that lasts.
                </p>
              </div>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 text-4xl font-light text-[#2A344A] pointer-events-none">
                01
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-2xl bg-gradient-to-r from-[#111622]/80 to-[#0F1C18]/60 border border-white/5 p-6 flex items-center gap-6 overflow-hidden backdrop-blur-md">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#162923] grid place-items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="14"/>
                  <polyline points="4 12 10 6 14 10 20 4"/>
                </svg>
              </div>
              <div className="flex-grow z-10 pr-12">
                <h4 className="text-white font-medium text-[15px] mb-1.5">
                  Better prices as safer quoting
                  <br />
                  brings more committed liquidity.
                </h4>
                <p className="text-neutral-500 text-[13px] leading-relaxed">
                  More confidence from makers
                  <br />
                  leads to better prices for traders.
                </p>
              </div>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 text-4xl font-light text-[#223B33] pointer-events-none">
                02
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-2xl bg-gradient-to-r from-[#111622]/80 to-[#101828]/60 border border-white/5 p-6 flex items-center gap-6 overflow-hidden backdrop-blur-md">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#1A233A] grid place-items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19V5l-4 4" stroke="#4ade80"/>
                  <path d="M15 5v14l4-4" stroke="#3b82f6"/>
                  <line x1="12" y1="5" x2="12" y2="19" strokeDasharray="3 3" stroke="#6b7280" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="flex-grow z-10 pr-12">
                <h4 className="text-white font-medium text-[15px] mb-1.5">
                  Tighter spreads and fairer
                  <br />
                  execution for every trader.
                </h4>
                <p className="text-neutral-500 text-[13px] leading-relaxed">
                  Improved market quality,
                  <br />
                  better outcomes for all.
                </p>
              </div>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 text-4xl font-light text-[#2A344A] pointer-events-none">
                03
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-24 mb-4 flex justify-center items-center gap-2.5 text-neutral-400 text-[13px]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9 12 2"/>
          </svg>
          <span>Quote safely, scale your size, and earn rebates that reflect the quality of your liquidity.</span>
        </div>
      </div>
    </section>
  );
}