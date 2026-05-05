export function Rewards() {
  return (
    <section className="relative py-24 bg-[url('/bg-2.png')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-zinc-200 text-[34px] font-semibold tracking-tight text-neutral-900 leading-tight">
              Built for the makers
              <br />
              who build the market
            </h2>
            <p className="mt-3 text-[14px] text-neutral-400 max-w-md">
              Liquidity is not free. Makers who quote tighter and deeper are
              rewarded for the market quality they create.
            </p>
          </div>
        </div>



        <p className="text-center mt-12 text-[14px] text-neutral-300">
          Quote safely, scale your size, and earn rebates that reflect the
          quality of your liquidity.
        </p>
      </div>
    </section>
  );
}
