import { useState } from 'react';
import { Link } from 'react-router-dom'; // Use appropriate router library

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" p-4 flex items-center justify-between fixed w-full h-auto">
      <div className="flex items-center">
        <div className="mr-4">
          <Link to="/">
            <img src="/path/to/logo.png" alt="Logo" className="h-8" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {/* Add your navigation links here */}
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          {/* Add more links as needed */}
        </div>
      </div>

      <div className="flex items-center">
        <div className="mr-4">
          <Link to="/profile">Profile</Link>
        </div>
        <div className="mr-4">
          <Link to="/cart">Cart</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 bg-gray-800 p-4">
          {/* Add your mobile dropdown menu items here */}
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/cart">Cart</Link>
          {/* Add more items as needed */}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
