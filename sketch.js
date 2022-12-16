var wave1, wave2, wave3, wave4, wave5, wave6, wave7, wave8, wave9, wave10, wave11, wave12;
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
  wave1 = new p5.Oscillator();
  wave1.setType('sine');
  wave1.amp(0);
  
  wave2 = new p5.Oscillator();
  wave2.setType('sine');
  wave2.amp(0);
  
  wave3 = new p5.Oscillator();
  wave3.setType('sine');
  wave3.amp(0);
  
  wave4 = new p5.Oscillator();
  wave4.setType('sine');
  wave4.amp(0);
  
  wave5 = new p5.Oscillator();
  wave5.setType('sine');
  wave5.amp(0);
  
  wave6 = new p5.Oscillator();
  wave6.setType('sine');
  wave6.amp(0);
  
  wave7 = new p5.Oscillator();
  wave7.setType('sine');
  wave7.amp(0);
  
  wave8 = new p5.Oscillator();
  wave8.setType('sine');
  wave8.amp(0);
  
  wave9 = new p5.Oscillator();
  wave9.setType('sine');
  wave9.amp(0);
  
  wave10 = new p5.Oscillator();
  wave10.setType('sine');
  wave10.amp(0);
  
  wave11 = new p5.Oscillator();
  wave11.setType('sine');
  wave11.amp(0);
  
  wave12 = new p5.Oscillator();
  wave12.setType('sine');
  wave12.amp(0);
  
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
    rect(x, displayHeight/2, w-1, (displayHeight/2)-1);
  }
  
  fill(0);
  rect(w/2+10, 40, blackWidth, displayHeight/2-40);
  rect((w+2*w)/2+10, 40, blackWidth, displayHeight/2-40);
  rect((3*w+4*w)/2+10, 40, blackWidth, displayHeight/2-40);
  rect((4*w+5*w)/2+10, 40, blackWidth, displayHeight/2-40);
  rect((5*w+6*w)/2+10, 40, blackWidth, displayHeight/2-40);
  
  val = slider.value();
  _val = map(val, 0, 100, 0, 1);
  textSize(14);
  text("valum: "+_val, 225, 25)
    
  for (var n = 0; n < sounds.length; n++){
    if(-90<= rotationY && rotationY < -75){
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
    if(75<= rotationY && rotationY < 90){
      soundsChange[n] = sounds[n]*8
      octave = 7
    }
  }
  text("octave: "+octave, 305, 25)
  
  for(var m = 0; m < touches.length; m++){
    if(40 < touches[m].y && touches[m].y < displayHeight/2){
      if(w/2+10 < touches[m].x && touches[m].x < (w/2+10)+blackWidth){
        fill(111);
        rect(w/2+10, 40, blackWidth, displayHeight/2-40);
      }
      if((w+2*w)/2+10 < touches[m].x && touches[m].x < ((w+2*w)/2+10)+blackWidth){
        fill(111);
        rect((w+2*w)/2+10, 40, blackWidth, displayHeight/2-40);
      }
      if((3*w+4*w)/2+10 < touches[m].x && touches[m].x < ((3*w+4*w)/2+10)+blackWidth){
        fill(111);
        rect((3*w+4*w)/2+10, 40, blackWidth, displayHeight/2-40);
      }
      if((4*w+5*w)/2+10 < touches[m].x && touches[m].x < ((4*w+5*w)/2+10)+blackWidth){
        fill(111);
        rect((4*w+5*w)/2+10, 40, blackWidth, displayHeight/2-40);
      }
      if((5*w+6*w)/2+10 < touches[m].x && touches[m].x < ((5*w+6*w)/2+10)+blackWidth){
        fill(111);
        rect((5*w+6*w)/2+10, 40, blackWidth, displayHeight/2-40);
      }
    }
    if(displayHeight/2 < touches[m].y && touches[m].y < displayHeight-1 ){
      if(0 < touches[m].x && touches[m].x < w-1){
        fill(111);
        rect(0, displayHeight/2, w-1, displayHeight-1);
      }
      if(w < touches[m].x && touches[m].x < (2*w)-1){
        fill(111);
        rect(w, displayHeight/2, w-1, displayHeight-1);
      }
      if(2*w < touches[m].x && touches[m].x < (3*w)-1){
        fill(111);
        rect(2*w, displayHeight/2, w-1, displayHeight-1);
      }
      if(3*w < touches[m].x && touches[m].x < (4*w)-1){
        fill(111);
        rect(3*w, displayHeight/2, w-1, displayHeight-1);
      }
      if(4*w < touches[m].x && touches[m].x < (5*w)-1){
        fill(111);
        rect(4*w, displayHeight/2, w-1, displayHeight-1);
      }
      if(5*w < touches[m].x && touches[m].x < (6*w)-1){
        fill(111);
        rect(5*w, displayHeight/2, w-1, displayHeight-1);
      }
      if(6*w < touches[m].x && touches[m].x < (7*w)-1){
        fill(111);
        rect(6*w, displayHeight/2, w-1, displayHeight-1);
      }
    }
  }
}

function mouseReleased() {
  wave1.amp(0, 0.5);
  wave2.amp(0, 0.5);
  wave3.amp(0, 0.5);
  wave4.amp(0, 0.5);
  wave5.amp(0, 0.5);
  wave6.amp(0, 0.5);
  wave7.amp(0, 0.5);
  wave8.amp(0, 0.5);
  wave9.amp(0, 0.5);
  wave10.amp(0, 0.5);
  wave11.amp(0, 0.5);
  wave12.amp(0, 0.5);
}

function touchStarted(){
  getAudioContext().resume();
  
  for(var j = 0; j < touches.length; j++){
    if(displayHeight/2 < touches[j].y && touches[j].y < displayHeight-1 ){
      if(0 < touches[j].x && touches[j].x < w-1){
        wave1.start();
        wave1.freq(soundsChange[0]);
        wave1.amp(_val, 0.5);
      }
      if(w < touches[j].x && touches[j].x < (2*w)-1){
        wave2.start();
        wave2.freq(soundsChange[1]);
        wave2.amp(_val, 0.5);
      }
      if(2*w < touches[j].x && touches[j].x < (3*w)-1){
        wave3.start();
        wave3.freq(soundsChange[2]);
        wave3.amp(_val, 0.5);
      }
      if(3*w < touches[j].x && touches[j].x < (4*w)-1){
        wave4.start();
        wave4.freq(soundsChange[3]);
        wave4.amp(_val, 0.5);
      }
      if(4*w < touches[j].x && touches[j].x < (5*w)-1){
        wave5.start();
        wave5.freq(soundsChange[4]);
        wave5.amp(_val, 0.5);
      }
      if(5*w < touches[j].x && touches[j].x < (6*w)-1){
        wave6.start();
        wave6.freq(soundsChange[5]);
        wave6.amp(_val, 0.5);
      }
      if(6*w < touches[j].x && touches[j].x < (7*w)-1){
        wave7.start();
        wave7.freq(soundsChange[6]);
        wave7.amp(_val, 0.5);
      }
    }
    if(40 < touches[j].y && touches[j].y < displayHeight/2){
      if(w/2+10 < touches[j].x && touches[j].x < (w/2+10)+blackWidth){
        wave8.start();
        wave8.freq(soundsChange[7]);
        wave8.amp(_val, 0.5);
      }
      if((w+2*w)/2+10 < touches[j].x && touches[j].x < ((w+2*w)/2+10)+blackWidth){
        wave9.start();
        wave9.freq(soundsChange[8]);
        wave9.amp(_val, 0.5);
      }
      if((3*w+4*w)/2+10 < touches[j].x && touches[j].x < ((3*w+4*w)/2+10)+blackWidth){
        wave10.start();
        wave10.freq(soundsChange[9]);
        wave10.amp(_val, 0.5);
      }
      if((4*w+5*w)/2+10 < touches[j].x && touches[j].x < ((4*w+5*w)/2+10)+blackWidth){
        wave11.start();
        wave11.freq(soundsChange[10]);
        wave11.amp(_val, 0.5);
      }
      if((5*w+6*w)/2+10 < touches[j].x && touches[j].x < ((5*w+6*w)/2+10)+blackWidth){
        wave12.start();
        wave12.freq(soundsChange[11]);
        wave12.amp(_val, 0.5);
      }
    }
  }
}