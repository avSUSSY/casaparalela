function sortearCorpo() {
  const totalCorpos = 3; // por exemplo, 3 imagens femininas e 3 masculinas
  const numero = gerarNumeroAleatorio(totalCorpos);

  const caminho = `imgarrombadin/corpo/${genero}/${numero}.png`;
  document.getElementById("corpo").src = caminho;
}


// Gênero do personagem (a gente pode mudar pra 'masculino' depois)
const genero = 'feminino';

// Quantidade de imagens em cada parte
const totalPeles = 13;
const totalRostos = 2;
const totalCabelos = 1;

// Função que gera um número aleatório entre 1 e o máximo
function gerarNumeroAleatorio(max) {
  return Math.floor(Math.random() * max) + 1;
  // Exemplo: se max = 6 → retorna 1, 2, 3, 4, 5 ou 6
}

// Função que troca a imagem de uma parte do personagem
function carregarParte(id, pasta, numero) {
  // Exemplo de caminho: imgarrombadin/feminino/cabelo/3.png
  const caminho = `imgarrombadin/${genero}/${pasta}/${numero}.png`;
  document.getElementById(id).src = caminho;
}

// Função principal: sorteia cada parte aleatoriamente
function sortearPartes() {
  const numPele = gerarNumeroAleatorio(totalPeles);
  const numRosto = gerarNumeroAleatorio(totalRostos);
  const numCabelo = gerarNumeroAleatorio(totalCabelos);

  carregarParte('pele', 'pelefeminina', numPele);
  carregarParte('rosto', 'rosto', numRosto);
  carregarParte('cabelo', 'cabelo', numCabelo);
}