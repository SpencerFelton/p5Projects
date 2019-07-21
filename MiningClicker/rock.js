class Rock{
  constructor(x,y,width,height){
    this.xcoord = x;
    this.ycoord = y;
    this.width = width;
    this.height = height;
    this.hp = 100;
    this.maxHP = 100;
    this.state = ["Images/rock100.png", "Images/rock75.png", "Images/rock50.png", "Images/rock25.png"];
  }


  getState(){
    var hpPercent = this.getHpPercent()
    if (hpPercent >= 0 && hpPercent < 25) {
      var state = 3
    }
    if (hpPercent >= 25 && hpPercent < 50) {
      var state = 2
    }
    if (hpPercent >= 50 && hpPercent < 75) {
      var state = 1
    }
    if (hpPercent >= 75 || hpPercent < 0) {
      var state = 0
      if (hpPercent < 0){
        this.hp = 100;
      }
    }
    return state;
  }

  getHpPercent(){
    return this.hp / this.maxHP * 100;
  }

  mouseInBounds(mouseX, mouseY){
    if (mouseX >= this.xcoord && mouseX <= this.xcoord + width) {
      if (mouseY >= this.ycoord && mouseY <= this.ycoord + height){
        return true;
      }
    }
    return false;
  }
}
