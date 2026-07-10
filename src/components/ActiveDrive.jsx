import { Calendar, MapPin, Truck, Mail } from "lucide-react";

export default function ActiveDrive() {
  return (
    <section className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-red/10 text-red text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <Calendar className="w-4 h-4" />
              Active Now
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-navy">
              Active Book Drive
            </h2>
            <p className="text-brown mt-2 text-base">June 15 &ndash; July 15</p>
          </div>

          {/* Details */}
          <div className="bg-white rounded-2xl border border-brown/10 p-6 md:p-8 space-y-5 shadow-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-green shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-navy text-sm">Drop-off Location</p>
                <p className="text-brown text-sm">
                  West Highlands Pacific HOA Recreation Center
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Truck className="w-5 h-5 text-orange shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-navy text-sm">Pickup Option</p>
                <p className="text-brown text-sm">Available upon request &mdash; email us to schedule</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-red shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-navy text-sm">Contact</p>
                <a
                  href="mailto:booksunbound123@gmail.com"
                  className="text-brown text-sm hover:text-green transition-colors underline underline-offset-2"
                >
                  booksunbound123@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}