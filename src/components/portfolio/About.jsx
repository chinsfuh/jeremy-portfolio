import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <div className="inline-block">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut",
          delay: 0.2 
        }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text text-transparent relative cursor-pointer"
      >
        <motion.span
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="bg-gradient-to-r from-pink-400 to-yellow-300 bg-300% bg-clip-text text-transparent"
          style={{ backgroundSize: "300% 100%" }}
        >
          {title}
        </motion.span>
        
        {/* Animated glow effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 0.5, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1 
          }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-yellow-300/20 blur-xl -z-10"
        />
      </motion.h2>
    </div>
    
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: "6rem" }}
      transition={{ 
        duration: 1.5, 
        ease: "easeOut",
        delay: 0.8 
      }}
      viewport={{ once: true }}
      className="h-1 bg-gradient-to-r from-pink-400 to-yellow-300 mx-auto rounded-full relative overflow-hidden"
    >
      {/* Animated shine effect on the underline */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2 
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-1/3"
      />
    </motion.div>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="About Me" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-white/90 leading-relaxed">
              I'm a passionate front-end developer with over 2 years of experience creating 
              digital solutions that make a difference. I specialize in building scalable web 
              applications with modern technologies and user-centered design principles.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              I'm usually exploring new technologies, following industry trends, and expanding my knowledge through self-learning.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              {['Team Player', 'Critical Thinker', 'Tech Enthusiast','Curious Explorer'].map((trait, index) => (
                <motion.span
                  key={trait}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-400/30 text-sm font-medium"
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                alt="Developer workspace with multiple monitors and modern setup"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                src="\images\photo-frontend-developer-on-desk-learning-exploring.webp" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl transform rotate-3"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;