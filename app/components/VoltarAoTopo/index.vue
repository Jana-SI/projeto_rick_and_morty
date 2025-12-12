<template>
    <button class="botao-voltar-ao-topo" @click="scrollToTop" @keydown.enter.prevent="scrollToTop"
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
.botao-voltar-ao-topo {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1px solid #3a3a3a;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
    background: #11B0C8;
    stroke-width: 3;
    cursor: pointer;
    transition: transform .18s ease, opacity .18s ease;
    opacity: 0.98;
    z-index: 1000;
}

.botao-voltar-ao-topo .arrow {
    font-size: 18px;
    line-height: 1;
    user-select: none;
}

.botao-voltar-ao-topo:hover {
    transform: translateY(-2px);
}
</style>