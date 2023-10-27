let song; 
let peaks; 

function preload() {
song = loadSound("./christmas.mp3"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  peaks = song.getPeaks();
}

function draw() {
  background(0,205,255);
  print(peaks); 
  noFill();
  stroke(0);

  let numShapes = peaks.length;
  let shapeWidth = width / numShapes;

  beginShape();
  for (let i = 0; i < numShapes; i++) {
    let shapeHeight = map(peaks[i], 0, 1, 0, height);
    let x = i * shapeWidth;
    let y = height - shapeHeight;

    // Create vertex points for the shape
    vertex(x, y);
  }
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

function mouseClicked() {
  if (!song.isPlaying()) {
    song.play();
  } else if (song.isPlaying) {
    song.pause(); 
  }
}

