import { Link } from "react-router-dom";
// Date auto Copyright {new Date().getFullYear()}

export default function Footer() {
  return (
    <>
      <footer className="container flex flex-col items-center justify-between p-3 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
      <div className="container flex flex-col items-center justify-between px-2 py-2 mx-auto lg:flex-row">
        
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
            <a href="" className="text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
                <Link to='/about'>ABOUT US</Link>
            </a>

            <a href="" className="text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
               <Link to='/faq'>FAQ</Link>
            </a>

            <a href="" className="text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
                <Link to='/products'>SHOP</Link>
            </a>

            <a href="" className="text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
                <Link to='/testimonials'>TESTIMONIALS</Link>
            </a>

            <a href="" className="text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
                
                <Link to='/terms'>TERM & CONDITIONS</Link>
            </a>
        </div>

        <p className="mt-6 text-sm lg:mt-0 sm:hidden ">© Copyright {new Date().getFullYear()} <Link to='/'>REED~STORES</Link>  </p>
    </div>     
    </footer>
    </>
  );
}
