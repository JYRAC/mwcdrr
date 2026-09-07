import Logo from "@/components/ui/Logo";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink/60">
      <div className="mx-auto w-full max-w-content px-6 py-14 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div>
            <Logo
              variant="full"
              className="h-auto w-56 md:w-64"
              alt="MWCDRR — Model World Conference on Disaster Risk Reduction"
            />
            <p className="mt-8 font-display text-[0.62rem] tracking-[0.24em] text-white/35">ORGANIZED BY</p>
            <a
              href={siteConfig.organizerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-4 transition-opacity hover:opacity-70"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/jyrac-logo-white.png"
                alt=""
                width={420}
                height={290}
                loading="lazy"
                decoding="async"
                className="h-11 w-auto"
              />
              <span className="text-xs leading-relaxed text-white/55">{siteConfig.organizer}</span>
            </a>
          </div>

          <nav aria-label="フッターナビゲーション" className="flex flex-col gap-3 md:items-end">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-[0.72rem] tracking-[0.2em] text-white/60 transition-colors hover:text-gold"
            >
              INSTAGRAM
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-display text-[0.72rem] tracking-[0.2em] text-white/60 transition-colors hover:text-gold"
            >
              MAIL
            </a>
            <a
              href="/privacy"
              className="font-display text-[0.72rem] tracking-[0.2em] text-white/60 transition-colors hover:text-gold"
            >
              PRIVACY POLICY
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-[0.62rem] tracking-[0.2em] text-white/30">© 2026-2027 JYRAC</p>
          <p className="font-display text-[0.62rem] tracking-[0.2em] text-white/30">
            {siteConfig.period} — {siteConfig.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
