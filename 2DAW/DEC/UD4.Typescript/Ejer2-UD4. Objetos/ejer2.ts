const DAW = {
    nombreProfesor:"Toni",
    nombreAlumno:"Cecilia",
    edad:19,
    pais:"España",
    fechaNacimiento:"12/11/2004",
    mascota:false,
    NombreAlumno:"Cecilia",
    trabajo: {
        empresa: 'GFT',
        sector: 'IT',
    },
}

console.log('Profesor:', DAW.nombreProfesor);
console.log('Alumno:', DAW.nombreAlumno);
console.log('Edad:', DAW.edad);
console.log('País:', DAW.pais);
console.log('Fecha de Nacimiento:', DAW.fechaNacimiento);
console.log('Tiene Mascota:', DAW.mascota ? 'Sí' : 'No');
console.log('Trabajo:');
console.log('   Empresa:', DAW.trabajo.empresa);
console.log('   Sector:', DAW.trabajo.sector);