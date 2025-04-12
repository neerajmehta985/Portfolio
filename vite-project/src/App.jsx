import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./assets/Component/About";
import Achievement from "./assets/Component/Achievement";
import Blog from "./assets/Component/Blog";
import Home from "./assets/Component/Home";
import Contact from "./assets/Component/Contact"; // ✅ Add this import
import Navbar from "./assets/Component/Navbar";
export default function App() {
  return (
    <div className="dark"> {/* ✅ Enables dark mode based on class */}
      <div className="bg-gray-800 min-h-screen text-white"> {/* ✅ Corrected class name */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/achievement" element={<Achievement />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
