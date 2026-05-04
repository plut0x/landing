export function Trust() {
  return (
    <section className="bg-[#0a0d18] pb-0">
      <div className="max-w-7xl mx-auto px-8">
        <div className="rounded-3xl bg-white p-10 md:p-14 -mb-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            <div className="md:col-span-2">
              <h2 className="text-[30px] font-semibold tracking-tight text-neutral-900 leading-tight">
                Liquidity is not free.
                <br />
                Market quality is designed.
              </h2>
              <p className="mt-3 text-[13px] text-neutral-600 max-w-xs">
                The principles a serious exchange is built on.
              </p>
            </div>

            <Stat number="100%" label="Onchain execution" badge="Native" />
            <Stat number="Maker-first" label="Market structure" />
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2" />
            <Stat number="Solana" label="Native venue" small />
            <Stat number="Open" label="Execution rules" small />
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