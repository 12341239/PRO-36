var dog,sadDog,happyDog;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("Feed the dog");
  feed.position(700,95)
  feed.mousePressed(feedDog);

  addFood = createButton("Add food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);






}

function draw() {
  background(46,139,87);
  drawSprites();

}


    
function feedDog(){
  dog.addImage(happyDog);


  if(foodObj.getFoodStock() <= 0) {
    foodObj.updateFoodStock(foodObj.getFoodStock()*0){

}

}

function feedDog(){
  dog.addImage(happyDog);


  if(foodObj.getFoodStock() <= 0) {
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);

 }


  }
}
}

function addFoods(){
  foodS++;
  database.refo('/').update({
    food:foodS
  })
}







