import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'premium-tyres',
      title: 'Ultra-High Performance Collection',
      description: 'Premium tyres engineered for exceptional performance and safety'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'service-excellence',
      title: 'Master Technician at Work',
      description: 'Precision installation using advanced equipment and expertise'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'facility',
      title: 'State-of-the-Art Service Center',
      description: 'Modern facility equipped with cutting-edge diagnostic technology'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'premium-tyres',
      title: 'Luxury Vehicle Specialists',
      description: 'Premium tyres designed for luxury and high-performance vehicles'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'service-excellence',
      title: 'Precision Wheel Balancing',
      description: 'Advanced balancing technology for optimal performance'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'facility',
      title: 'Premium Customer Lounge',
      description: 'Comfortable environment while your vehicle receives expert care'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'premium-tyres',
      title: 'All-Season Performance Range',
      description: 'Versatile tyres engineered for year-round excellence'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'service-excellence',
      title: 'Advanced Alignment Systems',
      description: 'Laser-guided precision for optimal vehicle performance'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'facility',
      title: 'Expert Consultation Area',
      description: 'Personalized service planning with automotive specialists'
    }
  ];

  const categories = [
    { id: 'all', label: 'Complete Gallery' },
    { id: 'premium-tyres', label: 'Premium Collection' },
    { id: 'service-excellence', label: 'Service Excellence' },
    { id: 'facility', label: 'Our Facility' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = selectedImage 
    ? filteredImages.find(img => img.id === selectedImage)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-200 via-zinc-150 to-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
             
              
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neutral-900 to-zinc-500 bg-clip-text text-transparent mb-6 font-display">
                Experience  Excellence  Gallery
              </h1>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Discover our world-class facility, premium tyre collection, and the precision craftsmanship that defines our service excellence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 overflow-x-auto">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-900 text-white shadow-lg'
                    : 'bg-indigo-100 text-neutral-700 hover:bg-blue-200'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredImages.map((image, index) => (
                <ScrollReveal key={image.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl bg-white border border-neutral-200 shadow-lg hover:shadow-xl transition-all"
                    onClick={() => openLightbox(image.id)}
                  >
                    <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg font-semibold text-white mb-1 font-display">
                            {image.title}
                          </h3>
                          <p className="text-sm text-gray-200">
                            {image.description}
                          </p>
                        </div>
                        
                        <div className="absolute top-4 right-4">
                          <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                            <ZoomIn className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors z-10"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-400 transition-colors z-10"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-400 transition-colors z-10"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={selectedImageData.src}
                  alt={selectedImageData.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2 font-display">
                    {selectedImageData.title}
                  </h3>
                  <p className="text-neutral-600">
                    {selectedImageData.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;