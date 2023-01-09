import React from "react";
import AnalyticsSection from "./components/AnalyticsSection";
import Footer from "./components/Footer";
import LastSection from "./components/LastSection";
import MobileSection from "./components/MobileSection";
import Navbar from "./components/Navbar";
import PcSection from "./components/PcSection";
import TestimonialSection from "./components/TestimonialSection";
import "./style.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <PcSection />
      <AnalyticsSection />
      <MobileSection />
      <TestimonialSection />
      <LastSection />
      <Footer />
    </div>
  );
}

export default App;
