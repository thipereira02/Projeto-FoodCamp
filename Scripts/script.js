let opcoes = 0;

function escolherPrato(opcaoPrato){
    const selecionado = document.querySelector(".prato .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove('selecionado');
        const check = selecionado.querySelector("ion-icon");
        check.classList.add('escondido')
        opcoes--;
    }
	
    const escolha = document.querySelector("." + opcaoPrato);
    escolha.classList.add('selecionado');
    const check = escolha.querySelector("ion-icon")
    check.classList.remove('escondido')
    opcoes++;

    //habilitarBotao();
}

function escolherBebida(opcaoBebida){
    const selecionado = document.querySelector(".bebida .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove('selecionado');
        const check = selecionado.querySelector("ion-icon");
        check.classList.add('escondido')
        opcoes--;
    }
	
    const escolha = document.querySelector("." + opcaoBebida);
    escolha.classList.add('selecionado');
    const check = escolha.querySelector("ion-icon")
    check.classList.remove('escondido')
    opcoes++;

    //habilitarBotao();
}

function escolherSobremesa(opcaoSobremesa){
    const selecionado = document.querySelector(".sobremesa .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove('selecionado');
        const check = selecionado.querySelector("ion-icon");
        check.classList.add('escondido')
        opcoes--;
    }
	
    const escolha = document.querySelector("." + opcaoSobremesa);
    escolha.classList.add('selecionado');
    const check = escolha.querySelector("ion-icon")
    check.classList.remove('escondido')
    opcoes++;

    //habilitarBotao();
}


// function habilitarBotao(){
//     if (opcoes===3) {
//         const habilitar = document.querySelector("botao_confirmacao_on");
//         habilitar.classList.add("display")
//     }
// }

function pedido_confirmado(){
    
}