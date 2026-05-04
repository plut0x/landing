export function Rewards() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-[34px] font-semibold tracking-tight text-neutral-900 leading-tight">
              Built for the makers
              <br />
              who build the market
            </h2>
            <p className="mt-3 text-[14px] text-neutral-600 max-w-md">
              Liquidity is not free. Makers who quote tighter and deeper are
              rewarded for the market quality they create.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-medium transition">
              Apply as a Maker
            </button>
            <button className="px-5 py-2.5 rounded-full bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-900 text-[13px] transition">
              See Liquidity Tiers
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
                Volume-based maker rebates
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
          Quote safely, scale your size, and earn rebates that reflect the
          quality of your liquidity.
        </p>
      </div>
    </section>
  );
}
