const restar = (numero1, numero2) =>{
    console.log(numero1 - numero2);
}
restar(28, 22);
restar(100, 123); 

const multiplicar = (numero1, numero2) =>{
    console.log(numero1 * numero2);
}
multiplicar(20, 22);
multiplicar(19, 12); 

var lado1 = prompt('ingresa valor lado 1');
var lado2 = prompt('ingresa valor lado 2');
const area = (lado1, lado2) =>{ return lado1 * lado2;}
const imprimir = (texto) => console.log(texto);
imprimir (area(lado1, lado2));


var base = prompt('ingresa valor base ');
var altura = prompt('ingresa valor altura ');
const rectangulo = (lado1, lado2) => {
    return base * altura;
}
imprimir(rectangulo(base,altura))

var base = prompt('ingresa valor b ');
var altura = prompt('ingresa valor a ');
const triangulo = (b, a) => {
    return base * altura;
}
imprimir(triangulo(base,altura))
