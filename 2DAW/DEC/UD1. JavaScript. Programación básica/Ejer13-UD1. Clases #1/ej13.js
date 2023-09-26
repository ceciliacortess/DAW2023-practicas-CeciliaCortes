class Alumno{
    constructor(matricula, nia, nombre, apellidos, curso, modulo){
        this.matricula = matricula;
        this.nia = nia;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.curso = curso;
        this.modulo = modulo;
    }
}

function iniciar(){
    alumno1 = new Alumno('2033DMH', 12345678, 'Antonio', 'Camarena',2,'DAW');
    console.log(alumno1);
}

function mostrarDatos(){
    console.log("**********Datos alumnos del Complejo de Cheste**********");
    console.log('Matricula: '+alumno1.matricula+'\nNIA: '+alumno1.nia+'\nCurso: '+alumno1.curso+'\nModulo: '+alumno1.modulo);
}

iniciar();
mostrarDatos();
