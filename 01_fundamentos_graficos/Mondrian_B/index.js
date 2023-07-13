

let y = 0
let k = 75
let w = 90
let z = 600
let q = 120


function setup() {

  createCanvas(600, 600)
  background(240)
  stroke(80)

  fill(80)
  rect(0, 0, 120, 225)  // Rectángulos negros
  
  fill(80)
  rect(580, 345, 40, 120) 
  
  fill(80)
  rect(0, 345, 225, 120) 
  
  fill(80)
  rect(90, 470, 25, 130) 
  
  fill(80)
  rect(400, 230, 40, 100) 
  
  fill(80)
  rect(190, 0, 40, 110) 
  
  
  fill(203, 249, 133)
  rect(90, 230, 25, 110) // Rectángulos azules
  
  fill(203, 249, 133)
  rect(500, 110, 200, 110) 
  
  fill(203, 249, 133)
  rect(400, 460, 40, 90) 
  
  fill(210, 155, 253)
  strokeWeight(0.1)
  triangle(0, 600, 86, 600, 86, 472) // Triángulos rojos
  
  
  
  
  fill(240, 210, 130) // circulos amarillos
  
  
}

function draw() {

  

  strokeWeight(16)
  line(y, 1.5 * k, z, 1.5 * k) // Comienzo lineas horizontales

  strokeWeight(16)
  line(y, 3 * k, z, 3 * k)

  strokeWeight(16)
  line(y, 4.5 * k, z, 4.5 * k)

  strokeWeight(16)
  line(y, 6.2 * k, z, 6.2 * k) 
  
  strokeWeight(16)
  line(400, 550, 495, 550) // Fin lineas horizontales


  strokeWeight(8)
  line(w, y, w, z) // Cominezo líneas verticales

  w = w * 2.1
  strokeWeight(12)
  line(w, y, w, z)
  
  strokeWeight(12)
  line(q, y, q, z)
  
  q = q * 1.92
  strokeWeight(12)
  line(q, y, q, z)
  
  strokeWeight(12)
  line(500, y, 500, z) 
  
  strokeWeight(12)
  line(580, 345, 580, 455) // Fin líneas verticales

  fill(240)
  rect(230, 0, 270, 110) // Rectángulos blancos
  
  fill(240)
  rect(230, 115, 212, 110)
  
  fill(240)
  rect(120, 227, 110, 110)

  fill(240)
  rect(400, 340, 190, 120)


  fill(210, 155, 253)
  strokeWeight(0)
  triangle(125, 232, 225, 232, 225, 332) // Triángulos rojos
  triangle(505, 0, 600, 0, 505, 105)

  fill(255, 164, 32)
  arc(185, 169, 96, 96, HALF_PI, PI + HALF_PI) // Arc amarillos
  arc(494, 281, 96, 96, HALF_PI, PI + HALF_PI)
  arc(236, 401, 110, 110, PI + HALF_PI, HALF_PI, [radians(degrees)])
  strokeWeight(0)

}

  


  
  
  