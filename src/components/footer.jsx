import logo from "../images/logo/reed.png";
import { Link } from "react-router-dom";
// Date auto Copyright {new Date().getFullYear()}
export default function Footer() {
  return (
    <>
      <footer className="container flex flex-col items-center justify-between p-3 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
      <div className="container flex flex-col items-center justify-between px-2 py-2 mx-auto lg:flex-row">
        <Link to='/'>
        <img
            src={logo} // Replace with your actual logo path
            alt="Logo"
            className="h-8 w-auto mr-2"
          />
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
            <a href="#" className="text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
                About Us
            </a>

            <a href="#" className="text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
                Meet the Team
            </a>

            <a href="#" className="text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
                Partners
            </a>

            <a href="#" className="text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
                Faq
            </a>

            <a href="#" className="text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
                Testimonials
            </a>

            <a href="#" className="text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
                News Letter
            </a>

            <a href="#" className="text-sm transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400">
                Terms & Conditions
            </a>
        </div>

        <p className="mt-6 text-sm lg:mt-0 ">© Copyright {new Date().getFullYear()} REED-STORES </p>
    </div>     
    </footer>
    </>
  );
}
