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

  for (let y = 0; y < mImage.height; y += spacing) {
    for (let x = 0; x < mImage.width; x += spacing) {
      let pixelIndex = 4 * (y * mImage.width + x);
      let redVal = mImage.pixels[pixelIndex + 0];
      let greenVal = mImage.pixels[pixelIndex + 1];
      let blueVal = mImage.pixels[pixelIndex + 2];

    let maxVal = max(redVal, greenVal, blueVal); 

    if (maxVal == redVal && greenVal == 0 && blueVal == 0) {
     
    } else if (maxVal == greenVal && maxVal == redVal && blueVal == 0) {
      
    } else if(maxVal == blueVal && greenVal == 0 && redVal == 0){
 
    }
  }

  mImage.updatePixels(); 
  image(mImage, 0, 0); 
  }
}
