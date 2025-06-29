import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/data/portfolioData';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col justify-between min-h-[calc(100vh-5rem)]">
        <div></div> {/* Spacer for top */}
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-32 h-32 mx-auto mb-8 relative"
            >
              <img
                alt="Professional headshot of Jeremy Chin"
                className="w-full h-full rounded-full object-cover border-4 border-gradient-to-r from-purple-400 to-pink-400 shadow-2xl"
                src="\images\profile.webp" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-pulse"></div>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Jeremy Chin
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Front-end Developer, WordPress Developer, and SEO enthusiast dedicated to crafting digital experiences through creative design thinking, and continuous learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
            <a href="mailto:csfuh0212@gmail.com">
              <Button
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-semibold backdrop-blur-sm"
              >
                Get In Touch
              </Button>
            </a>
          </motion.div>

        </motion.div>

        {/* Bottom section with social links and scroll arrow */}
        <div className="flex flex-col items-center space-y-6 pt-8 md:pt-0 pb-8">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <ArrowDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;