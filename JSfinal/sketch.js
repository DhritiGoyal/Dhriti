//global variables to handle the table
var table;
var numRows, numCols;
var bias = [], biasvalue = []; offense = []; offensevalue = [];
offender= []; offendervalue  = [];
//x,y of the circle's center
var x = 0;
var y = 0;
var d = 100;
var theta = 0;
var angle;
var count;

//preload the table table
function preload() {
  table = loadTable('assets/hate-crime.csv', 'csv', 'header');
}

function setup() {
  createCanvas(4000, 1200);
  frameRate(10);
  // //getting basic info from the table
  // numRows = table.getRowCount();
  // numCols = table.getColumnCount();
  // print("rows: " + numRows + " Cols: " + numCols)
  
  // //load table 
  // var bias = table.getColumn( "Bias");
  // var biasvalue = table.getColumn("Bias-val");
  // var offense = table.getColumn("Offense");
  // var offensevalue = table.getColumn("Offense-val");  
  // var offender = table.getColumn("Offender-race");
  // var offendervalue = table.getColumn("Offender-val");  
  // //printing these values in the console
  // print(bias,biasvalue, offense, offensevalue, offender, offendervalue)

  // //trying to create a circle based on the value of "biasvalue"
  // var x = d * cos(theta);
  // var y = d * sin(theta);
  // translate(width /7, height /2);
  // cx = 0;
  // cy = 0;
  // //putting the row data into an array to work with it later 
  // let rows = table.getRows();
  // count = 0;
  // //HERE THE .GETNUM isnt working 
  // //INSPECT ALSO SHOWS THAT CIRCLE IS UNDEFINDED FOR SOME REASON
  // // circle(100, 100, h)

  // for(let r = 0; r < numRows; r++){
  // // var biasvalues = biasvalue.getNum("Bias-val");
  // // const xvalue = random(100,width);
  // // const yvalue = random(0,height);
  // // fill(0, 102, 200);
  // // circle(100, 100, biasvalues)
  // // let h = map(rows[count].getNum('Bias-val'),0,2445,0,600);
  // console.log(biasvalue[r])


  // //placing the text in a circle 
  // rotate(QUARTER_PI / 4.35);
  // fill(0, 102, 200);
  // text(bias[r], x, y);
  // text(offense[r], x+210, y+30);
  //   // var h = map(biasvalue,0,2445,0,360);
  //   //   var a = map(rows[count].getNum('Offense-val'),0,2900,0,360);
  //   // fill(250, 102, 200);
  //   //  line(cx, cy, cx, h+100);
//  }
}

function draw() {
  noFill();
  angleMode(DEGREES);
  circle(100, 100, 20);
  rect(30,30,30,30)
  }
