<template>
  <header class="header container py-3">

    <!-- SEARCH E FILTROS (opcional) -->
    <div v-if="showTools" class="d-flex flex-wrap gap-3 align-items-center mt-3">
      <div class="flex-grow-1 position-relative search-container">
        <input type="text" class="search-input form-control" placeholder="Personagem, episódio, localização..." v-model="search" />
        <span class="search-icon">
          <IconsLupa />
        </span>
      </div>

      <div class="d-flex align-items-center filtros-wrapper gap-2">
        <span class="filtro-label">Filtrar por:</span>
        <button class="filtro-btn" :class="{ active: filtro === 'personagens' }" @click="filtro='personagens'"><IconsSmiley width=20 height=20 fill="white" /> Personagens</button>
        <button class="filtro-btn" :class="{ active: filtro === 'localizacoes' }" @click="filtro='localizacoes'"><IconsPlanet width=20 height=20 fill="white"></IconsPlanet> Localizações</button>
        <button class="filtro-btn" :class="{ active: filtro === 'episodios' }" @click="filtro='episodios'"><IconsPlay width=20 height=20 fill="white"></IconsPlay> Episódios</button>
      </div>
    </div>

        <!-- TÍTULO + BOTÃO VER TODOS -->
    <div class="d-flex mt-4">
      <h2 class="title px-2">{{ title }}</h2>

      <button v-if="showButton" class="btn-ver-todos">
        <IconsSquaresFour />
        Ver todos
      </button>
    </div>

  </header>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  title: { type: String, default: "Título" },
  showButton: { type: Boolean, default: true },
  showTools: { type: Boolean, default: false },
});

const search = ref("");
const filtro = ref("personagens");
</script>

<style scoped>
.header {
  background: transparent;
}

/* ===== TÍTULO ===== */
.title {
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
}

/* ===== BOTÃO VER TODOS ===== */
.btn-ver-todos {
  background-color: #313234;
  border-radius: 32px;
  padding: 0.25rem 0.75rem;
  border: none;
  color: #fff;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-ver-todos:hover {
  background-color: #00bcd4;
  color: #FFF;
}

/* ===== SEARCH ===== */
.search-container {
  position: relative;
}

.search-input {
  width: 100%;
  padding: 8px 40px 8px 12px;
  border-radius: 32px;
  border: 1px solid #484848;
  background: #1f1f1f;
  color: #e6e6e6;
}

.search-input::placeholder {
  color: #9b9b9b;
}

.search-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.7;
}

/* ===== FILTROS ===== */
.filtro-label {
  color: #b5b5b5;
  font-size: 0.85rem;
}

.filtro-btn {
  background: #2a2a2b;
  border: 1px solid #484848;
  border-radius: 20px;
  color: #dcdcdc;
  padding: 5px 12px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}

.filtro-btn.active {
  background-color: #00bcd4;
  border-color: #00bcd4;
  color: #dcdcdc;
}
</style>
