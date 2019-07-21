function setup(){
  width = 1000
  height = 500
  createCanvas(width, height);
  //img = loadImage('Images/rock100.png');
  img5 = loadImage('Images/tree.png');
  x = 0
  rock = new Rock(width/2, height/2, 100, 100)
  rock100 = loadImage(rock.state[0])
  rock75 = loadImage(rock.state[1])
  rock50 = loadImage(rock.state[2])
  rock25 = loadImage(rock.state[3])
  rockImg = [rock100, rock75, rock50, rock25]
}

function draw(){
  background(255, 255, 255)
  textSize(30)
  text(x, 30, 30)
  x+=1
  rockState = rock.getState()
  image(rockImg[rockState] , width/2, height/2, 100,100);
  image(img5, width/4, height/4, 50,50)
}

function mouseClicked(){
  if (rock.mouseInBounds(mouseX, mouseY)) {
    rock.hp -= 20;
  }
}
