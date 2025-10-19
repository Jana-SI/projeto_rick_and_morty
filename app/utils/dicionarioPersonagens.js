export const dicionarioPersonagens = {
    Alive: "Vivo", 
    Human: "Humano",
    Earth: "Terra",
    "Earth (C-137)": "Terra (C-137)",
    "unknown": "Desconhecido",
    Dead: "Morto",
    "Earth (Replacement Dimension)": "Terra (Dimensão Substituta)",
    Alien: "Alienígena",
    "Adjudicator Rick" : "Juiz Rick",
    "Agency Director": "Diretor da Agência",
    "Alan Rails": "Alan Trilhos",
    "Alien Morty": "Morty Alienígena",
    "Alien Rick": "Rick Alienígena",
    "Amish Cyborg": "Ciborgue Amish",
    "Antenna Morty": "Morty Antena",
    "Antenna Rick": "Rick Antena",
    "Ants in my Eyes Johnson": "Johnson com Formigas nos Olhos",
    "Abadango Cluster Princess": "Princesa do Aglomerado Abadango",
    "Alien Googah": "Googah Alienígena",
    Male: "Masculino",
    Female: "Feminino",
}

export function traducaoPersonagens(palavra) {
  const chave = Object.keys(dicionarioPersonagens).find(
    key => key.toLowerCase() === palavra.toLowerCase()
  );
  return dicionarioPersonagens[chave] || palavra;
}