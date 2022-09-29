import "./App.css";
import MobileMenu from "./components/MobileMenu";
import CtaSection from "./layout/CtaSection";
import Footer from "./layout/Footer";
import HeroSection from "./layout/HeroSection";
import MainSection from "./layout/MainSection";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MainSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
