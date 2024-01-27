import { Link } from "react-router-dom";
import home from "../icons/home.png"

function navbar() {
  return (
    <nav className="container flex lg:hidden md:hidden sm:hidden items-center justify-center gap-4 h=[15px] flex-wrap fixed bottom-0 w-full dark:bg-gray-950">
        <Link to='/' className="p-4 text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
            <img src={home} alt="" className="w-4 h-4"/>
            </Link>  
        <Link to='/products' className="p-4 text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
        <img src={home} alt="" className="w-4 h-4"/>
        </Link>
        <Link to='/faq' className="p-4 text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
        <img src={home} alt="" className="w-4 h-4"/>
        </Link>
        <Link to='/testimonials' className="p-4 text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
        <img src={home} alt="" className="w-4 h-4"/></Link>      
    </nav>
  )
}

export default navbar