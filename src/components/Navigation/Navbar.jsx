import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#242424] p-4 rounded-lg mb-6">
      <div className="flex justify-between items-center">
        <h2 className="text-white font-semibold text-xl">Navigation</h2>
        <div className="flex space-x-4">
          <button className="text-gray-300 hover:text-white transition-colors duration-200">
            Home
          </button>
          <button className="text-gray-300 hover:text-white transition-colors duration-200">
            Music
          </button>
          <button className="text-gray-300 hover:text-white transition-colors duration-200">
            Tools
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
