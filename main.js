nose_X = 0;
nose_Y = 0;
left_wrist_X = 0;
right_wrist_X = 0;
difference= 0;

function setup(){
    video= createCapture(VIDEO);
    video.size(400,400);
    video.position(200,115);

    canvas= createCanvas(500,500);
    canvas.position(665,115);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose",gotPoses)
}

function modelLoaded(){
    console.log("Model Loaded :)");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_X = results[0].pose.nose.x;
        nose_Y = results[0].pose.nose.y;
        console.log("Nose X = " +nose_X+"  Nose Y = "+nose_Y);
        left_wrist_X = results[0].pose.leftWrist.x;
        right_wrist_X = results[0].pose.rightWrist.x;
        console.log("Left Wrist X = " + left_wrist_X+ "  Right Wrist X = "+right_wrist_X);
        difference = Math.floor(left_wrist_X - right_wrist_X);
        console.log("Difference Between left and right wrist= "+difference);
    }
}

function draw() {
    background("#cf70ff");
    fill("#385442");
    stroke("#fad20a");
    strokeWeight(3);
    square(nose_X,nose_Y,difference);
    document.getElementById("square_sides").innerHTML = "Sides of the square is  " + difference + "pxs"
}