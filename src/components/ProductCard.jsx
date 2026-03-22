import shop from '../config/shop'

function ProductCard({ product }) {
  const whatsappMessage = `Hi! I'm interested in the *${product.name}* (Ksh ${product.price.toLocaleString()}) I saw on your website. Is it available?`
  const whatsappUrl = `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow group">
      <div className="relative overflow-hidden h-44">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {!product.available && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <span className="bg-white text-primary font-medium px-3 py-1 rounded-full text-xs">
              Out of Stock
            </span>
          </div>
        )}
        <div className="absolute top-2 left-2">
          <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-medium text-primary text-sm leading-tight mb-1 line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-accent font-bold text-sm">
            Ksh {product.price.toLocaleString()}
          </span>
          {product.available ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
            >
              Order
            </a>
          ) : (
            <button disabled className="bg-gray-100 text-gray-400 px-3 py-1.5 rounded-full text-xs cursor-not-allowed">
              Sold Out
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard