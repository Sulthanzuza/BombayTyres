import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Zap } from 'lucide-react';
import Silk from './Silk';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 border-t border-neutral-200 overflow-hidden">
      {/* Silk Background */}
      <div className="absolute inset-0 opacity-30">
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-2 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg"
              >
                <Zap className="h-6 w-6 text-white" />
              </motion.div> */}
              <div className="flex flex-col">
                <span className="text-xl font-bold text-neutral-800">Bombay Tyres</span>
                
              </div>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Your trusted partner for premium tyre solutions. We deliver excellence in performance, safety, and reliability for every journey.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-indigo-50 transition-colors shadow-sm border border-neutral-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-neutral-600" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Premium Tyres', 'Expert Services', 'About Us', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-neutral-600 hover:text-indigo-600 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 mb-4">Our Expertise</h3>
            <ul className="space-y-2">
              {['Professional Installation', 'Precision Balancing', 'Advanced Alignment', 'Performance Optimization', 'Expert Consultation', 'Premium Nitrogen Service'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-neutral-600 hover:text-indigo-600 transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-indigo-600 mt-0.5" />
                <div className="text-neutral-600 text-sm">
                  <p>Premium Service Center</p>
                  <p>Downtown Business District</p>
                  <p>Professional Plaza, Suite 101</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-600" />
                <span className="text-neutral-600 text-sm">+1 (555) 123-TYRE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-600" />
                <span className="text-neutral-600 text-sm">service@bombaytyres.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm">
              © 2025 Aieera Future marketing. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-500 hover:text-indigo-600 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-500 hover:text-indigo-600 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;