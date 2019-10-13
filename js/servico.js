var listElement = document.querySelector('#app div ul');
var inputElement =  document.querySelector('#app div input');
var buttonElement = document.querySelector('#app div button');

var servicos = JSON.parse(localStorage.getItem('list_servicos')) || [];

function renderItem(){
    listElement.innerHTML = '';

    for (servico of servicos){
        var servicoElement = document.createElement('li');
        var servicoText =  document.createTextNode(servico);

        var linkElement =  document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = servicos.indexOf(servico);
        linkElement.setAttribute('onclick', 'deleteServico(' + pos +')');
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);
        servicoElement.appendChild(servicoText);
        servicoElement.appendChild(linkElement);
        listElement.appendChild(servicoElement);
    }
}

renderItem();

function addServicos(){
    var servicosText = inputElement.value;

    servicos.push(servicosText);
    inputElement.value = '';
    renderItem();
    saveToStorage();
}

buttonElement.onclicke = addServicos();

function deleteServico(pos){
    servicos.splice(pos, 1)
    renderItem();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_servicos', JSON.stringify(servicos));

}