class Calculadora {
    constructor(){
        this.operacao;
        this.visor;
        this.status;
    }

    lerValores(valorDigitado) {

    }
}

const calculadora = new Calculadora

const listaDeNumers = Array.from(document.getElementsByClassName('numeros'))

listaDeNumeros.map((element) => {
    element.addEventListener('click', (event) =>{
    // Aqui estamos chamando a função que lê o valor dentro da calculadora
      calculadora.lerValores(event.target.value)
    })
})

lerValores(valorDigitado) {
    this.operacao.push(valorDigitado);

    this.visor.innerText = this.operacao.join("");
}
}

handleOperacoes() {
    let resultado = eval( this.operacao.join(""))

    this.visor.innerText = resultado;~

    this.operacao = [ result ]
}