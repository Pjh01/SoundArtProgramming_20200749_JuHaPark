var wave;
//var button;
//var playing = false;
// var _x = [];
// var _y = [];
var sounds=[261, 293, 329, 349, 391, 440, 493, 277, 311, 369, 415, 466]
var soundsChange= [];
let slider;
var val;
var _val;
// var rectColorX;
// var rectColorY;
// var rectColorZ;
var w;
var blackWidth;

function setup() {
  createCanvas(displayWidth, displayHeight);
  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.amp(0);
  
  slider = createSlider(0, 100, 50);
  slider.position(10, 10);
  slider.style('width', '200px');
}

function draw(){
  background(255);
  w = displayWidth / 7;
  blackWidth = w-20;
  for (var i = 0; i < 7; i++) {
    var x = i * w;
    
    // rectColorY = floor(map(rotationY, -90, 90, 0, 255))
    // rectColorZ = floor(map(rotationZ, 0, 360, 0, 255))
    // fill(rectColorX, rectColorY, rectColorZ);
  
    fill(255);
    rect(x, displayHeight/2, w-1, displayHeight-1);
  }
  
  fill(0);
  rect(w/2+10, 40, blackWidth, displayHeight/2-40);
  rect((w+2*w)/2+10, 40, blackWidth, displayHeight/2-40);
  rect((3*w+4*w)/2+10, 40, blackWidth, displayHeight/2-40);
  rect((4*w+5*w)/2+10, 40, blackWidth, displayHeight/2-40);
  rect((5*w+6*w)/2+10, 40, blackWidth, displayHeight/2-40);
  
  val = slider.value();
  _val = map(val, 0, 100, 0, 1);
  text(_val, 230, 25)
  
  octaveY = rotationY
  text(octaveY, 300, 25)
  if(-90<= rotationY && rotationY < -75){
    for (var n = 0; n < sounds.length; n++){
      soundsChange[n] = sounds[n]/8
    }
    text(soundsChange, 300, 15)
  }
  
}

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
      var key = floor(map(touches[j].x, 0, width, 0, 7));
      wave.start();
      wave.freq(sounds[key]);
      wave.amp(_val, 0.5);
    }
    if(40 < touches[j].y && touches[j].y < displayHeight/2-40){
      if(w/2+10 < touches[j].x && touches[j].x < (w/2+10)+blackWidth){
        wave.start();
        wave.freq(sounds[7]);
        wave.amp(_val, 0.5);
      }
      if((w+2*w)/2+10 < touches[j].x && touches[j].x < ((w+2*w)/2+10)+blackWidth){
        wave.start();
        wave.freq(sounds[8]);
        wave.amp(_val, 0.5);
      }
      if((3*w+4*w)/2+10 < touches[j].x && touches[j].x < ((3*w+4*w)/2+10)+blackWidth){
        wave.start();
        wave.freq(sounds[9]);
        wave.amp(_val, 0.5);
      }
      if((4*w+5*w)/2+10 < touches[j].x && touches[j].x < ((4*w+5*w)/2+10)+blackWidth){
        wave.start();
        wave.freq(sounds[10]);
        wave.amp(_val, 0.5);
      }
      if((5*w+6*w)/2+10 < touches[j].x && touches[j].x < ((5*w+6*w)/2+10)+blackWidth){
        wave.start();
        wave.freq(sounds[11]);
        wave.amp(_val, 0.5);
      }
    }
  }
}
