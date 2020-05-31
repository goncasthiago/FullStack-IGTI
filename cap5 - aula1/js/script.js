'strict use'

//contador que mostra números de um em um a cada segundo

window.addEventListener('load', ()=> {
const timer = document.querySelector('#timer');

let count = 0
const contador = setInterval(() => {
    timer.textContent = ++count;

    //parando a execução do setInterval
    if (count === 10){
        this.clearInterval(contador);
        return; // não continua contando após apagar o loop
    }
    if (count % 5 === 0) {
        setTimeout(() => {
            timer.textContent = count + 0.5;
            //para ficar com 0,5 somar com ',5' como string mesmo
        }, 500);
    }
}, 1000);
});