footer feito

<template>
    <footer>
        <PageContainer class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-8"><img src="/images/Rick_and_Morty_LogoA.png" alt="Rick_and_Morty_LogoA.png" />
                    </div>
                    <div class="col-4">
                        <VoltarAoTopo class="float-end" />
                    </div>
                </div>
                <div class="row desenvolvido-por">
                    <div class="col-4">
                        <p>&copy; {{ new Date().getFullYear() }}</p>
                    </div>
                    <div class="col-8">
                        <p class="float-end">
                            <IconsCode></IconsCode>
                            Desenvolvido por <span>Jana-SI</span>
                        </p>
                    </div>
                </div>
            </div>
        </PageContainer>
    </footer>
</template>

<style>
.footer{
    margin-top: 16px;
}

.desenvolvido-por{
    margin-top: 16px;
    padding-top: 16px;
    border-top: 3px solid #11B0c8;
}

.desenvolvido-por p>span {
    color: #11B0c8;
    font-weight: bold;
}
</style>