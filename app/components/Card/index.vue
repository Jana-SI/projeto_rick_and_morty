<template>
    <div class="card">

        <slot></slot>

    </div>
</template>

<script setup>

</script>

<style>
.card {
background-color: #313234; /* bg-[#313234] */
  border-radius: 0.5rem;      /* rounded-lg */
  display: flex;              /* flex */
  flex-direction: column;     /* flex-col */
  gap: 1rem;                  /* gap-4 */
  padding: 1rem;              /* p-4 */
  width: 100%;                /* w-full */
  max-width: 294px;   
}
</style>