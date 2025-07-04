import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from './pages/Home';
import Contact from './pages/Contact';
import Developer from './pages/Developer';
import Division from './pages/Division';

import Cybersecurity from './pages/division/cybersecurity';
import BigData from './pages/division/bigdata';
import GameTech from './pages/division/gametech';
import GIS from './pages/division/gis';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/division" element={<Division />} />
        <Route path="/division/cybersecurity" element={<Cybersecurity />} />
        <Route path="/division/bigdata" element={<BigData />} />
        <Route path="/division/gametech" element={<GameTech />} />
        <Route path="/division/gis" element={<GIS />} />
      </Routes>
    </>
  );
}

export default App;
