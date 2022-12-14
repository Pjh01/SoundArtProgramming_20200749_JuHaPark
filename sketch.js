var wave;
var sounds=[261, 293, 329, 349, 391, 440, 493, 277, 311, 369, 415, 466]
var soundsChange= [];
let slider;
var val;
var _val;
var octave;
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
  text("valum: "+_val, 225, 25)
    
  for (var n = 0; n < sounds.length; n++){
    if(-105<= rotationY && rotationY < -75){
      soundsChange[n] = sounds[n]/8
      octave = 1
    }
    if(-75<= rotationY && rotationY < -45){
      soundsChange[n] = sounds[n]/4
      octave = 2
    }
    if(-45<= rotationY && rotationY < -15){
      soundsChange[n] = sounds[n]/2
      octave = 3
    }
    if(-15<= rotationY && rotationY < 15){
      soundsChange[n] = sounds[n]
      octave = 4
    }
    if(15<= rotationY && rotationY < 45){
      soundsChange[n] = sounds[n]*2
      octave = 5
    }
    if(45<= rotationY && rotationY < 75){
      soundsChange[n] = sounds[n]*4
      octave = 6
    }
    if(75<= rotationY && rotationY < 105){
      soundsChange[n] = sounds[n]*8
      octave = 7
    }
    if(105<= rotationY && rotationY < 135){
      soundsChange[n] = sounds[n]*16
      octave = 8
    }
  }
  text("octave: "+octave, 290, 25)
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
      wave.freq(soundsChange[key]);
      wave.amp(_val, 0.5);
    }
    if(40 < touches[j].y && touches[j].y < displayHeight/2-40){
      if(w/2+10 < touches[j].x && touches[j].x < (w/2+10)+blackWidth){
        wave.start();
        wave.freq(soundsChange[7]);
        wave.amp(_val, 0.5);
      }
      if((w+2*w)/2+10 < touches[j].x && touches[j].x < ((w+2*w)/2+10)+blackWidth){
        wave.start();
        wave.freq(soundsChange[8]);
        wave.amp(_val, 0.5);
      }
      if((3*w+4*w)/2+10 < touches[j].x && touches[j].x < ((3*w+4*w)/2+10)+blackWidth){
        wave.start();
        wave.freq(soundsChange[9]);
        wave.amp(_val, 0.5);
      }
      if((4*w+5*w)/2+10 < touches[j].x && touches[j].x < ((4*w+5*w)/2+10)+blackWidth){
        wave.start();
        wave.freq(soundsChange[10]);
        wave.amp(_val, 0.5);
      }
      if((5*w+6*w)/2+10 < touches[j].x && touches[j].x < ((5*w+6*w)/2+10)+blackWidth){
        wave.start();
        wave.freq(soundsChange[11]);
        wave.amp(_val, 0.5);
      }
    }
  }
}
