let mImage; 
let patternImage; 
let spacing = 32;

function preload() {
  mImage = loadImage("Mondrian.jpg"); 
  patternImage = loadImage("pattern.jpg"); 
}

//function mosaic(X,Y) {
//}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1); 
  mImage.resize(0, height); 
  noLoop(); 
}

function draw() {
  background(255); 

  mImage.loadPixels(); 
  
  for (let vi = 0; vi < mImage.pixels.length; vi += 4) {
    let redVal = mImage.pixels[vi + 0];
    let greenVal = mImage.pixels[vi + 1];
    let blueVal = mImage.pixels[vi + 2];

    let maxVal = max(redVal, greenVal, blueVal); 

    if (maxVal == redVal && greenVal == 0 && blueVal == 0) {
      mImage.pixels[vi + 0] = 50;
    } else if (maxVal == greenVal && maxVal == redVal && blueVal == 0) {
       mImage.pixels[vi + 1] = 255;
    } else if(maxVal == blueVal && greenVal == 0 && redVal == 0){
        mImage.pixels[vi + 2] = 255;
    }

  }
  mImage.updatePixels(); 
  image(mImage, 0, 0); 
}


