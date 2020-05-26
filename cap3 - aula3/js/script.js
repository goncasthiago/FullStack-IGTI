var title = document.querySelector('h1');
title.textContent = 'Mudei';

var cidade = document.querySelector('#cidade');
cidade.textContent = 'São Paulo (SP)';

var arrayPessoal = Array.from(document.querySelectorAll('.dados--pessoais'));

console.log(arrayPessoal);

for (var i = 0; i < arrayPessoal.length; i++) {
	var currentElement = arrayPessoal[i];
	currentElement.classList.add('verde');
}
