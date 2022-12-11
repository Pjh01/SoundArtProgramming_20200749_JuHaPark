var wave;
var button;
//var playing = false;
var _x = [];
var _y = [];
var sounds=[261, 277, 293, 311, 329, 349, 369, 391, 415, 440, 466, 493]
let slider;
var val;
var _val;
var rectColorX;
var rectColorY;
var rectColorZ;

function setup() {
  createCanvas(displayWidth, displayHeight);
  wave = new p5.Oscillator();
  wave.setType('sine');
  //wave.freq(440);
  wave.amp(0);
  // button = createButton('play/pause');
  // button.mousePressed(toggle);
  // button.mouseReleased(unplay);
  slider = createSlider(0, 100, 50);
  slider.position(10, 10);
  slider.style('width', '200px');
}

function draw(){
  background(255);
  var w = displayWidth / sounds.length;
  for (var i = 0; i < sounds.length; i++) {
    var x = i * w;
    
    // rectColorX = floor(map(rotationX, -180, 180, 0, 255))
    // rectColorY = floor(map(rotationY, -90, 90, 0, 255))
    // rectColorZ = floor(map(rotationZ, 0, 360, 0, 255))
    // fill(rectColorX, rectColorY, rectColorZ);
    
    //if(i==1)
    //rect(x, displayHeight/2, w-1, displayHeight);
    rect(x, displayHeight/2, w-1, displayHeight-1);
  }
  
  val = slider.value();
  _val = map(val, 0, 100, 0, 1);
  text(_val, 230, 25)
  
}

// function toggle() {
//   //if (!playing) {
//     wave.start();
//     wave.amp(0.5, 1);
//     //playing = true;
//   //} //else{
//     //wave.amp(0, 1);
//     //playing = false;
//   //}
// }

function mousePressed() {
  // Map mouse to the key index
  // var key = floor(map(mouseX, 0, width, 0, sounds.length));
  // wave.start();
  // wave.freq(sounds[key]);
  // wave.amp(0.5, 1);
}

function mouseReleased() {
  wave.amp(0, 1);
}

function touchStarted(){
  getAudioContext().resume();
  
for(var j = 0; j < touches.length; j++){
    if(displayHeight/2 < touches[j].y && touches[j].y < displayHeight-1 ){
      var key = floor(map(touches[j].x, 0, width, 0, sounds.length));
      wave.start();
      wave.freq(sounds[key]);
      wave.amp(_val, 0.5);
    }
      
  }
  
  
  
  // _x = touches[0].x;
  // _y = touches[0].y;
}
