var lampada = document.getElementById('lampada')
var botaoLigar = document.getElementById('ligar');
var botaoDesligar = document.getElementById('desligar')
var estaQuebrada = false

botaoLigar.addEventListener('click', ligar)
botaoDesligar.addEventListener('click', desligar)
lampada.addEventListener('click', quebrar)


function ligar(){
    if(estaQuebrada == true){
        alert('A lâmpada esta quebrada')
    }else{
        lampada.src = 'img/ligada.png'
    }
    
}

function desligar(){
    if(estaQuebrada == true){
        alert('A lâmpada esta quebrada')
    }else{
        lampada.src = 'img/desligada.png'
    }
}
    

function quebrar(){
    lampada.src = 'img/quebrada.png'
    estaQuebrada = true
}
