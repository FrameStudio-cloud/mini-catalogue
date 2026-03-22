import { FaWhatsapp } from 'react-icons/fa'
import shop from '../config/shop'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-primary flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
          {shop.heroTag}
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {shop.tagline.split(' ').slice(0, -1).join(' ')}
          <span className="text-accent"> {shop.tagline.split(' ').slice(-1)}</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          {shop.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#catalogue"
            className="bg-accent hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
          >
            View Catalogue
          </a>
          <a
            href={`https://wa.me/${shop.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white hover:border-accent text-white hover:text-accent px-8 py-4 rounded-full text-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
          >
            <FaWhatsapp size={20} />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero