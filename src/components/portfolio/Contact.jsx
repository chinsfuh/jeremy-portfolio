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
    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-1">
      {title}
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
    <p className="text-xl text-white/70 mt-6 max-w-2xl mx-auto">
      {description}
    </p>
  </motion.div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
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