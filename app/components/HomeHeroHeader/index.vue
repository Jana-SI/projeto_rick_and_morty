<template>
    <header class="cabecalho-home container-fluid">
        <PageContainer class="cabecalho-home-container container">

            <div class="row align-items-center mb-4">
                <div class="col-auto">
                    <img src="/images/Rick_and_Morty_LogoA.png" class="img-fluid" width="220" height="64"/>
                </div>

                <div class="col text-end">
                    <button class="btn-favoritos"><IconsHeartOutlined width=24 height=24 fill="white"></IconsHeartOutlined>Lista de Favoritos</button>
                </div>
            </div>
            
            <div class="row cabecalho-home-content align-items-center">
                <div class="col-md-5 cabecalho-home-text">
                    <h1 class="">Saiba tudo em um só <span>lugar.</span></h1>
                    <p class="mb-5">Personagens, localizações, episódio e muito mais.</p>

                    <div class="d-flex gap-2 mt-5">
                        <button class="btn-theme-switch btn-escuro"><IconsMoon></IconsMoon>Escuro</button>
                        <button class="btn-theme-switch btn-claro"><IconsSun></IconsSun>Claro</button>
                    </div>

                    <p class="mt-4 frase">Ai sim, Porr#@%&*</p>
                </div>
                
                <div class="col-md-7">
                    <img src="/images/Rick-Sanchez-Banner.png" class="img-fluid" alt="rick-sanchez-banner">
                </div>
            </div>
        </PageContainer>
    </header>
</template>

<style scoped>

.cabecalho-home {
  background-color: #000;
  color: #fff;
  padding-top: 4rem;
}

.cabecalho-home-text h1 {
  font-size: 3rem;
  font-weight: bold;
}

.cabecalho-home-text span {
  color: #11B0C8;
}

.frase {
  color: #11B0C8;
}

.cabecalho-home img{
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
}

.btn-theme-switch {
  /* Configuração base para o botão */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* Espaçamento entre ícone e texto */
  padding: 0.5rem 1.5rem; 
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  cursor: pointer;
  user-select: none;
  border: none;
  transition: all 0.2s ease-in-out;
  
  /* Formato de pílula (muito arredondado) */
  border-radius: 9999px;
  color: #fff !important; /* Texto branco em ambos os botões */
}

.btn-escuro {
  /* Cor de fundo do botão Escuro (Teal/Cyan) */
  background-color: #11B0C8;
}

.btn-escuro:hover {
  background-color: #0c8297; /* Efeito hover sutil */
}

.btn-claro {
  /* Cor de fundo do botão Claro (Cinza escuro, contrastando com o preto do header) */
  background-color: #495057;
}

.btn-claro:hover {
  background-color: #343a40; /* Efeito hover sutil */
}

.btn-favoritos {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  cursor: pointer;
  user-select: none;
  border: none;
  transition: all 0.2s ease-in-out;
  border-radius: 9999px; /* Formato de pílula */
  background-color: #11B0C8; /* Cor de fundo turquesa */
  color: #fff; /* Texto branco */
}

.btn-favoritos:hover {
  background-color: #0c8297; /* Efeito hover sutil */
}
</style>