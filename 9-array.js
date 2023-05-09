/*
ARRAY - MÉTODOS
*/

const students = ['João', 'Maria', 'Pedro', 'Carla', 'Bia', 'Mauricio']


//splice (unir / ligar)
//slice (fatiar)
//pop - TIRA O ULTIMO
//shift - TIRA O PRIMEIRO

students.splice (1, 0, 'Marcelo')// 1 POSIÇÃO, 0 RETIRAR, 'MARCELO' ACRESCENTOU

console.log (students)


const newStudents = students.slice(1,3)
console.log (newStudents)


students.pop()
console.log (students)

