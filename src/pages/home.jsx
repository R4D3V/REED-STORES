import video from "../video/one.mp4";
import { Link } from "react-router-dom";
import image from "../images/logo/reed.png"

function Home() {
  return (
   <div className="mt-[70px]" >
     <div className="flex-col bg-clip-border  bg-transparent text-gray-700 grid"> 
       <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your
      </video>
      <div className="relative inset-0 bg-black/40 p-6 flex flex-col justify-end items-center">
      <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Phones</h4>
        
        <p className="block antialiased relative text-center font-sans text-baseleading-relaxed text-white my-2 font-normal">We are excited to share that our bank has successfully expanded into new markets. With strategic partnerships and innovative solutions, we have established a strong presence in international markets. Learn more about our expansion journey and the opportunities it brings.</p>
        <Link to='/products' className="p-4 text-sm text-white bg-black rounded-full w-fit ">
        Check me out
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
    </div>
   </div>
    );
}

export default Home;
