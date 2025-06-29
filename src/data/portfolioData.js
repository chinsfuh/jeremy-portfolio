import { Code, Palette, Zap, Github, Linkedin, Mail } from 'lucide-react';

export const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

export const skills = [
  { name: 'React', level: 95, icon: Code },
  { name: 'JavaScript', level: 90, icon: Zap },
  { name: 'UI/UX Design', level: 85, icon: Palette },
  { name: 'Node.js', level: 80, icon: Code },
  { name: 'Python', level: 75, icon: Zap },
  { name: 'Design Systems', level: 88, icon: Palette }
];

export const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with modern UI and seamless user experience.',
    tech: ['React', 'Node.js', 'MongoDB'],
    featured: true,
    liveUrl: '#',
    codeUrl: 'https://github.com'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team features.',
    tech: ['Vue.js', 'Firebase', 'Tailwind'],
    featured: false,
    liveUrl: '#',
    codeUrl: 'https://github.com'
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive portfolio website with dynamic animations and modern design.',
    tech: ['React', 'Framer Motion', 'CSS3'],
    featured: true,
    liveUrl: '#',
    codeUrl: 'https://github.com'
  }
];

export const socialLinks = [
  { icon: Github, href: 'https://github.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
  { icon: Mail, href: 'mailto:alex@example.com' }
];