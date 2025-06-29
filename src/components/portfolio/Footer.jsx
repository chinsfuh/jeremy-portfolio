import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Jeremy Chin. Crafted with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;