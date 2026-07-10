import { BookOpen } from "lucide-react";
import RevealOnScroll from "../components/RevealOnScroll";

export default function Gallery() {
  return (
    <>
      {/* Header */}
      <RevealOnScroll><section className="bg-forest text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Gallery
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Photos from our donation drives, sorting sessions, and partner
            deliveries across San Diego and beyond.
          </p>
        </div>
      </section></RevealOnScroll>

      {/* Empty State */}
      <RevealOnScroll delay={100}><section className="bg-parchment paper-grain">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-7 h-7 text-forest" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-3">
              Photos Coming Soon
            </h2>
            <p className="text-ink/50 text-sm md:text-base leading-relaxed">
              We're collecting fresh photos from our next donation drive.
              Check back soon for updated shots of our volunteers, partners,
              and books in action.
            </p>
          </div>
        </div>
      </section></RevealOnScroll>
    </>
  );
}