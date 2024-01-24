// Date auto Copyright {new Date().getFullYear()}
// import favicon from "../assets/android-chrome-192x192.png";
// import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
      <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
      {/* <a href="#">
            <img class="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt="">
        </a> */}
       <h1>image goes here</h1>

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
                Blog
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

        <p className="mt-6 text-sm lg:mt-0 ">© Copyright 2023 REED-STORES </p>
    </div>     
    </footer>
    </>
  );
}
