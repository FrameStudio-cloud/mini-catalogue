import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import SearchBar from './SearchBar'
import products from '../config/products'

const categories = ['All', ...new Set(products.map(p => p.category))]

function ProductGallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter by BOTH category and search at the same time
  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="catalogue" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">
            Our Collection
          </p>
          <h2 className="text-4xl font-bold text-primary">
            Latest Catalogue
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Browse our latest collection and order directly on WhatsApp
          </p>
        </motion.div>

        {/* Search Bar */}
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={() => setSearchQuery('')}
        />

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors
                ${activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-primary hover:text-white border border-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Count */}
        <p className="text-gray-400 text-sm mb-6 text-center">
          {searchQuery
            ? `${filteredProducts.length} results for "${searchQuery}"`
            : `Showing ${filteredProducts.length} items`
          }
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-primary font-medium text-lg mb-2">
              No products found
            </p>
            <p className="text-gray-400 text-sm mb-6">
              No results for "{searchQuery}" in {activeCategory === 'All' ? 'all categories' : activeCategory}
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('All')
              }}
              className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-accent transition-colors"
            >
              Clear filters
            </button>
          </motion.div>
        )}

      </div>
    </section>
  )
}

export default ProductGallery
