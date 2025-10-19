export const dicionarioEpisodios = {
  "Pilot": "Piloto",
  "Lawnmower Dog": "Cachorro Cortador de Grama",
  "Anatomy Park": "Parque Anatômico",
  "M. Night Shaym-Aliens!": "M. Night Shaym-Alienígenas!",
  "Meeseeks and Destroy": "Meeseeks e Destruição",
  "Rick Potion #9": "Poção do Rick nº 9",
  "Raising Gazorpazorp": "Criando Gazorpazorp",
  "Rixty Minutes": "Sessenta Ricks",
  "Something Ricked This Way Comes": "Algo Rick Vem Aí",
  "Close Rick-counters of the Rick Kind": "Contatos Imediatos do Tipo Rick",
  "Ricksy Business": "Negócios Arriscados",
  "A Rickle in Time": "Uma Ruga no Tempo",
  "Mortynight Run": "Corrida Noturna de Morty",
  "Auto Erotic Assimilation": "Assimilação Autoerótica",
  "Total Rickall": "Rickall Total",
  "Get Schwifty": "Fique Schwifty",
  "The Ricks Must Be Crazy": "Os Ricks Devem Ser Loucos",
  "Big Trouble in Little Sanchez": "Grande Encrenca em Pequeno Sanchez",
  "Interdimensional Cable 2: Tempting Fate": "Cabo Interdimensional 2: Tentando o Destino",
  "Look Who's Purging Now": "Olha Quem Está Purificando Agora",
};

export function traducaoEpisodios(palavra) {
  const chave = Object.keys(dicionarioEpisodios).find(
    key => key.toLowerCase() === palavra.toLowerCase()
  );
  return dicionarioEpisodios[chave] || palavra;
}
