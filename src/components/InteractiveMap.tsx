import { useState, useRef, useEffect } from "react"
import {
  MapPin,
  ChevronDown,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Temple, Lang, translations } from "@/data/candiData"

interface InteractiveMapProps {
  temples: Temple[]
  activeTemple: number
  setActiveTemple: (index: number) => void
  lang: Lang
  t: typeof translations["ID"]
}

export default function InteractiveMap({
  temples,
  activeTemple,
  setActiveTemple,
  lang,
  t,
}: InteractiveMapProps) {
  const [mapDropOpen, setMapDropOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const mapDropRef = useRef<HTMLDivElement>(null)
  const pillsRef = useRef<HTMLDivElement>(null)

  const current = temples[activeTemple]

  // Handle temple change with smooth Skeleton Loading state
  const handleSelectTemple = (index: number) => {
    if (index === activeTemple) return
    setIsLoading(true)
    setActiveTemple(index)
    setMapDropOpen(false)
    setTimeout(() => {
      setIsLoading(false)
    }, 400)
  }

  // Auto scroll active mobile pill tab into view
  useEffect(() => {
    if (pillsRef.current && pillsRef.current.children[activeTemple]) {
      const activeBtn = pillsRef.current.children[activeTemple] as HTMLElement
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      })
    }
  }, [activeTemple])

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (
        mapDropRef.current &&
        !mapDropRef.current.contains(e.target as Node)
      ) {
        setMapDropOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    document.addEventListener("touchstart", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
      document.removeEventListener("touchstart", handler)
    }
  }, [])

  return (
    <section
      id="peta-interaktif"
      data-theme="dark"
      className="w-full max-w-full overflow-x-hidden"
      style={{ backgroundColor: "#0f1c2e" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "#b5452a" }}
            >
              {t.mapTag}
            </p>
            <h2
              className="font-bold tracking-tight"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                color: "#f5f0e8",
              }}
            >
              {t.mapTitle}
            </h2>
            <p
              className="mt-2 text-sm"
              style={{ color: "rgba(245,240,232,0.85)" }}
            >
              {t.mapDesc}
            </p>
          </div>

          {/* Desktop dropdown */}
          <div
            ref={mapDropRef}
            className="relative hidden md:block"
            style={{ minWidth: "230px" }}
          >
            <button
              type="button"
              onClick={() => setMapDropOpen((v) => !v)}
              className="w-full flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium transition-all cursor-pointer"
              style={{
                backgroundColor: "rgba(245,240,232,0.07)",
                border: "1px solid rgba(245,240,232,0.14)",
                borderRadius: "8px",
                color: "#f5f0e8",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: "#b5452a" }} />
                <span>{current.name[lang]}</span>
              </span>
              <ChevronDown
                className="w-4 h-4 transition-transform duration-200"
                style={{
                  color: "rgba(245,240,232,0.5)",
                  transform: mapDropOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {mapDropOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-full z-30 overflow-hidden"
                style={{
                  backgroundColor: "#162436",
                  border: "1px solid rgba(245,240,232,0.12)",
                  borderRadius: "8px",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                }}
              >
                {temples.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectTemple(i)}
                    className="w-full text-left px-4 py-3 text-sm flex items-center gap-3 transition-colors cursor-pointer"
                    style={{
                      backgroundColor:
                        activeTemple === i
                          ? "rgba(181,69,42,0.18)"
                          : "transparent",
                      color:
                        activeTemple === i
                          ? "#fcdab7"
                          : "rgba(245,240,232,0.65)",
                      borderBottom:
                        i < temples.length - 1
                          ? "1px solid rgba(245,240,232,0.06)"
                          : "none",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{
                        backgroundColor:
                          activeTemple === i
                            ? "#b5452a"
                            : "rgba(245,240,232,0.25)",
                      }}
                    />
                    <span>{item.name[lang]}</span>
                    <span
                      className="ml-auto text-[10px] font-medium tracking-wider uppercase shrink-0"
                      style={{ color: "rgba(245,240,232,0.35)" }}
                    >
                      {item.year[lang]}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile pill tabs (horizontal scrollable single row across all 6 temples) */}
        <div
          ref={pillsRef}
          className="flex md:hidden overflow-x-auto whitespace-nowrap gap-2.5 mb-6 pb-2 pt-1 w-full max-w-full scrollbar-none [ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
        >
          {temples.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelectTemple(i)}
              className="shrink-0 px-4 py-2 text-xs font-semibold tracking-wide rounded-full transition-all cursor-pointer shadow-sm"
              style={{
                backgroundColor:
                  activeTemple === i ? "#b5452a" : "rgba(245,240,232,0.08)",
                color:
                  activeTemple === i ? "#ffffff" : "rgba(245,240,232,0.85)",
                border: `1px solid ${
                  activeTemple === i ? "#b5452a" : "rgba(245,240,232,0.18)"
                }`,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {item.name[lang]}
            </button>
          ))}
        </div>

        {/* Map + Info Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          {/* Official Google Maps iFrame Container */}
          <div
            className="lg:col-span-3 relative overflow-hidden h-80 sm:h-96 lg:h-115 min-h-85 lg:min-h-115"
            style={{ borderRadius: "10px", backgroundColor: "#162436" }}
          >
            <iframe
              key={current.id}
              title={`Peta ${current.name[lang]}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(current.mapsQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed&hl=${
                lang === "ID" ? "id" : "en"
              }`}
              className="w-full h-full border-0 block pointer-events-auto relative z-0"
              style={{ minHeight: "100%" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
            />

            {isLoading ? (
              /* Map Skeleton Loading Overlay */
              <div
                className="absolute inset-0 z-20 w-full h-full p-6 flex flex-col justify-between animate-pulse pointer-events-none"
                style={{ backgroundColor: "#162436" }}
              >
                <div className="flex justify-between items-center">
                  <div className="h-7 w-40 rounded-md bg-slate-700/80" />
                  <div className="h-7 w-16 rounded-md bg-[#b5452a]/70" />
                </div>
                <div className="flex flex-col justify-center items-center gap-3 h-32 lg:h-48">
                  <div className="w-10 h-10 rounded-full border-2 border-slate-600 border-t-[#b5452a] animate-spin" />
                  <span className="text-xs tracking-wider uppercase font-medium text-slate-400">
                    {lang === "ID" ? "Memuat Peta..." : "Loading Map..."}
                  </span>
                </div>
                <div className="h-5 w-48 rounded-md bg-slate-700/60 self-end" />
              </div>
            ) : (
              <>
                {/* Location label badge */}
                <div
                  className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium pointer-events-none z-10"
                  style={{
                    backgroundColor: "rgba(15,28,46,0.85)",
                    color: "#f5f0e8",
                    borderRadius: "6px",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(245,240,232,0.12)",
                  }}
                >
                  <MapPin
                    className="w-3.5 h-3.5"
                    style={{ color: "#b5452a" }}
                  />
                  {current.location[lang]}
                </div>
                {/* Site counter badge */}
                <div
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold pointer-events-none z-10"
                  style={{
                    backgroundColor: "rgba(181,69,42,0.85)",
                    color: "#fff",
                    borderRadius: "6px",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {activeTemple + 1} / {temples.length}
                </div>
              </>
            )}
          </div>

          {/* Info Card Area */}
          <div className="lg:col-span-2 flex flex-col min-h-90 lg:min-h-115">
            {isLoading ? (
              /* Info Card Skeleton Loading — Pixel-exact match to MapInfoCard structure */
              <div
                className="flex flex-col h-full overflow-hidden animate-pulse"
                style={{
                  backgroundColor: "#162436",
                  border: "1px solid rgba(245,240,232,0.1)",
                  borderRadius: "10px",
                }}
              >
                {/* Top Image Skeleton — Flush wall-to-wall 200px height */}
                <div
                  className="relative overflow-hidden shrink-0 bg-slate-700/60"
                  style={{ height: "200px" }}
                >
                  <div className="absolute bottom-4 left-4 h-6 w-24 rounded bg-slate-600/70" />
                </div>

                {/* Content Skeleton — Identical padding & gaps as MapInfoCard */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div>
                    <div className="h-7 w-3/4 rounded bg-slate-700/80 mb-1.5" />
                    <div className="h-4 w-1/2 rounded bg-slate-700/50" />
                  </div>

                  <div
                    style={{
                      height: "1px",
                      backgroundColor: "rgba(245,240,232,0.12)",
                    }}
                  />

                  <div className="flex flex-col gap-2 flex-1 pt-1">
                    <div className="h-4 w-full rounded bg-slate-700/50" />
                    <div className="h-4 w-[90%] rounded bg-slate-700/50" />
                    <div className="h-4 w-[70%] rounded bg-slate-700/50" />
                  </div>

                  <div className="h-6 w-28 rounded bg-slate-700/60 my-0.5" />

                  <div className="flex items-center justify-between pt-1">
                    <div className="h-9 w-36 rounded bg-[#b5452a]/60" />

                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded bg-slate-700/60" />
                      <div className="w-9 h-9 rounded bg-slate-700/60" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <MapInfoCard
                temple={current}
                lang={lang}
                onNav={(dir) => {
                  const next = activeTemple + dir
                  let target = next
                  if (next < 0) target = temples.length - 1
                  if (next >= temples.length) target = 0
                  handleSelectTemple(target)
                }}
                builtText={t.mapBuilt}
                openText={t.mapOpen}
                officialText={t.exploreSite}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function MapInfoCard({
  temple,
  lang,
  onNav,
  builtText,
  openText,
  officialText,
}: {
  temple: Temple
  lang: Lang
  onNav: (dir: number) => void
  builtText: string
  openText: string
  officialText: string
}) {
  return (
    <div
      className="flex flex-col h-full overflow-hidden"
      style={{
        backgroundColor: "#162436",
        border: "1px solid rgba(245,240,232,0.1)",
        borderRadius: "10px",
      }}
    >
      {/* Hero image */}
      <div
        className="relative overflow-hidden shrink-0"
        style={{ height: "200px", backgroundColor: "#1e3450" }}
      >
        <img
          src={temple.image}
          alt={temple.alt}
          className="w-full h-full object-cover transition-opacity duration-400"
          style={{ opacity: 0.8 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, #162436 0%, transparent 55%)",
          }}
        />
        <span
          className="absolute bottom-4 left-4 text-xs px-3 py-1 font-semibold rounded tracking-wide"
          style={{ backgroundColor: "#b5452a", color: "#f5f0e8" }}
        >
          {temple.category[lang]}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3
            className="font-bold"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.35rem",
              color: "#f5f0e8",
              marginBottom: "4px",
            }}
          >
            {temple.name[lang]}
          </h3>
          <p
            className="text-xs flex items-center gap-1.5"
            style={{ color: "rgba(245,240,232,0.75)" }}
          >
            <MapPin className="w-3.5 h-3.5" style={{ color: "#e85d41" }} />
            {temple.location[lang]}
          </p>
        </div>

        <div
          style={{ height: "1px", backgroundColor: "rgba(245,240,232,0.12)" }}
        />

        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "rgba(245,240,232,0.9)" }}
        >
          {temple.description[lang]}
        </p>

        <span
          className="text-xs px-2.5 py-1 w-fit rounded font-medium"
          style={{
            backgroundColor: "rgba(245,240,232,0.1)",
            color: "rgba(245,240,232,0.85)",
            border: "1px solid rgba(245,240,232,0.18)",
          }}
        >
          {builtText}{" "}
          <strong style={{ color: "#ffffff" }}>{temple.year[lang]}</strong>
        </span>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2 gap-2 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={temple.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded no-underline transition-colors shadow-sm"
              style={{ backgroundColor: "#b5452a", color: "#f5f0e8" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#d4634a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#b5452a")
              }
            >
              <span>{officialText}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={temple.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded no-underline transition-colors"
              style={{
                backgroundColor: "rgba(245,240,232,0.08)",
                color: "rgba(245,240,232,0.85)",
                border: "1px solid rgba(245,240,232,0.15)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(245,240,232,0.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(245,240,232,0.08)")
              }
            >
              <MapPin className="w-3.5 h-3.5 text-[#e85d41]" />
              <span>{openText}</span>
            </a>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={() => onNav(-1)}
              className="w-9 h-9 flex items-center justify-center rounded transition-all cursor-pointer"
              style={{
                backgroundColor: "rgba(245,240,232,0.07)",
                border: "1px solid rgba(245,240,232,0.12)",
                color: "rgba(245,240,232,0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#b5452a"
                e.currentTarget.style.borderColor = "#b5452a"
                e.currentTarget.style.color = "#fff"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(245,240,232,0.07)"
                e.currentTarget.style.borderColor = "rgba(245,240,232,0.12)"
                e.currentTarget.style.color = "rgba(245,240,232,0.5)"
              }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNav(1)}
              className="w-9 h-9 flex items-center justify-center rounded transition-all cursor-pointer"
              style={{
                backgroundColor: "rgba(245,240,232,0.07)",
                border: "1px solid rgba(245,240,232,0.12)",
                color: "rgba(245,240,232,0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#b5452a"
                e.currentTarget.style.borderColor = "#b5452a"
                e.currentTarget.style.color = "#fff"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(245,240,232,0.07)"
                e.currentTarget.style.borderColor = "rgba(245,240,232,0.12)"
                e.currentTarget.style.color = "rgba(245,240,232,0.5)"
              }}
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

