Lily = "";
PeterPan = "";

LeftWristX = 0;
LeftWristY = 0;
RightWristX = 0;
RightWristY = 0;

function setup() {
    canvas = createCanvas(560, 500);
    canvas.center();

    Video = createCapture(VIDEO);
    Video.position(325);
    Video.hide()

    poseNet = ml5.poseNet(Video, ModelLoaded);
    poseNet.on('pose', GotPoses);
}

function preload() {
    Lily = loadSound("LilyByAlanWalkerMusic.mp3");
    PeterPan = loadSound("PeterPanMusicForMusicChangerAppCodingHomework.mp3");
}

function draw() {
    image(Video, 0, 0, 600, 500);
}

function ModelLoaded() {
    console.log("Posenet Is Initialized")
}


function GotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;

        console.log("LeftWristX  = " + LeftWristX + " RightWristX = " + RightWristX);
    }
}