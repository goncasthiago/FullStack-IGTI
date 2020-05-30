'use strict';

window.addEventListener('load', () => {
	doSpread();
	doRest();
	doDesctructuring();
});

function doSpread() {
	const marriedMen = people.results.filter((person) => person.name.title === 'Mr');

	const marriedWomen = people.results.filter((person) => person.name.title === 'Ms');

	console.log('Married Man');
	console.log(marriedMen);
	console.log('Married Woman');
	console.log(marriedWomen);

	const marriedPeople = [ ...marriedMen, ...marriedWomen, { msg: 'Todos juntos' } ];
	console.log('Married People');
	console.log(marriedPeople);
}

function doRest() {
	console.log(infiniteSum(1, 2, 2, 2, 2, 2, 2, 2, 2));
}

function infiniteSum(...numbers) {
	return numbers.reduce((acc, curr) => acc + curr, 0);
}

function doDesctructuring() {
	const first = people.results[0];
	console.log('first');
	//console.log(first);
	//Repetitivo
	/*
    const username = first.login.username;
	const password = first.login.password;

*/
	const { username, password } = first.login;
	console.log('Usuario', username);
	console.log('Senha', password);
}
