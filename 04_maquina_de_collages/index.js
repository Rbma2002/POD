
let frames = [
  "Imagen1.png",
  "Imagen2.png",
  "Imagen3.png",
  "Imagen4.png",
  "Imagen5.png",
]

let imgLoaded = []
let i = 0
let prop

function preload() {
  let path
  for (let index = 0; index < frames.length; index++) {
    /* cargar las fotos */
    path = 'Imagenes/' + frames [index]
    imgLoaded [index] = loadImage(path)
    console.log(path)
    console.log(imgLoaded[index])
    
  }
}

function setup() {
  createCanvas(500, 500)
  background(255,220,190)
  frameRate(5)
  textFont('Montserrat')
  textStyle(BOLD)
  textSize(25)

  prop = imgLoaded[0].height / imgLoaded[0]. width 
}

function draw() {
  
  push()
  scale(random(0.5,1.2))
  image(imgLoaded[i], random(20,400), random(0,300), width/2, width/2 * prop ) 
  pop()
  
  i = i + 1
  
  if (i >= imgLoaded.length) {
    noLoop()
  }
  console.log(i)

  fill(255)
  text("MARIANNE BRANDT", 80, 360)

}