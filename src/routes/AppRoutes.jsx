// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Services from "../pages/Services";
// import Products from "../pages/Products";
// import Research from "../pages/Research";
// import Contact from "../pages/Contact";
// import Careers from "../pages/Careers";

// const AppRoutes = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/tira-space" element={<Home />} />
//       <Route path="/tira-space/about" element={<About />} />
//       <Route path="/tira-space/services" element={<Services />} />
//       <Route path="/tira-space/products" element={<Products />} />
//       <Route path="/tira-space/research" element={<Research />} />
//       <Route path="/tira-space/careers" element={<Careers />} />
//       <Route path="/tira-space/contact" element={<Contact />} />
//     </Routes>
//   </BrowserRouter>
// );

// export default AppRoutes;

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Products from "../pages/Products";
import Research from "../pages/Research";
import Contact from "../pages/Contact";
import Careers from "../pages/Careers";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/products" element={<Products />} />
    <Route path="/research" element={<Research />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRoutes;