
import { useState, useEffect } from "react";
export function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Hero background image from public/hero-section.png */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-section.png')" }}
      />
      <div className="absolute inset-0 z-0 bg-black/45" />

      {/* Nav */}
      <nav className="relative z-20 max-w-7xl mx-auto px-8 pt-7 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/whitelogo-nobg.png" alt="Plut0x" className="h-16 w-auto object-contain" />
        </div>
        {/* <ul className="hidden md:flex items-center gap-7 text-[13px] text-neutral-200">
          <li className="hover:text-white cursor-pointer">Exchange</li>
          <li className="hover:text-white cursor-pointer">Markets</li>
          <li className="hover:text-white cursor-pointer">Maker Protection</li>
          <li className="hover:text-white cursor-pointer">Docs</li>
          <li className="hover:text-white cursor-pointer">About</li>
        </ul> */}
        {/* <div className="flex items-center gap-2">
          <button className="px-4 py-2 rounded-full bg-neutral-800/80 text-[13px] hover:bg-neutral-700 transition">
            Sign in
          </button>
          <button className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-[13px] font-medium transition shadow-[0_0_0_3px_rgba(37,99,235,0.18)]">
            Launch App
          </button>
        </div> */}
      </nav>

      {/* Headline */}
      <div className="relative z-20 max-w-4xl mx-auto px-8 pt-20 text-center">
        <h1 className="text-[44px] sm:text-[56px] leading-[1.05] font-semibold tracking-tight">
          <span className="font-serif-it font-normal">A Solana exchange</span>{" "}
          built around
          <br />
          Maker Protection
        </h1>
        <p className="mt-6 text-[14px] text-neutral-300 max-w-xl mx-auto leading-relaxed">
          Tighter spreads. Deeper books. Safer quoting.
          <br />
          The market quality Solana has been{" "}
          <span className="text-white">missing</span> built{" "}
          <span className="text-white">only for you</span>.
        </p>
        <div className="mt-7 flex items-center justify-center gap-3">
          <button className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-[13px] font-medium transition">
            Join Waitlist
          </button>
          <input
            type="email"
            placeholder="Enter email"
            className="w-[210px] px-5 py-2.5 rounded-full bg-neutral-800/80 border border-white/10 text-[13px] text-white placeholder:text-neutral-400 outline-none transition focus:border-blue-400/70 focus:bg-neutral-800"
          />
        </div>
      </div>

      {/* Hero market visual */}
      <div className="relative z-10 mt-14 h-[420px]">
        {/* Floating market cards */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[42%] w-[280px] rounded-2xl bg-neutral-900/85 backdrop-blur border border-white/10 p-3 shadow-2xl">
          <MarketTicker />
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
      className="flex items-center justify-between rounded-xl px-3 py-2"
      style={{
        opacity: muted ? 0.35 : 1,
        filter: muted ? "blur(0.6px)" : "none",
        transition: "opacity 0.3s ease, filter 0.3s ease",
      }}
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
        <div
          className={`text-[11px] tabular-nums ${change.startsWith("-") ? "text-red-400" : "text-emerald-400"}`}
        >
          {change}
        </div>
      </div>
    </div>
  );
}

const TICKER_MARKETS = [
  { color: "bg-violet-500", symbol: "◎", name: "SOL-USDC", price: "248.34", change: "+0.57%" },
  { color: "bg-orange-500", symbol: "₿", name: "BTC-USDC", price: "102,833", change: "+0.13%" },
  { color: "bg-emerald-500", symbol: "J", name: "JTO-USDC", price: "3.982", change: "+0.32%" },
  { color: "bg-blue-400",   symbol: "W", name: "WIF-USDC", price: "1.847",  change: "+1.14%" },
  { color: "bg-yellow-400", symbol: "◉", name: "BONK-USDC", price: "0.0000312", change: "-0.45%" },
  { color: "bg-pink-500",   symbol: "P", name: "PYTH-USDC", price: "0.284",  change: "+2.31%" },
];

const ROW_H = 44; // px — height of each MarketRow slot

function MarketTicker() {
  const [offset, setOffset] = useState(0);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setSliding(true), 300);
    return () => clearInterval(id);
  }, []);

  function onTransitionEnd() {
    setSliding(false);
    setOffset((o) => (o + 1) % TICKER_MARKETS.length);
  }

  // Render 5 items: 4 visible slots + 1 item that slides up into view from below
  const items = Array.from({ length: 5 }, (_, i) =>
    TICKER_MARKETS[(offset + i) % TICKER_MARKETS.length],
  );

  return (
    <div style={{ height: ROW_H * 4, overflow: "hidden" }}>
      <div
        style={{
          transform: sliding ? `translateY(-${ROW_H}px)` : "translateY(0px)",
          transition: sliding ? "transform 0.5s cubic-bezier(0.4,0,0.2,1)" : "none",
        }}
        onTransitionEnd={onTransitionEnd}
      >
        {items.map((m, i) => (
          <div key={`${offset}-${i}`} style={{ height: ROW_H }}>
            <MarketRow {...m} muted={i >= 3} />
          </div>
        ))}
      </div>
    </div>
  );
}