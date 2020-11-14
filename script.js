function calcular(){

    var linha2 = document.querySelector(".linha2")
    linha2.style.backgroundColor = "#ffffff"
    var linha3 = document.querySelector(".linha3")
    linha3.style.backgroundColor = "#ffffff"
    var linha4 = document.querySelector(".linha4")
    linha4.style.backgroundColor = "#ffffff"
    var linha5 = document.querySelector(".linha5")
    linha5.style.backgroundColor = "#ffffff"
    var linha6 = document.querySelector(".linha6")
    linha6.style.backgroundColor = "#ffffff"
    
    var altura = document.querySelector("#input_valor .input_altura ").value/100
    var peso = document.querySelector("#input_valor .input_peso")
    var calculo = peso.value /(altura*altura)

    var texto = document.querySelector(".textoResultado")
    

    if(altura < 0 || peso.value <= 0 || calculo == Infinity ){texto.textContent = " "
    console.log(calculo)

    }else{

    console.log(calculo)

    var resultado = calculo.toFixed(2)
    texto.textContent = resultado

    if(calculo <18.5 ){
        
        linha2.style.backgroundColor = " rgba(208, 255, 0, 0.836)"
    } else if (calculo >=18.5 && calculo < 25){
        linha3.style.backgroundColor = "green"

    } else if (calculo >=25 && calculo < 30){
        linha4.style.backgroundColor = "yellow"

    }else if (calculo >=30 && calculo < 40){
    linha5.style.backgroundColor = "coral"

    }else if (calculo > 40 ){
    linha6.style.backgroundColor = "red"
    }
    }
}

function limpar(){

var texto = document.querySelector(".textoResultado")
texto.textContent = " "
var limpaAltura =document.querySelector(".input_altura")
limpaAltura.value = " "
var limpaPeso =document.querySelector(".input_peso")
limpaPeso.value = " "

var linha2 = document.querySelector(".linha2")
    linha2.style.backgroundColor = "#ffffff"
    var linha3 = document.querySelector(".linha3")
    linha3.style.backgroundColor = "#ffffff"
    var linha4 = document.querySelector(".linha4")
    linha4.style.backgroundColor = "#ffffff"
    var linha5 = document.querySelector(".linha5")
    linha5.style.backgroundColor = "#ffffff"
    var linha6 = document.querySelector(".linha6")
    linha6.style.backgroundColor = "#ffffff"
}



