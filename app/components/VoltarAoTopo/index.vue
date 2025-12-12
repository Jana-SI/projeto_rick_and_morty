<template>
    <button class="botao-voltar-ao-topo" v-show="visible" @click="scrollToTop" @keydown.enter.prevent="scrollToTop"
        aria-label="Voltar ao topo" title="Voltar ao topo">
        <IconsCircleArrowUp />
    </button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const visible = ref(false)
const showAfter = 200 // px - distância após a qual o botão aparece
let onScroll

onMounted(() => {
    onScroll = () => {
        visible.value = window.scrollY > showAfter
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    // checar estado inicial
    onScroll()
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
})

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

</script>

<style>
/* .botao-voltar-ao-topo {
    display: flex;
    gap: 0.5rem;
    align-items: center;
} */

.botao-voltar-ao-topo {
    position: fixed;
    right: 1rem;
    bottom: 1.25rem;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #3a3a3a;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
    background: #11B0C8;
    font-size: 0.875rem;
    cursor: pointer;
    transition: transform .18s ease, opacity .18s ease;
    opacity: 0.98;
    z-index: 1000;
}


.botao-voltar-ao-topo[style*="display: none"] {
    /* fallback: quando v-show esconde via display none */
    transform: translateY(8px);
    opacity: 0;
}


.botao-voltar-ao-topo .arrow {
    font-size: 18px;
    line-height: 1;
    user-select: none;
}


/* small hover effect */
.botao-voltar-ao-topo:hover {
    transform: translateY(-2px);
}


/* reduz o tamanho em telas pequenas */
@media (max-width: 420px) {
    .botao-voltar-ao-topo {
        width: 40px;
        height: 40px;
        right: 0.75rem;
        bottom: 0.9rem;
    }
}
</style>