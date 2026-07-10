import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import PageTransition from "./components/PageTransition";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Impact from "./pages/Impact";
import Gallery from "./pages/Gallery";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";

const SESSION_KEY = "bu-loaded";

export default function App() {
  // sessionStorage persists across module reloads/HMR within the same tab
  // Wrapped in try-catch to prevent white screen if storage is blocked
  const [loading, setLoading] = useState(() => {
    try { return !sessionStorage.getItem(SESSION_KEY); }
    catch { return true; }
  });

  const handleFinish = () => {
    sessionStorage.setItem(SESSION_KEY, "true");
    setLoading(false);
  };

  return (
    <>
      {loading && <LoadingScreen onFinish={handleFinish} />}
      <div
        className={`min-h-screen bg-cream flex flex-col transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Header />
        <main className="flex-1">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}