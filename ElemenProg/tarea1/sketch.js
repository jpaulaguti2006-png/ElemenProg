let listaOriginal = [2, 4, 13, 16, 16, 34,null, 24, ,65, 30, 2, 8, null, 21, 10, , 16, 30, 1, null,15];
let datosMemoria = [];

// Recorremos la lista elemento por elemento
for (let i = 0; i < listaOriginal.length; i++) {
  let numero = listaOriginal[i];
  
  // 1. Si NO es null y NO es vacio
  if (numero != null) {
    
    // 2. Si el número AÚN NO está en nuestra lista limpia, lo agregamos
    if (!datosMemoria.includes(numero)) {
      datosMemoria.push(numero);
    }
    
  }
}
function setup() {
  createCanvas(800, 180);
  background(240);
  noLoop();
}

function draw() {
  background(240);
  
  fill(0);
  textSize(25);
  textAlign(LEFT, TOP);
  text("LISTA : ", 25, 25);
  
  let ejeX = 25;
  let ejeY = 70;
  let Ancho = 45;
  let Altura = 40;
  let Espacio = 12;
  
  for (let i = 0; i < datosMemoria.length; i++) {
    let posX = ejeX + i * (Ancho + Espacio);
    
    stroke(0);
    strokeWeight(2);
    fill(255);
    rect(posX, ejeY, Ancho, Altura, 5);
    
    noStroke();
    fill(200, 100, 0);
    textSize(18);
    textAlign(CENTER, CENTER);
    text(datosMemoria[i], posX + Ancho / 2, ejeY + Altura / 2);
    
    fill(100);
    textSize(13);
    text("índice " + i, posX + Ancho / 2, ejeY + Altura + 20);
  }
}
