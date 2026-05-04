export function Markets() {
  return (
    <section className="bg-[#f3f4f6] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-[34px] font-semibold tracking-tight text-neutral-900">
            An exchange designed around the maker
          </h2>
          <p className="mt-3 text-[14px] text-neutral-600">
            Six pillars that make the market healthier — visible to traders,
            <br />
            felt by makers.{" "}
            <a className="text-blue-600 underline underline-offset-2">
              Read the manifesto.
            </a>
          </p>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-12 gap-5">
          <MarketCard
            className="col-span-12 md:col-span-5 bg-black text-white"
            title="Maker Protection"
            text="Quote with confidence. Liquidity providers come first."
            visual={<ForexVisual />}
            dark
          />
          <MarketCard
            className="col-span-12 md:col-span-3"
            title="Deep Books"
            text="Tighter spreads and real depth across every listed market."
            visual={<IndicesVisual />}
          />
          <MarketCard
            className="col-span-12 md:col-span-4"
            title="Onchain Orderbook"
            text="Open depth, transparent matching, fully onchain on Solana."
            visual={<SharesVisual />}
          />

          {/* Row 2 — 3 cards */}
          <MarketCard
            className="col-span-12 md:col-span-3"
            title="Fair Execution"
            text="One market. Same rules for every taker, every maker."
            visual={<CommoditiesVisual />}
          />
          <MarketCard
            className="col-span-12 md:col-span-4"
            title="Toxic Flow Defense"
            text="Adverse interaction is identified and held accountable."
            visual={<CryptoVisual />}
          />
          <MarketCard
            className="col-span-12 md:col-span-5 bg-blue-600 text-white"
            title="Market Quality"
            text="A venue where execution is the product, not an afterthought."
            visual={<ETFVisual />}
            blue
          />
        </div>

        {/* CTAs */}
        <div className="flex justify-center gap-3 mt-10">
          <button className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-medium transition">
            Launch App
          </button>
          <button className="px-5 py-2.5 rounded-full bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-900 text-[13px] transition">
            Become a Maker
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