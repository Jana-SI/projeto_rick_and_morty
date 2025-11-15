<template>
  <section class="lista-personagens">

    <!-- HEADER (com filtros + busca) -->
    <Header title="Personagens" :showTools="true" />

    <!-- LISTA DE CARDS -->
    <div class="container mt-4">
      <div class="row g-4">

        <div 
          class="col-12 col-sm-6 col-md-4 col-lg-3"
          v-for="personagemAtual in data.results"
          :key="personagemAtual.id"
        >
          <Card>
            <img :src="personagemAtual.image" class="personagem-img" />

            <div class="card-info">
              <div class="card-details">
                <p class="personagem-nome">{{ personagemAtual.name }}</p>

                <div class="personagem-info">
                  <p>⚡ {{ personagemAtual.status }}</p>
                  <p>👤 {{ personagemAtual.species }}</p>
                  <p>📍 {{ personagemAtual.origin.name }}</p>
                </div>
              </div>

              <span class="favorite-icon">
                <IconsHeartFilled v-if="personagemAtual.status === 'Alive'" />
                <IconsHeartOutlined v-else />
              </span>
            </div>

            <SaibaMais :id="personagemAtual.id" class="botao-saiba-mais mt-auto" />
          </Card>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import Header from "@/components/Header/index.vue";
import Card from "@/components/Card/index.vue";
import SaibaMais from "@/components/SaibaMais/index.vue";

const { data } = await useFetch("https://rickandmortyapi.com/api/character");
</script>