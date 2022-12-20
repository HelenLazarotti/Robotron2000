//pra isso funcionar preciso vincular a um documento HTML...

const robotron = document.querySelector('.robotron')

robotron.addEventListener('click', () => {
    //criamos uma FUNÇÃO ANONIMA -> não tem nome...
    alert('oiiii')
})

//ou

robotron.addEventListener('click', dizOi);

function dizOi(){
    alert('Tchaaaaaau')
}

//ao passar parâmetros: 
function dizOi(name){
    console.log(name)
}

dizOi("helennnnn")
//funções nos ajudam a repetir blocos de códigos, essa é uma FUNÇÃO NOMEADA -> Declaração de uma Função.

//ou criam-se função anonima.

//HOSTING -> permite eu executar funções antes das minhas declarações, não é indicado usar let, var pois vai me retornar 'undefined'.

//criando uma função anônima:
robotron.addEventListener('click', () => {
    console.log('Fui clicado');
})