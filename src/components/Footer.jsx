import { Link } from "react-router-dom";
import { Mail, MapPin, Heart } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <Logo className="w-14 h-14" />
              <span className="text-lg font-bold text-white">Books Unbound</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              A student-led book redistribution initiative expanding access to
              educational materials for underserved communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-yellow mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { to: "/about", label: "Our Story" },
                { to: "/impact", label: "Impact" },
                { to: "/get-involved", label: "Get Involved" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-yellow mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:booksunbound123@gmail.com"
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  booksunbound123@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>San Diego, California</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Books Unbound. All rights reserved.
          </p>
          <p className="text-white/50 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red" /> by students
          </p>
        </div>
      </div>
    </footer>
  );
}