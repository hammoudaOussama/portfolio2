'use client';

import { useState } from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart, QrCode } from 'lucide-react';

const Footer = () => {
  const [showQR, setShowQR] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/hammoudaoussama',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/oussama-hammouda-202840271/',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:hammoudaoussama23@gmail.com',
      icon: Mail,
    },
  ];

  const scrollToSection = (href) => {
    const sectionId = href.replace('#', '');
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Hammouda Oussama</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Full-Stack Developer passionate about creating beautiful, functional web applications
              that solve real-world problems. Let's build something amazing together!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                  target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel={social.href.startsWith('mailto') ? '' : 'noopener noreferrer'}
                  aria-label={social.name}
                >
                  <social.icon size={20} className="text-gray-400 hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* QR Code Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Share Portfolio</h4>
            <div className="space-y-4">
              <button
                onClick={() => setShowQR(!showQR)}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <QrCode size={16} className="mr-2" />
                {showQR ? 'Hide QR Code' : 'Show QR Code'}
              </button>

              {showQR && (
                <div className="bg-white p-4 rounded-lg inline-block">
                  <img
                    src="/images/portfolio-qr.png"
                    alt="Portfolio QR Code"
                    className="w-32 h-32"
                  />
                  <p className="text-xs text-gray-600 text-center mt-2">Scan to visit portfolio</p>
                </div>
              )}
            </div>
          </div> {/* ✅ This closing tag was missing before */}

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 hammoudaoussama23@gmail.com</p>
              <p>📱(+212)696634669</p>
              <p>📍 Casablanca, Morocco</p>
              <div className="mt-4">
                <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Available for work
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p className="flex items-center">
                © {currentYear} Hammouda Oussama. Made with
                <Heart size={16} className="text-red-500 mx-1 animate-pulse" />
                and lots of ☕
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              aria-label="Back to top"
            >
              <ArrowUp size={16} className="mr-2" />
              Back to Top
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <div className="text-center text-gray-500 text-xs">
            <p className="mb-2">
              Built with Next.js, Tailwind CSS, and deployed on Vercel
            </p>
            <p>
              This portfolio is open source -
              <a
                href="https://github.com/hammoudaoussama/portfolio"
                className="text-blue-400 hover:text-blue-300 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                view on GitHub
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button (Mobile) */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 md:hidden p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
