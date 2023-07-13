
let sorteo
let x = 0
let y = 0
let lado = 100
let centro = lado /2
let ladoCanvas = 10

let r = 0
let g = 0
let b = 0

function setup() {
  // createCanvas(lado * ladoCanvas, lado* ladoCanvas)
  createCanvas (windowWidth,windowHeight)
  background(0)
  frameRate(10)
  
}

function draw() {
  
  // numero random del 0 al 10
  sorteo = random(0, 4)

  let r = random (80,100)
  let g = random (10,200)
  let b = random (100,200)

  if (sorteo < 1) {
    // primer módulo

    strokeWeight(0)
    fill(0)
    rect(x, y,lado)
    
    strokeWeight(3)
    stroke(255)
    strokeCap(SQUARE) // para que corte justo en el límite del rectángulo
    fill(r,g,b)
    arc(lado+x, centro+y, lado, lado, HALF_PI , PI + HALF_PI )
    
    line(centro+x, y, centro+x, lado+y)
    line(x+centro/4, y, x+centro/4, lado+y)
    
    fill(r,g,b) 
    arc(x, y, lado, lado, -TWO_PI, HALF_PI)

  } else if (sorteo < 2) {
   
    // segundo módulo
  strokeWeight(0)
  fill(0)
  rect(x, y,lado)
  
    strokeWeight(3)
    stroke(255)
    line(x+centro/2, y, x+centro/2, lado+y)
    line(x+centro/4, y, x+centro/4, lado+y)
    
    
    fill(r,g,b)
    ellipse(x+centro, y+centro, centro/1.5) 
    arc(x+lado, y, lado, lado,  PI - HALF_PI, PI)
    
  } else if (sorteo < 3) {
  
    // tercer módulo
    strokeWeight(0)
    fill(0)
    rect(x, y,lado)
    
    strokeWeight(3)
    stroke(255)
    noFill()
    arc(x, y+lado, lado+centro/2, lado+centro/2,  PI + HALF_PI, TWO_PI)
    arc(x, y+lado, lado+centro, lado+centro,  PI + HALF_PI, TWO_PI)
    
    fill(r,g,b)
    arc(x, y+lado, lado, lado,  PI + HALF_PI, TWO_PI)
    
    fill(r,g,b)
    arc(x+lado, y, lado, lado,  PI - HALF_PI, PI)

  } else if (sorteo <4) {
    
    // cuarto módulo
    strokeWeight(0)
    fill(0)
    rect(x, y,lado)

    strokeWeight(3)
    stroke(255)
    fill(r,g,b)
    ellipse(x+lado/4, y+lado/4, centro/1.6)
  
    fill(r,g,b)
    arc(x+lado, y+lado, lado, lado,  PI, PI + HALF_PI)
    
    line(x+(ladoCanvas*3), y+(ladoCanvas), x+lado, y+(ladoCanvas))
    line(x+(ladoCanvas*3.5), y+(ladoCanvas*3.75), x+lado, y+(ladoCanvas*3.75))
    
    textSize(20)
    fill(255)
    noStroke()
    text("hello", x+centro, y+centro/1.7)
  
  } 
   
    y = y + lado
    
    if (y>=windowHeight) {
      y = 0
       x = x + lado
       } 
  
  if (x>=windowWidth) {
    clear()         // para que limpie el canvas y vuelva a empezar
    background (0)
    x = 0
    y = 0
  }

}

 // x = x + lado
  // if (x>=width) {
    //   y = y + lado
    //   x = 0
    // } 