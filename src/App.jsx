import Footer from "./components/footer";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Faq from "./pages/faq";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Blog from "./pages/blog";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
