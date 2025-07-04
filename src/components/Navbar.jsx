import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Division", href: "/division/" },
    { name: "Contact", href: "/contact" },
    { name: "Developer", href: "/developer" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 px-6">
      <div className="flex justify-between items-center h-16">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-30 h-30 md:w-45 md:h-45 flex items-center justify-center">
            <img
              src="/assets/mbc_logo.webp"
              alt="MBC Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 hover:font-bold transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-red-600 p-2"
          >
            <span className="text-xl">{isOpen ? "✖" : "☰"}</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden py-4 border-t border-gray-200">
          <div className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
