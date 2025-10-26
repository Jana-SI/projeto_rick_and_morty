<template>
    <section class="episodios-section">
        <Header title="Episódios" />

        <div class="episodios-grid">
            <Card v-for="episodioAtual in data.results" class="card-wrapper">
                <div class="card-top">
                    <IconsPlay class="icons-play"/>
                    <p> {{ traducaoEpisodios(episodioAtual.name) }} | {{ episodioAtual.episode }}</p>
                </div>
                <div class="card-bottom">
                    <SaibaMais class="saibamais"/>
                    <IconsHeartFilled :width="32" :height="32"/>
                </div>
            </Card>
        </div>
    </section>
</template>


<script setup>

import SaibaMais from "@/components/SaibaMais/index.vue";
import Card from "@/components/Card/index.vue";
import Header from "@/components/Header/index.vue";

const { data, status, error, refresh, clear } = await useFetch('https://rickandmortyapi.com/api/episode');

/* console.log(data.value) */
</script>