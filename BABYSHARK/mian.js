// Baby shark, doo, doo, doo, doo, doo, doo
// Baby shark, doo, doo, doo, doo, doo, doo
// Baby shark, doo, doo, doo, doo, doo, doo
// Baby shark
// Mommy shark, doo, doo, doo, doo, doo, doo
// Mommy shark, doo, doo, doo, doo, doo, doo
// Mommy shark, doo, doo, doo, doo, doo, doo
// Mommy shark
// Daddy shark, doo, doo, doo, doo, doo, doo
// Daddy shark, doo, doo, doo, doo, doo, doo
// Daddy shark, doo, doo, doo, doo, doo, doo
// Daddy shark
// Grandma shark, doo, doo, doo, doo, doo, doo
// Grandma shark, doo, doo, doo, doo, doo, doo
// Grandma shark, doo, doo, doo, doo, doo, doo
// Grandma shark
// Grandpa shark, doo, doo, doo, doo, doo, doo
// Grandpa shark, doo, doo, doo, doo, doo, doo
// Grandpa shark, doo, doo, doo, doo, doo, doo
// Grandpa shark
// Let's go hunt, doo, doo, doo, doo, doo, doo
// Let's go hunt, doo, doo, doo, doo, doo, doo
// Let's go hunt, doo, doo, doo, doo, doo, doo
// Let's go hunt
// Run away, doo, doo, doo, doo, doo, doo
// Run away, doo, doo, doo, doo, doo, doo
// Run away, doo, doo, doo, doo, doo, doo
// Run away
// Safe at last, doo, doo, doo, doo, doo, doo
// Safe at last, doo, doo, doo, doo, doo, doo
// Safe at last, doo, doo, doo, doo, doo, doo
// Safe at last
// It's the end, doo, doo, doo, doo, doo, doo
// It's the end, doo, doo, doo, doo, doo, doo
// It's the end, doo, doo, doo, doo, doo, doo
// It's the end
// forma 1 almacenando letras
const liricas = `Baby shark, doo, doo, doo, doo, doo, doo
Baby shark, doo, doo, doo, doo, doo, doo
Baby shark, doo, doo, doo, doo, doo, doo
Baby shark
Mommy shark, doo, doo, doo, doo, doo, doo
Mommy shark, doo, doo, doo, doo, doo, doo
Mommy shark, doo, doo, doo, doo, doo, doo
Mommy shark
Daddy shark, doo, doo, doo, doo, doo, doo
Daddy shark, doo, doo, doo, doo, doo, doo
Daddy shark, doo, doo, doo, doo, doo, doo
Daddy shark
Grandma shark, doo, doo, doo, doo, doo, doo
Grandma shark, doo, doo, doo, doo, doo, doo
Grandma shark, doo, doo, doo, doo, doo, doo
Grandma shark
Grandpa shark, doo, doo, doo, doo, doo, doo
Grandpa shark, doo, doo, doo, doo, doo, doo
Grandpa shark, doo, doo, doo, doo, doo, doo
Grandpa shark
Let's go hunt, doo, doo, doo, doo, doo, doo
Let's go hunt, doo, doo, doo, doo, doo, doo
Let's go hunt, doo, doo, doo, doo, doo, doo
Let's go hunt
Run away, doo, doo, doo, doo, doo, doo
Run away, doo, doo, doo, doo, doo, doo
Run away, doo, doo, doo, doo, doo, doo
Run away
Safe at last, doo, doo, doo, doo, doo, doo
Safe at last, doo, doo, doo, doo, doo, doo
Safe at last, doo, doo, doo, doo, doo, doo
Safe at last
It's the end, doo, doo, doo, doo, doo, doo
It's the end, doo, doo, doo, doo, doo, doo
It's the end, doo, doo, doo, doo, doo, doo
It's the end`;
console.log(liricas)


//forma 2 ciclo for que repita los blqoues de la cancion

for (var i = 0; i < 3; i++){
    console.log ('Baby shark, doo, doo, doo, doo, doo, doo');

}
for (var i = 0; i < 3; i++){
    console.log ('mommy shark, doo, doo, doo, doo, doo, doo');
    
}
for (var i = 0; i < 3; i++){
    console.log ('Dady shark, doo, doo, doo, doo, doo, doo');
    
}
for (var i = 0; i < 3; i++){
    console.log ('grandpa shark, doo, doo, doo, doo, doo, doo');
    
}
for (var i = 0; i < 3; i++){
    console.log ('granma shark, doo, doo, doo, doo, doo, doo');
    
} 
for (var i = 0; i < 3; i++){
    console.log ('granma shark, doo, doo, doo, doo, doo, doo');
    
} 
// forma 3 uso de funciones 

function dooDoodooDoo(primerElemento){ 
    for (var i = 0; i < 3; i++){
        console.log (primerElemento * 'doo, doo, doo, doo, doo, doo');
        
    }
    console.log(primerElemento +'!'); 
}

dooDoodooDoo ('babyshark')
dooDoodooDoo ('mommy shark')
dooDoodooDoo (' daddy shark')
dooDoodooDoo ('grandpa shark')
dooDoodooDoo ('run away')
// forma 4 
