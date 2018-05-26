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
function verificatodascolunas(linha){
  const c3l1 = linha[0].children[2]
  const c3l2 = linha[1].children[2]
  const c3l3 = linha[2].children[2]
  const coluna3 = [c3l1,c3l2,c3l3]
  verificacoluna(coluna3);
  
  const c2l1 = linha[0].children[1]
  const c2l2 = linha[1].children[1]
  const c2l3 = linha[2].children[1]
  const coluna2 = [c2l1,c2l2,c2l3]
  verificacoluna(coluna2);

  const c1l0 = linha[0].children[0]
  const c1l1 = linha[1].children[0]
  const c1l2 = linha[2].children[0]
  const coluna0 = [c1l0,c1l1,c1l2]
  verificacoluna(coluna0)
}
function verificacoluna(listaElementos){
if (listaElementos[0].textContent == listaElementos[1].textContent
&& listaElementos[1].textContent == listaElementos[2].textContent) {
  if (taVazio(listaElementos[1]))return;
  const ganhador = listaElementos[1].textContent;
  alert(`${ganhador} Ganhou`)
  document.getElementById('resultado').innerText = ganhador;
}}

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

