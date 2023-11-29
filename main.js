// main.js
import {getLista} from "./lista.js";

//passo 1 - Ache os elementos importantes (pelo inspecionar do google)
const pEntrada = document.querySelector('#entrada');
const olSaida = document.querySelector('#saida');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

olSaida.innerHTML = "";
atualizarItensDeLista();

function atualizarItensDeLista ()
{
    olSaida.innerHTML= "";  
    const lista = getLista();
    for (let i = 0; i < lista.length; i++) {
        const item = lista[i];
        const li =  document.createElement('li');
        li.textContent = item;
        olSaida.appendChild(li);
    }
}

