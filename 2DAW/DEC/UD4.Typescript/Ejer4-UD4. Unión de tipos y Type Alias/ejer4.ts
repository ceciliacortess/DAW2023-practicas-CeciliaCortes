const alumno = {
  nombre: "Cecilia",
  edad: 19,
  mascota: false,
};

console.log("Nombre: " + alumno.nombre);
console.log("Edad: " + alumno.edad);
console.log("¿Tiene mascota?: " + (alumno.mascota ? "Sí" : "No"));

const arrayAlumno: (string | number | boolean)[] = [
  alumno.nombre,
  alumno.edad,
  alumno.mascota,
];
console.log("Array de alumno: " + arrayAlumno);

type alumnoType = {
  nombre: string;
  edad: number;
  mascota: boolean;
};

const alumnoAlias: alumnoType = {
  nombre: "Susana",
  edad: 25,
  mascota: true,
};

console.log("Nombre: " + alumnoAlias.nombre);
console.log("Edad: " + alumnoAlias.edad);
console.log("¿Tiene mascota?: " + (alumnoAlias.mascota ? "Sí" : "No"));

type Hobby = "futbol" | "programar" | "peliculas" | "consola" | "gimnasio";
const hobbyFavorito: Hobby = "futbol";
if (hobbyFavorito === "futbol") {
  console.log('¿Es el hobby favorito?','Sí');
} else {
  console.log('¿Es el hobby favorito?','No');
}