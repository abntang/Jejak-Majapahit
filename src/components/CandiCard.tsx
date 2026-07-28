import { useState } from "react"
import { MapPin, ArrowRight } from "lucide-react"
import { Temple, Lang } from "@/data/candiData"

interface CandiCardProps {
  temple: Temple
  lang: Lang
  tExplore: string
}

export default function CandiCard({ temple, lang, tExplore }: CandiCardProps) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="relative overflow-hidden cursor-pointer flex flex-col"
      style={{
        backgroundColor: hovered ? "#0f1c2e" : "#ede8e0",
        border: "1px solid #ddd5ca",
        borderRadius: "8px",
        transition:
          "background-color 0.32s ease, box-shadow 0.32s ease, transform 0.28s ease",
        boxShadow: hovered
          ? "0 16px 40px rgba(15,28,46,0.2)"
          : "0 2px 8px rgba(15,28,46,0.05)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden shrink-0"
        style={{ height: "218px", backgroundColor: "#ddd5ca" }}
      >
        <img
          src={temple.image}
          alt={temple.alt}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? "scale(1.07)" : "scale(1)",
            transition: "transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)",
            filter: hovered ? "brightness(0.72)" : "brightness(1)",
          }}
        />
        <span
          className="absolute top-3.5 left-3.5 text-xs px-2.5 py-1 font-semibold text-white rounded"
          style={{ backgroundColor: temple.categoryColor, opacity: 0.92 }}
        >
          {temple.category[lang]}
        </span>
        <span
          className="absolute top-3.5 right-3.5 text-xs px-2 py-1 font-medium rounded"
          style={{ backgroundColor: "rgba(15,28,46,0.78)", color: "#f5f0e8" }}
        >
          {temple.year[lang]}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <p
          className="text-xs flex items-center gap-1.5 mb-2 transition-colors"
          style={{ color: hovered ? "rgba(245,240,232,0.65)" : "#475569" }}
        >
          <MapPin
            className="w-3 h-3"
            style={{ color: hovered ? "#e8c4b8" : "#b5452a" }}
          />
          {temple.location[lang]}
        </p>
        <h3
          className="text-xl mb-2 leading-snug font-bold transition-colors"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: hovered ? "#f5f0e8" : "#0f1c2e",
          }}
        >
          {temple.name[lang]}
        </h3>
        <p
          className="text-sm leading-relaxed flex-1 transition-colors"
          style={{ color: hovered ? "rgba(245,240,232,0.8)" : "#334155" }}
        >
          {temple.description[lang]}
        </p>
        <div
          className="mt-5 flex items-center gap-1.5 text-xs font-bold tracking-wide transition-all"
          style={{ color: hovered ? "#e8c4b8" : "#b5452a" }}
        >
          {tExplore}
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform"
            style={{ transform: hovered ? "translateX(4px)" : "translateX(0)" }}
          />
        </div>
      </div>
    </div>
  )
}
