import { useEffect, useRef, useState } from "react";
import { BookOpen, MapPin, Building2, TrendingUp } from "lucide-react";
import ImpactSnapshot from "../components/ImpactSnapshot";
import HowItWorks from "../components/HowItWorks";
import RevealOnScroll from "../components/RevealOnScroll";
import logoBgcsd from "../assets/logos/partner-bgcsd.png";
import logoUcsdBtb from "../assets/logos/partner-ucsd-btb.png";
import logoMaac from "../assets/logos/partner-maac.png";
import logoWpbp from "../assets/logos/partner-wpbp.png";
import logoNha from "../assets/logos/partner-nha.png";
import logoYcc from "../assets/logos/partner-ycc.png";
import logoSdpl from "../assets/logos/partner-sdpl.png";
import logoSdusd from "../assets/logos/partner-sdusd.png";

const highlights = [
  {
    icon: BookOpen,
    value: "6,000+",
    label: "Total Books Redistributed",
    description:
      "From picture books to AP prep guides — every book matched to a reader who needs it.",
    color: "text-forest",
    bg: "bg-forest/10",
  },
  {
    icon: MapPin,
    value: "San Diego + Beyond",
    label: "Geographic Reach",
    description:
      "Drives at Pacific Highlands Ranch Library and West Highlands Pacific HOA, reaching San Diego, Orange County, Minnesota, and beyond.",
    color: "text-terracotta",
    bg: "bg-terracotta/10",
  },
  {
    icon: Building2,
    value: "Schools, Prisons & Youth Centers",
    label: "Types of Recipients",
    description:
      "Schools, libraries, youth centers, and prison literacy programs — wherever a reader is waiting.",
    color: "text-ink",
    bg: "bg-ink/10",
  },
  {
    icon: TrendingUp,
    value: "Growing",
    label: "Year Over Year",
    description:
      "More donors, volunteers, and partners joining the mission every year.",
    color: "text-forest",
    bg: "bg-forest/10",
  },
];

const partners = [
  { name: "Boys & Girls Clubs", type: "Youth Organization", logo: logoBgcsd },
  { name: "UCSD Books Thru Bars", type: "Prison Literacy Program", logo: logoUcsdBtb },
  { name: "MAAC Head Start", type: "Early Education", logo: logoMaac },
  { name: "Women's Prison Book Project", type: "Prison Literacy", logo: logoWpbp },
  { name: "Youth Care Club", type: "Student-Led Non-Profit", logo: logoYcc },
  { name: "San Diego Public Library", type: "Public Library", logo: logoSdpl },
  { name: "Neighborhood House Association", type: "Community Organization", logo: logoNha },
  { name: "SDUSD", type: "School District", logo: logoSdusd },
];

export default function Impact() {
  const partnersRef = useRef(null);
  const [partnersVisible, setPartnersVisible] = useState(false);
  const quoteRef = useRef(null);
  const [quoteVisible, setQuoteVisible] = useState(false);

  useEffect(() => {
    const po = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setPartnersVisible(true); po.disconnect(); } },
      { threshold: 0.1 }
    );
    if (partnersRef.current) po.observe(partnersRef.current);
    return () => po.disconnect();
  }, []);

  useEffect(() => {
    const qo = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setQuoteVisible(true); qo.disconnect(); } },
      { threshold: 0.5 }
    );
    if (quoteRef.current) qo.observe(quoteRef.current);
    return () => qo.disconnect();
  }, []);

  return (
    <>
      {/* Header */}
      <RevealOnScroll><section className="bg-forest text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Measurable Impact
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Numbers tell part of the story. Behind each statistic is a book that
            found its reader and a community that gained access to learning.
          </p>
        </div>
      </section></RevealOnScroll>

      {/* Impact Snapshot - book spines */}
      <RevealOnScroll delay={100}><ImpactSnapshot /></RevealOnScroll>

      {/* How It Works */}
      <RevealOnScroll delay={100}><HowItWorks /></RevealOnScroll>

      {/* Detailed Highlights */}
      <RevealOnScroll delay={100}><section className="bg-parchment paper-grain">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="bookmark-ribbon text-terracotta" />
            <h2 className="font-serif text-3xl md:text-4xl text-ink text-center">
              Key Metrics
            </h2>
            <span className="bookmark-ribbon text-forest" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.label}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white border border-ink/10"
                >
                  <div
                    className={`w-12 h-12 rounded-full ${h.bg} flex items-center justify-center shrink-0`}
                  >
                    <Icon className={`w-5 h-5 ${h.color}`} />
                  </div>
                  <div>
                    <div className={`font-serif text-2xl font-bold ${h.color} mb-1`}>
                      {h.value}
                    </div>
                    <div className="text-sm font-semibold text-ink mb-1">{h.label}</div>
                    <p className="text-ink/60 text-sm leading-relaxed">{h.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section></RevealOnScroll>

      <div className="fleuron-divider bg-parchment pb-0 pt-0 max-w-6xl mx-auto px-4">
        <span>&#10086;</span>
      </div>

      {/* Our Partners - Card Catalog Grid */}
      <RevealOnScroll delay={100}><section ref={partnersRef} className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="bookmark-ribbon text-forest" />
            <h2 className="font-serif text-3xl md:text-4xl text-ink text-center">
              Our Partners
            </h2>
            <span className="bookmark-ribbon text-terracotta" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {partners.map((partner, i) => (
              <div
                key={partner.name}
                className={`partner-card bg-parchment rounded-lg border border-ink/10 p-5 shadow-sm flex flex-col ${partnersVisible ? "partner-reveal" : "opacity-0"}`}
                style={{ animationDelay: partnersVisible ? `${120 + i * 60}ms` : "0ms" }}
              >
                {/* Logo / Placeholder slot */}
                <div className="w-full h-24 bg-white rounded-md border border-ink/5 flex items-center justify-center mb-4 overflow-hidden">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className={`w-full h-full object-contain ${partner.name === "San Diego Public Library" ? "scale-125" : "p-2"}`}
                    />
                  ) : (
                    <div className="text-ink/20 text-center">
                      <svg className="w-8 h-8 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-[10px] font-medium block">Logo</span>
                    </div>
                  )}
                </div>
                {/* Catalog card accent line */}
                <div className="w-full h-1 bg-gradient-to-r from-forest via-terracotta to-ink/30 rounded-full mb-3" />
                <h3 className="font-serif text-lg font-semibold text-ink">
                  {partner.name}
                </h3>
                <p className="text-ink/50 text-xs font-medium mt-1 uppercase tracking-wider">
                  {partner.type}
                </p>
                {/* Index-card ruled lines */}
                <div className="mt-auto pt-3 space-y-1">
                  <div className="h-px bg-ink/5" />
                  <div className="h-px bg-ink/5" />
                  <div className="h-px bg-ink/5 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section></RevealOnScroll>

      {/* Reflection */}
      <RevealOnScroll delay={100}><section ref={quoteRef} className="bg-parchment paper-grain">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="bookmark-ribbon text-terracotta" />
              <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-forest" />
              </div>
              <span className="bookmark-ribbon text-forest" />
            </div>
            <blockquote className={`font-serif text-xl md:text-2xl text-ink leading-relaxed italic ${quoteVisible ? "stamp-in" : "opacity-0 scale-125"}`}>
              &ldquo;Each book redistributed represents expanded access to
              learning, imagination, and opportunity.&rdquo;
            </blockquote>
          </div>
        </div>
      </section></RevealOnScroll>
    </>
  );
}