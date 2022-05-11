var shapesArraye;
var shapesArrayf;
var pickedShapedLoadede;
var pickedShapedLoadedf;
var dataE;
var dataF;
function preload() {
shapesArraye = ['assets/shapes/shape3.png','assets/shapes/shape12.png', 'assets/shapes/shape19.png',
'assets/shapes/shape20.png', 'assets/shapes/shape35.png','assets/shapes/shape39.png','assets/shapes/shape41.png', 
'assets/shapes/shape46.png', 'assets/shapes/shape51.png', 'assets/shapes/shape53.png','assets/shapes/shape60.png',
'assets/shapes/shape71.png','assets/shapes/shape73.png','assets/shapes/shape88.png','assets/shapes/shape90.png',
'assets/shapes/shape93.png','assets/shapes/shape95.png']

var randomlyPickedShapee = floor(random(shapesArraye.length));

pickedShapeLoadede = loadImage(shapesArraye[randomlyPickedShapee]);
}
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    textureWrap(MIRROR, REPEAT);
  }

function draw() {
    background(0);
    let dX = mouseX;
    let dY = mouseY;
    
    let u = lerp(1.0, 8.0, dX);
    let v = lerp(1.0, 8.0, dY);
    
    scale(width/2);
    
    texture(pickedShapeLoadede)

    beginShape(TRIANGLES);
    vertex(-1, -1, 0, 0, 0);
    vertex(1, -1, 0, u, 0);
    vertex(1, 1, 0, u, v);

    vertex(1, 1, 0, u, v);
    vertex(-1, 1, 0, 0, v);
    vertex(-1, -1, 0, u, 0);
    endShape();
    
}