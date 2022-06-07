//projeto
function setup() {
    createCanvas(500, 400);
    somTrilha.loop();
  }
  
  function draw() {
    background(imagemEstrada);
    mostraAtor();
    mostraCarros();
    movimentaAtor();
    movimentaCarros();
    voltaPosicaoInicialCarros();
    verificaColisao();
    marcaPonto();
    incluiPlacar();
  }
  