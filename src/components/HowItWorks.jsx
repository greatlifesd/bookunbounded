import { Package, ScanLine, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Package,
    label: "Collection",
    color: "text-forest",
    bg: "bg-forest/10",
    border: "border-forest/20",
    description:
      "Books are collected from donors across San Diego, Orange County, and beyond through drop-off locations and scheduled pickups.",
  },
  {
    number: "02",
    icon: ScanLine,
    label: "Sorting",
    color: "text-terracotta",
    bg: "bg-terracotta/10",
    border: "border-terracotta/20",
    description:
      "Every book is sorted by age group, genre, reading level, content appropriateness, and educational suitability via spreadsheet tracking.",
  },
  {
    number: "03",
    icon: Truck,
    label: "Distribution",
    color: "text-ink",
    bg: "bg-ink/10",
    border: "border-ink/20",
    description:
      "Sorted books are transported and distributed through our partner network of schools, libraries, and youth programs.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-parchment paper-grain">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="bookmark-ribbon text-forest" />
          <h2 className="font-serif text-3xl md:text-4xl text-ink text-center">
            How It Works
          </h2>
          <span className="bookmark-ribbon text-terracotta" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="relative text-center">
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-ink/15" />
                )}

                <div className={`w-20 h-20 rounded-full ${step.bg} flex items-center justify-center mx-auto mb-4 relative`}>
                  <Icon className={`w-8 h-8 ${step.color}`} />
                  <span className={`absolute -top-1 -right-1 min-w-[28px] h-7 px-1.5 rounded-full ${step.bg} text-ink text-xs font-mono font-bold flex items-center justify-center border ${step.border}`}>
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-ink mb-2">{step.label}</h3>
                <p className="text-ink/70 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}