let lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"];

//remover cor "Vermelho":

//procuro pela cor:
let newList = lista.indexOf('Vermelho');

//removo, usando (posição que quero remover, quantos quero remover.)
lista.splice(newList, 1);

//ou
lista.splice(1, 1);
//desse modo não preciso criar por ex a variável 'newList'

console.log(lista);
