import { Link } from "react-router-dom";
import { BookOpen, Users, Handshake, Heart, ChevronRight } from "lucide-react";
import RevealOnScroll from "../components/RevealOnScroll";

const ways = [
  {
    icon: BookOpen,
    title: "Donate Books",
    color: "text-green",
    bg: "bg-green/10",
    items: [
      "Children's books (all ages)",
      "Teen fiction and nonfiction",
      "Adult books of any kind",
      "AP / SAT / ACT prep books",
      "Educational resources and reference",
    ],
    details:
      "We accept gently used books in good condition. Drop them off at a designated location or request a pickup. We accept anything EXCEPT books containing violent language, violent topics, or horror content.",
  },
  {
    icon: Users,
    title: "Volunteer",
    color: "text-orange",
    bg: "bg-orange/10",
    items: [
      "Sort and organize book donations",
      "Assist during book drives",
      "Help with delivery to partners",
      "Spread the word in your community",
    ],
    details:
      "No prior experience needed. Whether you have an hour or a day, every bit of help makes a difference.",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    color: "text-red",
    bg: "bg-red/10",
    items: [
      "Schools and school districts",
      "Public and school libraries",
      "Youth programs and community centers",
      "Faith-based and civic organizations",
    ],
    details:
      "We collaborate with organizations that serve students and families. Partner with us to bring books to your community.",
  },
];

export default function GetInvolved() {
  return (
    <>
      {/* Header */}
      <RevealOnScroll><section className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Join the Mission
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            There are many ways to support educational equity. Find the one that
            fits you best.
          </p>
        </div>
      </section></RevealOnScroll>

      {/* Ways to Get Involved */}
      <RevealOnScroll delay={100}><section className="bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-10">
          {ways.map((way) => {
            const Icon = way.icon;
            return (
              <div
                key={way.title}
                className="bg-white rounded-2xl border border-brown/10 p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full ${way.bg} flex items-center justify-center shrink-0`}
                  >
                    <Icon className={`w-6 h-6 ${way.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="font-serif text-2xl text-navy">{way.title}</h2>
                      <Heart className={`w-4 h-4 ${way.color}`} />
                    </div>
                    <p className="text-brown text-sm mb-4">{way.details}</p>
                    <ul className="space-y-1.5">
                      {way.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-brown"
                        >
                          <ChevronRight className={`w-3.5 h-3.5 ${way.color} shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section></RevealOnScroll>

      {/* CTA */}
      <RevealOnScroll delay={150}><section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">
              Ready to make an impact?
            </h2>
            <p className="text-brown text-base mb-8">
              Have questions or want to get started right away? Reach out and
              we will connect you with the right opportunity.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green text-white font-semibold hover:bg-green/90 transition-colors shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section></RevealOnScroll>
    </>
  );
}