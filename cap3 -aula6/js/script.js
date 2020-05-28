// adicionar um eventListener para que tudo

window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
var inputName = null;

function start(){
    preventFormSubmit();
    inputName = document.querySelector('#inputName');
    activateInput();
    render();
}

function preventFormSubmit(){
    function handleFormSubmit(event){
        event.preventDefault();
    }
    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

function activateInput(){


function handleTyping(event){
    function insertName(newName){
        globalNames.push(newName);
        render();

    }

    if (event.key === 'Enter'){
        insertName(event.target.value);
    }
}

    inputName.focus();
    inputName.addEventListener('keyup', handleTyping);
}

function render(){
    var divNames = document.querySelector('#names');
    var ul = document.createElement('ul');

    for (var i = 0; i < globalNames.length; i++){
        var li = document.createElement('li');
        var currentName = globalNames[i];
        li.textContent = currentName;
        ul.appendChild(li);

    }
    divNames.appendChild(ul);

}