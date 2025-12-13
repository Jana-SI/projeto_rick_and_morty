<template>
    <NuxtLink v-if="isValidLink" :to="urlToRedirect"
        class="saibaMais">
        <IconsInfo />
        Saiba Mais
    </NuxtLink>

    <div v-else
        class="saibaMais desabilitado">
        <IconsInfo />
        Saiba Mais
    </div>
</template>

<script setup>
import { computed } from 'vue'; // Importar 'computed' se não estiver globalmente disponível

const props = defineProps( {
    id: Number,
    type: {
        type: String,
        default: "personagens"
    }
});

// 1. Variável para verificar se o link é válido
const isValidLink = computed(() => {
    // O link só é válido se 'props.id' for um número
    return props.id !== undefined && props.id !== null && !isNaN(props.id);
});

// 2. O URL só é construído se o link for válido
const urlToRedirect = computed(() => {
    if (isValidLink.value && props.type === 'personagens') {
        return `/personagens/${props.id}`;
    }
    // Retorna vazio ou null se não for um link válido, mas a lógica do template vai cuidar disso
    return null;
});
</script>