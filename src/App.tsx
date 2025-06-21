import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Tyres from './pages/Tyres';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import './index.css';
import Aurora from './components/Aurora'
function App() {
  return (
     <Router>
      <div className="relative min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 text-neutral-800 font-sans overflow-x-hidden">
        
        
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Aurora 
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.3}
            amplitude={1.0}
            speed={0.7}
          />
        </div>

       
        <div className="fixed inset-0 z-10 pointer-events-none bg-white/20" />
        
       
        <div className="relative z-40">
          <Navigation />
        </div>
        
       
        <div className="relative z-30">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tyres" element={<Tyres />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </AnimatePresence>
        </div>
        
      
        <div className="relative z-30">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;