"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '/work' },
  { name: 'Approach', href: '/approach' },
  { name: 'Studio', href: '/studio' },
  { name: 'Journal', href: '/journal' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <header className={`site-nav ${pathname === '/' ? 'site-nav--hero' : 'site-nav--paper'} ${scrolled ? 'site-nav--scrolled' : ''}`}>
        <div className="site-nav__inner">
          <Link href="/" className="site-nav__logo" aria-label="Root & Rise home"><span>R</span> ROOT &amp; RISE</Link>

          {/* Desktop Nav */}
          <nav className="site-nav__links">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="site-nav__link"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="site-nav__cta">Start a conversation <ArrowUpRight size={14} /></Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="site-nav__toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="site-menu"
          >
            <nav className="site-menu__links">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="site-menu__link"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navLinks.length * 0.1, duration: 0.5 }}
                className="site-menu__cta-wrap"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="site-nav__cta site-nav__cta--menu"
                >
                  Start a Conversation
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
