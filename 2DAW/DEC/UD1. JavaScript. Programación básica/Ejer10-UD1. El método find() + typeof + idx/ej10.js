var elementos = new Array("Desarrollo de Aplicaciones Web",12345678, "Administración de Sistemas Informáticos en Red",87654321, "Desarrollo de Aplicaciones Multiplataforma", 12348765);
var daw = new Array(elementos.find((el, idx) => typeof el === "string" && idx === 0), elementos.find((el, idx) => typeof el === "number" && idx === 1));
console.log(daw);
