import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Bike, Search, Star, Phone, MessageCircle } from 'lucide-react';
import Tyre3D from '../components/Tyre3D';
import ScrollReveal from '../components/ScrollReveal';

const Tyres = () => {
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

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleWhatsApp = (phone: string, tyreName: string) => {
    const message = `Hi! I'm interested in the ${tyreName}. Could you provide more details and pricing?`;
    const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-neutral-200 via-zinc-150 to-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 font-display">
                <span className="bg-gradient-to-r from-neutral-900 to-gray-600 bg-clip-text text-transparent">  Discover Performance Excellence</span> 
              </h1>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Explore our curated selection of world-class tyres from leading manufacturers. Each tyre represents the pinnacle of engineering excellence and performance innovation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tabs */}
           <section className="py-8 bg-neutral-100 sticky top-16 z-40 border-b border-neutral-100">
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

      {/* Filters */}
      <section className="py-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search premium tyres..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-neutral-100 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 transition-all"
              />
            </div>

            {/* Brand Filter */}
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

            {/* Price Filter */}
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

            {/* Sort */}
            
          </div>
        </div>
      </section>

      {/* Products Grid */}
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
                    {/* Product Image */}
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

                    {/* Product Info */}
                    <div className="p-6">
  <div className="mb-2">
    <span className="text-sm text-neutral-700 font-medium">{tyre.brand}</span> {/* changed */}
  </div>
  <h3 className="text-lg font-semibold text-neutral-800 mb-2 group-hover:text-neutral-700 transition-colors font-display"> {/* changed */}
    {tyre.name}
  </h3>
  <p className="text-neutral-500 text-sm mb-2">{tyre.size}</p>
  <p className="text-neutral-600 text-sm mb-4">{tyre.description}</p>

  {/* Features */}
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

  {/* Action Buttons */}
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

     
    </motion.div>
  );
};

export default Tyres;