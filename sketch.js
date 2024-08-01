function setup() {
    createCanvas(700, 700);
    background ("rgb(0,0,0)");
  }
  
  function draw() {
    
    stroke("green")
    fill("red");
    
    //console.log (mouseIsPressed);
    if(mouseIsPressed) {
    rect (mouseX,mouseY,30,45);   
    }
    
  }