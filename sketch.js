function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");

  fill("#EB1F10");
  textSize(100);
  textAlign(CENTER,CENTER);
  textFont("fontVerdan");
  
  
  let maximo =width;
  let minimo =0;
      
  console.log ("Vôleibol".length);
  let palavra="Vôleibol";
  let quantidade= map(mouseX,0,width,1,palavra.length)
  
  let parcial=palavra.substring(0,quantidade);
  text(parcial,200,200)
}