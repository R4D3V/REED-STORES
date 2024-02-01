import video from "../video/one.mp4";
import { Link } from "react-router-dom";

function Home() {
  return (
   <div className="container" >
     <div className="flex-col bg-clip-border bg-transparent relative grid sm:h-2/4"> 
       <video className="w-full h-full object-cover lg:h-[70vh]" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your
      </video>
      <div className=" px-6 absolute inset-0 bg-black/70 pb-4 flex flex-col justify-end items-center">
      <h4 className="block antialiased tracking-normal font-sans text-2xl sm:textlg text-gray-300 font-semibold leading-snug text-white">
        Welcome to our online store.
      </h4>
        
        <p className="block antialiased  text-white my-2 font-normal text-center">We are excited to have you here  <b>And</b> showcase our beautiful products to you.</p>
        <Link to='/products' className="p-4 text-sm text-white bg-black rounded-full w-fit ">
        Check out our products
        </Link>
      </div>
    </div>
    
   </div>
    );
}

export default Home;
