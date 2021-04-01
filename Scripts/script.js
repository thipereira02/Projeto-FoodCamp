function escolherPrato(opcaoPrato){
    const selecionado = document.querySelector(".prato .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove('selecionado');    
    }
	
    const escolha = document.querySelector("." + opcaoPrato)
    escolha.classList.add('selecionado');
}

function escolherBebida(opcaoBebida){
    const selecionado = document.querySelector(".bebida .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove('selecionado');    
    }
	
    const escolha = document.querySelector("." + opcaoBebida)
    escolha.classList.add('selecionado');
}

function escolherSobremesa(opcaoSobremesa){
    const selecionado = document.querySelector(".sobremesa .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove('selecionado');    
    }
	
    const escolha = document.querySelector("." + opcaoSobremesa)
    escolha.classList.add('selecionado');
}