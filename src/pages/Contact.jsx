import { Mail, MapPin, Clock, Send } from "lucide-react";
import RevealOnScroll from "../components/RevealOnScroll";

export default function Contact() {
  return (
    <>
      {/* Header */}
      <RevealOnScroll><section className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions, want to donate, or ready to partner? We would love to
            hear from you.
          </p>
        </div>
      </section></RevealOnScroll>

      {/* Contact Section */}
      <RevealOnScroll delay={100}><section className="bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Form */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-2xl border border-brown/10 p-6 md:p-8 shadow-sm">
                <h2 className="font-serif text-2xl text-navy mb-6">Send Us a Message</h2>
                <form
                  action="mailto:booksunbound123@gmail.com"
                  method="GET"
                  encType="text/plain"
                  className="space-y-5"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-brown/20 bg-cream text-navy text-sm focus:outline-none focus:ring-2 focus:ring-green/40 focus:border-green transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-brown/20 bg-cream text-navy text-sm focus:outline-none focus:ring-2 focus:ring-green/40 focus:border-green transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-brown/20 bg-cream text-navy text-sm focus:outline-none focus:ring-2 focus:ring-green/40 focus:border-green transition-colors resize-y"
                      placeholder="Tell us how you'd like to get involved..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green text-white font-semibold text-sm hover:bg-green/90 transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-brown/10 p-6 shadow-sm">
                <h2 className="font-serif text-xl text-navy mb-4">Contact Info</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-green shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-navy">Email</p>
                      <a
                        href="mailto:booksunbound123@gmail.com"
                        className="text-sm text-brown hover:text-green transition-colors"
                      >
                        booksunbound123@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-navy">Location</p>
                      <p className="text-sm text-brown">San Diego, California</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-navy">Current Drive</p>
                      <p className="text-sm text-brown">
                        June 15 &ndash; July 15
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green/5 rounded-2xl border border-green/10 p-6">
                <p className="text-sm text-brown leading-relaxed">
                  <strong className="text-navy">Not sure where to start?</strong>
                  <br />
                  Just send us a quick note and we will help you find the best way
                  to contribute &mdash; whether through donations, volunteering, or
                  partnership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section></RevealOnScroll>
    </>
  );
}