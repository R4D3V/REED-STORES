import Footer from "./components/footer";
import Nav from "./components/nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Faq from "./pages/faq";
import About from "./pages/about";
import Terms from "./pages/terms"
import Testimonials from "./pages/testimonials";
import Products from "./pages/products"
import Phones from "./products/phones";
import Navbar from "./components/navbar";
import Laptops from "./products/laptops";
import Accessory from "./products/accessory";
import Speakers from "./products/speakers";


const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="terms" element={<Terms />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/accessory" element={<Accessory />} />
        <Route path="/products" element={<Products />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
      <Navbar />
    </>
  );
};

export default App;