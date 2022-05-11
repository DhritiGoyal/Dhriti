var shapesArraya;
var shapesArrayb;
var shapesArrayc;
var shapesArrayd;
var shapesArraye;
var shapesArrayf;
var pickedShapedLoadeda;
var pickedShapedLoadedb;
var pickedShapedLoadedc;
var pickedShapedLoadedd;
var pickedShapedLoadede;
var pickedShapedLoadedf;
// var Gradient;
// var pickedGradient;
var imgHeightMultiplier = 3;
var imgWidthMultiplier = 20;
var x = 0;
var y = 0;
var i =0;
var p = 10;
var colorFrom;
var colorTo;
let mode = 0;
var dataA;
var dataB;
var dataC;
var dataD;
var dataE;
var dataF;
let tileSize = 10;
//ref: https://www.youtube.com/watch?v=NByH4KaHejk
// let charon;
// let gridx = 250;
// let gridy = 250;
// let mover =[];
// ref: https://www.youtube.com/watch?v=GjbKsOkN1Oc

function preload() {
var branch = {namex: "branch", imagez:'assets/shapes/shape1.png'},
    woven = {namex: "woven", imagez:'assets/shapes/shape2.png'},
    bubbleWorld = {namex: "bubble World", imagez:'assets/shapes/shape3.png'},
    shapelessBruises = {namex: "shapeless Bruises", imagez:'assets/shapes/shape4.png'},
    frozenHeartbreaks = {namex: "frozen Heartbreaks", imagez:'assets/shapes/shape5.png'},
    stitches = {namex: "stitches", imagez:'assets/shapes/shape6.png'},
    sulpherCrystals = {namex: "sulpher Crystals", imagez:'assets/shapes/shape7.png'},
    cryingclouds = {namex:"crying clouds", imagez:'assets/shapes/shape8.png'},
    pouringfears = {namex:"pouring fears", imagez:'assets/shapes/shape9.png'},
    farawaylightening = {namex:"faraway lightening", imagez:'assets/shapes/shape10.png'},
    prolongedDrought = {namex: "prolonged Drought", imagez:'assets/shapes/shape11.png'},
    shiningPsychedelics = {namex: "shining Psychedelics", imagez:'assets/shapes/shape12.png'},
    aging = {namex: "aging", imagez:'assets/shapes/shape13.png'},
    meadow = {namex: "meadow", imagez:'assets/shapes/shape14.png'},
    runningTrack = {namex: "running Track", imagez:'assets/shapes/shape15.png'},

    stingingConfessions = {namex: "stinging Confessions", imagez:'assets/shapes/shape16.png'},
    autumn = {namex: "autumn", imagez:'assets/shapes/shape17.png'},
    griefDispairRage = {namex: "grief Dispair Rage", imagez:'assets/shapes/shape18.png'},
    subconscious = {namex: "subconscious", imagez:'assets/shapes/shape19.png'},
    flickeringHope = {namex: "flickering Hope", imagez:'assets/shapes/shape20.png'},
    caves = {namex: "caves", imagez:'assets/shapes/shape21.png'},
    earth = {namex: "earth", imagez:'assets/shapes/shape22.png'},
    rusted = {namex: "rusted", imagez:'assets/shapes/shape23.png'},
    prolongedIsolation = {namex: "prolonged Isolation", imagez:'assets/shapes/shape24.png'},
    frozenHeartbreaks = {namex: "frozen Heartbreaks", imagez:'assets/shapes/shape25.png'},
    heaven = {namex: "heaven", imagez:'assets/shapes/shape26.png'},
    skyies = {namex: "skyies", imagez:'assets/shapes/shape27.png'},
    meandered = {namex: "meandered ", imagez:'assets/shapes/shape28.png'},
    greed = {namex: "greed", imagez:'assets/shapes/shape29.png'},
    stagnent = {namex: "stagnent", imagez:'assets/shapes/shape30.png'}, 

    love = {namex: "love", imagez:'assets/shapes/shape31.png'},
    fadedmemories = {namex: "faded memories", imagez:'assets/shapes/shape32.png'},
    unwashed = {namex: "unwashed", imagez:'assets/shapes/shape33.png'},
    prayers = {namex: "prayers", imagez:'assets/shapes/shape34.png'},
    friendships = {namex: "friendships", imagez:'assets/shapes/shape35.png'},
    stitches = {namex: "stitches", imagez:'assets/shapes/shape36.png'},
    goTOTheLengths = {namex: "go TO The Lengths", imagez:'assets/shapes/shape37.png'},
    thinkingInCircles = {namex: "thinking In Circles", imagez:'assets/shapes/shape38.png'},
    multipleLevels = {namex: "multiple Levels", imagez:'assets/shapes/shape39.png'},
    fear = {namex: "fear", imagez:'assets/shapes/shape40.png'},
    spreading = {namex: "spreading", imagez:'assets/shapes/shape41.png'},
    sunshine = {namex: "sunshine", imagez:'assets/shapes/shape42.png'},
    religion = {namex: "religion", imagez:'assets/shapes/shape43.png'},
    soft = {namex: "soft", imagez:'assets/shapes/shape44.png'},
    wildflowers = {namex: "wildflowers", imagez:'assets/shapes/shape45.png'},

    lucid = {namex: "lucid", imagez:'assets/shapes/shape46.png'},
    crystals = {namex: "crystals", imagez:'assets/shapes/shape47.png'},
    cryingclouds = {namex: "crying clouds", imagez:'assets/shapes/shape48.png'},
    grassIsGreenerOnMySide = {namex: "grass Is Greener On My Side", imagez:'assets/shapes/shape49.png'},
    retrace = {namex: "retrace", imagez:'assets/shapes/shape50.png'},
    waves = {namex: "waves", imagez:'assets/shapes/shape51.png'},
    scorpian = {namex: "scorpian", imagez:'assets/shapes/shape52.png'},
    stories = {namex: "stories", imagez:'assets/shapes/shape53.png'},
    healing = {namex: "healing", imagez:'assets/shapes/shape54.png'},
    stiff = {namex: "stiff", imagez:'assets/shapes/shape55.png'},
    stitches = {namex: "stitches", imagez:'assets/shapes/shape56.png'},
    sulpherCrystals = {namex: "sulpher Crystals", imagez:'assets/shapes/shape57.png'},
    cages = {namex: "cages", imagez:'assets/shapes/shape58.png'},
    agressive = {namex: "agressive", imagez:'assets/shapes/shape59.png'},
    wind = {namex: "wind", imagez:'assets/shapes/shape60.png'}, 

    forbingShadows = {namex: "forbing Shadows", imagez:'assets/shapes/shape61.png'},
    colorlessRainbows = {namex: "colorless Rainbows", imagez:'assets/shapes/shape62.png'},
    garlands = {namex: "garlands", imagez:'assets/shapes/shape63.png'},
    roaring = {namex: "roaring", imagez:'assets/shapes/shape64.png'},
    perceptions = {namex: "perceptions", imagez:'assets/shapes/shape65.png'},
    expression = {namex: "expression", imagez:'assets/shapes/shape66.png'},
    constraints = {namex: "constraints", imagez:'assets/shapes/shape67.png'},
    mystery = {namex: "mystery", imagez:'assets/shapes/shape68.png'},
    dissapeared = {namex: "dissapeared", imagez:'assets/shapes/shape69.png'},
    distances = {namex: "distances", imagez:'assets/shapes/shape70.png'},
    intimacy = {namex: "intimacy", imagez:'assets/shapes/shape71.png'},
    change = {namex: "change", imagez:'assets/shapes/shape72.png'},
    intricacies = {namex: "intricacies", imagez:'assets/shapes/shape73.png'},
    violent = {namex: "violent", imagez:'assets/shapes/shape74.png'},
    strange = {namex: "strange", imagez:'assets/shapes/shape75.png'},

    stinking = {namex: "stinking", imagez:'assets/shapes/shape76.png'},
    golden = {namex: "golden", imagez:'assets/shapes/shape77.png'},
    rebuilt = {namex: "rebuilt", imagez:'assets/shapes/shape78.png'},
    sensations = {namex: "sensations", imagez:'assets/shapes/shape79.png'},
    collapse = {namex: "collapse", imagez:'assets/shapes/shape80.png'}, 
    web = {namex: "web", imagez:'assets/shapes/shape81.png'}, 
    overgrown = {namex: "overgrown", imagez:'assets/shapes/shape82.png'},
    euphonic = {namex: "euphonic", imagez:'assets/shapes/shape83.png'},
    trails = {namex: "trails", imagez:'assets/shapes/shape84.png'},
    ignited = {namex: "ignited", imagez:'assets/shapes/shape85.png'},
    knife = {namex: "knife", imagez:'assets/shapes/shape86.png'},
    burn = {namex: "burn", imagez:'assets/shapes/shape87.png'},
    softBreeze = {namex: "soft Breeze", imagez:'assets/shapes/shape88.png'},
    birds = {namex: "birds", imagez:'assets/shapes/shape89.png'},
    oldPatterns = {namex: "old Patterns", imagez:'assets/shapes/shape90.png'},
    leaves = {namex: "leaves", imagez:'assets/shapes/shape91.png'},
    disturbances = {namex: "disturbances", imagez:'assets/shapes/shape92.png'},
    dwelling = {namex: "dwelling", imagez:'assets/shapes/shape93.png'},
    disorienting = {namex: "disorienting", imagez:'assets/shapes/shape94.png'},
    lilacSkies = {namex: "lilac Skies", imagez:'assets/shapes/shape95.png'},
    bubbly = {namex: "bubbly", imagez:'assets/shapes/shape96.png'},
    secrets = {namex: "secrets", imagez:'assets/shapes/shape97.png'},
    less = {namex: "less", imagez:'assets/shapes/shape98.png'},
    transformations = {namex: "transformations", imagez:'assets/shapes/shape99.png'},
    wanderlust = {namex: "wanderlust", imagez:'assets/shapes/shape100.png'}


  shapesArraya = [branch.imagez,woven.imagez,bubbleWorld.imagez,shapelessBruises.imagez,frozenHeartbreaks.imagez,stitches.imagez,sulpherCrystals.imagez, 
    cryingclouds.imagez,pouringfears.imagez,farawaylightening.imagez, prolongedDrought.imagez,shiningPsychedelics.imagez, aging.imagez,meadow.imagez,
    runningTrack];

  shapesArrayb = [stingingConfessions.imagez,autumn.imagez, griefDispairRage.imagez,subconscious.imagez,flickeringHope.imagez, 
    caves.imagez,earth.imagez,rusted.imagez,prolongedIsolation.imagez, frozenHeartbreaks.imagez, heaven.imagez,skyies.imagez,meandered.imagez,greed.imagez,stagnent.imagez];
  
  shapesArrayc = [love.imagez,fadedmemories.imagez,unwashed.imagez,prayers.imagez,friendships.imagez,
    stitches.imagez,goTOTheLengths.imagez,thinkingInCircles.imagez,multipleLevels.imagez,fear.imagez, 
    spreading,sunshine.imagez,religion.imagez,soft.imagez,wildflowers.imagez];

  shapesArrayd = [lucid.imagez,crystals.imagez,cryingclouds.imagez, grassIsGreenerOnMySide.imagez,retrace.imagez,
    waves.imagez,scorpian.imagez,stories.imagez,healing.imagez,stiff.imagez,stitches.imagez,
    sulpherCrystals.imagez,cages.imagez,agressive.imagez,wind.imagez];

  shapesArraye = [forbingShadows.imagez,colorlessRainbows.imagez,garlands.imagez,roaring.imagez,perceptions.imagez,expression.imagez,constraints.imagez,mystery.imagez,
    dissapeared.imagez,distances.imagez,intimacy.imagez,change.imagez ,intricacies.imagez, 
    violent.imagez,strange.imagez];

  shapesArrayf = [stinking.imagez,golden.imagez,rebuilt.imagez,sensations.imagez,collapse.imagez,web.imagez,overgrown.imagez,euphonic.imagez, 
    trails.imagez,ignited.imagez,knife.imagez,burn.imagez,softBreeze.imagez,birds.imagez,oldPatterns.imagez, leaves.imagez ,disturbances.imagez,dwelling.imagez, 
    disorienting.imagez,lilacSkies.imagez,bubbly.imagez,secrets.imagez, less.imagez,
    transformations.imagez,wanderlust.imagez];

  // Gradient = ['assets/gradients/grad1.png', 'assets/gradients/grad2.png', 'assets/gradients/grad3.png', 'assets/gradients/grad3.png', 
  // 'assets/gradients/grad4.png', 'assets/gradients/grad5.png', 'assets/gradients/grad6.png', 'assets/gradients/grad7.png', 
  // 'assets/gradients/grad8.png', 'assets/gradients/grad9.png', 'assets/gradients/grad10.png']

  //picking a random shape image 
  var randomlyPickedShapea = floor(random(shapesArraya.length));
  var randomlyPickedShapeb = floor(random(shapesArrayb.length));
  var randomlyPickedShapec = floor(random(shapesArrayc.length));
  var randomlyPickedShaped = floor(random(shapesArrayd.length));
  var randomlyPickedShapee = floor(random(shapesArraye.length));
  var randomlyPickedShapef = floor(random(shapesArrayf.length));
  // var gradientRandom = floor(random(Gradient.length));

  //load the picked image
  pickedShapeLoadeda = loadImage(shapesArraya[randomlyPickedShapea]);
  pickedShapeLoadedb = loadImage(shapesArrayb[randomlyPickedShapeb]);
  pickedShapeLoadedc = loadImage(shapesArrayc[randomlyPickedShapec]);
  pickedShapeLoadedd = loadImage(shapesArrayd[randomlyPickedShaped]);
  pickedShapeLoadede = loadImage(shapesArraye[randomlyPickedShapee]);
  pickedShapeLoadedf = loadImage(shapesArrayf[randomlyPickedShapef]);
  // pickedGradient = loadImage(Gradient[gradientRandom]);


  dataA = shapesArraya[randomlyPickedShapea].namex;
  dataB = shapesArrayb[randomlyPickedShapeb].namex;
  var dataC = shapesArrayc[randomlyPickedShapec].namex;
  var dataD = shapesArrayd[randomlyPickedShaped].namex;
  var dataE = shapesArraye[randomlyPickedShapee].namex;
  var dataF = shapesArrayf[randomlyPickedShapef].namex;
};

function setup() {
  createCanvas(600, 600);
  // textureWrap(MIRROR,REPEAT);
  rectMode(CENTER);
  frameRate(40)
  // mover = new Mover(50,50,5);
  // attractor = new Attractor(200,200,5);
}

function draw() {
  noLoop();
  background(250);
  //sketch1
  translate(40)
  for(var i = 1; i < 100; i+=10){
    // image(pickedShapeLoadedb, 40,i, i, i * imgHeightMultiplier);
    image(pickedShapeLoadedc,130, i, 800, i * imgHeightMultiplier);
  }
  //sketch2
 for(var x = 10; x < 300; x+= 5){
    rotate(PI / 1.0)
    for(var y = 10; y < 300; y+= 4){
      image(pickedShapeLoadeda,x,y, 50, 150);
      image(pickedShapeLoadedb, x,y, 150, 150);
      image(pickedShapeLoadedc, x,y, 200, 150);
      image(pickedShapeLoadedd, x,y, 250, 150);
    }
    let div = createDiv('').size(100,100);
    div.html(dataA + " " + dataB)
    // console.log(dataB)
//sketch3
    for (var i = 0; i < 180; i += 26) {
      image(pickedShapeLoadedc, i , p , 400, 200);
      image(pickedShapeLoadedd, i, p*2, 400, 350);
    }
    for (var i = 0; i < 80; i += 5) {
    image(pickedShapeLoadedc, i, p*4 , 300, 500);
    image(pickedShapeLoadedd, i, p*6, 200, 650);
    }
  //sketch4
  shearX(PI / 4.0);
  for (var x = 0; x < 600; x++){
    image(pickedShapeLoadeda, 450, x*30,x, x);
   }
  for (var x = 0; x < 140; x+=10){
   image(pickedShapeLoadedf, x, x*40, 130, 130);
  }
  for(var x = 0; x<200; x++){
    image(pickedShapeLoadedc, 30, x*40, 200, 300);
  }
  }


// switch (mode){
//   case 0:
//     background(255);
//     break;
//   case 1:
//     scene1();
//     break;
//   case 2:
//     scene2();
//     break;
//   case 3:
//     scene3();
//     break;
//   case 4:
//     scene4();
//     break;
//   case 5:
//     scene5();
//     break;
//   case 6:
//     scene6();
//     break;
//   case 7:
//     scene7();
//     break;
//   case 8:
//     scene8();
//     break;
//   case 9:
//     scene9();
//     break;
//     default:
// }
}

// function keyPressed(){
//   mode++;
// }

// function scene1(){
// background(250);
 for(var x = 10; x < 600; x+= 50){
    rotate(PI / 1.0)
    for(var y = 10; y < 600; y+= 40){
      image(pickedShapeLoadeda,x,y, 50, 150);
      image(pickedShapeLoadedb, x,y, 150, 150);
      image(pickedShapeLoadedc, x,y, 200, 150);
      image(pickedShapeLoadedd, x,y, 250, 150);
    }
    let div = createDiv('').size(100,100);
    div.html(dataA + " " + dataB)
    console.log(dataB)
//second sketch on top

    for (var i = 0; i < 80; i += 5) {
    image(pickedShapeLoadedc, i, p*4 , 300, 500);
    image(pickedShapeLoadedd, i, p*6, 200, 650);
    }
  }
};                

// function scene2(){
// background(0);
// ref: https://editor.p5js.org/tundiszasz/sketches/BWeloAMz5
  // for (var i = 0; i < 180; i += 26) {
  //   image(pickedShapeLoadedc, i , p , 400, 200);
  //   image(pickedShapeLoadedd, i, p*2, 400, 350);
  // }
  // for (var i = 0; i < 80; i += 5) {
  // image(pickedShapeLoadedc, i, p*4 , 300, 500);
  // image(pickedShapeLoadedd, i, p*6, 200, 650);
  // }
// };

// function scene3(){
//   background(0);
//   // noLoop();===========(not working cos of the loop)
//   rect(300,300,40,40)
//       for(var i = 0; i <600; i++){
//         image(pickedShapeLoadedb, i,i, i, i * imgHeightMultiplier);
//         image(pickedShapeLoadedc,i, i, i, i *2* imgHeightMultiplier);
//       }
      // for(var i = 0; i < random(800); i++){
      //   texture(pickedShapeLoadedd, random(600), random(600), i * imgWidthMultiplier, i * imgHeightMultiplier);
      // }
  
      // for(var i = 100; i < random(500); i++){
      //   translate(width / 4, height / 4);
      // image(pickedShapeLoadedc, random(i, 500) ,random(height), 200+sin(frameCount*0.1)*100, 200+cos(frameCount*0.1)*100);
      // }
   //  if(random(600) >= 100){
// }
// function scene4(){
//   background(0);
//     shearX(PI / 4.0);
//   for (var x = 0; x < 600; x++){
//     image(pickedShapeLoadeda, 450, x*30,x, x);
//    }
//   for (var x = 0; x < 140; x+=10){
//    image(pickedShapeLoadedf, x, x*40, 130, 130);
//   }
//   for(var x = 0; x<200; x++){
//     image(pickedShapeLoadedc, 30, x*40, 200, 300);
//   }
// }
function scene5(){
  background(255, 0, 0);
  for (var i = 0; i < 380; i += 2) {
  image(pickedShapeLoadede,p ,i, 550, 200);
  image(pickedShapeLoadedd,p*2,i,  600, 350);
  image(pickedShapeLoadedf,p*4, i, 500, 500);
  image(pickedShapeLoadedb,p*6,i,  400, 650);
  }}
function scene6(){ 
  background(255, 0, 70);
  rect(40, 100, 100, 100);
  // variableImage(mouseX, mouseY, pmouseX, pmouseY);
}
function scene7(){
  background(0);
  for (var i = 0; i < 380; i += 5) {
  image(pickedShapeLoadeda, i*3 , p , 600, i);
  image(pickedShapeLoadedd, i, p*5, p, p);
  image(pickedShapeLoadedc, i, p*10 , p, 500);
  image(pickedShapeLoadedb, i*5, p*15, 500, p);
}}
function scene8(){
  background(0);
//  for(let i = 0; i < 2; i++){
//    let x = random(width);
//    let y = random(height);
//    let m = random(25, 100);
//    movers[i] = new Mover(x, y, m);

//diffff
// mover.update();
// mover.show();
// mover.attract(attractor);
// attractor (mover, attractor);
// attractor.show();
 }

function scene9(){
  background(255, 0, 100);
  rect(40, 100, 100, 100);
  // imageMode(CENTER);
  // image(pickedShapeLoadedf, width/2, height/2, width, height)

//   let radius = 10;
//   let angle = 0;

//   while (radius < width/2-50){
//     let portionX = int(random(0, pickedShapeLoadedf.width-tilesize));
//     let portionY = int(random(0, pickedShapeLoadedf.height-tilesize));
//     let portion = pickedShapeLoadedf.get(portionX, portionY, tileSize, tileSize);

//     if (random(100)<30){
//       portion.filter(INVERT);
//     }
//     push();
//     translate(width/2, height/2);
//     rotate(angle);
//     translate(radius, 0);
//     rotate(random(0,TWO_PI));
//     image(portion, 0, 0);
//     pop();

//     angle += radians(6);
//     radius += 0.05;
//   }
// }
// function variableImage(x, y, px, py){
//   let speed = abs(x - px) + abs(y - py);
//   stroke(speed);
//   image(pickedShapeLoadedf, x, y, speed, speed);
}

// let dX = mouseX;
// let dY = mouseY;

// let u = lerp(1.0, 8.0, dX);
// let v = lerp(1.0, 9.0, dY);

// scale(width / 2);

// texture(pickedShapeLoadeda)
// beginShape(TRIANGLES);
// vertex(-1, -1, 0, 20, 90);
// vertex(1, -1, 0, u, 0);
// vertex(1, 1, 0, u, v);

// vertex(1, 10, 0, u, v);
// vertex(-10, 1, 0, 0, v);
// vertex(-1, -1, 0, 0, 0);
// endShape();
// }