<template>
    <footer>
        <PageContainer class="flex flex-col">
            <div class="flex justify-between items-center py-20">
                <img src="/images/Rick_and_Morty_LogoA.png" alt="Rick_and_Morty_LogoA.png" />
                <VoltarAoTopo />
            </div>
            <div class="flex justify-between py-6 border-t-2">
                <p>&copy; {{ new Date().getFullYear() }}</p>
                <span class="flex items-center">
                    <p>
                        <IconsCode></IconsCode>
                        Desenvolvido por <span class="text-[#11B0c8] font-bold">Jana-SI</span>
                    </p>
                </span>
            </div>
        </PageContainer>
    </footer>
</template>