import video from "../video/one.mp4";
import { Link } from "react-router-dom";
import image from "../images/logo/reed.png"

function Home() {
  return (
   <div className="" >
     <div className="flex-col bg-clip-border bg-transparent relative grid"> 
       <video className="w-full h-full object-cover lg:h-[70vh]" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your
      </video>
      <div className=" px-6 absolute inset-0 bg-black/70 pb-16 flex flex-col justify-end items-center">
      <h4 className="block antialiased tracking-normal font-sans text-3xl text-gray-300 font-semibold leading-snug text-white">
        Welcome to our online store.
      </h4>
        
        <p className="block antialiased  text-white my-2 font-normal text-center">We are excited to have you here  <b>And</b> showcase our beautiful products to you.</p>
        <Link to='/products' className="p-4 text-sm text-white bg-black rounded-full w-fit ">
        Check out our products
        </Link>
      </div>
    </div>
    <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">From the blog</h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
                quia tempore delect
            </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div>
                <img src={image} alt="" className="relative object-cover w-full rounded-md h-50" />

                <div className="relative  max-w-lg p-6 mx-auto -mt-20  rounded-md shadow dark:bg-gray-900">
                    <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        All the features you want to know
                    </a>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium quia tempore delect
                    </p>

                    <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
                </div>
            </div>

            <div>
            <img src={image} alt="" className="relative object-cover w-full rounded-md h-50" />
                <div className="relative  max-w-lg p-6 mx-auto -mt-20  rounded-md shadow dark:bg-gray-900">
                    <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        How to use sticky note for problem solving
                    </a>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium quia tempore delect
                    </p>

                    <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
                </div>
            </div>
        </div>
        <div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg]  shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8  sm:text-2xl sm:leading-9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
              molestiae. Numquam corrupti in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-400">Judith Black</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-400">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
       
      </div>
      <div className="flex items-center flex-wrap justify-center mt-8">
      <Link to='/testimonials' className="p-4 text-sm text-white bg-black rounded-full w-fit">
        Check out more of our <strong>Testimonies</strong>
        </Link>
      </div>
        </div>
    </div>
   </div>
    );
}

export default Home;
