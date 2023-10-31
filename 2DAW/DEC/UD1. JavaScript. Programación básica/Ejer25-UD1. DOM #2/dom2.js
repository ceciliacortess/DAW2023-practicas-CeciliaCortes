const form = document.createElement('form');
const label1 = document.createElement('label');
label1.textContent = 'Nombre: ';
const input1 = document.createElement('input');
input1.type = 'text';
input1.id = 'nombre';


const label2 = document.createElement('label');
label2.textContent = 'Apellido: ';
const input2 = document.createElement('input');
input2.type = 'text';
input2.id = 'apellido';


const submitButton = document.createElement('button');
submitButton.textContent = 'Enviar datos';
submitButton.type = 'button';


const saludo = document.createElement('p');
saludo.id = 'saludo';


form.appendChild(label1);
form.appendChild(input1);
form.appendChild(label2);
form.appendChild(input2);
form.appendChild(submitButton);


document.body.appendChild(form);
document.body.appendChild(saludo);


submitButton.addEventListener('click', function() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const mensaje = `Hola, buenos dias ${nombre} ${apellido}, gracias por rellenar el formulario.`;
  saludo.textContent = mensaje;
});


