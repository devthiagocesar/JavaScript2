/*
for each - Percorrer numa ARRAY
*/

const students = [
{name: "Rodolfo", age: 25},
{name: "Maria", age: 43},
{name: "João", age: 27},
{name: "Thiago", age: 37},
{name: "Pollyanna", age: 38},
{name: "Júlia", age: 6},


];
let allstudentsAge = 0

students.forEach ((student, index) =>{
  allstudentsAge += student.age
})


const averageAge = allstudentsAge / students.length

console.log (`A média dos alunos é de ${averageAge.toFixed(0)}`)