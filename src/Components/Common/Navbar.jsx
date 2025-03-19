import { Globe } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full container m-auto flex justify-between items-center py-3 px-4 bg-white shadow-sm">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        {/* Logo and brand name */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-green-500">Leap Lingo</h1>
        </div>
      </div>

      {/* Welcome text */}
      <div className="flex items-center gap-2">
        <Globe className="w-5 h-5 text-green-500" />

        <span className="text-gray-500 font-medium py-2">
          Learn a new language today!
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
