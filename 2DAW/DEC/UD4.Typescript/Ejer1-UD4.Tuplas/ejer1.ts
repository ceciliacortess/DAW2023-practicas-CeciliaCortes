const modulo1: [string, number, number] = ['DEC', 7, 12];
let profesor1: string = 'Antonio Camarena';
modulo1.push(profesor1);
console.log('El nombre del módulo es ' + modulo1[0]);
console.log('El nombre del profesor es ' + modulo1[modulo1.indexOf(profesor1)]);