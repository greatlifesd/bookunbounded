import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }) {
  const location = useLocation();
  const [phase, setPhase] = useState("idle"); // idle → entering → exiting
  const [displayChildren, setDisplayChildren] = useState(children);
  const prevKey = useRef(location.key);

  useEffect(() => {
    if (location.key === prevKey.current) return;
    prevKey.current = location.key;

    // Start the page-turn: overlay enters from right
    setPhase("entering");

    // After overlay covers screen, swap content and start exiting
    const t1 = setTimeout(() => {
      setDisplayChildren(children);
      setPhase("exiting");
    }, 300);

    // After overlay exits, reset
    const t2 = setTimeout(() => {
      setPhase("idle");
    }, 600);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [location, children]);

  // Keep display children in sync on initial render
  useEffect(() => {
    if (phase === "idle") {
      setDisplayChildren(children);
    }
  }, [children, phase]);

  return (
    <>
      {displayChildren}
      {phase !== "idle" && (
        <div
          className={`page-turn-overlay ${
            phase === "entering" ? "entering" : "exiting"
          }`}
        />
      )}
    </>
  );
}