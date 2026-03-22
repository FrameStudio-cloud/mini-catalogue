import { motion } from 'framer-motion'
import shop from '../config/shop'

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600"
              alt="About our shop"
              className="w-full h-96 object-cover rounded-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-lg">
              <p className="text-4xl font-bold text-accent">{shop.yearsInBusiness}</p>
              <p className="text-sm text-gray-300 mt-1">Years in business</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:pl-6"
          >
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">
              Our Story
            </p>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Fashion That Tells
              <span className="text-accent"> Your Story</span>
            </h2>
            <p className="text-gray-500 mb-4 leading-relaxed">{shop.about}</p>
            <p className="text-gray-500 mb-8 leading-relaxed">{shop.aboutExtra}</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {shop.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 bg-gray-50 rounded-xl"
                >
                  <p className="text-2xl font-bold text-accent">{stat.number}</p>
                  <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <a
              href="#catalogue"
              className="bg-primary hover:bg-accent text-white px-8 py-4 rounded-full font-medium transition-colors inline-block"
            >
              View Our Collection
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About