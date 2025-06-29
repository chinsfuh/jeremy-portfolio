import { Code, Palette, Zap, Github, Linkedin, Mail, Feather, Search, Layout, Smartphone } from 'lucide-react';

export const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

export const skills = [
  { name: 'HTML & CSS', level: 95, icon: Code },
  { name: 'Javascript', level: 90, icon: Zap },
  { name: 'Vue', level: 80, icon: Code },
  { name: 'Nuxt', level: 85, icon: Palette },
  { name: 'Tailwind', level: 90, icon: Feather },
  { name: 'Wordpress Development', level: 88, icon: Palette },
  { name: 'SEO Optimization', level: 93, icon: Search },
  { name: 'Landing Page Design', level: 91, icon: Layout },
  { name: 'Responsive Design', level: 92, icon: Smartphone },
];

export const projects = [
  {
    title: 'Landing Page Development',
    description: 'Built landing page using Nuxt, Tailwind CSS and GSAP with responsive design.',
    tech: ['Nuxt', 'GSAP', 'SEO'],
    featured: true,
    liveUrl: '#',
    codeUrl: 'https://github.com'
  },
  {
    title: 'Web Application Development',
    description: 'Nuxt-based application with API integration and Tailwind design.',
    tech: ['Nuxt', 'Tailwind', 'API'],
    featured: true,
    liveUrl: '#',
    codeUrl: 'https://github.com'
  },
  {
    title: 'Funeral Services Website',
    description: 'WordPress website for Nirvana agent offering funeral and memorial services.',
    tech: ['WordPress', 'HTML', 'CSS'],
    featured: true,
    liveUrl: 'https://nirvanamalaysiagroup.com/',
    codeUrl: 'https://github.com'
  },
  {
    title: 'Vape E-commerce Store',
    description: 'Online vape store with WooCommerce integration and responsive design.',
    tech: ['Woocommerce', 'HTML', 'CSS'],
    featured: true,
    liveUrl: 'https://www.clicky.com.my/',
    codeUrl: 'https://github.com'
  },
  {
    title: 'CIMed Healthcare Website',
    description: 'Developed CIMed Healthcare website focused on company info and services.',
    tech: ['WordPress', 'HTML', 'CSS'],
    featured: true,
    liveUrl: 'https://cimedhealthcare.com.my/',
    codeUrl: 'https://github.com'
  },
  {
    title: 'Hydro Pump Kinetic Website',
    description: 'Service-based website built on WordPress for Hydro Pump solutions.',
    tech: ['WordPress', 'HTML', 'CSS'],
    featured: true,
    liveUrl: 'https://www.hksb.my/',
    codeUrl: 'https://github.com'
  },
];

export const socialLinks = [
  { icon: Github, href: 'https://github.com/chinsfuh/' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/jeremy-chin-123771107/' },
  { icon: Mail, href: 'mailto:csfuh0212@gmail.com' }
];