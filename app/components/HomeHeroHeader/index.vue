<template>
    <header class="cabecalho-home">
        <PageContainer class="cabecalho-home-container">
            <img src="/images/Rick_and_Morty_LogoA.png" width="220" height="64"/>
            <div class="cabecalho-home-content">
                <div class="cabecalho-home-text">
                    <h1 class="">Saiba tudo em um só <span>lugar.</span></h1>
                    <p>Personagens, localizações, episódio e muito mais.</p>

                    <p>Ai sim, Porr#@%&*</p>
                </div>

                <img src="/images/Rick-Sanchez-Banner.png" alt="rick-sanchez-banner">
            </div>
        </PageContainer>
    </header>
</template>

<style scoped>
.cabecalho-home {
    background-color: black;
    padding-top: 4rem; /* Assuming pt-16 corresponds to 4rem */
}

.cabecalho-home .cabecalho-home-container{
    display: flex;
    flex-direction: column;
    gap: 1.25rem; /* Assuming gap-5 corresponds to 1.25rem */
}

.cabecalho-home-content{
    display: flex;
    gap: 16px; /* Assuming gap-16 corresponds to 16px */
}

.cabecalho-home-text{
    display: flex;
    flex-direction: column;
    gap: 1.5rem; /* Assuming gap-6 corresponds to 1.5rem */
    height: fit-content;
    align-self: center;
}

.cabecalho-home-text h1{
    font-weight: bold;
    font-size: 3rem; /* Equivalent to text-5xl in Tailwind */
}

.cabecalho-home-text span{
    color: #11B0c8;
}

.cabecalho-home-text :nth-child(3){
    color: #11B0c8;
    margin-top: 2.5rem; /* Equivalent to mt-10 in Tailwind */
}
</style>