import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

// estilos globais
import "swiper/css";
import "swiper/css/navigation";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      swiper: {
        Swiper,
        SwiperSlide,
        modules: [Navigation],
      },
    },
  };
});