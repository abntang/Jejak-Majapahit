import { useState, useEffect } from "react"
import { Lang, temples, translations } from "@/data/candiData"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import IntroSection from "@/components/IntroSection"
import CandiListSection from "@/components/CandiListSection"
import InteractiveMap from "@/components/InteractiveMap"
import AboutSection from "@/components/AboutSection"
import Footer from "@/components/Footer"

export default function App() {
  const [lang, setLang] = useState<Lang>("ID")
  const [activeTemple, setActiveTemple] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  const t = translations[lang]

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className="min-h-screen w-full max-w-full overflow-x-hidden relative"
      style={{
        backgroundColor: "#f5f0e8",
        color: "#0f1c2e",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <Navbar
        lang={lang}
        setLang={setLang}
        isScrolled={isScrolled}
        navItems={t.navItems}
      />

      <HeroSection t={t} />

      <IntroSection introCards={t.introCards} />

      <CandiListSection
        temples={temples}
        lang={lang}
        t={t}
        onSelectTemple={setActiveTemple}
      />

      <InteractiveMap
        temples={temples}
        activeTemple={activeTemple}
        setActiveTemple={setActiveTemple}
        lang={lang}
        t={t}
      />

      <AboutSection t={t} />

      <Footer t={t} />
    </div>
  )
}
