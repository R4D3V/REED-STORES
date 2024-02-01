import { Link } from 'react-router-dom';
import logo from "../images/logo/reed.png"
import accessory from '../products/accessory';


const Navigation = () => {

  return (
    <nav className="container flex items-center justify-around  p-4 mx-auto  capitalize ">
         <span className='flex justify-between flex-wrap items-center'>
         <img src={logo} alt="R-S" className="w-7 h-7" />

         <Link to={'/'} className="border-b-2 border-transparent hover:text-gray-600 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">
         <p className='font-bold'>HOME</p>
        </Link>
        
         </span>
         <Link to={'/laptops'} className="border-b-2 border-transparent hover:text-gray-600 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">LAPTOPS</Link>
         <Link to={'/phones'} className="border-b-2 border-transparent hover:text-gray-600 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">PHONES</Link>
         <Link to={'/accessory'} className="border-b-2 border-transparent hover:text-gray-600 transition-colors duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">ACCESSORIES</Link>
         
       
</nav>
  );
};

export default Navigation;