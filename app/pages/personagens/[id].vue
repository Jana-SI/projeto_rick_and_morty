<template>
    <PageContainer>
        <div class="containerId">
            <img :src="data.image" width="369" height="461" class="rounded-2xl" />

            <div class="infomacaoPersonagem">
                <h1>{{ data.name }}</h1>
                <p>Participou de {{ data.episode.length }} episódios</p>

                <div>
                    <p>{{ traducaoPersonagens(data.status) }}</p>
                    <p>{{ traducaoPersonagens(data.species) }}</p>
                    <p>{{ traducaoPersonagens(data.gender) }}</p>
                </div>
            </div>
        </div>
    </PageContainer>
</template>

<script setup async>

const route = useRoute()

const { id } = route.params;

const { data } = await useFetch(`https://rickandmortyapi.com/api/character/${id}`);

console.log(data);

useHead({
    title: `${data.value.name} - Rick And Mprty`,
    link: [{ rel: 'icon', type: 'image/x-icon', href: data.value.image }]
})

</script>