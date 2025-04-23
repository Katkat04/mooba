import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export const BannerCarousel = ({ banners }) => {
  return (
    <div className="w-full h-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="banner-swiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index} className="!w-full">
            <img 
              src={banner.image} 
              alt={banner.alt || `Banner ${index + 1}`} 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}