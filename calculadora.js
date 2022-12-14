const textOpi1 = document.getElementById("opi1")
const textOperacion = document.getElementById("operacion")
const textOpi2 = document.getElementById("opi2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular)

function calcular() {
    const operacion = textOperacion.value
    const opi1 = parseFloat(textOpi1.value)  
    const opi2 = parseFloat(textOpi2.value)

    if ((operacion == '+' || operacion == '-' || operacion == '*' || 
    operacion == '/') && !isNaN(opi1) && !isNaN(opi2)){
        let resultado;
        switch (operacion){
            case '+':
                resultado = opi1 + opi2
                break;
            case '-':
                resultado = opi1 - opi2
                break;
            case '*':
                resultado = opi1 * opi2
                break;
            case '/':
                resultado = opi1 / opi2
                break;
        }
        pResultado.style = "color:black"
        pResultado.innerText = "= " + resultado        
    }else {
        pResultado.style = "color:red"
        pResultado.innerText = "Calculo imposible"
    }       
}