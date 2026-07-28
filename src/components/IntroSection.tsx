import { Compass, Landmark, Layers } from "lucide-react"

export interface IntroCardItem {
  title: string
  desc: string
}

interface IntroSectionProps {
  introCards: IntroCardItem[]
}

const INTRO_ICONS = [Compass, Landmark, Layers]

export default function IntroSection({ introCards }: IntroSectionProps) {
  return (
    <section
      data-theme="light"
      className="w-full max-w-7xl mx-auto px-6 py-16 overflow-x-hidden"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{
          borderTop: "1px solid #ddd5ca",
          borderBottom: "1px solid #ddd5ca",
        }}
      >
        {introCards.map((item, i) => {
          const Icon = INTRO_ICONS[i % INTRO_ICONS.length] || Compass
          return (
            <div
              key={item.title}
              className={`py-8 md:py-10 px-6 md:px-8 ${
                i > 0
                  ? "border-t md:border-t-0 md:border-l border-[#ddd5ca]"
                  : ""
              }`}
            >
              <div
                className="mb-4 p-2.5 w-fit rounded"
                style={{ backgroundColor: "rgba(181,69,42,0.1)" }}
              >
                <Icon className="w-5 h-5" style={{ color: "#b5452a" }} />
              </div>
              <h3
                className="mb-2.5 text-lg font-bold"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#0f1c2e",
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#334155" }}
              >
                {item.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
