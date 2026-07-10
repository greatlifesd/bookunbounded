import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";

export default function LoadingScreen({ onFinish }) {
  const [step, setStep] = useState(0); // 0=logo, 1=wordmark, 2=tagline, 3=progress
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Progress bar fill
  useEffect(() => {
    if (step < 3) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 100;
        return p + 1.6;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [step]);

  // Animation sequence timing
  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 800);
    const t2 = setTimeout(() => setStep(2), 1500);
    const t3 = setTimeout(() => setStep(3), 2200);
    const t4 = setTimeout(() => setFading(true), 3800);
    const t5 = setTimeout(() => onFinish(), 4500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onFinish]);

  // Particle positions (stable across renders)
  const particles = useRef(
    [...Array(15)].map(() => ({
      size: 2 + Math.random() * 4,
      left: 5 + Math.random() * 90,
      top: 5 + Math.random() * 90,
      color:
        Math.random() < 0.33
          ? "#F4A261"
          : Math.random() < 0.66
            ? "#F0C75E"
            : "#C76B43",
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 3,
    }))
  ).current;

  return (
    <div
      className={`fixed inset-0 z-[200] bg-forest flex flex-col items-center justify-center transition-opacity duration-700 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Floating warm-toned particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: 0.2,
              animation: `floatParticle ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Logo — book open animation */}
      <div
        className={step >= 0 ? "book-open" : "opacity-0"}
        style={{ opacity: step >= 0 ? 1 : 0 }}
      >
        <Logo className="w-28 h-28 md:w-32 md:h-32" />
      </div>

      {/* Wordmark */}
      <div
        className={step >= 1 ? "fade-up" : "opacity-0 invisible"}
        style={{ animationDelay: "0s" }}
      >
        <h1 className="font-serif text-3xl md:text-4xl text-white mt-6 tracking-wide">
          Books Unbound
        </h1>
      </div>

      {/* Tagline */}
      <div
        className={step >= 2 ? "fade-up" : "opacity-0 invisible"}
        style={{ animationDelay: "0s" }}
      >
        <p className="text-white/50 text-sm md:text-base mt-3 font-light tracking-wider">
          Student-Led Book Redistribution
        </p>
      </div>

      {/* Bookmark ribbon progress indicator */}
      <div
        className={`mt-12 transition-all duration-500 ${
          step >= 3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative w-48">
          {/* Ribbon tail */}
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "8px solid #C76B43",
              opacity: progress >= 100 ? 1 : 0,
              transition: "opacity 0.3s",
            }}
          />
          {/* Ribbon body */}
          <div className="relative h-[6px] bg-white/10 rounded-sm overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full rounded-sm transition-all duration-100 ease-linear"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: "linear-gradient(to right, #C76B43, #F4A261)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}