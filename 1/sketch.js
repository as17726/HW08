let song; 
let peaks; 
let ellipseSize = 50; // Size of the ellipses
let spacing = 10; // Spacing between ellipses

function preload() {
song = loadSound("./christmas.mp3"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  peaks = song.getPeaks();
}
let i = 0;

function draw() {
 // print(peaks); 
  noFill();
  //stroke(0);
  let numEllipses = peaks.length;
    let ellipseHeight = map(peaks[i], 0, 1, 0, height);
   let yPos = height/2; 
    let xPos = i * (ellipseSize + spacing);
    i++; 
    if (song.isPlaying) {
    stroke(random(0,255), random(0,255), random(0,255)); 
    ellipse(xPos%width, yPos, ellipseSize, ellipseHeight);
    if(i>numEllipses) {
      i=0;
    }
  }
}

function mouseClicked() {
  if (!song.isPlaying()) {
    song.play();
  } else if (song.isPlaying) {
    song.pause(); 
  }
}

