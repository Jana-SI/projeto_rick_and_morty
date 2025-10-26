<template>
    <NuxtLink :to="urlToRedirect"
        class="saibaMais">
        <IconsInfo />
        Saiba Mais
    </NuxtLink>
</template>

<script setup>
const props = defineProps( {
    id: Number,
    type: {
        type: String,
        default: "personagens"
    }
});

const urlToRedirect = computed(() => {
    if(props.type === 'personagens'){
        return `/personagens/${props.id}` /// ✅ corresponde ao arquivo pages/personagens/[id].vue
    }

    return `/episodios/${props.id}`
})
</script>