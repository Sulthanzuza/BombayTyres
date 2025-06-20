import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [typedText, setTypedText] = useState('');

  const fullText = "Let's Roll Together";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicle: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppContact = () => {
    const message = "Hi! I'd like to get in touch regarding your premium tyre services. Could you help me with more information?";
    const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Premium Center',
      details: ['TyreForce Premium Service Center', 'Executive Business Plaza', '1250 Performance Drive, Suite 300', 'Metropolitan District']
    },
    {
      icon: Phone,
      title: 'Connect Directly',
      details: ['+1 (555) 123-TYRE', '+1 (555) 456-EXPERT', 'Mon-Sat: 7AM-7PM', 'Emergency: 24/7']
    },
    {
      icon: Mail,
      title: 'Digital Communication',
      details: ['service@tyreforce.com', 'expert@tyreforce.com', 'emergency@tyreforce.com', 'Response within 2 hours']
    },
    {
      icon: Clock,
      title: 'Service Hours',
      details: ['Monday - Friday: 7AM - 7PM', 'Saturday: 8AM - 6PM', 'Sunday: Emergency Only', 'Extended hours available']
    }
  ];

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
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 font-display">
                <span className="bg-gradient-to-r from-neutral-900 to-zinc-500 bg-clip-text text-transparent">{typedText}</span>
                <span className="animate-pulse text-blue-300">|</span>
              </h1>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Connect with our team of automotive experts for personalized consultation, service scheduling, or any questions about our premium solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 rounded-2xl border border-neutral-200 hover:border-primary-300 transition-all text-center hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-accent-900 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3 font-display">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-neutral-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-lg">
                <h2 className="text-2xl font-bold text-neutral-800 mb-6 font-display">Get Expert Consultation</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">Message Received!</h3>
                    <p className="text-neutral-600">Our experts will contact you within 2 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-blue-200 transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-blue-200 transition-all"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-blue-200 transition-all"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="vehicle" className="block text-sm font-medium text-neutral-700 mb-2">
                          Vehicle Type
                        </label>
                        <select
                          id="vehicle"
                          name="vehicle"
                          value={formData.vehicle}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-800 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        >
                          <option value="">Select vehicle type</option>
                          <option value="sedan">Sedan</option>
                          <option value="suv">SUV</option>
                          <option value="sports-car">Sports Car</option>
                          <option value="luxury">Luxury Vehicle</option>
                          <option value="motorcycle">Motorcycle</option>
                          <option value="commercial">Commercial Vehicle</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-800 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      >
                        <option value="">Select service type</option>
                        <option value="tyre-consultation">Tyre Consultation</option>
                        <option value="precision-installation">Precision Installation</option>
                        <option value="dynamic-balancing">Dynamic Balancing</option>
                        <option value="advanced-alignment">Advanced Alignment</option>
                        <option value="nitrogen-service">Premium Nitrogen Service</option>
                        <option value="performance-optimization">Performance Optimization</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                        placeholder="Tell us about your requirements and how we can help..."
                      ></textarea>
                    </div>

                    <div className="flex space-x-4">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </motion.button>
                      
                      <motion.button
                        type="button"
                        onClick={handleWhatsAppContact}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all shadow-lg"
                      >
                        <MessageCircle className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
  <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-lg h-full min-h-[400px]">
    <div className="h-full w-full relative">
      {/* Google Map Embed */}
      <iframe
        title="TyreForce Premium Center Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.0979959875117!2d76.81163842872621!3d8.726723724081362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e9cfac309fdb%3A0xae3c3e9f2723350b!2sGoodyear%20Autocare%20-%20New%20Bombay%20Tyres!5e1!3m2!1sen!2sin!4v1750442726111!5m2!1sen!2sin" 
        width="100%"
        height="400"
      
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-0"
      ></iframe>
    </div>
  </div>
</ScrollReveal>

          </div>
        </div>
      </section>

     
    </motion.div>
  );
};

export default Contact;