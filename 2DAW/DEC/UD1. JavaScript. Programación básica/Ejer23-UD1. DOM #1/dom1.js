const form = document.getElementById('form');
const fragment = document.createDocumentFragment();
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Parrafo 1 realizado desde JS';
fragment.appendChild(parrafo1);
const parrafo2 = parrafo1.cloneNode(true);
parrafo2.textContent = 'Parrafo 2 copiado y pegado del primer párrafo';
fragment.appendChild(parrafo2);

const enlace = document.createElement('a');
enlace.href = "http://www.google.es";
enlace.textContent = 'Enlace de Google';
fragment.appendChild(enlace);

const lista = document.createElement('ul');
for (let index = 0; index < 3; index++) {
    const item = document.createElement('li');
    item.textContent = `elemento de la lista: ${index}`;
    lista.appendChild(item);    
}
fragment.appendChild(lista);

const selector = document.createElement('select');
selector.name = 'numero';
const opciones = document.createElement('option');
opciones.textContent = 'Opcion 2';
opciones.value = '2';;
selector.appendChild(opciones);
fragment.appendChild(selector);

const div = document.createElement('div');
const input = document.createElement('input');
input.type = 'text';
div.appendChild(input);
fragment.appendChild(div);

form.appendChild(fragment);