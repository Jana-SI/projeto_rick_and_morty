import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";

// estilos globais
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // opcional mas recomendado

export default defineNuxtPlugin(() => {
  return {
    provide: {
      swiper: {
        Swiper,
        SwiperSlide,
        modules: [Navigation, Autoplay],
      },
    },
  };
});