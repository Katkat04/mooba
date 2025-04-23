// components/home/ProductCard.jsx
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/producto/${product.id}`} className="block">
        {/* Imagen del producto */}
        <div className="relative pt-[100%] bg-gray-100">
          <img 
            src={product.image} 
            alt={product.name}
            className="absolute top-0 left-0 w-full h-full object-contain p-4"
          />
        </div>

        {/* Contenido de la card */}
        <div className="p-4">
          <h3 className="font-medium text-gray-900 line-clamp-2 mb-2">
            {product.name}
          </h3>
          
          {/* Precio */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Descuento (si aplica) */}
          {product.discount && (
            <span className="inline-block mt-1 px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded">
              {product.discount}% OFF
            </span>
          )}

          {/* Botón/CTA */}
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-200">
            Agregar al carrito
          </button>
        </div>
      </Link>
    </article>
  )
}