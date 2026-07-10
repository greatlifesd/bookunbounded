import { Link } from "react-router-dom";
import { GraduationCap, Trees, HeartHandshake } from "lucide-react";
import Logo from "../components/Logo";
import founderPhoto from "../assets/founder-photo.png";
import RevealOnScroll from "../components/RevealOnScroll";

const milestones = [
  {
    icon: GraduationCap,
    label: "Student-Led Initiative",
    description:
      "Founded and run entirely by students committed to making educational equity a reality.",
    color: "text-orange",
    bg: "bg-orange/10",
  },
  {
    icon: Trees,
    label: "Grassroots Origin",
    description:
      "What began as small neighborhood collection efforts grew into a structured redistribution system.",
    color: "text-green",
    bg: "bg-green/10",
  },
  {
    icon: HeartHandshake,
    label: "Expansion Through Partnerships",
    description:
      "Collaborations with schools, libraries, and community organizations enabled our reach to grow rapidly.",
    color: "text-red",
    bg: "bg-red/10",
  },
];

export default function About() {
  return (
    <>
      {/* Header */}
      <RevealOnScroll><section className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <Logo className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-5" />
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Our Story
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            How a group of students turned a simple idea into a movement for
            educational access.
          </p>
        </div>
      </section></RevealOnScroll>

      {/* Story */}
      <RevealOnScroll delay={100}><section className="bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-brown text-base md:text-lg leading-relaxed mb-8">
              Books Unbound began after observing the gap between book surplus
              and book scarcity in local communities. What started as small
              collection efforts evolved into a structured redistribution system
              connecting donors, volunteers, and partner organizations.
            </p>
            <p className="text-brown text-base md:text-lg leading-relaxed mb-8">
              Our team noticed that while many households had shelves full of
              gently used books gathering dust, countless students in underserved
              communities lacked access to age-appropriate reading materials.
              That imbalance drove us to act.
            </p>
            <p className="text-brown text-base md:text-lg leading-relaxed">
              Today, Books Unbound operates a coordinated network of donors,
              sorters, and partner sites, ensuring that every book we collect
              finds its way to a reader who needs it. We have grown from
              collecting a few dozen books at a time to redistributing thousands
              annually &mdash; with no signs of stopping.
            </p>
          </div>
        </div>
      </section></RevealOnScroll>

      {/* Founder / CEO */}
      <RevealOnScroll delay={150}><section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="font-serif text-3xl md:text-4xl text-navy text-center mb-12">
            Meet the Founder
          </h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-40 h-52 md:w-44 md:h-60 shrink-0 rounded-2xl overflow-hidden border-2 border-green/20 shadow-md">
              <img
                src={founderPhoto}
                alt="Founder of Books Unbound"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-navy mb-1">Wenhao Fang</h3>
              <p className="text-sm text-brown/70 font-medium mb-3">Founder | Operator | Student Builder</p>
              <p className="text-brown text-sm leading-relaxed">
                Multidisciplinary builder and high school student committed to
                educational equity, systems design, and community impact. Founder
                of Books Unbound, a literacy initiative that has distributed
                6,000+ books across 40+ partner locations. Co-Founder of
                Avante Pathways, an AI-powered career exploration platform serving
                3,000+ users. With experience leading cross-functional operations
                across partnerships, logistics, product development, and community
                outreach, he brings a builder's mindset to every initiative.
              </p>
            </div>
          </div>
        </div>
      </section></RevealOnScroll>

      {/* Milestones */}
      <RevealOnScroll delay={150}><section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="font-serif text-3xl md:text-4xl text-navy text-center mb-12">
            Where We Come From
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className="text-center p-6 rounded-xl bg-cream border border-brown/10"
                >
                  <div
                    className={`w-14 h-14 rounded-full ${m.bg} flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${m.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{m.label}</h3>
                  <p className="text-brown text-sm leading-relaxed">{m.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section></RevealOnScroll>

      {/* CTA */}
      <RevealOnScroll delay={150}><section className="bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">
            Want to be part of our story?
          </h2>
          <p className="text-brown text-base max-w-xl mx-auto mb-8">
            Whether you have books to donate, time to volunteer, or ideas for
            partnership, we would love to hear from you.
          </p>
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green text-white font-semibold hover:bg-green/90 transition-colors shadow-sm"
          >
            Get Involved
          </Link>
        </div>
      </section></RevealOnScroll>
    </>
  );
}