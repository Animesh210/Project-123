rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup(){
    canvas = createCanvas(550, 550);
    canvas.position(550, 150);

    video = createCapture(VIDEO);
    video.size(550, 500);   
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Posenet is Initialized");
}

function draw(){
    background('#d9c0bf'); 
    textSize(difference);
    fill('#88e01b');
    text('Animesh', 10, 10);

}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}
