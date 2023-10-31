let mImage;
let patternImage;
let spacing = 32;

let mRed = { r: 188, g: 66, b: 49 };
let mBlue = { r: 34, g: 67, b: 113 };
let mYellow = { r: 226, g: 180, b: 90 };
let similarity_value = 60;

function preload() {
  mImage = loadImage("Mondrian.jpg");
  patternImage = loadImage("pattern.jpg");
}

function redissimilar(redVal1, blueVal1, greenVal1) {
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

function blueissimilar(redVal1, blueVal1, greenVal1) {
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

function yellowissimilar(redVal1, blueVal1, greenVal1) {
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
  mImage.resize(0, height);
  patternImage.resize(650, height);
  noLoop();
}

function draw() {
  background(255);

  mImage.loadPixels();

  for (let vi = 0; vi < mImage.pixels.length; vi += 4) {
    let redVal = mImage.pixels[vi + 0];
    let greenVal = mImage.pixels[vi + 1];
    let blueVal = mImage.pixels[vi + 2];
    let alphaVal = mImage.pixels[vi + 3];

    if (redissimilar(redVal, greenVal, blueVal)) {
      mImage.pixels[vi + 3] = 100;
    } else if (blueissimilar(redVal, greenVal, blueVal)) {
      mImage.pixels[vi + 0] = random(0, 255);
      mImage.pixels[vi + 1] = random(0, 255);
      mImage.pixels[vi + 2] = random(0, 255);
    } else if (yellowissimilar(redVal, greenVal, blueVal)) {
      print("from yellow");
      mImage.pixels[vi + 0] = 255;
      mImage.pixels[vi + 1] = 135;
      mImage.pixels[vi + 2] = 0;
    }
  }

  mImage.updatePixels();
  image(patternImage, 0, 0);
  image(mImage, 0, 0);
}
