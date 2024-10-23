/* 1. Crea una función que reciba un array de 5 números, 
imprime por consola una posición aleatoria del array.*/

const randomNumber = (numbers) => {
  console.log(numbers[Math.floor(Math.random() * numbers.length)]);
}
randomNumber([5, 15, 20, 25, 30]);

/* 2. Crea una función que reciba un array con 3 números. 
La función deberá imprimir por consola.

  - "La suma de todos los números es:[suma]"
  - "La media de todos los números es:[media]"
  - "El mayor es [mayor] y el menor es [menor]"*/


const threeAbout = (numbersA) => {
  const maxOfThree = Math.max(numbersA[0], numbersA[1], numbersA[2]);
  const minOfThree = Math.min(numbersA[0], numbersA[1], numbersA[2]);
  const sumOfThree = numbersA[0] + numbersA[1] + numbersA[2];
  const aveOfThree = (numbersA[0] + numbersA[1] + numbersA[2]) / 3;
  console.log('La suma de todos los números es: ' + sumOfThree);
  console.log('La media de todos los números es: ' + aveOfThree);
  console.log(`El mayor es ${maxOfThree} y el menor es ${minOfThree}`)
}

threeAbout([12, 15, 16])

/* 3. Crea una función que reciba un array con 5 números del 0 al 10 (a tu 
elección). Dentro de la función genera un número aleario entre 0 y 10. 
La función deberá decir si el array contiene ese número y en qué 
posición está o si no lo contiene.*/

const outOfTen = (numbersB) => {
  const randomPosition = Math.floor(Math.random() * 11);
  if (numbersB.includes(randomPosition)){
    return 'El array contiene el número ' + randomPosition +
      ' en la posición ' + numbersB.indexOf(randomPosition);
  } 
    return 'El array no contiene el número ' + randomPosition;

}
const result3 = outOfTen([2, 4, 6, 8, 9]);
console.log(result3);

/* 4. Crea una función que reciba un array vacío y lo devuelva 
con 3 números aleatorios entre 0 y 100.*/

const createArray1 = (array) => {
    const firstComp = Math.floor(Math.random() * 101);
  const secondComp = Math.floor(Math.random() * 101);
  const thirdComp = Math.floor(Math.random() * 101);
  array.push(firstComp, secondComp, thirdComp);
  return array
}
const result4b = createArray1([]);
console.log(result4b);
 

/* 5. Crea una función llamada dniLetter que recibirá un número de DNI
 sin la letra. Dentro de esa función pon este array 
 ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 
 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] 
 La letra del DNI se calcula a través del resto de dividir 
 el número de DNI entre 23, ese número te dará la posición 
 del array donde se encuentra la letra correspondiente a ese DNI. 
 Imprime por consola el DNI con su letra correspondiente.*/

 const dniLetter = (dni) => {
  const position = dni % 23;
  const letter = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
    'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
  return dni + letter[position];
}
const result5 = dniLetter(50152587);
console.log(result5);
 

 /* 6. Crea una función que reciba un array con 3 palabras, debes imprimir
 por consola un array que contenga la inicial y la última letra de 
 cada palabra en mayúsculas, es decir, si nuestra función recibiera 
 un array con ['hola', 'adios', 'gato'] deberá imprimir por consola 
 ['H', 'A', 'A', 'S', 'G', 'O']*/

const begAndEnd = (array6) => {
  const begOne = array6[0].charAt(0).toUpperCase();
  const endOne = array6[0].charAt(array6[0].length-1).toUpperCase();
  const begTwo = array6[1].charAt(0).toUpperCase();
  const endTwo = array6[1].charAt(array6[1].length - 1).toUpperCase();
  const begThree = array6[2].charAt(0).toUpperCase();
  const endThree = array6[2].charAt(array6[2].length-1).toUpperCase();
  return [begOne, endOne, begTwo, endTwo, begThree, endThree];
}
const result6 = begAndEnd(['cebolla', 'queso', 'piña']);
console.log(result6);
 

/* 7. Crea una función que reciba un array con 3 números y te diga cuántos 
números pares tiene ese array.*/
const isOdd = (arrayNum) => arrayNum % 2 === 0
const oddCount = (array7) => {
  const oddFirst = isOdd(array7[0]);
  const oddSecond = isOdd(array7[1]);
  const oddThird = isOdd(array7[2]);
  return oddFirst+oddSecond+oddThird
}
const result7 = oddCount([1, 4, 6])
console.log(result7)


/* 8. Crea una función que reciba un array con 3 números y devuelva un 
nuevo array con los mismos números pero en orden inverso.*/

const reverseNum = (array8) => [array8[2], array8[1], array8[0]];
const result8 = reverseNum([12, 20, 25])
console.log(result8)

/* 9. Crea una función que reciba un array con 3 palabras y devuelva un 
nuevo array con las mismas palabras pero en mayúsculas.*/

const threeToUpper = (array9) => [array9[0].toUpperCase(), array9[1].toUpperCase(), array9[2].toUpperCase()];
const result9 = threeToUpper(['cama', 'hamaca', 'acordeon'])
console.log(result9)