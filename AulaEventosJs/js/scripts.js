window.addEventListener('load',start);//quando a pagina carregar,execute start;

function start() {
    console.log('pagina totalmente carregada');
//criando um contador de caracteres com js
var nameInput = document.querySelector("#nameInput");

// capturando evento do input
nameInput.addEventListener('keyup',countName);
// capturando evento

//usando o preventdefault

var form = document.querySelector('form');
form.addEventListener("submit",preventSubmit);

}

function countName(event) {
    var count = event.target.value;//pegando o elemento
    var span = document.querySelector("#nameLength");//onde sera colocado o valor
    span.textContent = count.length;//atribuindo o valor
    
}

function preventSubmit(event) {
    event.preventDefault();
    
}