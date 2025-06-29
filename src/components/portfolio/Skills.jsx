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
    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      {title}
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
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