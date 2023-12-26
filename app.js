let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;
mensagemInicial();
/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';
let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Digite um número de 1 a 10:';
*/
function textoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    textoNaTela('h1', 'Jogo do número secreto')
    textoNaTela('p', 'Digite um número de 1 a 10:')
}

function numeroAleatorio() {
    let numero = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numero)){
        return numeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numero);
        console.log(listaDeNumerosSorteados);
        return numero;
    }
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';        
        textoNaTela('h1', 'Acertou!!!');
        textoNaTela('p', `Você venceu o jogo com ${tentativas} ${palavraTentativa} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
      //  document.getElementById('acerto').setAttribute('disabled', true);
    } else{
        if(chute > numeroSecreto){
            textoNaTela('p', 'Numero secreto é menor');
        }else{
            textoNaTela('p', 'Numero secreto é maior');
        }
        tentativas++;
        limparChute();
    }
}

function limparChute() {
    let limpar = document.querySelector('input');
    limpar.value = '';
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparChute();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    //window.location.reload();
}