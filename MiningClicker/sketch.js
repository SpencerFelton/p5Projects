function setup(){
  width = 1200
  height = 700
  createCanvas(width, height);
  //img = loadImage('Images/rock100.png');
  img5 = loadImage('Images/tree.png');
  x = 0
  rock = new Rock(width/2, height/2, 100, 100)
  player = new Player();
  rock100 = loadImage(rock.state[0])
  rock75 = loadImage(rock.state[1])
  rock50 = loadImage(rock.state[2])
  rock25 = loadImage(rock.state[3])
  rockImg = [rock100, rock75, rock50, rock25]

  stoneYield1UpgradeButton = createButton('Stone Yield Cost: 10');
  stoneYield1UpgradeButton.mousePressed(stoneYieldUpgrade1);
  upgrades = [
    {name: "stonePick", cost: 5, resource: "stone", bought: false, button: createUpgradeButtons("stonePick")},
    {name: "stoneYield1", cost: 10, resource: "stone", bought: false, button: createUpgradeButtons("stoneYield1")}
  ]
}

function draw(){
  background(255, 255, 255)
  textSize(30)
  text(x, 30, 30)
  x+=1
  text("Stone: " + player.stone, 60, 60)
  rockState = rock.getState()
  image(rockImg[rockState] , width/2, height/2, 100,100);
  image(img5, width/4, height/4, 50,50)
  a = UnlockedUpgrades()
  displayUpgrades(a)
}

function mouseClicked(){
  if (rock.mouseInBounds(mouseX, mouseY)) {
    rock.hp -= player.rockDmg;
  }
}

function UnlockedUpgrades(){
  var unlockedUpgrades = upgrades.filter(function(upgrade) {
    return (player.stone > Math.floor(upgrade.cost/2)) && upgrade.bought == false
  })
  return unlockedUpgrades
}

function displayUpgrades(a){
  for(var i = 0; i < a.length; i++){
    a[i]["button"][0].position(900, 100 + (50 * (1+i)))
  }
}
function createUpgradeButtons(upgrade){
  if(upgrade == "stonePick"){
    return [stonePickUpgradeButton = createButton('Stone Pick Cost: 5'), stonePickUpgradeButton.mousePressed(stonePickUpgrade)]
  }
  if(upgrade == "stoneYield1"){
    return [stoneYield1UpgradeButton = createButton('Stone Yield Upgrade Cost: 10'), stoneYield1UpgradeButton.mousePressed(stoneYieldUpgrade1)]
  }
}
function stonePickUpgrade(){
  if(player.stone >= upgrades[0]["cost"]){
    player.rockDmg *= 2;
    upgrades[0]["bought"] = true;
  }
}

function stoneYieldUpgrade1(){
  if(player.stone >= upgrades[1]["cost"]){
    rock.baseYield *= 2;
    upgrades[1]["bought"] = true;
  }
}
