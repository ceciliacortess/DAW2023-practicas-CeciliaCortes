document.querySelector('.button1').addEventListener('click', function () {
    alert('Botón 1 clickeado');
});

document.querySelector('.button2').addEventListener('click', function () {
    alert('Botón 2 clickeado');
});
document.querySelector('.button3').addEventListener('click', function () {
    alert('Botón 3 clickeado');
});

var dynamicList = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
var listContainer = document.querySelector('.list');

dynamicList.forEach(function (item) {
    var listItem = document.createElement('li');
    listItem.textContent = item;
    listContainer.appendChild(listItem);
});

// Agregar nuevos elementos a la lista con la función append
var newElements = ['Nuevo Elemento 1', 'Nuevo Elemento 2'];
newElements.forEach(function (newItem) {
    var newListItem = document.createElement('li');
    newListItem.textContent = newItem;
    listContainer.appendChild(newListItem);
});

var listLength = document.querySelector('.list').children.length;
document.querySelector('.list-length').textContent = 'Length de la lista: ' + listLength;

// Obtener y mostrar los índices de los elementos de la lista
var listItems = document.querySelectorAll('.list li');
var listIndexes = Array.from(listItems).map(function (item, index) {
    return item.textContent + ' en el index ' + index;
});
document.querySelector('.list-index').textContent = 'Índices de la lista: ' + listIndexes.join(', ');


// Unir los elementos de la lista con la función join
document.querySelector('.list-join').textContent = 'Propiedad Join de la lista: ' + dynamicList.join(', ');

// Crear un mapa y mostrar sus valores en la clase map
var myMap = new Map();
myMap.set('Key 1', 'Valor 1');
myMap.set('Key 2', 'Valor 2');
myMap.set('Key 3', 'Valor 3');

var mapContainer = document.querySelector('.map');
myMap.forEach(function (value, key) {
    var mapItem = document.createElement('div');
    mapItem.textContent = value;
    mapContainer.appendChild(mapItem);
});

// Mostrar las keys y los values del mapa en las clases map-keys y map-values
var mapKeysContainer = document.querySelector('.map-keys');
var mapValuesContainer = document.querySelector('.map-values');

myMap.forEach(function(value, key) {
    var mapKeyItem = document.createElement('div');
    mapKeyItem.textContent = key;
    mapKeysContainer.appendChild(mapKeyItem);

    var mapValueItem = document.createElement('div');
    mapValueItem.textContent = value;
    mapValuesContainer.appendChild(mapValueItem);
});
