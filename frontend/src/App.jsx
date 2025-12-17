import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";

import Hero from "./pages/Hero";
import PlantRecognition from "./pages/PlantRecognition";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onLoginClick={() => setShowLogin(true)} />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/plant-recognition" element={<PlantRecognition />} />
        </Routes>
      </div>

      <Footer />

      {/* Login Modal */}
      <Login
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
      />
    </div>
  );
}

export default App;
