
import { useState, useEffect } from "react";
export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Hero background image from public/hero-section.png */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-section.png')" }}
      />
      <div className="absolute inset-0 z-0 bg-black/45" />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes space-breathe-2 {
          0%, 100% { transform: translateX(-50%) translateY(0) scale(1); opacity: 0.4; }
          50% { transform: translateX(-70%) translateY(-10%) scale(1.5); opacity: 1; }
        }
      `}} />

      {/* Ambient Electric Cyan Glow */}
      <div 
        className="absolute top-[20%] left-1/2 w-[800px] h-[500px] bg-cyan-500/20 rounded-full blur-[160px] pointer-events-none z-0" 
        style={{ animation: 'space-breathe-2 8s ease-in-out infinite' }}
      />

      {/* Nav */}
      <nav
        className="relative z-20 max-w-7xl mx-auto px-8 pt-7 flex items-center justify-between transition-all duration-700 ease-out"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        <div className="flex items-center">
          <img src="/whitelogo-nobg.png" alt="Plut0x" className="h-16 w-auto object-contain" />
        </div>
        <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
          </svg>
          <span>Join Us</span>
        </a>
      </nav>

      {/* Headline */}
      <div className="relative z-20 max-w-4xl mx-auto px-8 pt-20 text-center">
        <h1
          className="text-[44px] sm:text-[56px] leading-[1.05] font-semibold tracking-tight transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "200ms",
          }}
        >
          <span className="font-serif-it font-normal">A Solana exchange</span>{" "}
          built around
          <br />
          Maker Protection
        </h1>
        <p
          className="mt-6 text-[14px] text-neutral-300 max-w-xl mx-auto leading-relaxed transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "400ms",
          }}
        >
          Tighter spreads. Deeper books. Safer quoting.
          <br />
          The market quality Solana has been{" "}
          <span className="text-white">missing</span> built{" "}
          <span className="text-white">only for you</span>.
        </p>
        <div
          className="mt-7 flex items-center justify-center gap-3 transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "600ms",
          }}
        >
          <button className="px-12 py-2.5 rounded-full bg-gradient-to-r from-yellow-500/10 to-amber-500/10 hover:from-yellow-500/20 hover:to-amber-500/20 border border-yellow-500/50 text-yellow-500 hover:text-yellow-400 text-[13px] font-bold transition-all backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]">
            Join Waitlist
          </button>
          <input
            type="email"
            placeholder="Enter email"
            className="w-[320px] px-6 py-2.5 rounded-full bg-neutral-800/80 border border-white/10 text-[13px] text-white placeholder:text-neutral-400 outline-none transition focus:border-blue-400/70 focus:bg-neutral-800"
          />
        </div>
        <p
          className="font-serif-it mt-8 text-[20px] text-yellow-200 font-bold transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "800ms",
          }}
        >
          Join the waitlist now to stay connected
        </p>
      </div>

      {/* Hero market visual */}
      <div className="relative z-10 mt-14 h-[420px]">
      </div>
    </section>
  );
}


// function MarketRow({
//   color,
//   symbol,
//   name,
//   price,
//   change,
//   muted = false,
// }: {
//   color: string;
//   symbol: string;
//   name: string;
//   price: string;
//   change: string;
//   muted?: boolean;
// }) {
//   return (
//     <div
//       className="flex items-center justify-between rounded-xl px-3 py-2"
//       style={{
//         opacity: muted ? 0.35 : 1,
//         filter: muted ? "blur(0.6px)" : "none",
//         transition: "opacity 0.3s ease, filter 0.3s ease",
//       }}
//     >
//       <div className="flex items-center gap-2.5">
//         <div
//           className={`w-7 h-7 rounded-full ${color} grid place-items-center text-[12px] font-bold text-white`}
//         >
//           {symbol}
//         </div>
//         <span className="text-[13px] text-white">{name}</span>
//       </div>
//       <div className="text-right">
//         <div className="text-[13px] text-white tabular-nums">{price}</div>
//         <div
//           className={`text-[11px] tabular-nums ${change.startsWith("-") ? "text-red-400" : "text-emerald-400"}`}
//         >
//           {change}
//         </div>
//       </div>
//     </div>
//   );
// }

// const TICKER_MARKETS = [
//   { color: "bg-violet-500", symbol: "◎", name: "SOL-USDC", price: "248.34", change: "+0.57%" },
//   { color: "bg-orange-500", symbol: "₿", name: "BTC-USDC", price: "102,833", change: "+0.13%" },
//   { color: "bg-emerald-500", symbol: "J", name: "JTO-USDC", price: "3.982", change: "+0.32%" },
//   { color: "bg-blue-400",   symbol: "W", name: "WIF-USDC", price: "1.847",  change: "+1.14%" },
//   { color: "bg-yellow-400", symbol: "◉", name: "BONK-USDC", price: "0.0000312", change: "-0.45%" },
//   { color: "bg-pink-500",   symbol: "P", name: "PYTH-USDC", price: "0.284",  change: "+2.31%" },
// ];

// const ROW_H = 44; // px — height of each MarketRow slot

// function MarketTicker() {
//   const [offset, setOffset] = useState(0);
//   const [sliding, setSliding] = useState(false);

//   useEffect(() => {
//     const id = setInterval(() => setSliding(true), 300);
//     return () => clearInterval(id);
//   }, []);

//   function onTransitionEnd() {
//     setSliding(false);
//     setOffset((o) => (o + 1) % TICKER_MARKETS.length);
//   }

//   // Render 5 items: 4 visible slots + 1 item that slides up into view from below
//   const items = Array.from({ length: 5 }, (_, i) =>
//     TICKER_MARKETS[(offset + i) % TICKER_MARKETS.length],
//   );

//   return (
//     <div style={{ height: ROW_H * 4, overflow: "hidden" }}>
//       <div
//         style={{
//           transform: sliding ? `translateY(-${ROW_H}px)` : "translateY(0px)",
//           transition: sliding ? "transform 0.5s cubic-bezier(0.4,0,0.2,1)" : "none",
//         }}
//         onTransitionEnd={onTransitionEnd}
//       >
//         {items.map((m, i) => (
//           <div key={`${offset}-${i}`} style={{ height: ROW_H }}>
//             <MarketRow {...m} muted={i >= 3} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }