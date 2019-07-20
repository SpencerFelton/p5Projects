function setup(){
  width = 1000
  height = 500
  createCanvas(width, height);
  img = loadImage('Images/rock.png');
  img2 = loadImage('Images/tree.png');
  x = 0
}

function draw(){
  background(255, 255, 255)
  textSize(30)
  text(x, 30, 30)
  x+=1
  image(img, width/2, height/2, 100,100);
  image(img2, width/4, height/4, 50,50)
}
