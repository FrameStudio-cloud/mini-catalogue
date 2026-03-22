import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import shop from '../config/shop'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Catalogue', href: '#catalogue' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-1">
          <span className={`text-2xl font-bold transition-colors
            ${scrolled ? 'text-primary' : 'text-white'}`}>
            {shop.name}
          </span>
          <span className="text-2xl font-light text-accent">
            {shop.nameAccent}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent
                ${scrolled ? 'text-gray-600' : 'text-white'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href={`https://wa.me/${shop.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            <FaWhatsapp size={16} />
            Order on WhatsApp
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
          >
            {menuOpen
              ? <FiX size={24} className={scrolled ? 'text-primary' : 'text-white'} />
              : <FiMenu size={24} className={scrolled ? 'text-primary' : 'text-white'} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
              {links.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-600 hover:text-accent font-medium transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`https://wa.me/${shop.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full text-sm font-medium"
              >
                <FaWhatsapp size={16} />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar