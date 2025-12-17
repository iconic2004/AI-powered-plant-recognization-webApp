import { useState } from "react";

const Login = ({ isOpen, onClose }) => {
  const [isSignup, setIsSignup] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Card */}
      <div className="bg-white w-full max-w-md rounded-xl p-6 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-green-900 mb-4">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-2 rounded"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
          />

          {isSignup && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border p-2 rounded"
            />
          )}

          <button
            type="button"
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {/* Toggle */}
        <p className="text-center text-sm mt-4">
          {isSignup ? "Already have an account?" : "Don’t have an account?"}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="ml-2 text-green-700 font-semibold"
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
