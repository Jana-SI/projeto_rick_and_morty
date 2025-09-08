<template>
  <main class="text-white bg-[#1E1E1E]">
    <section class="flex flex-col w-full max-w-[1224px] mx-auto gap-8">
      <div class="flex flew-wrap gap-4 justify-center xl:justify-start">
        <header class="flex gap-4">
          <h2 class="font-blod text-2xl">Personagens</h2>

          <button class="flex gap-2 p-1 pr-2 bg-[#313234] rounded-[32]">
            <IconsSquaresFour />
            Ver todos
          </button>
        </header>
      </div>

      <div class="flex flew-wrap gap-4 justify-center">
        <div class="flex flex-wrap gap-4 justify-center">
          <div v-for="personagemAtual in data.results"
            class="bg-[#313234] rounded-lg flex gap-4 flex-col p-4 w-full max-w-[294px]">
            <img :src="personagemAtual.image" height="200" width="262" class="rounded-2xl h-[200px] object-cover" />

            <div class="grid grid-cols-[1fr,48px] ">
              <div class="flex flex-col gap-4">
                <p class="text-base font-bold">{{ personagemAtual.name }}</p>

                <div class="flex flex-col gap-2">
                  <!-- trocar ingles para português -->
                  <p>{{ personagemAtual.status === 'Alive' ? 'Vivo' : 'Morto' }}</p>
                  <p>{{ personagemAtual.species }}</p>
                  <p>{{ personagemAtual.origin.name }}</p>
                </div>

              </div>

              <span>
                <IconsHeartFilled v-if="personagemAtual.status === 'Alive'" />
                <IconsHeartOutlined v-else />
              </span>
            </div>

            <NuxtLink :to="personagemAtual.url"
              class="self-end bg-[#11B0C8] flex gap-2 py-[6px] pl-1 pr-2 rounded-[32px] text-sm items-center mt-auto"
              target="_blank">
              <IconsInfo />
              Saiba Mais
            </NuxtLink>
          </div>
        </div>

      </div>


    </section>
  </main>
</template>

<script lang="ts" setup>

const { data, status, error, refresh, clear } = await useFetch('https://rickandmortyapi.com/api/character');

console.log(data.value)
</script>