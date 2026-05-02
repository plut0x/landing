export default function Home() {
  return (
    <main className="bg-[#f3f4f6]">
      <Hero />
      <Markets />
      <Rewards />
      <Awards />
      <Trust />
      <Community />
      <Footer />
    </main>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/* HERO                                                                     */
/* ──────────────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Nav */}
      <nav className="relative z-20 max-w-7xl mx-auto px-8 pt-7 flex items-center justify-between">
        <div className="text-2xl font-semibold tracking-tight">IG</div>
        <ul className="hidden md:flex items-center gap-7 text-[13px] text-neutral-200">
          <li className="hover:text-white cursor-pointer">Trading</li>
          <li className="hover:text-white cursor-pointer">Market Analysis</li>
          <li className="hover:text-white cursor-pointer">Help</li>
          <li className="hover:text-white cursor-pointer">About us</li>
          <li className="hover:text-white cursor-pointer">Learning</li>
        </ul>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 rounded-full bg-neutral-800/80 text-[13px] hover:bg-neutral-700 transition">
            Log in
          </button>
          <button className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-[13px] font-medium transition shadow-[0_0_0_3px_rgba(37,99,235,0.18)]">
            Create Live Account
          </button>
        </div>
      </nav>

      {/* Headline */}
      <div className="relative z-20 max-w-4xl mx-auto px-8 pt-20 text-center">
        <h1 className="text-[44px] sm:text-[56px] leading-[1.05] font-semibold tracking-tight">
          <span className="font-serif-it font-normal">Trade CFDs</span> With
          The World&apos;s
          <br />
          No 1 Provider
        </h1>
        <p className="mt-6 text-[14px] text-neutral-300 max-w-xl mx-auto leading-relaxed">
          Earn Up To $150 In Cashback On Your First Trades. Got Questions? Chat
          With
          <br />
          Us Anytime Via <span className="text-white">Web Chat</span> Or{" "}
          <span className="text-white">WhatsApp</span> To Get Started.
        </p>
        <div className="mt-7 flex items-center justify-center gap-3">
          <button className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-[13px] font-medium transition">
            Create Live Account
          </button>
          <button className="px-5 py-2.5 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-[13px] transition">
            Book a Demo
          </button>
        </div>
      </div>

      {/* Eclipse illustration */}
      <div className="relative z-10 mt-14 h-[420px]">
        <div className="absolute inset-0 eclipse-rays" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] rounded-full eclipse-glow" />

        {/* Floating market cards */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[42%] w-[280px] rounded-2xl bg-neutral-900/85 backdrop-blur border border-white/10 p-3 space-y-2 shadow-2xl">
          <MarketRow
            color="bg-orange-500"
            symbol="₿"
            name="Spot Gold"
            price="102833.5"
            change="+0.57%"
          />
          <MarketRow
            color="bg-blue-500"
            symbol="W"
            name="Wall Street"
            price="47852.8"
            change="+0.13%"
          />
          <MarketRow
            color="bg-yellow-600"
            symbol="$"
            name="Spot Gold"
            price="3982.10"
            change="+0.32%"
            muted
          />
        </div>
      </div>
    </section>
  );
}

function MarketRow({
  color,
  symbol,
  name,
  price,
  change,
  muted = false,
}: {
  color: string;
  symbol: string;
  name: string;
  price: string;
  change: string;
  muted?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl px-3 py-2 ${
        muted ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center gap-2.5">
        <div
          className={`w-7 h-7 rounded-full ${color} grid place-items-center text-[12px] font-bold text-white`}
        >
          {symbol}
        </div>
        <span className="text-[13px] text-white">{name}</span>
      </div>
      <div className="text-right">
        <div className="text-[13px] text-white tabular-nums">{price}</div>
        <div className="text-[11px] text-emerald-400 tabular-nums">
          {change}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/* MARKETS                                                                  */
/* ──────────────────────────────────────────────────────────────────────── */

function Markets() {
  return (
    <section className="bg-[#f3f4f6] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-[34px] font-semibold tracking-tight text-neutral-900">
            Access 17,000+ Markets All In One
          </h2>
          <p className="mt-3 text-[14px] text-neutral-600">
            Trade a wide range of global markets 24/7, with spreads as
            <br />
            low as 0.1 points.{" "}
            <a className="text-blue-600 underline underline-offset-2">
              View all markets.
            </a>
          </p>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-12 gap-5">
          <MarketCard
            className="col-span-12 md:col-span-5 bg-black text-white"
            title="Forex"
            text="Long or short currency pairs like EUR/USD & USD/JPY."
            visual={<ForexVisual />}
            dark
          />
          <MarketCard
            className="col-span-12 md:col-span-3"
            title="Indices"
            text="Trade 80+ global indices like the US 500 & FTSE 100."
            visual={<IndicesVisual />}
          />
          <MarketCard
            className="col-span-12 md:col-span-4"
            title="Shares"
            text="Benefit from longer trading hours on 13,000+ shares."
            visual={<SharesVisual />}
          />

          {/* Row 2 — 3 cards */}
          <MarketCard
            className="col-span-12 md:col-span-3"
            title="Commodities"
            text="Trade popular commodities like gold, oil, and natural gas."
            visual={<CommoditiesVisual />}
          />
          <MarketCard
            className="col-span-12 md:col-span-4"
            title="Cryptocurrencies"
            text="Jump on the latest crypto trends, no wallet required."
            visual={<CryptoVisual />}
          />
          <MarketCard
            className="col-span-12 md:col-span-5 bg-blue-600 text-white"
            title="ETFs"
            text="Choose from 5,400+ ETFs across a range of markets."
            visual={<ETFVisual />}
            blue
          />
        </div>

        {/* CTAs */}
        <div className="flex justify-center gap-3 mt-10">
          <button className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-medium transition">
            Create Live Account
          </button>
          <button className="px-5 py-2.5 rounded-full bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-900 text-[13px] transition">
            Create Demo Account
          </button>
        </div>
      </div>
    </section>
  );
}

function MarketCard({
  className = "",
  title,
  text,
  visual,
  dark = false,
  blue = false,
}: {
  className?: string;
  title: string;
  text: string;
  visual: React.ReactNode;
  dark?: boolean;
  blue?: boolean;
}) {
  const subText = dark
    ? "text-neutral-400"
    : blue
      ? "text-blue-100"
      : "text-neutral-500";
  return (
    <div
      className={`relative rounded-2xl overflow-hidden p-6 h-[210px] bg-white ${className}`}
    >
      <h3 className="text-[16px] font-semibold tracking-tight">{title}</h3>
      <p className={`mt-2 text-[12.5px] leading-relaxed max-w-[170px] ${subText}`}>
        {text}
      </p>
      <div className="absolute right-0 bottom-0 w-3/5 h-3/5">{visual}</div>
    </div>
  );
}

/* — Visuals (CSS-only 3D-ish illustrations) — */

function ForexVisual() {
  return (
    <div className="relative w-full h-full">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-md"
          style={{
            left: `${20 + i * 35}px`,
            top: `${i * 22}px`,
            width: "100px",
            height: "60px",
            background:
              "linear-gradient(135deg, #e5e7eb 0%, #9ca3af 60%, #6b7280 100%)",
            transform: "perspective(400px) rotateX(55deg) rotateZ(-15deg)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
          <div className="absolute inset-0 grid place-items-center text-red-600 text-2xl font-bold">
            $
          </div>
        </div>
      ))}
    </div>
  );
}

function IndicesVisual() {
  return (
    <div className="relative w-full h-full">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute bottom-2 rounded-full"
          style={{
            left: `${i * 24}px`,
            width: "22px",
            height: `${40 + i * 14}px`,
            background:
              "linear-gradient(180deg, #e5e7eb 0%, #9ca3af 50%, #4b5563 100%)",
            boxShadow: "inset -2px 0 4px rgba(0,0,0,0.3)",
          }}
        />
      ))}
    </div>
  );
}

function SharesVisual() {
  return (
    <div className="relative w-full h-full">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-xl bg-neutral-800"
          style={{
            left: `${i * 26}px`,
            top: `${i * 14}px`,
            width: "78px",
            height: "78px",
            transform: "perspective(400px) rotateX(55deg) rotateZ(-12deg)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
          }}
        >
          <div className="absolute inset-0 grid place-items-center">
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-white">
              <path
                fill="currentColor"
                d="M16.365 12.235c-.024-2.527 2.064-3.737 2.158-3.797-1.176-1.72-3.005-1.957-3.654-1.984-1.555-.157-3.034.918-3.823.918-.79 0-2.001-.895-3.293-.871-1.694.025-3.257.985-4.13 2.504-1.762 3.054-.451 7.572 1.265 10.052.84 1.215 1.84 2.578 3.149 2.53 1.262-.05 1.74-.819 3.265-.819 1.524 0 1.957.819 3.293.792 1.36-.024 2.224-1.236 3.057-2.456.965-1.41 1.362-2.78 1.386-2.85-.03-.013-2.658-1.02-2.682-4.019zM13.78 4.6c.694-.84 1.163-2.005 1.034-3.165-.999.04-2.21.665-2.928 1.5-.643.74-1.207 1.92-1.054 3.06 1.114.087 2.253-.566 2.948-1.395z"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

function CommoditiesVisual() {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute left-2 bottom-0 w-10 h-16 rounded-sm"
        style={{
          background:
            "linear-gradient(180deg, #d6d3d1 0%, #a8a29e 60%, #6b7280 100%)",
        }}
      />
      <div
        className="absolute left-14 bottom-0 w-12 h-20 rounded-md"
        style={{
          background:
            "linear-gradient(180deg, #1f2937 0%, #111827 60%, #030712 100%)",
        }}
      >
        <div className="absolute top-3 left-0 right-0 h-px bg-neutral-700" />
        <div className="absolute bottom-3 left-0 right-0 h-px bg-neutral-700" />
      </div>
      <div
        className="absolute left-28 bottom-0 w-10 h-16 rounded-sm"
        style={{
          background:
            "linear-gradient(180deg, #fde68a 0%, #d97706 60%, #92400e 100%)",
        }}
      />
    </div>
  );
}

function CryptoVisual() {
  return (
    <div className="relative w-full h-full">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-full grid place-items-center"
          style={{
            left: `${10 + i * 30}px`,
            top: `${i * 14}px`,
            width: "70px",
            height: "70px",
            background:
              "radial-gradient(circle at 30% 30%, #4b5563, #111827 70%)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.45)",
          }}
        >
          <span className="text-red-500 text-2xl font-bold">₿</span>
        </div>
      ))}
    </div>
  );
}

function ETFVisual() {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute right-2 bottom-0 w-32 h-32 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #6b7280 0%, #1f2937 60%, #030712 100%)",
          boxShadow: "inset -20px -20px 40px rgba(0,0,0,0.6)",
        }}
      >
        <div
          className="absolute inset-3 rounded-full opacity-80 mix-blend-screen"
          style={{
            background:
              "radial-gradient(20px 14px at 35% 35%, #9ca3af, transparent 70%), radial-gradient(28px 16px at 60% 45%, #9ca3af, transparent 70%), radial-gradient(18px 10px at 50% 70%, #9ca3af, transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/* REWARDS                                                                  */
/* ──────────────────────────────────────────────────────────────────────── */

function Rewards() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-[34px] font-semibold tracking-tight text-neutral-900 leading-tight">
              Enjoy Exclusive
              <br />
              Rewards And Rebates
            </h2>
            <p className="mt-3 text-[14px] text-neutral-600 max-w-md">
              Get more from your trading by earning additional funds based on
              your activity.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-medium transition">
              Create Live Account
            </button>
            <button className="px-5 py-2.5 rounded-full bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-900 text-[13px] transition">
              Create Demo Account
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Spheres card */}
          <div className="rounded-2xl bg-neutral-100 p-6 h-[280px] relative overflow-hidden">
            <div className="absolute inset-x-6 inset-y-10 grid place-items-center">
              <div className="grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, #ffffff, #d4d4d8 70%, #71717a 100%)",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[12px] font-medium">
              +13
            </div>
          </div>

          {/* Volume bars card */}
          <div className="rounded-2xl bg-blue-600 p-6 h-[280px] relative overflow-hidden text-white">
            <div className="absolute inset-x-10 bottom-16 flex items-end justify-between gap-2 h-32">
              {[40, 50, 55, 70, 85, 100].map((h, i) => (
                <div
                  key={i}
                  className="bar"
                  style={{ height: `${h}%`, opacity: 0.6 + i * 0.07 }}
                />
              ))}
            </div>
            <div className="absolute inset-x-10 bottom-10 flex justify-between text-[10px] text-blue-100 tabular-nums">
              <span>1W</span>
              <span>1M</span>
              <span>6M</span>
              <span>1Y</span>
              <span>2Y</span>
              <span>3Y</span>
            </div>
            <div className="absolute -bottom-3 left-0 right-0 text-center">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white text-neutral-900 text-[13px] font-semibold">
                Volume-based rebates
              </div>
            </div>
          </div>

          {/* Green disk card */}
          <div className="rounded-2xl bg-neutral-100 p-6 h-[280px] relative overflow-hidden">
            <div
              className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-72 h-72 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, #ecfccb, #84cc16 50%, #15803d 100%)",
                boxShadow: "inset -30px -30px 60px rgba(0,0,0,0.4)",
              }}
            />
            <button className="absolute right-5 bottom-5 w-12 h-12 rounded-full bg-blue-600 grid place-items-center text-white shadow-lg hover:bg-blue-500 transition">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <p className="text-center mt-12 text-[14px] text-neutral-700">
          Benefit from rebates on your spreads or commissions when trading high
          volumes.
        </p>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/* AWARDS                                                                   */
/* ──────────────────────────────────────────────────────────────────────── */

function Awards() {
  const features = [
    "Fast, easy-to-use web platform and app",
    "Access to the popular MetaTrader 4",
    "Risk-management & alerts tools",
    "L2 dealer, Pro Real Time & Trading View",
  ];
  return (
    <section className="bg-[#0a0d18] text-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-center text-[32px] font-semibold tracking-tight mb-12">
          Experience With Award - Winning Platforms
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left checklist */}
          <div className="space-y-3 max-w-md">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/10"
              >
                <CheckIcon />
                <span className="text-[13.5px] text-neutral-200">{f}</span>
              </div>
            ))}

            {/* Testimonial pill */}
            <div className="mt-4 flex items-center gap-3 px-3 py-3 rounded-xl bg-white text-neutral-900">
              <div className="flex -space-x-2">
                {["#fbbf24", "#fb7185", "#60a5fa"].map((c) => (
                  <div
                    key={c}
                    className="w-8 h-8 rounded-full border-2 border-white grid place-items-center text-[10px] font-semibold text-white"
                    style={{ background: c }}
                  >
                    ★
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-neutral-700 leading-snug">
                Our caring team ensures comfortable and
                <br />
                painless visits for every patient.
              </p>
            </div>

            <button className="mt-4 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-[13.5px] font-medium transition">
              Explore Platforms
            </button>
          </div>

          {/* Right blob */}
          <div className="relative h-[360px] grid place-items-center">
            <div className="aurora-blob w-[300px] h-[300px]" />
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

/* ──────────────────────────────────────────────────────────────────────── */
/* TRUST                                                                    */
/* ──────────────────────────────────────────────────────────────────────── */

function Trust() {
  return (
    <section className="bg-[#0a0d18] pb-0">
      <div className="max-w-7xl mx-auto px-8">
        <div className="rounded-3xl bg-white p-10 md:p-14 -mb-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            <div className="md:col-span-2">
              <h2 className="text-[30px] font-semibold tracking-tight text-neutral-900 leading-tight">
                Join 400,000+ Traders
                <br />
                Who Trust Us
              </h2>
              <p className="mt-3 text-[13px] text-neutral-600 max-w-xs">
                Everything you need to trade the markets
              </p>
            </div>

            <Stat number="17,000+" label="Markets available" badge="#1" />
            <Stat number="50+" label="Years experience" />
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2" />
            <Stat number="FTSE 250" label="Listed company" small />
            <Stat number="18" label="Offices globally" small />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  number,
  label,
  badge,
  small,
}: {
  number: string;
  label: string;
  badge?: string;
  small?: boolean;
}) {
  return (
    <div className="relative px-2">
      {badge && (
        <span className="absolute -top-3 left-0 text-[10px] text-neutral-400">
          {badge}
        </span>
      )}
      <div
        className={`${
          small ? "text-[26px]" : "text-[32px]"
        } font-semibold tracking-tight text-neutral-900`}
      >
        {number}
      </div>
      <div className="mt-1 text-[10.5px] uppercase tracking-[0.14em] text-neutral-500">
        {label}
      </div>
      <CornerTicks />
    </div>
  );
}

function CornerTicks() {
  return (
    <>
      <span className="absolute -top-2 -left-2 w-2 h-2 border-t border-l border-neutral-300" />
      <span className="absolute -top-2 -right-2 w-2 h-2 border-t border-r border-neutral-300" />
      <span className="absolute -bottom-2 -left-2 w-2 h-2 border-b border-l border-neutral-300" />
      <span className="absolute -bottom-2 -right-2 w-2 h-2 border-b border-r border-neutral-300" />
    </>
  );
}

/* ──────────────────────────────────────────────────────────────────────── */
/* COMMUNITY                                                                */
/* ──────────────────────────────────────────────────────────────────────── */

function Community() {
  const steps = [
    {
      title: "Answer some questions",
      text: "Tell us a bit more about you.",
    },
    {
      title: "Verify your account",
      text: "This can usually be done instantly.",
    },
    {
      title: "Fund and start trading",
      text: "Deposit via credit card, Wise or bank transfer.",
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
            Start your trading journey today with
            <br />a trusted global platform.
          </h2>
          <p className="mt-3 text-[13px] text-neutral-300 max-w-md">
            Sign up in minutes and explore thousands of markets with confidence
            and security.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-5">
            <h3 className="text-[15px] font-semibold">Join our IG community</h3>
            <p className="text-[12px] text-neutral-400 mt-1">
              Get started in 3 simple steps.
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
              Create Live Account
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

/* ──────────────────────────────────────────────────────────────────────── */
/* FOOTER                                                                   */
/* ──────────────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="footer-aurora text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="text-2xl font-semibold">IG</div>
            <p className="mt-3 text-[12px] text-neutral-400 max-w-[220px]">
              IG International Limited is part of the IG Group.
            </p>
            <div className="flex gap-3 mt-4">
              {["▶", "📷", "𝕏", "f"].map((s) => (
                <div
                  key={s}
                  className="w-8 h-8 rounded-md bg-white/10 grid place-items-center text-[13px] hover:bg-white/20 transition cursor-pointer"
                >
                  {s}
                </div>
              ))}
            </div>
            <p className="mt-5 text-[12px] text-neutral-400 max-w-[260px]">
              IG Group established in London in 1974 and is a constituent of the
              FTSE 250 index.
            </p>
            <div className="mt-3 text-[15px] font-semibold">
              (603) 856-01253
            </div>
            <a className="text-[12px] text-neutral-400 underline">
              iggroup@example.com
            </a>
          </div>

          <FooterCol
            title="Markets"
            links={[
              "Share CFDs",
              "Forex",
              "Indices",
              "Commodities",
              "Other markets",
            ]}
          />
          <FooterCol
            title="Trading platforms"
            links={[
              "Web platform",
              "Trading apps",
              "TradingView",
              "MetaTrader 4",
              "MetaTrader 5",
              "ProRealTime",
              "Compare features",
              "Demo",
            ]}
          />
          <FooterCol
            title="About"
            links={[
              "Charges and margins",
              "Premium services",
              "Refer a friend",
              "Marketing partnerships",
              "Corporate accounts",
            ]}
          />
        </div>

        <div className="mt-12 text-[10.5px] text-neutral-400 leading-relaxed space-y-3 max-w-5xl">
          <p>
            IG International Limited is part of the IG Group and its ultimate
            parent company is IG Group Holdings Plc. IG Group established in
            London in 1974, and it is a constituent of the FTSE 250 index.
          </p>
          <p>
            The risks of loss from investing in CFDs can be substantial and the
            value of your investments may fluctuate. 71% of retail client
            accounts lose money when trading CFDs, with this investment
            provider. CFDs are complex instruments and come with a high risk of
            losing money rapidly due to leverage. You should consider whether
            you understand how this product works, and whether you can afford to
            take the high risk of losing your money.
          </p>
          <p>
            CFD Accounts provided by IG International Limited. IG International
            Limited is licensed to conduct investment business and ancillary
            services by the Bermuda Monetary Authority. IG provides an
            execution-only service. The information on this site does not
            constitute and should not be construed as investment advice.
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-[11px] text-neutral-300">
          <span>© IG</span>
          <a className="hover:text-white">Terms and agreements</a>
          <a className="hover:text-white">Privacy</a>
          <a className="hover:text-white">How to fund</a>
          <a className="hover:text-white">Vulnerability</a>
          <a className="hover:text-white">Cookies</a>
          <a className="hover:text-white">More ▾</a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-[13px] font-semibold mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li
            key={l}
            className="text-[12.5px] text-neutral-400 hover:text-white cursor-pointer transition"
          >
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}
