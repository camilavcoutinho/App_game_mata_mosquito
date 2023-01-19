var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica(){
    var posicaoX = Math.floor(Math.random() * largura) - 90 //criando posicao randomica no eixo x, arredondando para baixo
    var posicaoY = Math.floor(Math.random() * altura) - 90//criando posicao randomica no eixo y, arredondando para baixo

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png' 
    mosquito.className = 'mosquito1'
    mosquito.style.left = posicaoX + 'px' 
    mosquito.style.top = posicaoY + 'px' 
    mosquito.style.position = 'absolute' 

    document.body.appendChild(mosquito)
}