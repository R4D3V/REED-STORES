import whatsapp from "../icons/whatsapp.svg"

function About() {
    
  return (
    <div className="container">
     <div className="container mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">About Our Gadgets Store</h2>
      <p className="mb-4">
        Welcome to our Gadgets Store, your one-stop destination for the latest and coolest gadgets
        on the market. We strive to bring you cutting-edge technology and innovative products to
        enhance your daily life.
      </p>
      <p className="mb-4">
        Our team of tech enthusiasts is dedicated to selecting the best gadgets that combine
        functionality, style, and affordability. Whether you are a gadget guru or just looking for a
        unique gift, we have got something for everyone.
      </p>
      <p className="mb-4">
        Explore our diverse collection of gadgets, from smart home devices to the latest in wearable
        technology. We believe in providing an exceptional shopping experience, ensuring that our
        customers are well-informed and satisfied with their purchases.
      </p>
      <p>
        Thank you for choosing our Gadgets Store. We look forward to serving you and keeping you
        updated with the latest trends in the world of technology.
      </p>
    </div>
     
        <section className="">
    <div className="container px-6 py-12 mx-auto">
        <div>
            <p className="font-medium text-center ">Contact us</p>

            <h1 className="mt-2 text-2xl font-semibold text-center md:text-3xl">Chat to our friendly team</h1>

            <p className="mt-3 text-center ">We’d love to hear from you. Please reach out to us by any means.</p>
        </div>

        <div className=" mt-10">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 text-center">
                <div>
                    <span className="inline-block p-3  rounded-full  ">
                        
                        <a href="mailto:raymonjohns@gmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        </a>
                    </span>

                    <h2 className="mt-4 text-base font-medium  dark:">Email</h2>
                    <p className="mt-2 text-sm  ">Our friendly team is here to help.</p>
                    <button className="mt-2 text-sm bg-gray-800 p-2 rounded-full text-white"><a href="mailto:raymonjohns@gmail.com">raymonjohns@gmail.com</a></button>
                </div>

                <div>
                    <span className="inline-block p-3 rounded-full  ">
                        <img src={whatsapp} alt="chat" className="w-8 h-8 dark:bg-gray-500 rounded-xl "/>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium  dark:">Whatsapp</h2>
                    <p className="mt-2 text-sm  ">Our friendly team is here to help.</p>
                    <p className="mt-2 text-sm  "><a className="bg-gray-800 p-2 rounded-full text-white" href="https://wa.me/message/EMSUIOYUA5SDI1">Start new chat <b><i>Now</i></b></a></p>
                </div>

                <div>
                    <span className="inline-block p-3  rounded-full  ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium">Office</h2>
                    <p className="mt-2 text-sm  ">Come say hello at our office HQ.</p>
                    <p className="mt-2 text-sm  ">100 Smith Street Collingwood VIC 3066 AU</p>
                </div>

                <div>
                    <span className="inline-block p-3  rounded-full  ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium  dark:">Phone</h2>
                    <p className="mt-2 text-sm  ">Mon-Fri from 8am to 5pm.</p>
                    <p className="mt-2 text-sm"><a className="bg-gray-800 p-2 rounded-full text-white" href="tel:+256751621506">+256751621506</a></p>
                </div>
            </div>
       </div>
    </div>
</section>
    </div>
  )
}

export default About;