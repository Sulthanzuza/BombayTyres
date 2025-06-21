import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Settings, Scale, Wrench, Wind, RotateCcw, Shield, Clock, Award, Phone, MessageCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '../components/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animated service icons
    gsap.to('.service-icon', {
      rotation: 360,
      duration: 2,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: servicesRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    // Floating animation for service cards
    gsap.to('.service-card', {
      y: -15,
      duration: 3,
      ease: 'power2.inOut',
      stagger: 0.2,
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
        trigger: servicesRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
      }
    });
  }, []);

  const services = [
    {
      icon: Settings,
      title: 'Precision Installation',
      description: 'Master-level tyre mounting and installation using advanced equipment and techniques for optimal performance and safety.',
      features: ['Computer-guided mounting', 'Torque specification compliance', 'Quality assurance testing', 'Performance validation'],
      duration: '45 minutes',
      gradient: 'from-sky-500 to-gray-600'
    },
    {
      icon: Scale,
      title: 'Dynamic Balancing',
      description: 'State-of-the-art wheel balancing technology eliminates vibrations and ensures smooth, comfortable driving experience.',
      features: ['3D digital analysis', 'Precision weight placement', 'Road force measurement', 'Performance optimization'],
      duration: '30 minutes',
      gradient: 'from-sky-500 to-gray-600'
    },
    {
      icon: Wrench,
      title: 'Advanced Alignment',
      description: 'Comprehensive wheel alignment service using laser-guided systems for maximum tyre life and vehicle performance.',
      features: ['Laser precision alignment', 'Suspension analysis', 'Steering geometry correction', 'Performance testing'],
      duration: '60 minutes',
      gradient: 'from-sky-500 to-gray-600'
    },
    {
      icon: Wind,
      title: 'Premium Nitrogen Service',
      description: 'Pure nitrogen inflation for superior pressure retention, enhanced fuel efficiency, and extended tyre lifespan.',
      features: ['99.9% pure nitrogen', 'Pressure optimization', 'Moisture elimination', 'Performance enhancement'],
      duration: '15 minutes',
      gradient: 'from-sky-500 to-gray-600'
    },
    {
      icon: RotateCcw,
      title: 'Strategic Rotation',
      description: 'Professional tyre rotation service following manufacturer specifications to ensure even wear and maximum lifespan.',
      features: ['Pattern optimization', 'Wear analysis', 'Pressure calibration', 'Performance assessment'],
      duration: '25 minutes',
      gradient: 'from-sky-500 to-gray-600'
    },
    {
      icon: Shield,
      title: 'Expert Repair Solutions',
      description: 'Professional tyre repair services using industry-leading techniques and materials for safe, reliable restoration.',
      features: ['Damage assessment', 'Professional patching', 'Structural integrity testing', 'Safety certification'],
      duration: '40 minutes',
      gradient: 'from-sky-500 to-gray-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Expert Consultation',
      description: 'Comprehensive assessment of your vehicle and driving requirements'
    },
    {
      step: '02',
      title: 'Precision Analysis',
      description: 'Advanced diagnostic evaluation using state-of-the-art equipment'
    },
    {
      step: '03',
      title: 'Master Craftsmanship',
      description: 'Professional service execution with meticulous attention to detail'
    },
    {
      step: '04',
      title: 'Performance Validation',
      description: 'Comprehensive testing and quality assurance before delivery'
    }
  ];

  const handleServiceInquiry = () => {
    const message = "Hi! I'd like to schedule a service appointment. Could you help me with availability and pricing?";
    const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >
      <section className="py-20 bg-gradient-to-br from-neutral-200 via-zinc-150 to-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              
              
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neutral-900 to-zinc-500 bg-clip-text text-transparent mb-6 font-display">
                Master-Level Service Solutions
              </h1>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Experience automotive service excellence through precision engineering, advanced technology, and uncompromising attention to detail.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>


      <section ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="service-card bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 rounded-2xl border border-neutral-200 hover:border-sky-300 transition-all group hover:shadow-xl"
                >
                  <div className={`service-icon w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3 group-hover:text-sky-600 transition-colors font-display">
                    {service.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        <span className="text-sm text-neutral-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-neutral-200">
                    <div className="text-sm text-neutral-500">
                      Duration: <span className="font-medium text-neutral-700">{service.duration}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleServiceInquiry}
                      className="px-4 py-2 bg-gradient-to-r from-gray-500 to-slate-600 text-white rounded-lg hover:from-gray-600 hover:to-zinc-700 transition-all text-sm font-medium"
                    >
                      Book Service
                    </motion.button>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 font-display">
                Our Excellence Process
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                A systematic approach to delivering exceptional results through precision, expertise, and unwavering attention to detail.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-700 to-accent-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-xl font-bold text-white">{step.step}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-300 to-accent-300 opacity-50"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2 font-display">{step.title}</h3>
                  <p className="text-neutral-600 text-sm">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>






    </motion.div>
  );
};

export default Services;