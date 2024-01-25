import logo from "../images/logo/reed.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
       <nav className="p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section - Logo */}
        <div className="flex items-center">
        <Link to='/'>
        <img
            src={logo} // Replace with your actual logo path
            alt="Logo"
            className="h-8 w-auto mr-2"
          />
        </Link>
          
          <span className="text-white text-lg font-semibold font-mono">REED~STORES</span>
        </div>

        {/* Middle Section - Links */}
        <div className="hidden md:flex flex-grow items-center justify-center">
          <a href="#" className="text-white mx-4">Shop</a>
          <a href="#" className="text-white mx-4">Categories</a>
          <a href="#" className="text-white mx-4">About Us</a>
          {/* Add more links as needed */}
        </div>

        {/* Right Section - Cart and Profile */}
        <div className="flex items-center">
          <a href="#" className="text-white mr-4">Cart</a>
          <a href="#" className="text-white">Profile</a>
        </div>
      </div>
    </nav>
    </>
  );
}

