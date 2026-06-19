import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./ClientsCarousel.scss";

export default function ClientsCarousel({ clients = [] }) {
  return (
    <div className="clients-carousel-wrapper">
      {/* navigation buttons */}
      <div className="clients-arrow clients-arrow--prev">‹</div>
      <div className="clients-arrow clients-arrow--next">›</div>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        navigation={{
          prevEl: ".clients-arrow--prev",
          nextEl: ".clients-arrow--next",
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {clients.map((c, i) => (
          <SwiperSlide key={i}>
            <div className="clients-carousel__item">
              <img src={c.logo} alt={c.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
