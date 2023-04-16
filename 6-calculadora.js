/*
Calculadora
*/

const calculate =(number1, number2, operation) =>
{
 let result
 switch (operation) {
    case "+":
        result = number1 + number2        
        break;
    case "-":
        result = number1 - number2
        break
    case "*":
        result = number1 * number2
        break
    case "/":
        result = number1 / number2
        break
 
    default: 
    result = "invalid operator, try again"
        break;
 }
 return result
}

console.log (calculate (2,4,`/`))