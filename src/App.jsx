import Footer from "./components/footer";
import Nav from "./components/nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Faq from "./pages/faq";
import Contact from "./pages/contact";
import Letter from "./pages/letter";


const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
