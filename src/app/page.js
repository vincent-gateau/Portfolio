import Image from "next/image";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import MenuOverlay from "./component/MenuOverlay";
import AboutSection from "./component/AboutSection";
import AchievementsSection from "./component/AchievementsSection";
import ProjectsSection from "./component/ProjectsSection";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-stone-900">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <AchievementsSection />
        <Footer />
      </div>
    </main>
  );
}
