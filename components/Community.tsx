export function Community() {
  const steps = [
    {
      title: "Connect your Solana wallet",
      text: "One click. Onchain from the first interaction.",
    },
    {
      title: "Choose your role",
      text: "Trade as a taker or quote as a maker.",
    },
    {
      title: "Trade with confidence",
      text: "Open books, fair rules, real protection.",
    },
  ];
  return (
    <section className="mountain-bg text-white pt-24 pb-32 relative">
      {/* mountain silhouette */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] pointer-events-none">
        <svg
          viewBox="0 0 1440 600"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="mtn" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#020617" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="mtn2" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0f172a" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#020617" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M0,420 L200,360 L380,260 L560,200 L720,140 L880,210 L1060,290 L1240,350 L1440,400 L1440,600 L0,600 Z"
            fill="url(#mtn)"
          />
          <path
            d="M0,500 L160,460 L300,420 L460,380 L640,440 L820,400 L1000,470 L1200,440 L1440,500 L1440,600 L0,600 Z"
            fill="url(#mtn2)"
          />
          {[80, 220, 1100, 1280].map((x) => (
            <g key={x} fill="#0b132a" opacity="0.85">
              <polygon points={`${x},540 ${x - 12},580 ${x + 12},580`} />
              <polygon points={`${x},525 ${x - 14},570 ${x + 14},570`} />
            </g>
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="max-w-xl">
          <h2 className="text-[34px] font-semibold tracking-tight leading-tight">
            Trade on a venue built for the
            <br />
            next era of market quality.
          </h2>
          <p className="mt-3 text-[13px] text-neutral-300 max-w-md">
            Open books. Fair execution. Protection that takes liquidity
            seriously.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-5">
            <h3 className="text-[15px] font-semibold flex items-center gap-1.5">
              Get started on <img src="/whitelogo-nobg.png" alt="Plut0x" className="h-8 w-auto object-contain" />
            </h3>
            <p className="text-[12px] text-neutral-400 mt-1">
              Three steps to your first trade.
            </p>
            <div className="mt-4 space-y-2">
              {steps.map((s) => (
                <div
                  key={s.title}
                  className="flex items-start gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10"
                >
                  <div className="mt-0.5">
                    <CheckIcon />
                  </div>
                  <div>
                    <div className="text-[13px] font-medium">{s.title}</div>
                    <div className="text-[11.5px] text-neutral-400">
                      {s.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-[13.5px] font-medium transition">
              Launch App
            </button>
          </div>

          {/* Astronaut visual */}
          <div className="rounded-2xl overflow-hidden h-[360px] relative bg-gradient-to-br from-blue-950 via-indigo-900 to-black">
            <div
              className="absolute inset-0 opacity-90"
              style={{
                background:
                  "radial-gradient(50% 60% at 50% 40%, rgba(59,130,246,0.45), transparent 65%), radial-gradient(40% 40% at 70% 70%, rgba(99,102,241,0.4), transparent 60%)",
              }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative w-44 h-44">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-200 to-slate-500" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-slate-800 to-black" />
                <div className="absolute top-8 left-8 w-12 h-3 rounded-full bg-white/30 blur-sm" />
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-12 rounded-full bg-blue-500/40 blur-2xl" />
              </div>
            </div>
            <div className="absolute right-6 bottom-6 w-10 h-10 rounded-md bg-orange-400 shadow-lg blur-[1px]" />
          </div>
        </div>
      </div>
    </section>
  );
}


function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-blue-600 grid place-items-center shrink-0">
      <svg
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
      >
        <path d="M5 12l5 5L20 7" />
      </svg>
    </div>
  );
}