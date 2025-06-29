import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/portfolioData';

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

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Skills & Expertise" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg mr-4">
                  <skill.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="relative">
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                  ></motion.div>
                </div>
                {/* <span className="text-sm text-white/60 mt-2 block">{skill.level}%</span> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;