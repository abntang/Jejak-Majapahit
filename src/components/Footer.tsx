import { translations } from "@/data/candiData"

interface FooterProps {
  t: typeof translations["ID"]
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer
      data-theme="dark"
      className="w-full max-w-full overflow-x-hidden"
      style={{
        backgroundColor: "#0a1520",
        borderTop: "1px solid rgba(221,213,202,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-6 h-6 flex items-center justify-center rounded"
                style={{ backgroundColor: "#b5452a" }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <rect
                    x="2"
                    y="10"
                    width="12"
                    height="4"
                    fill="white"
                    opacity="0.9"
                  />
                  <rect
                    x="4"
                    y="6"
                    width="8"
                    height="5"
                    fill="white"
                    opacity="0.75"
                  />
                  <rect
                    x="6"
                    y="2"
                    width="4"
                    height="5"
                    fill="white"
                    opacity="0.55"
                  />
                </svg>
              </div>
              <span
                className="font-semibold"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#f5f0e8",
                  fontSize: "1rem",
                }}
              >
                Jejak Majapahit
              </span>
            </div>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(245,240,232,0.32)" }}
            >
              {t.footerDesc}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-12">
            {t.footerCols.map((col) => (
              <div key={col.label}>
                <p
                  className="text-xs tracking-widest uppercase mb-4"
                  style={{ color: "rgba(245,240,232,0.28)" }}
                >
                  {col.label}
                </p>
                <div className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-sm no-underline transition-colors"
                      style={{ color: "rgba(245,240,232,0.5)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#f5f0e8")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(245,240,232,0.5)")
                      }
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: "1px solid rgba(221,213,202,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(245,240,232,0.22)" }}>
            {t.copy}
          </p>
          <p className="text-xs" style={{ color: "rgba(245,240,232,0.18)" }}>
            {t.copyNote}
          </p>
        </div>
      </div>
    </footer>
  )
}
