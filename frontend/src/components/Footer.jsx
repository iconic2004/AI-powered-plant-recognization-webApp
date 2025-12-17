const Footer = () => {
    return (
      <footer className="bg-green-950 text-white mt-10">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
  
          <div>
            <h2 className="text-lg font-bold">🌱 PlantAI</h2>
            <p className="text-sm mt-2">
              AI based plant recognition system.
            </p>
          </div>
  
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Why Use</li>
              <li>Plant Recognition</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-sm">support@plantai.com</p>
            <p className="text-sm">+91 98765 43210</p>
          </div>
  
          <div>
            <h3 className="font-semibold mb-2">Follow</h3>
            <p className="text-sm">GitHub | LinkedIn | Instagram</p>
          </div>
  
        </div>
  
        <div className="text-center py-3 text-sm bg-green-900">
          © 2025 PlantAI. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  