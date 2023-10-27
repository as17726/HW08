let song; 
let peaks; 
let ellipseSize = 50; // Size of the ellipses
let spacing = 10; // Spacing between ellipses

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

  let numEllipses = peaks.length;
  let totalWidth = numEllipses * (ellipseSize + spacing);
  let startX = (width - totalWidth) / 2;

  for (let i = 0; i < numEllipses; i++) {
    let ellipseHeight = map(peaks[i], 0, 1, 0, height);
    let yPos = height / 2;
    let xPos = startX + i * (ellipseSize + spacing);

    // Draw ellipses based on amplitude
    ellipse(xPos, yPos, ellipseSize, ellipseHeight);
  }
}

function mouseClicked() {
  if (!song.isPlaying()) {
    song.play();
  } else if (song.isPlaying) {
    song.pause(); 
  }
}

