import { Link } from "react-router-dom";
import lap from "../images/lap.png";
import fone from "../images/fone.png";
import acc from "../images/acc.jpg";
import spk from "../images/spk.jpg";



function Products() {
    return (
<div className="container mx-auto px-4 text-center py-8">
  <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 !text-3xl !leading-snug lg:!text-4xl">Shop by your preffered choice.</h2>
  <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mt-2  text-gray-500 ">Look through the categories we have to offer to you.</p>
  <div className="mt-10 grid grid-cols-1 gap-10 place-center lg:grid-cols-3">
    <div className="relative shadow-black flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md  grid min-h-[30rem] items-end overflow-hidden dark:shadow-cyan-600"><img src={lap} alt="bg" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="p-6 relative flex flex-col justify-end items-center">
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Laptops</h4>
        <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">We are proud to announce that our bank has achieved record-breaking profits this year. Thanks to our dedicated team and loyal customers, we have surpassed all expectations and set new industry standards. Read more to learn about our success story.</p>
        <Link to='/laptops' className="p-4 text-sm text-white bg-black rounded-full w-fit">
        Check me out
        </Link>
      </div>
    </div>
    <div className="relative flex shadow-black flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden dark:shadow-cyan-600"><img src={fone} alt="bg" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="p-6 relative flex flex-col justify-end items-center">
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Phones</h4>
        
        <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">We are excited to share that our bank has successfully expanded into new markets. With strategic partnerships and innovative solutions, we have established a strong presence in international markets. Learn more about our expansion journey and the opportunities it brings.</p>
        <Link to='/phones' className="p-4 text-sm text-white bg-black rounded-full w-fit ">
        Check me out
        </Link>
      </div>
    </div>
    <div className="relative flex shadow-black flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden dark:shadow-cyan-600"><img src={acc} alt="bg" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="p-6 relative flex flex-col justify-end items-center">
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Accessories</h4>
        <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">Our bank has undergone a successful digital transformation, revolutionizing the way we serve our customers. From seamless online banking experiences to advanced security measures, we have embraced technology to enhance customer satisfaction. Discover the key milestones of our digital transformation journey.</p>
        
        <Link to='/accessory' className="p-4 text-sm text-white bg-black rounded-full w-fit ">
        Check me out
        </Link>
      </div>
     
    </div>
    <div className="relative flex shadow-black flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden dark:shadow-cyan-600"><img src={spk} alt="bg" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="p-6 relative flex flex-col justify-end items-center">
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">Speakers</h4>
        <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">Our bank has undergone a successful digital transformation, revolutionizing the way we serve our customers. From seamless online banking experiences to advanced security measures, we have embraced technology to enhance customer satisfaction. Discover the key milestones of our digital transformation journey.</p>
        
        <Link to='/speakers' className="p-4 text-sm text-white bg-black rounded-full w-fit ">
        Speakers
        </Link>
      </div>
     
    </div>
  </div>
</div>
    )
  }
  
  export default Products;