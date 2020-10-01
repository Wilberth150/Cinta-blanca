// arreglos

// var arreglo = [pos 0 ,  pos1, pos2, ....posN]
var colores = ['negro','rojo', 'azul', 'rosa'];
console.log (colores);
// acceder a cada valor
console.log(colores[0], colores [2]);
console.log (colores[4]); 
// agregar elementos a mi arreglo
// arreglo.push
colores.push('Blanco');
console.log(colores);
console.log( colores[4]);

// como eliminar elementos
// usar.pop elimina el ultimo valor
colores.pop()
console.log (colores);

// eliminar valores especificos o sustituirlos
// arreglo.splice()
colores.splice('negro');
colores.splice(1,2)
// formato json
// json para java script formato de intecambio de informacion 
{"nombre":"wilbert"
}