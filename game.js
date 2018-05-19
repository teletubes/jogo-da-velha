let ultimoClick = 'O';

function taVazio(element) {
    if (element.textContent.length == 0) {
        return true;
    } else {
        return false;
    }
}

function desenharX(id) {
  const element = document.getElementById(id);
  element.innerText = 'X';
}

function desenhar0(id) {
  const element = document.getElementById(id);
  element.innerText = '0';
}

function verificaLinha(linha) {
  const listaElementos = linha.children;
  if (listaElementos.item(0).textContent == listaElementos.item(1).textContent
  && listaElementos.item(1).textContent == listaElementos.item(2).textContent) {
    if (taVazio(listaElementos.item(1))) return;
    const ganhador = listaElementos.item(1).textContent;
    alert(`${ganhador} Ganhou`)
    document.getElementById('resultado').innerText = ganhador;
  }
}

function verificaTodasLinhas(lista) {
  verificaLinha(lista[0]);
  verificaLinha(lista[1]);
  verificaLinha(lista[2]);

  
}
function verificatodascolunas(lista){
  verificacoluna(lista[0]);
  verificacoluna(lista[1]);
  verificacoluna(lista[2]);
}
function verificacoluna(lista){
console.log(lista)
}

function verificaGanhador() {
  const jogo = document.getElementById('jogo');
  verificaTodasLinhas(jogo.children);
  verificatodascolunas(jogo.children);
}


function desenhe(e) {
  const element = e.target;
  const id = element.id;
  if (taVazio(element)) {
    if (ultimoClick === 'X') {
        desenhar0(id);
        verificaGanhador();
        ultimoClick = 'O'
    } else {
        desenharX(id);
        verificaGanhador();
        ultimoClick = 'X'
    }
  }
}

document.addEventListener('click', desenhe);

