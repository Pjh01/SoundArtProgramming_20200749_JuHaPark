var wave;
var button;
//var playing = false;
var _x = [];
var _y = [];
var sounds=[261, 277, 293, 311, 329, 349, 369, 391, 415, 440, 466, 493]

function setup() {
  createCanvas(displayWidth, displayHeight);
  wave = new p5.Oscillator();
  wave.setType('sine');
  //wave.freq(440);
  wave.amp(0);
  // button = createButton('play/pause');
  // button.mousePressed(toggle);
  // button.mouseReleased(unplay);
  
}

function draw(){
  //background(255);
  var w = displayWidth / sounds.length;
  for (var i = 0; i < sounds.length; i++) {
    var x = i * w;
    
    var rectColorX = floor(map(rotationX, -180, 180, 0, 255))
    var rectColorY = floor(map(rotationY, -90, 90, 0, 255))
    var rectColorZ = floor(map(rotationZ, 0, 360, 0, 255))
    fill(rectColorX, rectColorY, rectColorZ);
    
    //if(i==1)
    //rect(x, displayHeight/2, w-1, displayHeight);
    rect(x, 0, w-1, displayHeight-1);
  }
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
    var key = floor(map(touches[j].x, 0, width, 0, sounds.length));
    wave.start();
    wave.freq(sounds[key]);
    wave.amp(0.5, 1);
  }
  
  
  
  // _x = touches[0].x;
  // _y = touches[0].y;
}
