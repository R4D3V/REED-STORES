import { Link } from "react-router-dom";
import home from "../icons/home.svg";
import up from "../icons/up.png";
import shop from "../icons/shop.png";
import about from "../icons/about.png";


function navbar() {
  return (
    <nav className="container lg:hidden md:hidden sm:hidden ">
       <div className="flex gap-4 flex-wrap fixed bottom-0 w-full justify-evenly bg-gray-400 dark:bg-white text-white rounded-t-xl">
       <Link to='/' className="p-4 text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
            <img src={home} alt="" className="w-4 h-4"/>
            </Link>  
        <Link to='/products' className="p-4 text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
        <img src={shop} alt="" className="w-4 h-4"/>
        </Link>
        
        <Link to='/about' className="p-4 text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
        <img src={about} alt="" className="w-4 h-4"/>
        </Link>
       
        <div className="p-4 text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
        <a href="#"><img src={up} alt="#" className="w-4 h-4"/></a>
        </div>
        
        
      </div>     
    </nav>
  )
}

export default navbar