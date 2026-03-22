import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import shop from '../config/shop'

function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Show button after scrolling past hero
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Show tooltip after 3 seconds of button being visible
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setShowTooltip(true), 3000)
      const hideTimer = setTimeout(() => setShowTooltip(false), 7000)
      return () => {
        clearTimeout(timer)
        clearTimeout(hideTimer)
      }
    }
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-24 right-6 z-50 flex items-center gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white text-primary text-sm font-medium px-4 py-2 rounded-full shadow-md whitespace-nowrap"
              >
                Order on WhatsApp 👋
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href={`https://wa.me/${shop.whatsapp}?text=${encodeURIComponent('Hi! I saw your catalogue and I would like to place an order.')}`}
            target="_blank"
            rel="noopener noreferrer"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            onHoverStart={() => setShowTooltip(true)}
            onHoverEnd={() => setShowTooltip(false)}
            className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors"
          >
            <FaWhatsapp size={28} />
          </motion.a>

        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WhatsAppFloat