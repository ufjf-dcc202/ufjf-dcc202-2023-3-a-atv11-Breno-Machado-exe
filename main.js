import { getLista, limpaLista, adicionaNaLista} from "./lista.js"

const olItens = document.querySelector('#itens');
const pEntrada = document.querySelector('#entrada');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

atualizarLista();

function atualizarLista(){
    olItens.innerHTML = "";
    let lista = getLista();
    for(let i = 0; i < lista.length; i++){
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}

btnLimpar.addEventListener('click', limparItensDeLista);

function limparItensDeLista(){
    limpaLista();
    atualizarLista();
}

btnAdicionar.addEventListener('click', criaElementoNaLista)

function criaElementoNaLista(){
    const texto = pEntrada.textContent
    adicionaNaLista(texto)
    atualizarLista()
    pEntrada.textContent=""
    pEntrada.focus()
}