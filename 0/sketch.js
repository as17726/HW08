let mImage;
let oImage; 
let patternImage;
let spacing = 32;

let sliderRed;
let sliderGreen;
let sliderBlue;

let mRed = { r: 188, g: 66, b: 49 };
let mBlue = { r: 34, g: 67, b: 113 };
let mYellow = { r: 260, g: 160, b: 60 };
let similarity_value = 50;

function preload() {
  mImage = loadImage("Mondrian.jpg");
  oImage = loadImage("Mondrian.jpg");
  patternImage = loadImage("pattern.jpg");
}

function redissimilar(redVal1, greenVal1, blueVal1) {
  if (
    abs(redVal1 - mRed.r) <= similarity_value &&
    abs(blueVal1 - mRed.b) <= similarity_value &&
    abs(greenVal1 - mRed.g) <= similarity_value
  ) {
    return true;
  } else {
    return false;
  }
}

function blueissimilar(redVal1, greenVal1, blueVal1) {
  if (
    abs(redVal1 - mBlue.r) <= similarity_value &&
    abs(blueVal1 - mBlue.b) <= similarity_value &&
    abs(greenVal1 - mBlue.g) <= similarity_value
  ) {
    return true;
  } else {
    return false;
  }
}

function yellowissimilar(redVal1, greenVal1, blueVal1) {
  if (
    abs(redVal1 - mYellow.r) <= similarity_value &&
    abs(blueVal1 - mYellow.b) <= similarity_value &&
    abs(greenVal1 - mYellow.g) <= similarity_value
  ) {
    return true;
  } else {
    return false;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
 // mImage.resize(0, height);
  oImage.resize(0, height);
  patternImage.resize(650, height);
  noLoop();

  sliderRed = createSlider(0, 255, 0);
  sliderRed.position(700, 10);
  sliderRed.style("width", width - 20 + "px");

  sliderGreen = createSlider(0, 255, 0);
  sliderGreen.position(700, 60);
  sliderGreen.style("width", width - 20 + "px");

  sliderBlue = createSlider(0, 255, 0);
  sliderBlue.position(700, 110);
  sliderBlue.style("width", width - 20 + "px");
}

function draw() {
  background(255);
  let valR = sliderRed.value();
  let valG = sliderGreen.value();
  let valB = sliderBlue.value();

  oImage.loadPixels(); 
  mImage = oImage.get();
  mImage.loadPixels();

  for (let vi = 0; vi < oImage.pixels.length; vi += 4) {
    let redVal = oImage.pixels[vi + 0];  
    let greenVal = oImage.pixels[vi + 1];
    let blueVal = oImage.pixels[vi + 2];
    let alphaVal = oImage.pixels[vi + 3];

    if (redissimilar(redVal,greenVal, blueVal)) {
      mImage.pixels[vi + 3] = 100;
    } else if (blueissimilar(redVal, greenVal, blueVal)) {
      mImage.pixels[vi + 0] = random(0, 255);
      mImage.pixels[vi + 1] = random(0, 255);
      mImage.pixels[vi + 2] = random(0, 255);
    } else if (yellowissimilar(redVal, greenVal, blueVal)) {
      mImage.pixels[vi + 0] = valR;
      mImage.pixels[vi + 1] = valG;
      mImage.pixels[vi + 2] = valB;
    }
  }

  mImage.updatePixels();
  image(patternImage, 0, 0);
  image(mImage, 0, 0);
}
