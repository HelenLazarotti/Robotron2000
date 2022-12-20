//add/remove braços no robo: 

//como em algum momento algum dev, pode mudar o código, tirando o texto de '-' e escrevendo outra coisa, ex -> menos, isso vai quebrar meu código, não vai funcionar, então:

//pego os dados pelo atributo que coloquei na tag html
const controle = document.querySelectorAll('[data-controle]')

/*TAVA ASSIM: pego todos meus buttons que contém essa classe:
const controle = document.querySelectorAll('.controle-ajuste');*/

//seleciono todos as tags que contém o data-estatistica:
const estatistica = document.querySelectorAll('[data-estatistica]')
// TESTE: console.log(estatistica)

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

//pra não ter que fazer 500 códigos, usamos o forEach -> pra loop em arrays:
controle.forEach( (elemento) => { //vou percorrer todo o button e se clicado me retorna all do button:
//elemento é as coisas que vem sozinhas, quando eu realizar tal ação com o 'controle'

    //digo que quando eu clicar sobre esse button, ativo a função com as operações, onde nela passo como parâmetros:
    //evento -> é todas infos que o meu click possui
    //target -> é uma das infos, que diz qual é a tag e sua classe
    //textContent -> para texto
    //parentNode -> vai pegar o pai em que esse button se localiza, nesse caso nos retorna <div class='controle/>
    
    elemento.addEventListener('click', (evento) => {
        manipulaOperacoes(/*evento.target.textContent*/ evento.target.dataset.controle, evento.target.parentNode)

        //preciso atualizar as estatisticas com os dados das peças a cada clique, então chamo a função:
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

//como não é uma boa prática eu replicar vários desses, pras todos os buttons, eu: 
//crio uma função pra manipular as operações, e passo parâmetros:
//operacao -> me retorna o que ta escrito dentro da tag, neste caso, <button>+</button>
//controle -> me retorna a div inteira da classe controle (pai)

function manipulaOperacoes (operacao, controle){
    const peca = controle.querySelector('[data-contador]');

    //faço condicinal, pra que se minha operação for igual a menos -> '-', eu faça a continha:
    if(operacao === '-'){
        //pra transformar em nº, caso contrário é string, entao fica fazendo 00+1 -> 001:
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

//crio a função p atualizar as estatisticas:
function atualizaEstatisticas(peca){
    
    //preciso saber qual peça foi clicada, p manipular os dados
    //faço um forEach p estatisicas:

    //que no elemento q estou quero que seja atualizado, com um novo valor:
    estatistica.forEach( (elemento) => {
        //console.log(elemento.textContent) me retorna todas a tag: <p class="estatistica-numero" data-estatistica="forca">768</p>

        //então toda vez que eu clicar no item, vou percorrer all nºs da estatística atualizando-as:
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica];

    })
}
 
