import imgBrahu from "@/imports/image-2.png"
import imgBajangRatu from "@/imports/image-3.png"
import { translations } from "@/data/candiData"

interface AboutSectionProps {
  t: typeof translations["ID"]
}

export default function AboutSection({ t }: AboutSectionProps) {
  return (
    <section
      id="tentang"
      data-theme="light"
      className="py-24 w-full max-w-full overflow-x-hidden"
      style={{ backgroundColor: "#f5f0e8" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: "#b5452a" }}
            >
              {t.aboutTag}
            </p>
            <h2
              className="mb-6 leading-tight font-bold tracking-tight"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                color: "#0f1c2e",
              }}
            >
              {t.aboutTitle}
            </h2>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#334155" }}
            >
              {t.aboutP1}
            </p>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "#334155" }}
            >
              {t.aboutP2}
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <button
                type="button"
                className="px-6 py-3 text-sm font-semibold tracking-wide transition-all cursor-pointer rounded"
                style={{
                  backgroundColor: "#b5452a",
                  color: "#f5f0e8",
                  border: "none",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#d4634a")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#b5452a")
                }
              >
                {t.aboutCta}
              </button>
              <a
                href="#"
                className="text-sm font-semibold no-underline transition-colors"
                style={{ color: "#b5452a" }}
              >
                {t.aboutContact}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={imgBrahu}
                alt="Candi Brahu"
                className="w-full object-cover rounded"
                style={{ height: "280px", backgroundColor: "#ddd5ca" }}
              />
              <img
                src={imgBajangRatu}
                alt="Gapura Bajang Ratu"
                className="w-full object-cover rounded mt-10"
                style={{ height: "280px", backgroundColor: "#ddd5ca" }}
              />
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-20 h-20 rounded"
              style={{ backgroundColor: "#b5452a", opacity: 0.12 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
