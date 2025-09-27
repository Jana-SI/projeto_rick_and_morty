<template>
  <div class="flex flex-col gap-16">
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