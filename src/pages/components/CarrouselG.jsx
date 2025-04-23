import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export const GenericCarousel = ({ 
  title, 
  products, 
  showViewAll = true,
  slidesPerView = 1.5,
  breakpoints = {
    640: { slidesPerView: 2.3 },
    768: { slidesPerView: 3.3 },
    1024: { slidesPerView: 5.3 }
  }
}) => {
  return (
    <section className=" relative ">
      <div className="flex justify-start items-center mb-4">
        <h2 className="text-2xl font-bold mr-2 text-gray-800">{title}</h2>
        {showViewAll && (
          <button className="text-blue-600 text-sm underline">Ver todos</button>
        )}
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={slidesPerView}
        navigation
        breakpoints={breakpoints}
      >

        {[...products, ...products, ...products,...products, ...products, ...products, ...products, ...products, ...products,...products,].map((product, index) => (
          <SwiperSlide key={`${product.id}-${index}`}>
            <div className=" rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow h-full">
              {product.customContent || (
                <>
                  {product.badge && (
                    <div className={`${product.badgeClass || 'bg-purple-600'} text-white text-xs font-bold px-2 py-1 absolute top-2 left-2 rounded`}>
                      {product.badge}
                    </div>
                  )}

                  <div className="relative pt-[100%] bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute top-0 left-0 w-full h-full object-contain p-4"
                    />
                  </div>

                  <div className="p-3 bg-white ">
                    <p className="text-black font-semibold text-sm line-clamp-2 h-10 mt-1">{product.name}</p>
                    <div className="mt-2">
                      <span className="text-lg font-bold text-gray-900">${product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <div className="mt-1">
                          <span className="block text-sm text-gray-500 line-through">
                            ${product.originalPrice.toLocaleString()}
                          </span>
                          {product.discount && (
                            <div className='flex flex-row gap-2'>
                              <span className="block text-md bg-green-800 text-green-100 px-1 mt-1 rounded w-fit">
                              {product.discount}%
                            </span>
                            <span className="block text-md bg-green-100 text-green-800 px-1 mt-1 rounded w-fit">
                              Exlusivo en web
                            </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <button className="mt-3 w-full bg-[#1C58B7] hover:bg-blue-700 text-white py-2 rounded-full text-sm transition-colors flex items-center justify-center gap-2">
                      <img width="26" height="26" src="https://img.icons8.com/windows/32/shopping-cart.png" alt="shopping-cart" className="invert brightness-0"/>
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
  )
}