import Hero from "../components/Hero";
import Mission from "../components/Mission";
import HowItWorks from "../components/HowItWorks";
import ImpactSnapshot from "../components/ImpactSnapshot";
import ActiveDrive from "../components/ActiveDrive";
import RevealOnScroll from "../components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <RevealOnScroll><Hero /></RevealOnScroll>
      <RevealOnScroll delay={100}><Mission /></RevealOnScroll>
      <RevealOnScroll delay={100}><HowItWorks /></RevealOnScroll>
      <RevealOnScroll delay={100}><ImpactSnapshot /></RevealOnScroll>
      <RevealOnScroll delay={100}><ActiveDrive /></RevealOnScroll>
    </>
  );
}