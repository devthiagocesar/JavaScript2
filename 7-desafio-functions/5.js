/*Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função 
responde qual número é maior*/

const numbers = (numberOne, numberTwo) => {
    if (numberOne > numberTwo)
        console.log("number One is bigger")
    else
        console.log("number Two is bigger")

}

numbers(2, 1)