'use strict';
window.addEventListener('load', () => {
	doMap();
	doFilter();
	doForEach();
	doReduce();
	doFind();
	doSome('Amazonas');
	doSome('Amazonassssss');
	doEvery();
	doSort();
});

function doMap() {
	const nameEmailArray = people.results.map((person) => {
		return {
			name: person.name,
			email: person.email
		};
	});
	console.log('map');
	console.log(nameEmailArray);
	return nameEmailArray;
}

function doFilter() {
	const olderThan50 = people.results.filter((person) => {
		return person.dob.age > 50;
	});
	console.log('filter');
	console.log(olderThan50);
}

function doForEach() {
	const mappedPeople = doMap();
	mappedPeople.forEach((person) => {
		person.nameSize = person.name.title.length + person.name.first.length + person.name.last.length;
	});
	console.log('forEach');
	console.log(mappedPeople);
}
function doReduce() {
	const totalAges = people.results.reduce((accumulator, current) => {
		return accumulator + current.dob.age;
	}, 0);
	console.log('reduce');
	console.log(totalAges);
}
function doFind() {
	const found = people.results.find((person) => {
		return person.location.state === 'Minas Gerais';
	});
	console.log('find');
	console.log(found);
}
function doSome(state) {
	const found = people.results.some((person) => {
		return person.location.state === state;
	});
	console.log('some');
	console.log(found);
}
function doEvery() {
	const every = people.results.every((person) => {
		return person.nat === 'BR';
	});
	console.log('every');
	console.log(every);
}

function doSort() {
	const mappedNames = people.results
		.map((person) => {
			return {
				name: person.name.first
			};
		})
		.filter((person) => {
			return person.name.startsWith('A');
		})
		.sort((a, b) => {
			//return a.name.localeCompare(b.name);
			//comparacao com inteiros
			return a.name.length - b.name.length;
		});

	console.log('sort pelo tamanho do nome');
	console.log(mappedNames);
}
