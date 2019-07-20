function setup(){
  width = 1000
  height = 500
  createCanvas(width, height);
  img = loadImage('Images/rock.png');
}

function draw(){
  image(img, width/2, height/2, 100,100);
}
