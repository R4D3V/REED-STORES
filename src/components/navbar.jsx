import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className="container flex lg:hidden md:hidden sm:hidden items-center justify-center flex-wrap fixed bottom-0 w-full dark:bg-gray-950">
        <Link to='/terms' className="p-4 text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">Chats</Link>  
        <Link to='/products className="p-4 text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"'>Updates</Link>
        <Link to='/faq' className="p-4 text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">Calls</Link>
        <Link to='/testimonials' className="p-4 text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">Tools</Link>      
    </nav>
  )
}

export default navbar