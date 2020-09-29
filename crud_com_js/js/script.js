window.addEventListener("load",start);

var globalNames = ['um','dois','tres','quatro'];
var inputName = null;

function start() {
    console.log('start');
    preventFormSubmit();//retirnado o recarregamento da pagina
    inputName = document.querySelector('#inputName');
    activateInput();//função para ja carregar o codigo focando no input
    
}

function preventFormSubmit() {
    function handleFormSubmit(event){
        event.preventDefault();
    }
    var form = document.querySelector("form");
    form.addEventListener('submit',handleFormSubmit);//tratando o evento submit com uma função

}

function activateInput() {
    function handleTyping() {
        
    }
    inputName.focus();
    inputName.addEventListener("keyup",handleTyping);
}
