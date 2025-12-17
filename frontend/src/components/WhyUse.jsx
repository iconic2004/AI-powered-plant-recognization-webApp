const WhyUse = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-900 text-center mb-10">
          Why Use This Application?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Instant Plant Identification",
            "AI Powered Chat Support",
            "Easy Image Upload",
            "Helpful for Students & Farmers",
            "Accurate Results",
            "User Friendly Interface",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded shadow text-center"
            >
              🌿 {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUse;
