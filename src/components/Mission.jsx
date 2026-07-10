import { Heart } from "lucide-react";

export default function Mission() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heart accent */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red/10 mb-5">
            <Heart className="w-6 h-6 text-red" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-6">
            Why Books Unbound Exists
          </h2>

          <p className="text-brown text-base md:text-lg leading-relaxed">
            Books Unbound exists to reduce educational inequality by
            redistributing gently used books from surplus households to students
            and community organizations that lack access to learning materials.
            Our goal is to move books from unused shelves into the hands of
            students who need them most.
          </p>
        </div>
      </div>
    </section>
  );
}