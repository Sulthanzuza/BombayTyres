import React, { useState,useEffect, useRef } from 'react';
import { motion,AnimatePresence, useScroll, useTransform,useSpring  } from 'framer-motion';
import { Car, Bike, Search,  MessageCircle } from 'lucide-react';
import { ArrowRight,  Phone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import mich from '/mich.jpg'
import cont from '/conti.jpg'
import brid from '/bridgestone-logo-2011-present-1536x1114.webp'
import dun from '/dunlop.jpg'
import good from '/Goodyear-Logo.png'
import haan from '/Hankook-logo-5500x1000.png'
import pire from '/pirelli-logo-3400x955.png'
import toyo from '/toyo.jpg'
import yoko from '/yoko.jpg'

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
   const [activeTab, setActiveTab] = useState<'car' | 'bike'>('car');
    const [selectedTyre, setSelectedTyre] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState('all');
    const [brand, setBrand] = useState('all');




    const carTyres = [
      {
        id: 1,
        name: 'Michelin Pilot Sport 4S',
        brand: 'Michelin',
        size: '225/45R17',
        price: 'Premium Range',
        rating: 4.9,
        image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=500',
        features: ['Ultra High Performance', 'Track-Ready', 'All-Weather Grip'],
        description: 'Ultimate performance tyre for sports cars and high-performance vehicles.',
        phone: '+1-555-TYRE-001'
      },
      {
        id: 2,
        name: 'Continental PremiumContact 6',
        brand: 'Continental',
        size: '205/55R16',
        price: 'Mid-Premium',
        rating: 4.7,
        image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=500',
        features: ['Comfort Plus', 'Fuel Efficient', 'Silent Drive'],
        description: 'Perfect balance of comfort, efficiency, and performance for luxury sedans.',
        phone: '+1-555-TYRE-002'
      },
      {
        id: 3,
        name: 'Bridgestone Turanza T005',
        brand: 'Bridgestone',
        size: '245/40R18',
        price: 'Premium Range',
        rating: 4.8,
        image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=500',
        features: ['Wet Weather Master', 'Long Lasting', 'Precision Handling'],
        description: 'Advanced wet weather performance with exceptional durability.',
        phone: '+1-555-TYRE-003'
      },
      {
        id: 4,
        name: 'Pirelli P Zero',
        brand: 'Pirelli',
        size: '195/65R15',
        price: 'Ultra Premium',
        rating: 4.9,
        image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=500',
        features: ['Racing Heritage', 'Maximum Grip', 'Precision Control'],
        description: 'Formula 1 technology adapted for road use, delivering unmatched performance.',
        phone: '+1-555-TYRE-004'
      }
    ];
  
    const bikeTyres = [
      {
        id: 5,
        name: 'Pirelli Diablo Rosso IV',
        brand: 'Pirelli',
        size: '120/70-17',
        price: 'Premium Range',
        rating: 4.9,
        image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=500',
        features: ['Track Performance', 'Street Legal', 'Maximum Lean Angle'],
        description: 'Professional racing technology for street and track enthusiasts.',
        phone: '+1-555-BIKE-001'
      },
      {
        id: 6,
        name: 'Michelin Road 5 Trail',
        brand: 'Michelin',
        size: '180/55-17',
        price: 'Mid-Premium',
        rating: 4.8,
        image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=500',
        features: ['Adventure Ready', 'All-Terrain', 'Long Distance'],
        description: 'Engineered for adventure touring and long-distance riding comfort.',
        phone: '+1-555-BIKE-002'
      },
      {
        id: 7,
        name: 'Bridgestone Battlax Hypersport S22',
        brand: 'Bridgestone',
        size: '120/70-17',
        price: 'Premium Range',
        rating: 4.7,
        image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=500',
        features: ['Hypersport Technology', 'Corner Stability', 'Quick Warm-up'],
        description: 'Advanced compound technology for superior grip and handling precision.',
        phone: '+1-555-BIKE-003'
      },
      {
        id: 8,
        name: 'Continental ContiRoadAttack 3',
        brand: 'Continental',
        size: '160/60-17',
        price: 'Mid-Premium',
        rating: 4.6,
        image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=500',
        features: ['Sport Touring', 'All-Weather', 'Mileage Plus'],
        description: 'Versatile performance for sport touring and everyday riding excellence.',
        phone: '+1-555-BIKE-004'
      }
    ];
  
    const currentTyres = activeTab === 'car' ? carTyres : bikeTyres;
  
    const filteredTyres = currentTyres.filter(tyre => {
      const matchesSearch = tyre.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tyre.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = brand === 'all' || tyre.brand.toLowerCase() === brand.toLowerCase();
      const matchesPrice = priceRange === 'all' || 
                          (priceRange === 'mid' && tyre.price.includes('Mid')) ||
                          (priceRange === 'premium' && tyre.price.includes('Premium')) ||
                          (priceRange === 'ultra' && tyre.price.includes('Ultra'));
      
      return matchesSearch && matchesBrand && matchesPrice;
    });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"] 
  });


  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateXOpposite = useTransform(scrollYProgress, [0, 1], [0, -360]);
const smoothRotationLeft = useSpring(rotateX, {
    damping: 30,
    stiffness: 200,
  });

  const smoothRotationRight = useSpring(rotateXOpposite, {
    damping: 30,
    stiffness: 200,
  });
  const companies = [
    { name: 'Michelin', logo: mich },
    { name: 'Bridgestone', logo:brid },
    { name: 'Goodyear', logo: good },
    { name: 'Continental', logo: cont },
    { name: 'Pirelli', logo: pire},
    { name: 'Dunlop', logo: dun },
    { name: 'Yokohama', logo: yoko },
    { name: 'Hankook', logo: haan},
    { name: 'Toyo Tires', logo: toyo }
    
  ];
    const handleCall = (phone: string) => {
      window.location.href = `tel:${phone}`;
    };
  
    const handleWhatsApp = (phone: string, tyreName: string) => {
      const message = `Hi! I'm interested in the ${tyreName}. Could you provide more details and pricing?`;
      const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    };
  
const navigate = useNavigate();

  const handleClick = () => {
    navigate('/tyres');
  };
  useEffect(() => {
    // Hero parallax effect
    if (parallaxRef.current) {
      gsap.to(parallaxRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }

    // Floating particles animation
    gsap.to('.floating-particle', {
      y: -30,
      duration: 4,
      ease: 'power2.inOut',
      stagger: 0.3,
      repeat: -1,
      yoyo: true
    });
  }, []);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
     
<section 
  ref={heroRef} 
  className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-0"
>
 


  <motion.div className="absolute inset-0 z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-neutral-100/60 via-zinc-50/60 to-zinc-100/60" />
  </motion.div>

 
 <motion.div
          style={{ rotate: smoothRotationLeft }} 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 gpu-layer"
          initial={{ x: -400, opacity: 0, scale: 0.8 }}
          animate={{ 
            x: typeof window !== 'undefined' && window.innerWidth < 768 ? -60 : typeof window !== 'undefined' && window.innerWidth < 1024 ? -80 : typeof window !== 'undefined' && window.innerWidth < 1280 ? -120 : -150, 
            opacity: 0.7, 
            scale: 1 
          }}
          transition={{ 
            duration: 1.8, 
            delay: 0.5,
            ease: "easeOut"
          }}
        >
    <div className="relative">
   
      <img 
        src="/black-alloy-wheelwith-tyre-q9h2c4y9nd0gy6e4.png" 
        alt="Premium Tyre"
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] xl:w-[36rem] xl:h-[36rem] object-contain opacity-90"
      />
    
      <div className="absolute inset-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] xl:w-[36rem] xl:h-[36rem] rounded-full border-4 sm:border-6 lg:border-8 border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 opacity-80 shadow-2xl">
        <div className="absolute inset-2 sm:inset-4 lg:inset-6 rounded-full border-2 sm:border-4 lg:border-6 border-neutral-600"></div>
        <div className="absolute inset-4 sm:inset-6 lg:inset-8 xl:inset-12 rounded-full border-2 sm:border-3 lg:border-4 border-neutral-500"></div>
      </div>
    </div>
  </motion.div>

 
   <motion.div
          // 4. Apply the NEW smoothed value and the CSS class
          style={{ rotate: smoothRotationRight }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden lg:block gpu-layer"
          initial={{ x: 400, opacity: 0, scale: 0.8 }}
          animate={{ 
            x: typeof window !== 'undefined' && window.innerWidth < 1280 ? 120 : 150, 
            opacity: 0.7, 
            scale: 1 
          }}
          transition={{ 
            duration: 1.8, 
            delay: 0.7,
            ease: "easeOut"
          }}
        >
    <div className="relative">
      
      <img 
        src="/performance-tirewith-alloy-wheel-46e8fisghdpvhwcj.png" 
        alt="Performance Tyre"
        className="w-80 h-80 lg:w-[28rem] lg:h-[28rem] xl:w-[36rem] xl:h-[36rem] object-contain opacity-90"
      />

      <div className="absolute inset-0 w-80 h-80 lg:w-[28rem] lg:h-[28rem] xl:w-[36rem] xl:h-[36rem] rounded-full border-8 border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 opacity-80 shadow-2xl">
        <div className="absolute inset-6 rounded-full border-6 border-neutral-600"></div>
        <div className="absolute inset-8 xl:inset-12 rounded-full border-4 border-neutral-500"></div>
      </div>
    </div>
  </motion.div>


  <div className="absolute inset-0 pointer-events-none z-15">
    {Array.from({ length: 6 }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ 
          x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200, 
          y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
          opacity: 0,
          scale: 0
        }}
        animate={{ 
          y: [null, typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800],
          opacity: [0, 0.4, 0],
          scale: [0, 1, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 5,
          delay: Math.random() * 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-8 h-8 rounded-full border-2 border-neutral-600 bg-neutral-700"
      />
    ))}
  </div>


  <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div className="text-center space-y-8 bg-transparent">
     
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="space-y-4"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight font-display">
          <motion.span 
            className="block text-neutral-800"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Not Just Tyres.
          </motion.span>
          <motion.span 
            className="block bg-gradient-to-r from-black via-blue-600 to-indigo-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            It's Bombay Tyres.
          </motion.span>
        </h1>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed"
      >
        Discover premium car and bike tyres at Bombay Tyres, where quality, safety, and expert service come together. Your perfect drive starts here.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
      >
        <motion.button
          onClick={handleClick}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(14, 165, 233, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-sky-600 text-white font-semibold rounded-2xl hover:from-sky-600 hover:to-indigo-700 transition-all shadow-xl hover:shadow-2xl overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
          <span className="relative z-10">Explore Premium Tyres</span>
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
        </motion.button>
        
        <motion.button
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "rgba(255, 255, 255, 0.9)"
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-8 py-4 bg-white/70 backdrop-blur-sm text-cyan-700 font-semibold rounded-2xl hover:bg-white/90 transition-all shadow-lg hover:shadow-xl border border-white/50"
        >
          <Phone className="mr-2 h-5 w-5" />
          Expert Consultation
        </motion.button>
      </motion.div>
    </motion.div>
  </div>
</section>





            <section className="py-8 bg-neutral-100 sticky top-16 z-40 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center  space-x-4">
            {[
              { id: 'car', label: 'Automotive Tyres', icon: Car },
              { id: 'bike', label: 'Motorcycle Tyres', icon: Bike }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'car' | 'bike')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 bg-neutral-100 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-zinc-500 to-zinc-600 text-white shadow-lg'
                    : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>


      <section className="py-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search premium tyres..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 transition-all"
              />
            </div>

           
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-800 focus:outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 transition-all"
            >
              <option value="all">All Premium Brands</option>
              <option value="michelin">Michelin</option>
              <option value="bridgestone">Bridgestone</option>
              <option value="continental">Continental</option>
              <option value="pirelli">Pirelli</option>
            </select>

          
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-800 focus:outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 transition-all"
            >
              <option value="all">All Price Ranges</option>
              <option value="mid">Mid-Premium</option>
              <option value="premium">Premium Range</option>
              <option value="ultra">Ultra Premium</option>
            </select>

        
            
          </div>
        </div>
      </section>

     
      <section className="py-12 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredTyres.map((tyre, index) => (
                <ScrollReveal key={tyre.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    onClick={() => setSelectedTyre(tyre.id)}
                    className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl overflow-hidden border border-neutral-200 hover:border-zinc-300 transition-all cursor-pointer group hover:shadow-xl"
                  >
              
                    <div className="relative h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-32 w-32">
                         
                        </div>
                      </div>
                      
                      <div className="absolute top-4 left-4">
                        <div className="bg-slate-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {tyre.price}
                        </div>
                      </div>
                    </div>

                   
                    <div className="p-6">
  <div className="mb-2">
    <span className="text-sm text-neutral-700 font-medium">{tyre.brand}</span> 
  </div>
  <h3 className="text-lg font-semibold text-neutral-800 mb-2 group-hover:text-neutral-700 transition-colors font-display"> 
    {tyre.name}
  </h3>
  <p className="text-neutral-500 text-sm mb-2">{tyre.size}</p>
  <p className="text-neutral-600 text-sm mb-4">{tyre.description}</p>


  <div className="flex flex-wrap gap-1 mb-6">
    {tyre.features.slice(0, 2).map((feature, idx) => (
      <span
        key={idx}
        className="px-2 py-1 bg-neutral-200 text-xs text-neutral-700 rounded-full"
      >
        {feature}
      </span>
    ))}
  </div>


  <div className="flex space-x-2">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={(e) => {
        e.stopPropagation();
        handleCall(tyre.phone);
      }}
      className="flex-1 flex items-center justify-center px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-800 transition-all text-sm font-medium" // changed
    >
      <Phone className="h-4 w-4 mr-1" />
      Call
    </motion.button>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={(e) => {
        e.stopPropagation();
        handleWhatsApp(tyre.phone, tyre.name);
      }}
      className="flex-1 flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all text-sm font-medium"
    >
      <MessageCircle className="h-4 w-4 mr-1" />
      WhatsApp
    </motion.button>
  </div>
</div>

                  </motion.div>
                </ScrollReveal>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-r from-sky-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '1,500+', label: 'Satisfied Clients' },
              { number: '100+', label: 'Premium Brands' },
              { number: '20+', label: 'Years Excellence' },
              { number: '24/7', label: 'Expert Support' }
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-display">
                    {stat.number}
                  </div>
                  <div className="text-primary-100 font-medium mb-1">
                    {stat.label}
                  </div>
                  
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <div className="w-full bg-gray-100">      
      
      <div className="h-[70px] w-full overflow-hidden  shadow-2xl relative">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        
      
        <div className="flex items-center h-full animate-scroll-right-to-left">
          {[...companies, ...companies,...companies].map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 mx-8  transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              style={{ minWidth: '160px', height: '70px' }}
            >
              <div className="flex items-center justify-center h-full ">
                <img 
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-16 max-w-32 object-contain "
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'block';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
  <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll-right-to-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-33.33%);
            }
          }
          
          .animate-scroll-right-to-left {
            animation: scroll-right-to-left 30s linear infinite;
            display: flex;
            align-items: center;
            height: 100%;
            width: 300%;
          }
        `
      }} />
    </div>
    </motion.div>
  );
};

export default Home;