<template>
  <main>
    <div class="text-white bg-[#1E1E1E] flex flex-col gap-16 max-w-[1224px] w-full mx-auto">
      <ListaPersonagens />
      <ListaEpisodios />
    </div>
  </main>
</template>

<script lang="ts" setup>

import ListaPersonagens from "@/components/ListaPersonagens/index.vue";
import ListaEpisodios from "@/components/ListaEpisodios/index.vue";

</script>