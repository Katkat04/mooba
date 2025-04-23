import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export const CircleCarousel = ({ title, products }) => {
  return (
    <section className=" container mx-auto px-4 space-y-12 py-6 rounded-xl">
      <h2 className="text-xl font-extrabold mb-4">{title} </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2.2}
        navigation
        breakpoints={{
          640: { slidesPerView: 3.2 },
          768: { slidesPerView: 4.2 },
          1024: { slidesPerView: 6.2 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <div className=" w-24 h-24 md:w-30 md:h-30 bg-white rounded-full flex items-center justify-center shadow-md">
                <img src={product.image} alt={product.label} className="h-24 object-contain rounded-full" />
              </div>
              <p className="text-xs text-center mt-2">{product.label}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}