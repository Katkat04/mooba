import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export const GenericCarousel = ({ 
  title, 
  products, 
  showViewAll = true,
  slidesPerView = 2.3,
  breakpoints = {
    640: { slidesPerView: 3.3 },
    768: { slidesPerView: 4.3 },
    1024: { slidesPerView: 5.3 }
  }
}) => {
  return (
    <section className="px-4">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        {showViewAll && (
          <button className="text-blue-600 hover:underline">Ver todos</button>
        )}
      </div>

      {/* Carrusel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={slidesPerView}
        navigation
        breakpoints={breakpoints}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
              {/* Contenido personalizable */}
              {product.customContent || (
                <>
                  {product.badge && (
                    <div className={`${product.badgeClass || 'bg-purple-600'} text-white text-xs font-bold px-2 py-1 absolute top-2 left-2 rounded`}>
                      {product.badge}
                    </div>
                  )}

                  <div className="relative pt-[100%] bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute top-0 left-0 w-full h-full object-contain p-4"
                    />
                  </div>

                  <div className="p-3">
                    {product.brand && (
                      <h3 className="font-bold text-gray-800 uppercase text-sm">{product.brand}</h3>
                    )}
                    <p className="text-gray-600 text-sm line-clamp-2 h-10 mt-1">{product.name}</p>
                    <div className="mt-2">
                      <span className="text-lg font-bold text-gray-900">${product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice.toLocaleString()}</span>
                          {product.discount && (
                            <span className="text-xs bg-red-100 text-red-800 px-1 rounded">
                              {product.discount}% OFF
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {product.timer && (
                      <div className="mt-2 text-xs text-gray-500">
                        {product.timer}
                      </div>
                    )}

                    <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm transition-colors">
                      {product.buttonText || 'Agregar'}
                    </button>
                  </div>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};