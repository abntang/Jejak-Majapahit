import { ArrowRight } from "lucide-react"
import { Temple, Lang, translations } from "@/data/candiData"
import CandiCard from "./CandiCard"

interface CandiListSectionProps {
  temples: Temple[]
  lang: Lang
  t: typeof translations["ID"]
  onSelectTemple?: (index: number) => void
}

export default function CandiListSection({
  temples,
  lang,
  t,
  onSelectTemple,
}: CandiListSectionProps) {
  const handleSelect = (index: number) => {
    if (onSelectTemple) {
      onSelectTemple(index)
    }
    const mapElement = document.getElementById("peta-interaktif")
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="daftar-candi"
      data-theme="light"
      className="w-full max-w-7xl mx-auto px-6 pb-28 overflow-x-hidden"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "#b5452a" }}
          >
            {t.sectionTag}
          </p>
          <h2
            className="font-bold tracking-tight"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              color: "#0f1c2e",
            }}
          >
            {t.sectionTitle[0]}
            <br />
            {t.sectionTitle[1]}
          </h2>
        </div>
        <a
          href="#peta-interaktif"
          className="inline-flex items-center gap-1.5 text-sm font-semibold shrink-0 no-underline transition-colors"
          style={{ color: "#b5452a" }}
        >
          {t.viewMap} <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {temples.map((temple, index) => (
          <CandiCard
            key={temple.id}
            temple={temple}
            lang={lang}
            tExplore={t.exploreSite}
            tViewOnMap={t.viewOnMap}
            onSelect={() => handleSelect(index)}
          />
        ))}
      </div>
    </section>
  )
}

