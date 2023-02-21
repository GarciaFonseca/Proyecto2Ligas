//1. Compara tu edad (o una cualquiera) con la de Fernando. muestra en consola si eres menor, mayor o tienes la misma edad que él.
//if()

// let edadFernando = 57;

let edad= 6;
let edadFernando = 57;

if (edad < edadFernando) {
  console.log("Menor")
} 
else if (edad == edadFernando) {
  console.log("Misma_Edad")
}
else (edad > edadFernando) {
  console.log("Mayor")
}

//2. Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una string que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
//if(), %

comparar.addEventListener("click",()=>{
  operacion=(parseFloat(numero1.value)%2)
  if (resto==0) {
      console.log(par)
  }
  else {
      console.log(impar)
  }
})

//3. Recorre la array y muestra los valores múltiplos de 3 en consola
//for(), if(), %

let numeros = [
  45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28,
  51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43,
];

for (let i=0; i<numeros.length; i++) {
  if ( numeros[i] % 3 === 0){
    console.log (i)
  }
}



//4. Dada la array, escribe una función que encuentre el número menor. (No utilizar Math.min())
//for(), if()

const array = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28,
  51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];
let max = array[0], min = array[0];
    for (let i = 0; i < array.length; i++){
      if (array[i] > max) { max = array[i]; }
      if (array[i] < min) { min = array[i]; }
    }
console.log("max = " + max);
console.log("min = " + min);



//5. Utilizando la array anterior, encuentra el número más grande. (No utilizar Math.max())
//for(), if()

const array = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28,
  51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];
let max = array[0], min = array[0];
    for (let i = 0; i < array.length; i++){
      if (array[i] > max) { max = array[i]; }
      if (array[i] < min) { min = array[i]; }
    }
console.log("max = " + max);
console.log("min = " + min);

//6. Utilizando la array anterior, encontrar los números que se repiten, guardarlos en una array (si aun no existen en esta) y mostrarlos en consola
//for(), if(), push(), includes() || indexOf()

const lista = [].sort();
for(let i = 0; i < lista.length; i++){
  if(lista[i+1] === lista[i]){
    contador++;
  }else{
    ElementosUnicos.push(lista[i]);
    almacenRepeticiones.push(contador);
    contador = 1;
  }
}

for(let j = 0; j < ElementosUnicos.length; j++){
  console.log("El valor " + ElementosUnicos[j] + "se repite " + almacenRepeticiones[j])
}


//7. Utilizando la array anterior, elimina los numeros pares
//for(), if(), %, splice()

let numeros = [
  45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28,
  51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43,
];

for (let i=0; i<numeros.length; i++) {
  if ( !i % 2 === 0){
    console.log (i.splice)
  }
}



//8. Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random() para obtener números aleatorios
//entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma,
//repitiendo 36.000 veces esta operación.
//Math.random(), for(), push()


var lista
var a
for(a=0;a<36000;a++)
    {
   lista=(Math.floor(Math.random() * 6) + 1)+(Math.floor(Math.random() * 6) + 1);
    }


const lista = [].sort();
for(let i = 0; i < lista.length; i++){
  if(lista[i+1] === lista[i]){
    contador++;
  }else{
    ElementosUnicos.push(lista[i]);
    almacenRepeticiones.push(contador);
    contador = 1;
  }
}

for(let j = 0; j < ElementosUnicos.length; j++){
  console.log("El valor " + ElementosUnicos[j] + "se repite " + almacenRepeticiones[j])
}




//9. Haz que el ejercicio anterior pase la array obtenida a la función de este ejercicio. Calcula el promedio de todos los lanzamientos de dados.
//for()

let ElementosUnicos = [elementos generados];

  let suma = 0

  for (let i=0; i<ElementosUnicos.length; i++) {
    suma = suma + ElementosUnicos [i]
  }
  console.log (suma/ElementosUnicos.lenght) 



//10. Haz una copia de la array del ejercicio 3, ordenala de forma ascendente, y coloca el siguiente número donde le corresponda. Numero: 7.
//Array.from(), sort(), splice(), for(), if()

let numeros2 = [
  45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28,
  51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43,
];





//11. Dado el siguiente objeto, muestra en consola una string con el nombre y apellido.
let mentor = {
  nombre: "Alexandra",
  apellido: "David",
  edad: 30,
  poblacion: "Zaragoza",
  empresa: "Campsite Academy",
  hobbies: ["dibujar", "codigo", "videojuegos"],
  mascotas: [
    {
      nombre: "Reina",
      tipo: "perro",
      sexo: "hembra",
    },
    {
      nombre: "Sasha",
      tipo: "perro",
      sexo: "hembra",
    },
  ],
};

//12. Dado el objecto anterior, crea una array con todas las keys y luego úsala para mostrar en consola todas las values
//Object.keys(), for()

//13. Dado el objeto anterior, añade las edades a las mascotas. Luego muestra cada una de las mascotas en consola por separado
let edadReina = 4;
let edadSasha = 2;
