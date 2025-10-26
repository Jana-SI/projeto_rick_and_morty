<template>
  <div class="containerPage">
    <HomeHeroHeader />
    <PageContainer>
      <ListaPersonagens />
      <ListaEpisodios />
    </PageContainer>
  </div>
</template>

<script lang="ts" setup>

import ListaPersonagens from "@/components/ListaPersonagens/index.vue";
import ListaEpisodios from "@/components/ListaEpisodios/index.vue";

useHead({
  title: `Rick And Morty API`
});
</script>