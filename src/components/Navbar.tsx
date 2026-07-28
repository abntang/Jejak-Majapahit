import { useState, useRef, useEffect, useId } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Lang } from "@/data/candiData"

export interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  lang: Lang
  setLang: (lang: Lang) => void
  isScrolled?: boolean
  navItems: NavItem[]
}

function FlagID({ className = "w-5 h-5" }: { className?: string }) {
  const clipId = useId()
  return (
    <svg
      className={`${className} rounded-full shrink-0 shadow-sm`}
      viewBox="0 0 32 32"
      fill="none"
    >
      <clipPath id={clipId}>
        <circle cx="16" cy="16" r="16" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <rect width="32" height="16" fill="#E70011" />
        <rect y="16" width="32" height="16" fill="#FFFFFF" />
      </g>
    </svg>
  )
}

function FlagGB({ className = "w-5 h-5" }: { className?: string }) {
  const clipId = useId()
  return (
    <svg
      className={`${className} rounded-full shrink-0 shadow-sm`}
      viewBox="0 0 32 32"
      fill="none"
    >
      <clipPath id={clipId}>
        <circle cx="16" cy="16" r="16" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <rect width="32" height="32" fill="#012169" />
        <path d="M0 0L32 32M32 0L0 32" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M0 0L32 32M32 0L0 32" stroke="#C8102E" strokeWidth="2" />
        <path d="M16 0V32M0 16H32" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M16 0V32M0 16H32" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  )
}

export default function Navbar({ lang, setLang, navItems }: NavbarProps) {
  const [langOpen, setLangOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navTheme, setNavTheme] = useState<"dark" | "light">("dark")
  const [isScrolled, setIsScrolled] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 20)

      // Dynamic theme detection based on active section under navbar
      const checkY = scrollY + 40
      const sections = document.querySelectorAll<HTMLElement>("[data-theme]")

      let theme: "dark" | "light" = "dark"
      sections.forEach((sec) => {
        const top = sec.offsetTop
        const height = sec.offsetHeight
        if (checkY >= top && checkY < top + height) {
          const secTheme = sec.getAttribute("data-theme") as "dark" | "light"
          if (secTheme) theme = secTheme
        }
      })
      setNavTheme(theme)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    document.addEventListener("touchstart", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
      document.removeEventListener("touchstart", handler)
    }
  }, [])

  const isDark = navTheme === "dark"
  const isMenuExpanded = mobileMenuOpen

  // Compute unified background style
  const getNavStyle = () => {
    if (isMenuExpanded) {
      return {
        backgroundColor: isDark
          ? "rgba(15, 28, 46, 0.94)"
          : "rgba(245, 240, 232, 0.95)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: isDark
          ? "1px solid rgba(245, 240, 232, 0.1)"
          : "1px solid rgba(221, 213, 202, 0.8)",
        boxShadow: "0 12px 32px rgba(0, 0, 0, 0.25)",
      }
    }

    if (!isScrolled) {
      return {
        backgroundColor: "transparent",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        borderBottom: "none",
        boxShadow: "none",
      }
    }

    return {
      backgroundColor: isDark
        ? "rgba(15, 28, 46, 0.88)"
        : "rgba(245, 240, 232, 0.88)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      borderBottom: isDark
        ? "1px solid rgba(245, 240, 232, 0.12)"
        : "1px solid rgba(221, 213, 202, 0.8)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    }
  }

  const navStyle = getNavStyle()

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuExpanded ? "py-0" : "py-2"
      }`}
      style={navStyle}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <a
          href="#beranda"
          className="flex items-center gap-2.5 shrink-0 no-underline group z-10"
        >
          <div
            className="w-7 h-7 flex items-center justify-center rounded"
            style={{ backgroundColor: "#b5452a" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
            className="text-base font-semibold tracking-tight transition-colors duration-300"
            style={{
              color: isDark ? "#f5f0e8" : "#0f1c2e",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            Jejak Majapahit
          </span>
        </a>

        {/* Desktop nav links — Perfectly Centered in Navbar */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9 absolute left-1/2 -translate-x-1/2 z-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium tracking-wide transition-colors duration-300 no-underline whitespace-nowrap"
              style={{
                color: isDark
                  ? "rgba(245,240,232,0.85)"
                  : "rgba(15,28,46,0.72)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = isDark ? "#ffffff" : "#b5452a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = isDark
                  ? "rgba(245,240,232,0.85)"
                  : "rgba(15,28,46,0.72)")
              }
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right: Flag-Only Language Switcher + Mobile Menu Button */}
        <div className="flex items-center gap-3 shrink-0 z-10">
          <div ref={langRef} className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 p-1 rounded-full bg-transparent border-0 cursor-pointer transition-transform hover:scale-105"
              aria-label="Select Language"
            >
              {lang === "ID" ? <FlagID /> : <FlagGB />}
              <ChevronDown
                className="w-3.5 h-3.5 transition-transform duration-200"
                style={{
                  color: isDark ? "#f5f0e8" : "#0f1c2e",
                  transform: langOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {/* Language Dropdown Menu */}
            {langOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-48 rounded-xl overflow-hidden p-1.5 z-50 transition-all duration-300"
                style={{
                  backgroundColor: isDark
                    ? "rgba(22, 36, 54, 0.96)"
                    : "rgba(245, 240, 232, 0.96)",
                  border: `1px solid ${
                    isDark ? "rgba(245,240,232,0.15)" : "#ddd5ca"
                  }`,
                  boxShadow: "0 12px 32px rgba(0,0,0,0.3)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                {(["ID", "EN"] as Lang[]).map((l) => {
                  const isActive = lang === l
                  return (
                    <button
                      key={l}
                      type="button"
                      onClick={() => {
                        setLang(l)
                        setLangOpen(false)
                      }}
                      className="w-full text-left px-3.5 py-2.5 text-xs font-semibold flex items-center gap-2.5 rounded-lg cursor-pointer transition-all duration-200"
                      style={{
                        backgroundColor: isActive
                          ? isDark
                            ? "rgba(181,69,42,0.25)"
                            : "rgba(181,69,42,0.12)"
                          : "transparent",
                        color: isActive
                          ? isDark
                            ? "#fcdab7"
                            : "#b5452a"
                          : isDark
                            ? "rgba(245,240,232,0.85)"
                            : "#0f1c2e",
                      }}
                    >
                      {l === "ID" ? <FlagID /> : <FlagGB />}
                      {l === "ID" ? "Bahasa Indonesia" : "English"}
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg transition-colors cursor-pointer"
            style={{
              color: isDark ? "#f5f0e8" : "#0f1c2e",
              background: "none",
              border: "none",
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown — Snappy 200ms smooth fade & slide animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ease-out transform-gpu ${
          mobileMenuOpen
            ? "max-h-96 opacity-100 translate-y-0 pb-5"
            : "max-h-0 opacity-0 -translate-y-1 pb-0 pointer-events-none"
        }`}
      >
        <div className="px-6 flex flex-col gap-3.5 bg-transparent border-t-0">
          <div
            style={{
              height: "1px",
              backgroundColor: isDark
                ? "rgba(245,240,232,0.08)"
                : "rgba(15,28,46,0.08)",
            }}
          />
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold tracking-wide transition-colors no-underline py-1"
              style={{
                color: isDark ? "#f5f0e8" : "#0f1c2e",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = isDark ? "#ffffff" : "#b5452a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = isDark ? "#f5f0e8" : "#0f1c2e")
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
