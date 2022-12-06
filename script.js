let video;
let message = "Checking!!!";
let emoji = "😀";
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/sVEG8UCsk/';

// preload function
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

// classify the video from ml
function classifyVideo() {
  classifier.classify(video, gotResults);
}

// callback function
function gotResults(error, results) {
  
  if (error) {
    console.error(error);
    return;
  }
  // Storing the label and classifying again!
  message = results[0].label;
  console.log(results);
  classifyVideo();
}

// setup function
function setup() {
  createCanvas(1200, 620);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

 // Start classifying the video
  classifyVideo();
}

// draw function
function draw() {
  background(0);
  translate(video.width, 0);
  scale(-1, 1);
  image(video, 0, 0, );
  // Pick an emoji, the "default" is a smiley
  if (message == "Mask") {
    emoji = "😷";
  } else if (message == "No Mask") {
    emoji = "😬";
  } 

// Drawing the emoji
  textSize(50);
  text(emoji, width -30 , height - 50 );

  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(message, width / 2, height - 16);

  

}

