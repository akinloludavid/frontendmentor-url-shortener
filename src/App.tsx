import "./App.css";
import MobileMenu from "./components/MobileMenu";
import CtaSection from "./layout/CtaSection";
import Footer from "./layout/Footer";
import HeroSection from "./layout/HeroSection";
import MainSection from "./layout/MainSection";
import Navbar from "./layout/Navbar";
import HomePage from "./pages/Hompage";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
