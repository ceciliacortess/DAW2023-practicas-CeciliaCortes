modulosDAW = new Map();
const alumnos = [];
modulosDAW.set('DEC',{horas: 150, alumnos:['Carlos', 'Cecilia']});
modulosDAW.set('DWS',{horas:240, alumnos:['Toni', 'Nestor']});
modulosDAW.set('DAW',{horas:200, alumnos:['Denise', 'Miguel']});
modulosDAW.set('DIW',{horas:100, alumnos:['Lorenzo', 'David']});

modulosDAW.forEach((datos, key) => {
    console.log('La abreviatura es '+key+ ', su duracion es de '+datos.horas+' horas y sus alumnos son '+datos.alumnos.join(', '));
});