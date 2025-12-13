export const dicionarioLocalizacao = {
    "Earth (C-137)": "Terra (C-137)",
    "Replacement Dimension": "Dimensão Substituta",
    "Anatomy Park": "Parque Anatômico",
    "Citadel of Ricks": "Cidadela dos Ricks",
    "unknown": "Desconhecido",
    "Earth (Replacement Dimension)": "Terra (Dimensão Substituta)",
    "Testicle Monster Dimension": "Dimensão do Monstro Testicular",
    "Worldender's lair": "Covil do Destruidor de Mundos",
    "Interdimensional Cable": "Cabo Interdimensional",
    "Planet" : "Planeta",
    "Cluster" : "Aglomerado",
    "Space station" : "Estação Espacial",
    "Microverse" : "Microverso",
    "Immortality Field Resort" : "Resort do Campo da Imortalidade",
    "Post-Apocalyptic Earth" : "Terra Pós-Apocalíptica",
    "purge planet" : "Planeta de purga",
    "Cronenberg Earth" : "Terra Cronenberg",
    "Nuptia 4" : "Núpcias 4",
    "Giant's Town" : "Cidade do Gigante",
    "Fantasy town" : "Cidade Fantástica",
    "Bird world" : "Mundo das aves",
    "St. Gloopy Noops Hospital" : "Hospital St. Gloopy Noops",
    "Earth (5-126)" : "Terra (5-126)",
    "Mr. Goldenfold's dream" : "Sonho do Sr. Goldenfold",
};

export function traducaoLocalizacao(palavra) {
  const chave = Object.keys(dicionarioLocalizacao).find(
    key => key.toLowerCase() === palavra.toLowerCase()
  );
  return dicionarioLocalizacao[chave] || palavra;
}
