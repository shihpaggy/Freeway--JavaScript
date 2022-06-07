//ator

//propriedades

let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

//funcoes

function mostraAtor(){
    image(imagemAtor,xAtor,yAtor,30,30);
}

function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
        yAtor -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
        if(podeSeMover()){
            yAtor += 3;
        }
    }
}

function podeSeMover(){
    return yAtor < 366;
}

function verificaColisao(){
    for(let i = 0; i < imagemCarros.length; i++){
        colisao = collideRectCircle(xCarros[i],yCarros[i],larguraCarro,alturaCarro,xAtor,yAtor,15);
        if(colisao){
            voltaPosicaoInicialAtor();
            somColisao.play();
            if(meusPontos > 0){
                meusPontos -= 1; 
            }
        }
    }
}

function voltaPosicaoInicialAtor(){
    yAtor = 366;
}

function marcaPonto(){
    if(yAtor < 15){
        meusPontos += 1;
        somPontos.play();
        voltaPosicaoInicialAtor();
    }
}

function incluiPlacar(){
    textAlign(CENTER);
    fill(color(255,240,60));
    textSize(25);
    text(meusPontos, width / 5, 27);
}
