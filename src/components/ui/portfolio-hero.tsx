import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { personal } from "@/data/content";
import HeroReleaseWidget from "@/components/HeroReleaseWidget";

// BlurText animation component
interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If it's already on screen at mount (e.g. hero content), reveal immediately
    // rather than waiting on an observer callback that may be delayed if the
    // tab isn't the focused/visible one at that exact moment.
    const rect = node.getBoundingClientRect();
    const alreadyVisible =
      rect.top < window.innerHeight && rect.bottom > 0 && rect.left < window.innerWidth && rect.right > 0;
    if (alreadyVisible) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);

    // Safety net: never leave content permanently invisible if the observer
    // is delayed or never fires (e.g. backgrounded tab during load).
    const fallback = setTimeout(() => setInView(true), 1500);

    return () => {
      observer.unobserve(node);
      clearTimeout(fallback);
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
};

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function PortfolioHero() {
  const dataWrapRef = useRef<HTMLDivElement>(null);
  const sciWrapRef = useRef<HTMLDivElement>(null);
  const taglineWrapRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (scrolled) setMobileMenuOpen(false);
  }, [scrolled]);

  const scrollToNext = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY <= 10) {
        setScrolled(false);
      } else if (currentY > lastY + 4) {
        setScrolled(true);
      } else if (currentY < lastY - 4) {
        setScrolled(false);
      }
      lastY = currentY;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const alignLayout = () => {
      const dataWrap = dataWrapRef.current;
      const sciWrap = sciWrapRef.current;
      const taglineWrap = taglineWrapRef.current;
      if (!dataWrap || !sciWrap || !taglineWrap) return;

      if (!window.matchMedia("(min-width: 768px)").matches) {
        sciWrap.style.marginLeft = "0px";
        taglineWrap.style.marginLeft = "0px";
        return;
      }

      const dataLetters = dataWrap.querySelectorAll("p > span");
      if (dataLetters.length < 4) return;
      const first = dataLetters[0].getBoundingClientRect();
      const secondA = dataLetters[3].getBoundingClientRect();
      sciWrap.style.marginLeft = `${secondA.left - first.left}px`;

      // Tagline should start beneath the "C" of SCIENTIST (2nd letter).
      const sciLetters = sciWrap.querySelectorAll("p > span");
      if (sciLetters.length < 2) return;
      const containerLeft = dataWrap.parentElement!.getBoundingClientRect().left;
      const cLetter = sciLetters[1].getBoundingClientRect();
      taglineWrap.style.marginLeft = `${cLetter.left - containerLeft}px`;
    };

    alignLayout();
    document.fonts?.ready.then(alignLayout);
    window.addEventListener("resize", alignLayout);
    return () => window.removeEventListener("resize", alignLayout);
  }, []);

  return (
    <div
      id="top"
      className="relative pt-24 transition-colors"
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-ink)",
      }}
    >
      {/* Decorative accent dot */}
      <span
        aria-hidden
        className="absolute left-8 top-28 hidden h-2.5 w-2.5 rounded-full sm:block"
        style={{ backgroundColor: "var(--color-brand)" }}
      />

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-6 py-4 md:px-12">
        <AnimatePresence mode="wait" initial={false}>
          {scrolled ? (
            <motion.a
              key="pill"
              href="#top"
              initial={{ opacity: 0, y: -16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex items-center gap-3 rounded-full py-2 pl-2 pr-5 shadow-lg shadow-black/5"
              style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)" }}
            >
              <img
                src={personal.photo}
                alt={personal.name}
                className="h-9 w-9 rounded-full object-cover"
                style={{ objectPosition: "50% 15%" }}
              />
              <span className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                Available for work
              </span>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
            </motion.a>
          ) : (
            <motion.div
              key="full"
              initial={{ opacity: 0, y: -16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <nav
                className="flex items-center gap-2 rounded-full py-2 pl-2 pr-2 shadow-lg shadow-black/5"
                style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)" }}
              >
                <a href="#top" className="shrink-0">
                  <img
                    src={personal.photo}
                    alt={personal.name}
                    className="h-9 w-9 rounded-full object-cover"
                    style={{ objectPosition: "50% 15%" }}
                  />
                </a>
                <div className="hidden items-center gap-7 px-6 min-[480px]:flex">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      whileHover={{ y: -2 }}
                      className="text-sm font-medium transition-colors"
                      style={{ color: "var(--color-ink-muted)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-ink)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ink-muted)")}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white"
                >
                  Contact
                </motion.a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen((v) => !v)}
                  aria-label="Toggle menu"
                  aria-expanded={mobileMenuOpen}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full min-[480px]:hidden"
                  style={{ color: "var(--color-ink)" }}
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </nav>

              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full mt-2 flex w-40 -translate-x-1/2 flex-col gap-1 rounded-2xl p-2 shadow-lg shadow-black/10 min-[480px]:hidden"
                    style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)" }}
                  >
                    {navLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-xl px-4 py-2 text-center text-sm font-medium"
                        style={{ color: "var(--color-ink-muted)" }}
                      >
                        {link.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <HeroReleaseWidget />

      {/* Hero content */}
      <main className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-32 pt-2 md:pt-3">
        <div className="flex w-full flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="w-full text-center md:flex-1 md:text-left">
          <p
            className="text-lg font-bold uppercase tracking-[0.08em] sm:text-xl md:text-xl lg:text-2xl"
            style={{ color: "var(--color-ink-muted)" }}
          >
            {personal.name}
          </p>
          <div ref={dataWrapRef}>
            <BlurText
              text="DATA"
              delay={80}
              animateBy="letters"
              direction="top"
              className="font-display justify-center text-[72px] leading-[0.85] tracking-[-0.03em] sm:text-[96px] md:justify-start md:text-[96px] lg:text-[112px] xl:text-[132px]"
              style={{ color: "var(--color-ink)" }}
            />
          </div>
          <div ref={sciWrapRef}>
            <BlurText
              text="SCIENTIST"
              delay={80}
              animateBy="letters"
              direction="top"
              className="font-display justify-center text-[72px] leading-[0.85] tracking-[-0.03em] sm:text-[96px] md:justify-start md:text-[96px] lg:text-[112px] xl:text-[132px]"
              style={{ color: "var(--color-ink)" }}
            />
          </div>
          <div ref={taglineWrapRef}>
            <BlurText
              text="Turning raw data into decisions."
              delay={150}
              animateBy="words"
              direction="top"
              className="mt-6 justify-center text-lg sm:text-xl md:justify-start"
              style={{ color: "var(--color-ink-muted)" }}
            />
          </div>
        </div>

        <div className="hidden shrink-0 flex-col items-center gap-4 md:flex md:self-center">
          {/* Scroll Indicator */}
          <button
            type="button"
            onClick={scrollToNext}
            className="transition-colors"
            style={{ color: "var(--color-ink-muted)" }}
            aria-label="Scroll down"
          >
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>

        <div className="relative mx-auto w-full max-w-[280px] shrink-0 sm:max-w-[320px] md:mx-0 md:max-w-[340px] lg:max-w-[400px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="overflow-hidden rounded-[20px] border border-border shadow-2xl shadow-ink/10"
          >
            <img
              src={personal.photo}
              alt={personal.name}
              className="aspect-[5/7] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            className="absolute -bottom-6 -left-6 flex h-20 w-20 items-center justify-center rounded-full text-lg font-semibold text-neutral-900 shadow-lg"
            style={{ backgroundColor: "var(--color-brand)" }}
          >
            Hi
          </motion.div>
        </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 w-full text-center text-sm sm:text-base md:text-left"
          style={{ color: "var(--color-ink-muted)" }}
        >
          I build Power BI dashboards, data pipelines, and forecasting models that turn raw data
          into decisions leadership can act on. I'm not limited to one industry or data source —
          from spreadsheets and APIs to cloud warehouses, I can pull, clean, and visualize data
          for any business, in any sector. Open to freelance projects and full-time roles.
        </motion.p>

        {/* Mobile-only scroll indicator */}
        <div className="mt-10 flex flex-col items-center gap-4 md:hidden">
          <button
            type="button"
            onClick={scrollToNext}
            className="transition-colors"
            style={{ color: "var(--color-ink-muted)" }}
            aria-label="Scroll down"
          >
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
      </main>
    </div>
  );
}
