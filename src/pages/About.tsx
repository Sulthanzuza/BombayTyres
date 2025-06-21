import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Award, Users, Lightbulb, Shield, ThumbsUp, Smile, Briefcase } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '../components/ScrollReveal';
import storyBg from '/Firefly_make the image liek a cinematic one.with tyre like focused 350433.jpg';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const visionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visionRef.current) {
      const visionItems = visionRef.current.querySelectorAll('.vision-item');
      gsap.fromTo(
        visionItems,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: visionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);




  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-neutral-200 via-zinc-150 to-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neutral-900 to-zinc-500 bg-clip-text text-transparent mb-6 font-display">
                Crafting Excellence in{' '}
                <span className="">
                  Automotive Service
                </span>
              </h1>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-8">
                For nearly two decades, we've been the trusted choice for discerning drivers who demand nothing less than perfection in tyre service and automotive excellence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2 font-display">
                    20+
                  </div>
                  <div className="text-neutral-600">Years of Mastery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent mb-2 font-display">
                    1,500+
                  </div>
                  <div className="text-neutral-600">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2 font-display">
                    100+
                  </div>
                  <div className="text-neutral-600">Premium Brands</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

{/* Our Story */}
<section
  className="py-20 bg-cover bg-center bg-no-repeat relative text-white"
  style={{ backgroundImage: `url(${storyBg})` }}
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/60  z-0" />

  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <ScrollReveal>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
          Our Story
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          From a humble garage to a state-of-the-art facility, our journey is a story of passion, precision, and perseverance. We've grown through challenges, shaped by our values and driven by the trust of our customers.
        </p>
      </div>
    </ScrollReveal>
  </div>
</section>


      {/* Why Choose Us */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 font-display mb-4">Why Choose Us</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We're not just about tyres – we're about trust, innovation, and lasting value. Here’s what sets us apart.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <ThumbsUp className="w-10 h-10 mx-auto text-cyan-500 mb-4" />
                <h4 className="text-lg font-semibold text-neutral-800 mb-2">Trusted by Thousands</h4>
                <p className="text-neutral-600">Our reputation is built on trust, transparency, and timely service.</p>
              </div>
              <div>
                <Briefcase className="w-10 h-10 mx-auto text-cyan-500 mb-4" />
                <h4 className="text-lg font-semibold text-neutral-800 mb-2">Professionally Certified</h4>
                <p className="text-neutral-600">Certified technicians and state-of-the-art technology ensure precision.</p>
              </div>
              <div>
                <Smile className="w-10 h-10 mx-auto text-cyan-500 mb-4" />
                <h4 className="text-lg font-semibold text-neutral-800 mb-2">Customer-Centric</h4>
                <p className="text-neutral-600">We personalize every experience, making your satisfaction our top priority.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


    </motion.div>
  );
};

export default About;
