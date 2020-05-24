// 3 principais estruturas de decisão

var a = 5, b = 1;

if (a > b) {
    console.log( a + ' é maior que ' + b);
} else {
    if (a < b) {
console.log( a + ' é menor que ' + b);
    }else{
        console.log(a + ' é igual a ' + b);
    }
}

var r = '';
var dia = 1;

switch  (dia){
    case 1: r = "Domingo"; break ;
    case 2: r = "Segunda"; break;
    case 3: r = "Terça" ; break;
    case 4: r = "Quarta"; break;
    case 5: r = "Quinta"; break;
    case 6: r= "Sexta"; break;
    case 7: r= "Sábado";break;

        default: r = "Dia inválido;"
}

console.log(r);