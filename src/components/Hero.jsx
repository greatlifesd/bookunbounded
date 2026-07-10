import { Link } from "react-router-dom";
import { BookOpen, Users, BarChart3 } from "lucide-react";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green/3 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-orange/3 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-6">
            <Logo className="w-24 h-24 md:w-28 md:h-28" />
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-navy leading-tight mb-4">
            Books Unbound
          </h1>

          {/* Subtitle */}
          <p className="text-brown text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            Student-led book redistribution initiative expanding access to
            educational materials for underserved communities.
          </p>

          {/* Primary Stat */}
          <div className="mb-3">
            <span className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-green font-bold tracking-tight">
              6,000+
            </span>
            <span className="block font-serif text-2xl sm:text-3xl md:text-4xl text-green mt-1">
              Books Redistributed
            </span>
          </div>

          {/* Secondary Stats */}
          <p className="text-brown/70 text-sm sm:text-base mb-10">
            40+ partner locations &middot; 200+ deliveries &middot; 50+ donors
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green text-white font-semibold text-sm sm:text-base hover:bg-green/90 transition-colors shadow-sm"
            >
              <BookOpen className="w-4 h-4" />
              Donate Books
            </Link>
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-white font-semibold text-sm sm:text-base hover:bg-navy/90 transition-colors shadow-sm"
            >
              <Users className="w-4 h-4" />
              Get Involved
            </Link>
            <Link
              to="/impact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-navy/20 text-navy font-semibold text-sm sm:text-base hover:bg-navy/5 transition-colors"
            >
              <BarChart3 className="w-4 h-4" />
              View Impact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}