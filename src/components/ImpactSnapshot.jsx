import { useRef, useState, useEffect } from "react";

const spines = [
  { value: "6,000+", label: "Books Redistributed", height: "h-48", bg: "bg-forest", delay: "0ms" },
  { value: "40+", label: "Partner Locations", height: "h-36", bg: "bg-terracotta", delay: "80ms" },
  { value: "200+", label: "Deliveries Completed", height: "h-40", bg: "bg-ink", delay: "160ms" },
  { value: "65+", label: "Donors Engaged", height: "h-32", bg: "bg-forest/80", delay: "240ms" },
  { value: "20+", label: "Volunteers", height: "h-28", bg: "bg-terracotta/80", delay: "320ms" },
];

function parseCount(val) {
  const num = parseInt(val.replace(/[,+]/g, ""), 10);
  const suffix = val.includes("+") ? "+" : "";
  const formatted = (n) => n.toLocaleString() + suffix;
  return { num, suffix, formatted };
}

function CountUp({ value, className, delay }) {
  const { num, formatted } = parseCount(value);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.max(1, Math.floor(num / 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= num) {
        setCount(num);
        setDone(true);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [started, num]);

  return (
    <span ref={ref} className={`${className} ${done ? "count-up-enter" : ""}`}>
      {started ? formatted(count) : "0"}
    </span>
  );
}

export default function ImpactSnapshot() {
  return (
    <section className="bg-parchment paper-grain">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="bookmark-ribbon text-terracotta" />
          <h2 className="font-serif text-3xl md:text-4xl text-ink text-center">
            Impact Snapshot
          </h2>
          <span className="bookmark-ribbon text-forest" />
        </div>

        {/* Bookshelf */}
        <div className="relative">
          <div className="flex items-end justify-center gap-3 md:gap-4 px-2">
            {spines.map((spine) => (
              <div
                key={spine.label}
                className={`book-spine flex-1 max-w-[120px] ${spine.height} ${spine.bg} rounded-t-md flex flex-col items-center justify-end pb-4 px-1 cursor-default`}
              >
                <CountUp
                  value={spine.value}
                  delay={spine.delay}
                  className="font-mono text-white text-lg md:text-xl font-bold leading-tight text-center break-words"
                />
                <span className="text-white/70 text-[10px] md:text-xs font-medium mt-1 text-center leading-tight">
                  {spine.label}
                </span>
              </div>
            ))}
          </div>

          {/* Shelf line */}
          <div className="mt-0 h-3 bg-ink/10 rounded-b-sm relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ink/5 to-transparent" />
          </div>
        </div>

        {/* Shelf feet */}
        <div className="flex justify-center gap-40 md:gap-60 mt-0.5">
          <div className="w-3 h-2 bg-ink/15 rounded-b-sm" />
          <div className="w-3 h-2 bg-ink/15 rounded-b-sm" />
        </div>
      </div>
    </section>
  );
}