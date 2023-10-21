class Calculadora {
    constructor(){
        this.operacao = [];
        this.visor = window.document.getElementById("visorInfo");
        this.status = 
    }
}
    ligarCalculadora(); {
        
        this.status = status;
        this.operacao = []
        this.ligarVisor() 
    
    }
    ligarVisor ();{
        this.visor.innerText = "0"

        setInterval(()=>{
            this.visor.style.display = "none";
            setTimeout(() => {
                this.visor.style.display = "flex"
            }, 100)
        }, 1000)
    }

    lerValores(valorDigitado); {
        if(this.estatus === "desligado"){
            console.error(this.status)
        }else{
            this.operacao.push(valorDigitado)
        }
    
    this.exibeValoresDigitados(this.operacao.join(""))
    
    }

    exibeValoresDigitados (valor); {

        if(String(valor).length < 9){
            this.visor.innerText = valor;
        } else {
            this.visor.innerText = String(valor).slice(0,8)+"...";
        }
    }
    
    handleOperacoes();{
        let result = eval(this.operacao.join(""));

        this.exibeValoresDigitados(result)
        this.operacao = [ result ]
    }

    apagaUltimoDigito();{
        this.operacao.pop()

    this.exibeValoresDigitados(this.operacao.join(""))
    }

    var calculadora = new calculadora

    const listaDeNumeros = Array.from(document.getElementsByClassName('numeros'))

    listaDeNumeros.map((element) =>{
        element.addEventListener('click', (event) => {
            calculadora.lerValores(event,target,value)
        })
    })

    const listaOperadores = Array.from(document.getElementsByClassName('operadores'))

    listaOperadores.map((element) => {
        element.addEventListener('click', (event) => {
            calculadora.lerValores(event,target,value)
        })
    })