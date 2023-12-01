## Ejer14-UD1. Clases #2. Herencia
En el centro de Cheste tenemos distintos tipos registro de usuarios. Cada usuario tendrá un **nombre**, **correo** y **contraseña** para acceder a la plataforma. <br><br>
Dentro de cada centro puede haber distintos tipos de usuarios: `alumnosASIR`, `alumnosDAW`, `invitados`, `profesores`, etc. Además, dichos usuarios comparten gran parte de su funcionalidad y pueden acceder mediante un **`login`** (email y contraseña).
- La clase `Usuario` tendrá un **nombre**, **email** y **contraseña**. Además, tendrá los métodos `saludo`, y `login` (email, contraseña).
- `AlumnoASIR` tendrá, a parte de la funcionalidad de `Usuario`, un parámetro para añadir los **cursos**, que será un array vacío, y otro que nos indica si el alumno está **activo o no**.
- `AlumnoDAW` tendrá lo mismo que `AlumnoASIR`.

Ejemplos: <br>

**Alumno DAW:** <br>
Hola, soy Toni<br>
true ​​​​​at ​​​​​​​​usuarioDaw.login('a@gmail.com', '1234')<br>
false ​​​​​at ​​​​​​​​usuarioDaw.login('b@gmail.com', '12345')
<br><br>
**Alumno ASIR:** <br>
Hola, soy Paco<br>
true ​​​​​at ​​​​​​​​usuarioAsir.login('paco@gmail.com', '123...
