<template>
  <section class="lista-personagens">
    <Header title="Personagens" :showTools="true" />

    <div class="carrossel-container">
      <!-- Botões fora do Swiper -->
      <button class="nav-btn prev" ref="prevEl" aria-label="Anterior">
        <i class="bi bi-arrow-left-circle"></i>
      </button>
      <button class="nav-btn next" ref="nextEl" aria-label="Próximo">
        <i class="bi bi-arrow-right-circle"></i>
      </button>

      <Swiper :modules="modules" :slides-per-view="4" :space-between="20" :grabCursor="true" class="personagens-swiper"
        :navigation="{ prevEl: prevEl, nextEl: nextEl }" :breakpoints="{
          320: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 }
        }">
        <SwiperSlide v-for="personagemAtual in data.results" :key="personagemAtual.id">
          <Card>
            <img :src="personagemAtual.image" class="personagem-img" />
            <div class="card-info">
              <div class="card-details">
                <p  class="personagem-nome">{{ traducaoPersonagens(personagemAtual.name) }}</p>
                <div class="personagem-info">
                  <p>⚡ {{ traducaoPersonagens(personagemAtual.status) }}</p>
                  <p>👤 {{ traducaoPersonagens(personagemAtual.species) }}</p>
                  <p>📍 {{ traducaoPersonagens(personagemAtual.origin.name) }}</p>
                </div>
              </div>
              <span class="favorite-icon">
                <IconsHeartFilled v-if="personagemAtual.status === 'Alive'" />
                <IconsHeartOutlined v-else />
              </span>
            </div>
            <SaibaMais :id="personagemAtual.id" class="botao-saiba-mais mt-auto" />
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue';
import Header from "@/components/Header/index.vue";
import Card from "@/components/Card/index.vue";
import SaibaMais from "@/components/SaibaMais/index.vue";

const { data } = await useFetch("https://rickandmortyapi.com/api/character");

const { $swiper } = useNuxtApp();
const Swiper = $swiper?.Swiper;
const SwiperSlide = $swiper?.SwiperSlide;
const modules = $swiper?.modules;

// refs que serão conectadas na navegação
const prevEl = ref(null);
const nextEl = ref(null);
</script>