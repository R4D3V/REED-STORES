import Footer from "./components/footer";
import Nav from "./components/nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Faq from "./pages/faq";
import About from "./pages/about";
import Terms from "./pages/terms"
import Testimonials from "./pages/testimonials";
import Products from "./pages/products"


const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="terms" element={<Terms />} />
        <Route path="/products" element={<Products />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;