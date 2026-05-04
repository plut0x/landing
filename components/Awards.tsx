
export function Awards() {
  const features = [
    "Maker Protection Engine at the core",
    "Onchain orderbook with visible depth",
    "Transparent rules, transparent execution",
    "Pro-grade interface, API & SDK",
  ];
  return (
    <section className="bg-[#0a0d18] text-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-center text-[32px] font-semibold tracking-tight mb-12">
          A venue engineered for market quality
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
                Trusted by makers who care about
                <br />
                spreads, depth, and fair execution.
              </p>
            </div>

            <button className="mt-4 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-[13.5px] font-medium transition">
              Explore the Exchange
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