<template>
    <PageContainer>
        <div class="container-fluid">
            <div class="row align-items-center mb-4">
                <div class="col-auto">
                    <img src="/images/Rick_and_Morty_LogoA.png" class="img-fluid" width="220" height="64" />
                </div>

                <div class="col text-end">
                    <button class="btn-favoritos">
                        <IconsHome width=22 height=22 fill="white" />
                        <a href="/">Home</a>
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <img :src="data.image" width="369" height="461" class="img-fluid rounded" />
                </div>
                <div class="col-5">
                    <div class="d-flex justify-content-between">
                        <h1>{{ traducaoPersonagens(data.name) }}</h1>
                        <span>
                            <IconsHeartFilled width=32 height=32 fill="#11B0c8" v-if="data.status === 'Alive'" />
                            <IconsHeartOutlined width=32 height=32 fill="#11B0c8" v-else />
                        </span>
                    </div>

                    <p>
                        <IconsPlay></IconsPlay> Participou de {{ data.episode.length }} episódios
                    </p>

                    <div class="d-flex justify-content-evenly">
                        <p><IconsPulse :width="24" :height="24" ></IconsPulse> {{ traducaoPersonagens(data.status) }}</p>
                        <p><IconsAlien :width="24" :height="24" ></IconsAlien> {{ traducaoPersonagens(data.species) }}</p>
                        <p><IconsGender :width="24" :height="24" ></IconsGender> {{ traducaoPersonagens(data.gender) }}</p>
                    </div>
                </div>
                <div class="col-4 align-self-end d-flex flex-row gap-4">
                    <Card class="card-local">

                        <div class="icon-wrapper">
                            <IconsPlanet width=32 height=32 fill="white"></IconsPlanet>
                        </div>

                        <p class="local-title">{{ traducaoLocalizacao(data.origin.name) }}</p>

                        <div class="mt-auto d-flex flex-column align-items-center gap-2">
                            <SaibaMais class="saibamais"/>
                            <IconsHeartFilled width="32" height="32" />
                        </div>

                    </Card>
                    <Card class="card-local">
                        <div class="icon-wrapper">
                            <IconsLocation width=32 height=32 fill="white"></IconsLocation>
                        </div>

                        <p class="local-title">{{ traducaoLocalizacao(data.location.name) }}</p>

                        <div class="mt-auto d-flex flex-column align-items-center gap-2">
                            <SaibaMais class="saibamais"/>
                            <IconsHeartFilled width="32" height="32" />
                        </div>
                    </Card>
                </div>
            </div>
            <div class="row maisPersonagens">
                <div class="col-12">
                    <div class="d-flex align-items-center justify-content-start">
                        <IconsSmiley width=40 height=40 fill="white"></IconsSmiley>
                        <p>Mais<br />Personagens</p>
                    </div>

                    <ListaPersonagens :show-header="false"></ListaPersonagens>
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