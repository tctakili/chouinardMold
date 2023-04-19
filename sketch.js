let walker = [];
//3 seconds
let lifespan = 180;
//max no. walkers can move
let maxWalkers = 5

let palette = ['#FEC5E5',//blushpink
              '#F699CD',//pink
              '#FFE5F1',//lavender blush
              '#FFD7FC',// misty rose
              '#FFCFDB',//brink pink
              '#FFFFFF']; //white


function setup() {
  createCanvas(400, 400);
  noStroke();
  
  background('#CBF1FF'); //skyblue
}
// mold spreads when mouse is clicked
function draw() {
  if (mouseIsPressed){
    
    let randomColor = palette[int(random(palette.length))];
    
    let r = {
      x: mouseX,
      y: mouseY,
      age: 0,
      color : randomColor
    }
    
    walker.push(r);
  }
   for (let i = 0; i < walker.length; i++) {
     
    //spread fx
    walker[i].x += random(-maxWalkers, maxWalkers);
    walker[i].y += random(-maxWalkers, maxWalkers);
     
     //listed colors
     fill(walker[i].color);
     //size of mold
     let area = map(walker[i].age, 0, lifespan, 12, 0);
     //shape of mold
     rect(walker[i].x, walker[i].y, area, area);
     
     walker[i].age++;
     // remove old mold from array
      if (walker[i].age > lifespan) {
      
      walker.splice(i, 1);
    }
  }
     
}

 function mouseClicked(){
   print("i am the pink mold in chouinard bathrooms");
 }

//reset whole thing
function keyPressed (){
    if (keyCode === BACKSPACE) {
      setup();
      print("!mold terminated yay!");
    }
}