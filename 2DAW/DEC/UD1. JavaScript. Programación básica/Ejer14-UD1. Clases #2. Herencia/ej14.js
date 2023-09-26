class Usuario {
    constructor(nombre, email, contraseña){
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }

    saludo() {
        console.log('Hola soy '+ this.nombre);
    }

    login(email, contraseña){
        return this.email == email && this.contraseña == contraseña;
    }
}

class AlumnoASIR extends Usuario{
    constructor(nombre, email, contraseña, cursos, activo){
        super(nombre, email, contraseña);
        this.cursos = [];
        this.activo = false;
    }
}

class AlumnoDAW extends Usuario{
    constructor(nombre, email, contraseña, cursos, activo){
        super(nombre, email, contraseña);
        this.cursos = [];
        this.activo = false;
    }
}

usuario1 = new AlumnoDAW('Toni','a@gmail.com', '1234');
usuario2 = new AlumnoASIR('Paco','paco@gmail.com', '123456');
usuario1.saludo();
console.log(usuario1.login('a@gmail.com', '1234'));
console.log(usuario1.login('b@gmail.com', '12345'));
console.log(usuario2.login('paco@gmail.com', '123456'));