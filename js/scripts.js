/*Crea una función que reciba un array de 5 números, 
imprime por consola una posición aleatoria del array.*/

function randomNumber(numbers) {
    const randomPosition = Math.floor(Math.random() * 5);
    console.log(numbers[randomPosition])
}

const numbers = [5, 15, 20, 25, 30];
randomNumber(numbers)

/*Crea una función que reciba un array con 3 números.
La función deberá imprimir por consola.
  - "La suma de todos los números es:[suma]"
  - "La media de todos los números es:[media]"
  - "El mayor es [mayor] y el menor es [menor]" */

function sumAveTop(numbers2) {
    const sum = numbers2[0] + numbers2[1] + numbers2[2] + numbers2[3] + numbers2[4];
    const average = (numbers2[0] + numbers2[1] + numbers2[2] + numbers2[3] + numbers2[4]) / 5;
    console.log(`La suma de todos los números es ${sum}`);
    console.log(`La media de todos los números es ${average}`);

}

const numbers2 = [ 10 , 20 , 30]
sumAveTop(numbers2)  
