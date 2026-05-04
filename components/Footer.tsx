export function Footer() {
  return (
    <footer className="footer-aurora text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-1">
              <img src="/whitelogo-nobg.png" alt="POISE" className="h-8 w-auto object-contain" />
            </div>
            <p className="mt-3 text-[12px] text-neutral-400 max-w-[220px]">
              A Solana exchange built around the Maker Protection Engine.
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
              Onchain by design. Built for the next era of internet capital
              markets.
            </p>
            <div className="mt-3 text-[15px] font-semibold">
              makers@poise.xyz
            </div>
            <a className="text-[12px] text-neutral-400 underline">
              support@poise.xyz
            </a>
          </div>

          <FooterCol
            title="Markets"
            links={[
              "SOL Perps",
              "Spot",
              "All Pairs",
              "Liquidity Programs",
              "Market Status",
            ]}
          />
          <FooterCol
            title="Platform"
            links={[
              "Exchange",
              "Maker Console",
              "API & SDK",
              "Onchain Explorer",
              "Wallet Support",
              "System Status",
              "Docs",
              "Roadmap",
            ]}
          />
          <FooterCol
            title="About"
            links={[
              "Manifesto",
              "Maker Protection",
              "Brand",
              "Careers",
              "Contact",
            ]}
          />
        </div>

        <div className="mt-12 text-[10.5px] text-neutral-400 leading-relaxed space-y-3 max-w-5xl">
          <p>
            POISE is a Solana-native exchange focused on healthier market
            structure. The Maker Protection Engine is the wedge; the exchange
            itself is the product.
          </p>
          <p>
            Onchain trading involves risk. Crypto asset prices can move
            sharply, and leveraged positions can be liquidated. Nothing on this
            site constitutes investment advice. You are responsible for
            understanding the products you trade and the risks you take.
          </p>
          <p>
            POISE provides an execution-only venue. Availability of products
            and features may vary by jurisdiction. Smart contract code, market
            parameters, and platform behavior may evolve as the protocol
            matures.
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-[11px] text-neutral-300">
          <span>© POISE</span>
          <a className="hover:text-white">Terms</a>
          <a className="hover:text-white">Privacy</a>
          <a className="hover:text-white">Risk Disclosure</a>
          <a className="hover:text-white">Disclosures</a>
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