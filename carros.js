//carros

//propriedades
let larguraCarro = 50;
let alturaCarro = 40;

let xCarros = [600, 600, 600,600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];

//funcoes

function mostraCarros(){ 
  for(let i = 0; i < imagemCarros.length; i++){
      image(imagemCarros[i],xCarros[i],yCarros[i],larguraCarro,alturaCarro);
  }
}

function movimentaCarros(){
  for(let i = 0; i< imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro < -50;
}
