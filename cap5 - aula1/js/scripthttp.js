console.log('Script - http js')
let url = 'https://api.github.com/users/goncasthiago'
window.addEventListener('load', () => {
    doFetch();

    /*
    fetch(url).then(res => {
        res.json().then(data => {
            showData(data);
        });
    }).catch(error => {
        console.log('Erro na requisição')
    });
*/

//utilizando promisse com then e catch

    executeDivisionPromisse(12,2);
    executeDivisionPromisse(10,0);

//utilizando o async await

    executeDivisionPromisseAsyncAwait(14,2);

});

async function doFetch(){
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
}

function showData(data){
    const user = document.querySelector('#user');
    user.textContent = `Usuário: ${data.login} - Nome: ${data.name}`;
}

function divisionPromise(a,b){
    return new Promise( (resolve, reject) =>{
        if(b===0){
            // o que fazer se rejeitar
            reject('Não é possivel dividir por 0')
        }
        //o que fazer se ok
        resolve(a / b);
    }
    )
}

function executeDivisionPromisse(a,b){

    divisionPromise(a, b).then(res => {
        console.log(res);
    }).catch(err => {
        console.log('Falha na divisão - ' + err)
    });

}

async function executeDivisionPromisseAsyncAwait(a, b) {

   const division = await divisionPromise(a, b);
   console.log(division);

}