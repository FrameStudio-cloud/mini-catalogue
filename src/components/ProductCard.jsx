import { useState } from 'react'
import Badge from './Badge'
import shop from '../config/shop'

function ProductCard({ product }) {
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [error, setError] = useState('')

  // Build WhatsApp message including size and color
  const buildWhatsAppMessage = () => {
    return `Hi! I'm interested in the following item from your catalogue:\n\n` +
      `*Product:* ${product.name}\n` +
      `*Size:* ${selectedSize}\n` +
      `*Color:* ${selectedColor}\n` +
      `*Price:* Ksh ${product.price.toLocaleString()}\n\n` +
      `Is it available?`
  }

  const handleOrder = (e) => {
    // Validate size and color selected
    if (!selectedSize || !selectedColor) {
      e.preventDefault() // stop WhatsApp from opening
      setError(
        !selectedSize && !selectedColor ? 'Please select size and color' :
        !selectedSize ? 'Please select a size' :
        'Please select a color'
      )
      // Clear error after 3 seconds
      setTimeout(() => setError(''), 3000)
      return
    }
    setError('')
  }

  const whatsappUrl = `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(buildWhatsAppMessage())}`

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow group">

      {/* Image */}
      <div className="relative overflow-hidden h-44">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Out of stock */}
        {!product.available && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <span className="bg-white text-primary font-medium px-3 py-1 rounded-full text-xs">
              Out of Stock
            </span>
          </div>
        )}

        {/* Category + Badge */}
        <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
          <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">
            {product.category}
          </span>
          {product.badge && <Badge badge={product.badge} />}
        </div>
      </div>

      {/* Info */}
      <div className="p-3">

        {/* Name */}
        <h3 className="font-medium text-primary text-sm leading-tight line-clamp-1 mb-2">
          {product.name}
        </h3>

        {/* Sizes */}
        {product.available && product.sizes && (
          <div className="mb-2">
            <p className="text-xs text-gray-400 mb-1">Size:</p>
            <div className="flex flex-wrap gap-1">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`text-xs px-2 py-0.5 rounded border transition-colors
                    ${selectedSize === size
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-primary'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Colors */}
        {product.available && product.colors && (
          <div className="mb-2">
            <p className="text-xs text-gray-400 mb-1">Color:</p>
            <div className="flex flex-wrap gap-1">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`text-xs px-2 py-0.5 rounded border transition-colors
                    ${selectedColor === color
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-primary'
                    }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-xs mb-2">{error}</p>
        )}

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-accent font-bold text-sm">
            Ksh {product.price.toLocaleString()}
          </span>

          {product.available ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleOrder}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors
                ${selectedSize && selectedColor
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-500'
                }`}
            >
              Order
            </a>
          ) : (
            <button
              disabled
              className="bg-gray-100 text-gray-400 px-3 py-1.5 rounded-full text-xs cursor-not-allowed"
            >
              Sold Out
            </button>
          )}
        </div>

      </div>
    </div>
  )
}

export default ProductCard
