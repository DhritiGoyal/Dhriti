//global variables to handle the data
var data;
var numRows, numCols;
var DATA_YEAR = [], STATE_NAME = []; INCIDENT_DATE = []; ADULT_VICTIM_COUNT = [];
OFFENDER_RACE = []; OFFENSE_NAME = []; LOCATION_NAME = []; BIAS_DESC = [];
//x,y of the circle's center
var x = 0;
var y = 0;

//preload the table data
function preload() {
  data = loadTable('assets/hate-crime.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 800);
  count = 0;
  frameRate(10);
  //getting basic info from the data
  numRows = data.getRowCount();
  numCols = data.getColumnCount();
  print("rows: " + numRows + " Cols: " + numCols)
  
  var bias = data.getColumn("Bias");
  var biasvalue = data.getColumn("Bias-val");
  var offense = data.getColumn("Offense");
  var offensevalue = data.getColumn("Offense-val");  
  var offender = data.getColumn("Offender-race");
  var offendervalue = data.getColumn("Offender-val");  
  print(bias, biasvalue, offense, offensevalue, offender, offendervalue)
  translate(width / 2, height / 2);
  //load data 
  for(let r = 0; r < numRows; r++){
    let x = map(r, 0, numRows, 0, 100);
    let y = map(r, 0, numRows, 0, 400);
    text(bias[r], x+10, y+100)
    rotate(70);
    text(offense[r], x+100, y+100)
    text(offender[r], x+350, y+100)
    // text(bias[r], x+640, y+100)}
 }
}

function draw() {
  noFill();
  angleMode(DEGREES);
    //change origin (0,0) to middle of canvas
    // translate(width / 2, height / 2);
    //rotate origin 180 degrees to start at top
    rotate(80);
  //   //rotate the canvas to the current angle
  // rotate(rot);
  // let h = map(rows[count].getNum('ADULT_VICTIM_COUNT'),0,3,0,200);
  // line(cx, cy, cx, h+115)
  // text(date, cx, 115)
  }
