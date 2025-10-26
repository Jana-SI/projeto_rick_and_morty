<template>
    <footer>
        <PageContainer class="footer">
            <div class="img-btn-voltar-topo">
                <img src="/images/Rick_and_Morty_LogoA.png" alt="Rick_and_Morty_LogoA.png" />
                <VoltarAoTopo />
            </div>
            <div class="desenvolvido-por">
                <p>&copy; {{ new Date().getFullYear() }}</p>
                <span>
                    <p>
                        <IconsCode></IconsCode>
                        Desenvolvido por <span>Jana-SI</span>
                    </p>
                </span>
            </div>
        </PageContainer>
    </footer>
</template>

<style>
.footer {
    display: flex;
    flex-direction: column;
}

.footer .img-btn-voltar-topo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.footer .desenvolvido-por {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0;
    border-top-width: 2px;
}

.footer .desenvolvido-por span {
    display: flex;
    align-items: center;
}

.desenvolvido-por p>span {
    color: #11B0c8;
    font-weight: bold;
}
</style>