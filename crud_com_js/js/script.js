window.addEventListener("load",start);

var globalNames = ['um','dois','tres','quatro'];
var inputName = document.querySelector('#inputName');

function start() {
    render();
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
    function insertName(newName) {
        globalNames.push(newName);
        render();
    }
    function handleTyping(event) {
         if (event.key==='Enter') {//capturnado a tecla digitada
            // var typeName = event.target.value;//pegando o valor do elemento que foi mexido
            insertName(event.target.value);
        }

    }
    inputName.addEventListener("keyup",handleTyping);
    inputName.focus();
}

function render(){
    // renderizadndo campos e a lista
    var divNames = document.querySelector("#names");
    divNames.innerHTML = '';
    //criando elementos html
    var ul = document.createElement('ul');
    // var li1 = document.createElement('li');
    // var li2 = document.createElement('li');
    // li1.textContent= 'primeiro';
    // li2.textContent = 'segundo';

    // ul.appendChild(li1);
    // ul.appendChild(li2);//adicionando os elementos aoa elementopai

    for(var i=0;i<globalNames.length;i++){
        var currentName = globalNames[i];
        var li = document.createElement('li');
        li.textContent = currentName;
        ul.appendChild(li);
    }

    divNames.appendChild(ul);//criadno a div
    clearInput();
}

function clearInput(){
    inputName.value = '';
    inputName.focus();
}

