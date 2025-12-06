<template>
    <div class="card">

        <slot></slot>

    </div>
</template>
<style>
.card {
  background-color: #313234;
  color: #fff;
  border-radius: 20px;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0,0,0,0.25);
  transition: transform .2s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.card a{
    color: #fff;
    text-decoration: none;
}
</style>