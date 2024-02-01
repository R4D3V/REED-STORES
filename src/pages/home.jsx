import video from "../video/one.mp4";
import { Link } from "react-router-dom";
import two from "../video/two.mp4";


function Home() {
  return (
   <div >
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
    <section className="container px-6 py-8 mx-auto lg:py-16 " id="about">
        <div className="lg:flex lg:items-center lg:-mx-4">
          <div className="lg:w-1/2 lg:px-4 text-center">
            <h3 className="text-3xl lg:text-5xl font-medium text-gray-600 md:text-2xl lg:text-3xl">
              We bring you the best of what you could think off.
            </h3>

            <p className="mt-6 text-gray-400 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              laboriosam provident voluptatum id magni iste nobis corrupti,
              delectus quis repellat, debitis error quod explicabo molestiae
              rerum totam ab sunt excepturi?
            </p>

            {/* <button className="flex text-center items-center mt-8 -mx-2 text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 mx-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ></svg>
              <p className="mx-1 font-semibold">PLAY VIDEO</p>
            </button> */}
          </div>

          <div className="mt-8 rounded-2xl">
          <video className="w-full h-full lg:h-[70vh]" autoPlay loop muted>
        <source src={two} type="video/mp4" className="" />
        Your
      </video>
          </div>
        </div>
      </section>
   </div>
    );
}

export default Home;
