
let angulo = 0
let vel = 100
let escala = 50
let diam = 2

let x = 0
let y = 0
let r = 0

let tiempoP
let tiempoI
let i = 10

let titulo = 'INTERSTELLAR'

function setup() {
  createCanvas(1000, 1000)
  stroke(255)
  strokeWeight(2)
  noFill()
  
}

function draw() {
  
  background(0,10)

  tiempoP = millis() % 18000
  console.log(tiempoP)

  if (tiempoP < 6000) {

    tiempoI = millis() % 2000;

    if (tiempoI < 1000) {
      // Trama 1
      for (let i = 0; i < 10; i = i + 5) {
       x = width/4
        y = height/4
      
        ellipse(x,y,r + i*50)
        r++ 
        textSize(30)
        text(titulo, width/2, height/2)
      }
        
    } else if (tiempoI < 2000) {
        
       for (let i = 0; i < 10; i++) {
         x = width/2
         y = height/2
         ellipse(x,y,r + i)
         r++
       }

     } else if (tiempoI < 3000) {
        
       for (let i = 0; i < 10; i++) {
         x = width
         y = height
         ellipse(x,y,r + i*250)
         r++
       } 
     } 

   } else if (tiempoP < 12000) {
    
      tiempoI = millis() % 2000
      
      if (tiempoI < 1000) {
        // Trama 2
        x = width/4
        y = height/4
        
        push()
        translate(width/2, height/2)
        for (let index = 0; index < 30; index++) { 
           rotate(angulo)
           ellipse(x, y+index, diam/6)
           angulo += 0.1;
           x++
           diam = index*1}
           pop()
 
        } 
      
        
   }  else if (tiempoP < 18000) {

       tiempoI = millis() % 1000
        // Trama 3
     
       if (tiempoI < 2500) {
       for (let index = 0; index < 10; index++) {
        push()
        translate(50, 50)
        let radioCircles = escala*8 * index / 5
    
        x = width/10 + sin(angulo) * radioCircles;
        y = height/10 + cos(angulo) * radioCircles;
    
        ellipse(x+width/2, y+height/2, diam * index/20);
        angulo += vel;
    
       for (let index = 5; index < 10; index = index + 5) {
          let radioCircles = escala*10 * index 

          x = width/10 + sin(angulo) * radioCircles;
          y = height/10 + cos(angulo) * radioCircles;
      
          ellipse(x+width/2, y+height/2, diam * index/10);
          angulo += vel*0.2;
        pop()
           } 
       }   
       } else if (tiempoI < 3500){
        

         for (let index = 5; index < 20; index = index + 5) {
           let radioCircles = escala*10 * index 
 
           x = width/10 + sin(angulo) * radioCircles;
           y = height/10 - cos(angulo) * radioCircles/2;
       
           ellipse(x+width/6, y+height/6, diam * index/20);
           angulo += vel*2;
        
           } 
          }
  } 
}
