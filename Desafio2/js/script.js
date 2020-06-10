/**
 * Estado da aplicação (State)
 */

 let tabCountries = null;
 let tabFavorites = null;

 let allCountries = [];
 let favoritesCountries = [];

 let totalPopulationList = 0;
 let totalPopulationFavorites = 0;

window.addEventListener('load',() => {
    doFetch()
    tabCountries = document.querySelector('#todos--paises');
    tabFavorites = document.querySelector('#escolhidos--paises');

})


async function doFetch() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const resjson = await res.json()
    allCountries = await resjson.map(country => {
        return {
            nome: country.translations.br,
            bandeira: country.flag,
            populacao: country.population,
            id: country.numericCode,
        }



        /*     Retornar apenas as seguintes informações
               Nome.
               •Bandeira.
               •População.
               •Id (numericCode).
       */
    });
    //console.log(countries);
    //console.log(countries.length);
    render(countries);

}

function render(countries){


    function createCard(country){

        let divPais = document.createElement('div');
        let nomePais = document.createElement('h2');
        let bandeira = document.createElement('img');
        let populacaoPais = document.createElement('span');
        let idPais = document.createElement('span');
        let liPopulacao = document.createElement('li');
        let liId = document.createElement('li');
        let ul = document.createElement('ul');

        bandeira.src = country.bandeira;
        populacaoPais.textContent = "População: " + Intl.NumberFormat().format(country.populacao) ;
        idPais.textContent = "Id: " + country.id;
        nomePais.textContent = country.nome;
        liPopulacao.appendChild(populacaoPais);
        ul.appendChild(liPopulacao);
        liId.appendChild(idPais)
        ul.appendChild(liId);
        divPais.appendChild(nomePais);
        divPais.appendChild(bandeira);
        divPais.appendChild(ul);
        divPaises.appendChild(divPais);
    }

    let divPaises = document.querySelector('#paises');
    divPaises.innerHTML = 'Total de Países: ' + countries.length;




    for (let i = 0; i < countries.length; i++) {
        let country = countries[i];
        //console.log(country);

        createCard(country);
     }

}