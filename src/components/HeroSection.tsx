import { ChevronDown } from "lucide-react"
import { translations } from "@/data/candiData"
import heroBg from "@/imports/hero-bg.jpg"

interface HeroSectionProps {
  t: typeof translations["ID"]
}

export default function HeroSection({ t }: HeroSectionProps) {
  return (
    <section
      id="beranda"
      data-theme="dark"
      className="relative flex flex-col w-full max-w-full overflow-x-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background & Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950">
        <img
          src={heroBg}
          alt="Situs Candi Majapahit dengan bunga kamboja di pelataran rumput"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      {/* Overlay bg-black/40 & dark gradient */}
      <div
        className="absolute inset-0 pointer-events-none bg-black/40"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,18,32,0.65) 0%, rgba(10,18,32,0.35) 50%, rgba(10,18,32,0.8) 100%)",
        }}
      />

      {/* Content — Vertically centered spacing */}
      <div className="relative z-10 flex flex-col flex-1 justify-between pt-16">
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Badge — Plain minimal uppercase text */}
          <p className="mb-2 sm:mb-3 text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#fcdab7]">
            {t.badge}
          </p>

          {/* Title */}
          <h1
            className="mb-3 sm:mb-4 text-2xl sm:text-4xl md:text-5xl leading-tight font-bold tracking-tight text-white px-2"
            style={{
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {t.h1[0]} <span style={{ color: "#fcdab7" }}>{t.h1[1]}</span>
          </h1>

          {/* Subtitle Description */}
          <p
            className="mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-md mx-auto font-normal"
            style={{
              color: "#f5f0e8",
            }}
          >
            {t.desc}
          </p>

          {/* Stats — 3 Equal Grid Columns for perfect centering on Android & Mobile */}
          <div className="grid grid-cols-3 items-center justify-center w-full max-w-sm sm:max-w-md mx-auto">
            {t.stats.map((s, i) => (
              <div
                key={s.l}
                className="flex flex-col items-center justify-center text-center px-1 sm:px-4"
                style={{
                  borderRight:
                    i < t.stats.length - 1
                      ? "1px solid rgba(245,240,232,0.2)"
                      : "none",
                }}
              >
                <div
                  className="font-bold text-white text-xl sm:text-2xl"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: 1,
                  }}
                >
                  {s.v}
                </div>
                <div
                  className="mt-1.5 text-[9px] sm:text-[10px] font-semibold uppercase"
                  style={{
                    color: "rgba(245,240,232,0.75)",
                    letterSpacing: "0.18em",
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator (static double chevron down) */}
        <div
          className="pb-6 flex flex-col items-center gap-1 z-10"
          style={{ color: "rgba(245,240,232,0.85)" }}
        >
          <div className="flex flex-col items-center -space-y-2 opacity-80 hover:opacity-100 transition-opacity">
            <ChevronDown className="w-5 h-5 text-white stroke-[2.5]" />
            <ChevronDown className="w-5 h-5 text-white stroke-[2.5]" />
          </div>
        </div>
      </div>
    </section>
  )
}
