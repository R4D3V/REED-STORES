import video from "../video/one.mp4";
import { Link } from "react-router-dom";

function Home() {
  return (
   <div className="" >
     <div className="flex-col bg-clip-border  bg-transparent text-gray-700 relative grid"> 
       <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your
      </video>
      <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end items-center">
      <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Phones</h4>
        
        <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">We are excited to share that our bank has successfully expanded into new markets. With strategic partnerships and innovative solutions, we have established a strong presence in international markets. Learn more about our expansion journey and the opportunities it brings.</p>
        <Link to='/products' className="p-4 text-sm text-white bg-black rounded-full w-fit ">
        Check me out
        </Link>
      </div>
    </div>

   </div>
    );
}

export default Home;
