import { Link } from 'react-router-dom';
import logo from "../images/logo/reed.png"


const Navigation = () => {

  return (
    <nav className="items-center flex justify-around p-3">
        <Link to={'/'} className="border-b-2 border-transparent hover:text-gray-600 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">
         <img src={logo} alt="R-S" className="w-7 h-7" />
        </Link>
         <Link to={'/laptops'} className="border-b-2  border-transparent hover:text-gray-600 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">LAPTOPS</Link>
         <Link to={'/phones'} className="border-b-2  border-transparent hover:text-gray-600 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">PHONES</Link>
         <Link to={'/accessory'} className="border-b-2  border-transparent hover:text-gray-600 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">ACCESSORIES</Link>
     </nav>
  );
};

export default Navigation;