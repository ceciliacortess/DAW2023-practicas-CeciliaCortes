modulosDAW = new Map();
modulosDAW.set('DEC','Desarrollo Web en Entorno Cliente');
modulosDAW.set('DWS','Desarrollo Web Entorno Servidor');
modulosDAW.set('DAW','Despliegue de Aplicaciones Web');
modulosDAW.set('DIW','Diseño de Interfaces Web');

console.log('La cantidad total de modulos son: ', modulosDAW.size);

modulosDAW.forEach((value, key) => {
    console.log('La abreviatura es '+key+' y su nombre completo es '+value);
});

console.log('Abreviaturas:');
for (let key of modulosDAW.keys()) {
    console.log(key);
}

console.log('Los nombres completos de los módulos son:');
for (let value of modulosDAW.values()) {
    console.log(value);
}

console.log('¿Esta el modulo DAW entre los modulos de 2 de DAW? -> '+ modulosDAW.has('DAW'));
console.log('¿Esta el modulo GBD entre los modulos de 2 de DAW? -> '+ modulosDAW.has('GBD'));

modulosDAW.delete('DAW');
modulosDAW.forEach((value, key) => {
    console.log('La clave -> '+key+' y su valor -> '+value);
});



