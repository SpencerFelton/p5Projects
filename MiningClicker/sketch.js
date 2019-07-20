function setup(){
  width = 1000
  height = 500
  createCanvas(width, height);
  img = loadImage('Images/rock.png');
  img2 = loadImage('Images/tree.png');
}

function draw(){
  image(img, width/2, height/2, 100,100);
  image(img2, width/4, height/4, 50,50)
}
