<template>
    <section class="episodios-section">
        <Header title="Episódios" />

        <div class="carrossel-container">

            <!-- Botões externos -->
            <button class="nav-btn prev" ref="prevEl" aria-label="Anterior">
                <i class="bi bi-arrow-left-circle"></i>
            </button>

            <button class="nav-btn next" ref="nextEl" aria-label="Próximo">
                <i class="bi bi-arrow-right-circle"></i>
            </button>

            <!-- Swiper -->
            <Swiper class="episodios-swiper" :modules="modules" :slides-per-view="4" :space-between="20"
                :grabCursor="true" :navigation="{ prevEl: prevEl, nextEl: nextEl }" :loop="true"
                :autoplay="autoplayConfig" @reachEnd="inverterDirecao" @reachBeginning="inverterDirecao" :breakpoints="{
                    320: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 4 }
                }">
                <SwiperSlide v-for="episodioAtual in data.results" :key="episodioAtual.id">
                    <Card>
                        <div class="card-top">
                            <IconsPlay class="icons-play" />
                            <p>
                                {{ traducaoEpisodios(episodioAtual.name) }}
                                | {{ episodioAtual.episode }}
                            </p>
                        </div>

                        <div class="card-bottom">
                            <SaibaMais class="saibamais" />
                            <IconsHeartFilled :width="32" :height="32" />
                        </div>
                    </Card>
                </SwiperSlide>
            </Swiper>

        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

import SaibaMais from "@/components/SaibaMais/index.vue";
import Card from "@/components/Card/index.vue";
import Header from "@/components/Header/index.vue";

const { data } = await useFetch("https://rickandmortyapi.com/api/episode");

const { $swiper } = useNuxtApp();
const Swiper = $swiper?.Swiper;
const SwiperSlide = $swiper?.SwiperSlide;
const modules = $swiper?.modules;

// refs que serão conectadas na navegação
const prevEl = ref(null);
const nextEl = ref(null);

const autoplayConfig = ref({
    delay: 3000,
    disableOnInteraction: false,
    reverseDirection: false
});

function inverterDirecao() {
    autoplayConfig.value.reverseDirection =
        !autoplayConfig.value.reverseDirection;
}

</script>