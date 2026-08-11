import RevealOnScroll from "../components/RevealOnScroll";
import gallery1 from "../assets/gallery/gallery-1.jpeg";
import gallery2 from "../assets/gallery/gallery-2.jpeg";
import gallery3 from "../assets/gallery/gallery-3.jpeg";

const photos = [gallery1, gallery2, gallery3];

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

      {/* Photo Grid */}
      <RevealOnScroll delay={100}><section className="bg-parchment paper-grain">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((src, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-lg shadow-sm"
              >
                <img
                  src={src}
                  alt={`Books Unbound gallery photo ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section></RevealOnScroll>
    </>
  );
}