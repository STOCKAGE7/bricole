import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./compo/Navbar";
import HeaderHome from "./compo/homeheader.tsx/HeaderHome";

const App = () => {
  return (
    <Router>
      <Navbar />
      <HeaderHome/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

const Home = () => <div className="p-4">Welcome to Home Page</div>;
const About = () => <div className="p-4">About Us</div>;
const Services = () => <div className="p-4">Our Services</div>;
const Contact = () => <div className="p-4">Contact Us</div>;

export default App;
