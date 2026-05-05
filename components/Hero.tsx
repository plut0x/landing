"use client";

import { type FormEvent, useEffect, useState } from "react";
export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? data.message ?? "Could not join the waitlist.");
      }

      setStatus("success");
      setMessage("You're on the waitlist.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Could not join the waitlist.",
      );
    }
  }

  return (
    <section className="relative w-full min-h-screen flex flex-col bg-black text-white overflow-hidden">
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
        className="relative z-20 w-full max-w-7xl mx-auto px-8 pt-7 flex items-center justify-between transition-all duration-700 ease-out"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        <div className="flex items-center">
          <img src="/whitelogo-nobg.png" alt="Plut0x" className="h-16 w-auto object-contain" />
        </div>
        <a href="https://x.com/plut0xtrade" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[14px] font-medium text-neutral-300 hover:text-white transition border border-white/10 hover:border-white/20 hover:bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
          </svg>
          <span>Join Us</span>
        </a>
      </nav>

      {/* Headline */}
      <div className="relative z-20 flex-1 flex flex-col justify-center max-w-4xl mx-auto px-8 text-center mb-[450px]">
        <h1
          className="text-[44px] sm:text-[56px] leading-[1.05] font-semibold tracking-tight transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "200ms",
          }}
        >
          <span className="font-serif-it font-normal">Exchange built for Makers</span>{" "}
          
          <br />
          <span className="mt-5 text-[22px] flex items-center justify-center gap-2 font-normal text-neutral-200">
            Powered by
            <img src="/solanaLogo.svg" alt="Solana" className="h-4 w-auto object-contain mt-1" />
          </span>
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
        <form
          onSubmit={handleSubmit}
          className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "600ms",
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter email"
            required
            className="w-[320px] px-6 py-2.5 rounded-full bg-neutral-800/80 border border-white/10 text-[13px] text-white placeholder:text-neutral-400 outline-none transition focus:border-blue-400/70 focus:bg-neutral-800"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-12 py-2.5 rounded-full bg-gradient-to-r from-yellow-500/10 to-amber-500/10 hover:from-yellow-500/20 hover:to-amber-500/20 border border-yellow-500/50 text-yellow-500 hover:text-yellow-400 text-[13px] font-bold transition-all backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Joining..." : "Join Waitlist"}
          </button>
        </form>
        {message ? (
          <p
            className={`mt-3 text-[13px] ${
              status === "success" ? "text-green-300" : "text-red-300"
            }`}
          >
            {message}
          </p>
        ) : null}

      </div>

    </section>
  );
}
