<template>
  <section class="lista-personagens">
    <div class="header-container">
      <Header title="Personagens"/>
    </div>
    <div class="cards-container">
      <div class="cards-list">
        <Card v-for="personagemAtual in data.results">
          <img :src="personagemAtual.image" height="200" width="262" class="personagem-img" />
          <div class="card-info">
            <div class="card-details">
              <p class="personagem-nome">{{ traducaoPersonagens(personagemAtual.name) }}</p>
              <div class="personagem-info">
                <p>{{ traducaoPersonagens(personagemAtual.status) }}</p>
                <p>{{ traducaoPersonagens(personagemAtual.species) }}</p>
                <p>{{ traducaoPersonagens(personagemAtual.origin.name) }}</p>
              </div>
            </div>
            <span>
              <IconsHeartFilled v-if="personagemAtual.status === 'Alive'" />
              <IconsHeartOutlined v-else />
            </span>
          </div>
          <SaibaMais :id="personagemAtual.id" class="saiba-mais"/>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import SaibaMais from "@/components/SaibaMais/index.vue";
import Card from "@/components/Card/index.vue";
import Header from "@/components/Header/index.vue";

const { data } = await useFetch('https://rickandmortyapi.com/api/character');
</script>