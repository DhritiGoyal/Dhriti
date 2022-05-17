var shapesArraya;
var shapesArrayb;
var shapesArrayc;
var shapesArrayd;
var pickedShapedLoadeda;
var pickedShapedLoadedb;
var pickedShapedLoadedc;
var pickedShapedLoadedd;
var imgHeightMultiplier = 1;
var imgWidthMultiplier = 2;
var x = 0;
var y = 0;
var i = 0;
var p = 10;
var dataA;
var dataB;
var dataC;
var dataD;
var sketch1
var sketch2
var sketch3
var sketch4
var offset = 50;
var size = offset;
var hover = false;
var button;
var Textdiv 
var n = 1000;
var m = 300;
var myCanvas;

function preload() {
var branch = {namex: "branch", imagez:'../assets/shapes/shape1.png'},
    woven = {namex: "woven", imagez:'assets/shapes/shape2.png'},
    bubbleWorld = {namex: "bubble world", imagez:'assets/shapes/shape3.png'},
    shapelessBruises = {namex: "shapeless bruises", imagez:'assets/shapes/shape4.png'},
    frozenHeartbreaks = {namex: "frozen heartbreaks", imagez:'assets/shapes/shape5.png'},
    stitches = {namex: "stitches", imagez:'assets/shapes/shape6.png'},
    sulpherCrystals = {namex: "sulpher crystals", imagez:'assets/shapes/shape7.png'},
    cryingclouds = {namex:"crying clouds", imagez:'assets/shapes/shape8.png'},
    pouringfears = {namex:"pouring fears", imagez:'assets/shapes/shape9.png'},
    farawaylightening = {namex:"faraway lightening", imagez:'assets/shapes/shape10.png'},
    prolongedDrought = {namex: "prolonged drought", imagez:'assets/shapes/shape11.png'},
    shiningPsychedelics = {namex: "shining psychedelics", imagez:'assets/shapes/shape12.png'},
    aging = {namex: "aging", imagez:'assets/shapes/shape13.png'},
    meadow = {namex: "meadow", imagez:'assets/shapes/shape14.png'},
    runningTrack = {namex: "running track", imagez:'assets/shapes/shape15.png'},

    stingingConfessions = {namex: "stinging confessions", imagez:'assets/shapes/shape16.png'},
    autumn = {namex: "autumn", imagez:'assets/shapes/shape17.png'},
    griefDispairRage = {namex: "grief dispair rage", imagez:'assets/shapes/shape18.png'},
    subconscious = {namex: "subconscious", imagez:'assets/shapes/shape19.png'},
    flickeringHope = {namex: "flickering hope", imagez:'assets/shapes/shape20.png'},
    caves = {namex: "caves", imagez:'assets/shapes/shape21.png'},
    earth = {namex: "earth", imagez:'assets/shapes/shape22.png'},
    rusted = {namex: "rusted", imagez:'assets/shapes/shape23.png'},
    prolongedIsolation = {namex: "prolonged isolation", imagez:'assets/shapes/shape24.png'},
    frozenHeartbreaks = {namex: "frozen heartbreaks", imagez:'assets/shapes/shape25.png'},
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
    goTOTheLengths = {namex: "go to the lengths", imagez:'assets/shapes/shape37.png'},
    thinkingInCircles = {namex: "thinking in circles", imagez:'assets/shapes/shape38.png'},
    multipleLevels = {namex: "multiple levels", imagez:'assets/shapes/shape39.png'},
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
    sulpherCrystals = {namex: "sulpher crystals", imagez:'assets/shapes/shape57.png'},
    cages = {namex: "cages", imagez:'assets/shapes/shape58.png'},
    agressive = {namex: "agressive", imagez:'assets/shapes/shape59.png'},
    wind = {namex: "wind", imagez:'assets/shapes/shape60.png'}, 

    forbingShadows = {namex: "forbing shadows", imagez:'assets/shapes/shape61.png'},
    colorlessRainbows = {namex: "colorless rainbows", imagez:'assets/shapes/shape62.png'},
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
    softBreeze = {namex: "soft breeze", imagez:'assets/shapes/shape88.png'},
    birds = {namex: "birds", imagez:'assets/shapes/shape89.png'},
    oldPatterns = {namex: "old patterns", imagez:'assets/shapes/shape90.png'},
    leaves = {namex: "leaves", imagez:'assets/shapes/shape91.png'},
    disturbances = {namex: "disturbances", imagez:'assets/shapes/shape92.png'},
    dwelling = {namex: "dwelling", imagez:'assets/shapes/shape93.png'},
    disorienting = {namex: "disorienting", imagez:'assets/shapes/shape94.png'},
    lilacSkies = {namex: "lilac skies", imagez:'assets/shapes/shape95.png'},
    bubbly = {namex: "bubbly", imagez:'assets/shapes/shape96.png'},
    secrets = {namex: "secrets", imagez:'assets/shapes/shape97.png'},
    less = {namex: "less", imagez:'assets/shapes/shape98.png'},
    transformations = {namex: "transformations", imagez:'assets/shapes/shape99.png'},
    wanderlust = {namex: "wanderlust", imagez:'assets/shapes/shape100.png'}

  shapesArraya = [branch,woven,bubbleWorld,shapelessBruises,frozenHeartbreaks,stitches,sulpherCrystals, 
    cryingclouds,pouringfears,farawaylightening, prolongedDrought,shiningPsychedelics, aging,meadow,
    runningTrack];
  
  shapesArrayb = [stingingConfessions,autumn, griefDispairRage,subconscious,flickeringHope, 
    caves,earth,rusted,prolongedIsolation, frozenHeartbreaks, heaven,skyies,meandered,greed,stagnent, stinking,golden,rebuilt,sensations,collapse,web,overgrown,euphonic, 
    trails,ignited,knife,burn,softBreeze,birds,oldPatterns, leaves ,disturbances,dwelling, 
    disorienting];
  
  shapesArrayc = [love,fadedmemories,unwashed,prayers,friendships,
    stitches,goTOTheLengths,thinkingInCircles,multipleLevels,fear, 
    spreading,sunshine,religion,soft,wildflowers,forbingShadows,colorlessRainbows,garlands,roaring,perceptions,expression,constraints,mystery,
    dissapeared,distances,intimacy,change ,intricacies, 
    violent,strange];

  shapesArrayd = [lucid,crystals,cryingclouds, grassIsGreenerOnMySide,retrace,
    waves,scorpian,stories,healing,stiff,stitches,
    sulpherCrystals,cages,agressive,wind,lilacSkies,bubbly,secrets, less,
    transformations,wanderlust];

  //picking a random shape image 
  var randomlyPickedShapea = floor(random(shapesArraya.length));
  var randomlyPickedShapeb = floor(random(shapesArrayb.length));
  var randomlyPickedShapec = floor(random(shapesArrayc.length));
  var randomlyPickedShaped = floor(random(shapesArrayd.length));

  //load the picked image
  pickedShapeLoadeda = loadImage(shapesArraya[randomlyPickedShapea].imagez);
  pickedShapeLoadedb = loadImage(shapesArrayb[randomlyPickedShapeb].imagez);
  pickedShapeLoadedc = loadImage(shapesArrayc[randomlyPickedShapec].imagez);
  pickedShapeLoadedd = loadImage(shapesArrayd[randomlyPickedShaped].imagez);
 
  dataA = shapesArraya[randomlyPickedShapea].namex;
  dataB = shapesArrayb[randomlyPickedShapeb].namex;
  dataC = shapesArrayc[randomlyPickedShapec].namex;
  dataD = shapesArrayd[randomlyPickedShaped].namex;
};

function setup() {
  myCanvas = createCanvas(600, 600);
  myCanvas.parent("sketchGenerated");
  myCanvas.position(350,80)
  rectMode(CENTER);
  button = createButton("generate sketch 1");
  button.mousePressed(makeSketch1);
  button.class("generateButton");
  button.position(20,100);
  button = createButton("generate sketch 2");
  button.mousePressed(makeSketch2);
   button.class("generateButton");
  button.position(20,130);
  button = createButton("generate sketch 3");
  button.mousePressed(makeSketch3);
   button.class("generateButton");
  button.position(20,160);
  button = createButton("generate sketch 4");
  button.mousePressed(makeSketch4);
   button.class("generateButton");
  button.position(20,190);
  button = createButton("generate sketch 5");
  button.mousePressed(makeSketch5);
   button.class("generateButton");
  button.position(20,220);
  button = createButton("generate sketch 6");
  button.mousePressed(makeSketch6);
   button.class("generateButton");
  button.position(20,250);
  button = createButton("generate sketch 7");
  button.mousePressed(makeSketch7);
   button.class("generateButton");
  button.position(20,280);
  button = createButton("generate sketch 8");
  button.mousePressed(makeSketch8);
   button.class("generateButton");
  button.position(20,310);
  button = createButton("generate sketch 9");
  button.mousePressed(makeSketch9);
   button.class("generateButton");
  button.position(20,340);
  button = createButton("generate text 1");
  button.mousePressed(makeSketch20);
  button.class("TextButton");
  button.position(25,370);
  button = createButton("generate sketch 11");
  button.mousePressed(makeSketch10);
   button.class("generateButton");
  button.position(142,100);
  button = createButton("generate sketch 12");
  button.mousePressed(makeSketch11);
   button.class("generateButton");
  button.position(142,130);
  button = createButton("generate sketch 13");
  button.mousePressed(makeSketch12);
   button.class("generateButton");
  button.position(142,160);
  button = createButton("generate sketch 14");
  button.mousePressed(makeSketch13);
   button.class("generateButton");
  button.position(142,190);
  button = createButton("generate sketch 15");
  button.mousePressed(makeSketch14);
   button.class("generateButton");
  button.position(142,220);
  button = createButton("generate sketch 16");
  button.mousePressed(makeSketch15);
   button.class("generateButton");
  button.position(142,250);
  button = createButton("generate sketch 17");
  button.mousePressed(makeSketch16);
   button.class("generateButton");
  button.position(142,280);
  button = createButton("generate sketch 18");
  button.mousePressed(makeSketch17);
   button.class("generateButton");
  button.position(142,310);
  button = createButton("generate sketch 19");
  button.mousePressed(makeSketch18);
   button.class("generateButton");
  button.position(142,340);
  button = createButton("generate text 2");
  button.mousePressed(makeSketch19);
  button.class("TextButton");
  button.position(148,370);
  button = createButton("Save Sketch");
  button.mousePressed(makeSketch21);
  button.class("button-SaveSketch");
  button.position(20,450);
  button = createButton("Reset Sketch");
  button.mousePressed(makeSketch22);
  button.class("button-SaveSketch");
  button.position(20,480);
}

  function makeSketch1(){
    for(var y = 10; y < 400; y+=40){
    image(pickedShapeLoadeda,x,y, 50, 100);
    image(pickedShapeLoadedb,x,y, 150, 100);
    // image(pickedShapeLoadedc,x,y, 200, 100);
    // image(pickedShapeLoadedd,x,y, 300, 100);
    }
  }
  function makeSketch2(){
    for(var y = 0; y < 200; y+=20){
    image(pickedShapeLoadedc,20,y, 200, 100);
    image(pickedShapeLoadedd,20,y, 300, 100);
    }
  }

  function makeSketch3(){
  translate(60)
    for (var i = 0; i < 180; i += 20){
    image(pickedShapeLoadeda,130, i, 200, i * imgHeightMultiplier);
    image(pickedShapeLoadedb, i , p , 200, 200);
    image(pickedShapeLoadedc, i, p*2, 200, 350);
    }
}

function makeSketch4(){
  // noLoop();
  translate(180)
  for(var x = 50; x < 250; x+=50){
    for(var y = 10; y < 100; y+=40){
    image(pickedShapeLoadeda,x*2, y, 100, 100);
  }
  image(pickedShapeLoadedc, x*3,y, 250, 100);
}
}

function makeSketch5(){
  for(var i = 1; i < 600; i+=20){
     image(pickedShapeLoadedb, random(i),400, 30, i * imgHeightMultiplier);
   }
} 

function makeSketch6(x, y, d){
  for (var i = random(300); i < 300; i += 5) {
  image(pickedShapeLoadedc, i, p*4 , 100, 500);
  for (var s = random(200); s< 200; s += 5) {
  image(pickedShapeLoadedd, i, s*10, 200, 500);
  }
 }
}

function makeSketch7(){
  for(var i = 4; i < 80; i+=2){
    image(pickedShapeLoadedb, i*10,i, i*imgWidthMultiplier, i * imgHeightMultiplier);
  }
}
/////////////////not right 
function makeSketch8(){
  image(pickedShapeLoadedb, random(50, 100), random(100), random(50), random(50));
} 
function makeSketch9(){
 if (i = random(500)){
    image(pickedShapeLoadedb, 200+sin(frameCount+0.4)*i, 2*cos(frameCount*8)*100,  i, i);
    }
}
function makeSketch10(){
  image(pickedShapeLoadedc, random(200, 400), random(100), random(200), random(200));
}

function makeSketch11(){
  image(pickedShapeLoadeda, random(width), random(height),
  random(25,250), random(25,250));
}

function makeSketch12(){
  image(pickedShapeLoadeda, random(50),random(10),random(0,500),random(0,50));
}

function makeSketch13(){
//repeat in one line smal x value 
if (random(350) < 150){
  for (var i = 0; i < 300; i += 15) {
   image(pickedShapeLoadeda,i, 200, 300, 100);
   image(pickedShapeLoadedd,i, 200, 350, 170);
}}
}

function makeSketch14(){
  for(var y = random(100); y < 100; y+= 5){
   image(pickedShapeLoadeda,x,y, 150, 150);
   }
}

function makeSketch15(){
  image(pickedShapeLoadedd, random(400,500),random(300,500),random(70),random(80));
}

function makeSketch16(){
//smalll checkered pattern along w mix 
if(random(350) < 300){
  image(pickedShapeLoadeda,100,100, x, y);
  for(var x = 5; x <400; x+= 15){
    translate(140);
    for(var y = 5; y < 400; y+= 15){
      image(pickedShapeLoadeda,x,y, x, y);
    }
    image(pickedShapeLoadedc, x,x, x, y);
   }
}
}

function makeSketch17(){
  //  done--this is the two strips 
  if(random(350) < 200){
    for(var x = 0; x <500; x+= 100){
      rotate(PI / 1.0)
      for(var y = 0; y < 500; y+= 100){
        image(pickedShapeLoadeda,x,y, 150, 150);
        image(pickedShapeLoadedb, x,y, 150, 150);
        image(pickedShapeLoadedc, x,y,150, 150);
        image(pickedShapeLoadedd, x,y, 150, 150);
      }
     }
   }
}

function makeSketch18(){
  ///////////done repeat pattern from one corner
  if(random(350) <= 250){
    noLoop();
   for (var i = 0; i < 340; i += 5) {
     image(pickedShapeLoadeda,0, 50, i, i);
     image(pickedShapeLoadedc,0, 50, i, i);
  }
 }
}

function makeSketch19(){
/////////////////////TEXT////////////////
  Textdiv = createDiv('').size(120,120); 
  Textdiv.html(dataA + " " + dataB + " ");
  Textdiv.class("poemsText")
  Textdiv.position(n,m);
  n = random(980,1040);
  m = random(120,500);
  console.log(dataA, dataB)
}

function makeSketch20(){
  /////////////////////TEXT////////////////
    Textdiv = createDiv('').size(120,120); 
    Textdiv.html(dataC + " " + dataD);
    Textdiv.class("poemsText")
    Textdiv.position(n,m);
    n = random(950,1050);
    m = random(120,500);
    console.log(dataC, dataD)
  }
  

function makeSketch21(){
  save(myCanvas,'Mel.jpg');
}

function makeSketch22(){
  setup();
  clear();
  // removeElements();
  Textdiv.hide(dataC);
}
