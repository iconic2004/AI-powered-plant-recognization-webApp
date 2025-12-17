import { Link } from "react-router-dom";
import About from "../components/About";
import WhyUse from "../components/WhyUse";

const Hero = () => {
  return (
    <>
      {/* HERO */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center text-center py-28 bg-green-50"
      >
        <h1 className="text-4xl font-bold text-green-900">
          Identify Any Plant Using AI 🌿
        </h1>
        <p className="mt-4 text-gray-700 max-w-xl">
          Upload a plant image and get instant information, benefits, and care tips.
        </p>
        <Link to="/plant-recognition">
          <button className="mt-6 bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">
            Get Started
          </button>
        </Link>
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* WHY USE */}
      <section id="whyuse">
        <WhyUse />
      </section>
    </>
  );
};

export default Hero;
