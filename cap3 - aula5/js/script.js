console.log('Inicio da Aula');

window.addEventListener('load', start);

function start() {
	console.log('Inicio da Aula');
	console.log('Pagina carregada');

	//span.textContent = 'teste de query';
	input1.addEventListener('keyup', countName);
	var form = document.querySelector('form');
	form.addEventListener('submit', preventSubmit);
}

function countName(event) {
	var span = document.querySelector('#nameLength');
	console.log('event');

	span.textContent = event.target.value.length;
}

function preventSubmit(event) {
	event.preventDefault();
	var input1 = document.querySelector('#input1');
	alert(input1.value + 'cadastro com sucesso!');
}
