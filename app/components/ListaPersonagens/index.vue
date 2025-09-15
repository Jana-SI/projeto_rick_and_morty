<template>
    <section class="flex flex-col w-full max-w-[1224px] mx-auto gap-8">
      <div class="flex flew-wrap gap-4 justify-center xl:justify-start">
        <Header title="Personagens"/>
      </div>

      <div class="flex flew-wrap gap-4 justify-center">
        <div class="flex flex-wrap gap-4 justify-center">
          <Card v-for="personagemAtual in data.results">
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

            <SaibaMais :action-url="personagemAtual.url" class="mt-auto"/>
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

    /* console.log(data.value) */
</script>