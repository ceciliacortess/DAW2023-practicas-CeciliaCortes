var elementos = new Array('Honda', 'Mazda', 'Ford', 'Citroen', 'Renault' , 'Mercedes');
console.log(elementos.includes('Ford'));
console.log(elementos.find(el => el.length < 5));
console.log(elementos.indexOf('Renault'));
console.log(elementos.filter(el => el.length === 5));