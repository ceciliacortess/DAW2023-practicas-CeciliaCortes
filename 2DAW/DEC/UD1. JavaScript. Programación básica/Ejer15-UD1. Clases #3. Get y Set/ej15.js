class AlumnoDAW {
    constructor(nombre, apellido, email, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.edad = edad;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getNombre(){
        return this.nombre;
    }

    set setApellido(apellido){
        this.apellido = apellido;
    }

    get getApellido(){
        return this.apellido;
    }

    set setEmail(email){
        this.email = email;
    }

    get getEmail(){
        return this.email;
    }

    set setEdad(edad){
        this.edad = edad;
    }

    get getEdad(){
        return this.edad;
    }
}

alumno = new AlumnoDAW('Cecilia', 'Cortes', 'c@gmail.com',18);
console.log(alumno.nombre);
alumno.setNombre = 'Celia';
console.log(alumno.nombre);
