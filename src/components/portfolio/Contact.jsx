import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SectionHeader = ({ title, description }) => (
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

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">

    {/* Floating dots */}
    {Array.from({ length: 12 }).map((_, i) => (
      <motion.div
        key={`dot-${i}`}
        className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.random() > 0.5 ? 20 : -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: Math.random() * 2,
        }}
      />
    ))}

    {/* Curved path lines */}
    {Array.from({ length: 3 }).map((_, i) => (
      <motion.svg
        key={`curve-${i}`}
        className="absolute w-full h-full opacity-10"
        style={{
          left: `${i * 30}%`,
          top: `${i * 20}%`,
        }}
        viewBox="0 0 400 400"
      >
        <motion.path
          d={`M 0,${100 + i * 50} Q 200,${50 + i * 30} 400,${150 + i * 40}`}
          stroke="url(#gradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 1.5,
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(236, 72, 153)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="rgb(251, 191, 36)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    ))}
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black/20 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Let's Work Together"
          description="Ready to bring your ideas to life? Let's discuss your next project and create something amazing together."
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-white/70">csfuh0212@gmail.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a href='tel:+601126459632' target='_blank' className="text-white/70">+60 11 2645 9632</a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                <a href='https://www.linkedin.com/in/jeremy-chin-123771107/' target='_blank' className="text-white/70">@jeremy-chin-123771107</a>
              </div>
            </div>

            <div className="text-center">
              <a href="mailto:csfuh0212@gmail.com">
                <Button
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Start a Conversation
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;