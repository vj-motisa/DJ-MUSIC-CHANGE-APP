sainik = "";
god = "";
var lex = "";
var ley = "";
var rex = "";
var rey = "";
var charge = 0;
var charger = "";
var rite = 0;
var book = "";


function setup() {
canvas = createCanvas(650, 385);
canvas.center();

video = createCapture(VIDEO);
video.hide();

posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}

function preload() {
    sainik = loadSound("gulab.mp3");
    god = loadSound("jamun.mp3");

}


function draw() {
    image(video, 0, 0, 650, 385);
    fill("#51235c");
    stroke("#0bb588");
    charger = sainik.isPlaying();
    if(charge>0.2) {
        circle(lex, ley, 26);
        god.stop();

        if(charger == false) {
            sainik.play();
            document.getElementById("dhokha").innerHTML = "Song: Nanha Munha Raahi Hu";
        }
    }



    book = god.isPlaying();
    if(rite>0.2) {
        circle(rex, rey, 26);
        sainik.stop();

        if(book == false) {
            god.play();
            document.getElementById("dhokha").innerHTML = "Song: Hanuman Chalisa";
        }
    }


}

function modelLoaded() {
    console.log("fdjesls");
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        lex = results[0].pose.leftWrist.x;
        ley = results[0].pose.leftWrist.y;
        rex = results[0].pose.rightWrist.x;
        rey = results[0].pose.rightWrist.y;
        console.log("Left Wrist X= " + lex + " Left Wrist Y= " +ley);
        console.log("Right Wrist X= " + rex + " Right Wrist Y= " +rey);

        charge = results[0].pose.keypoints[9].score;
        console.log(charge);

        rite = results[0].pose.keypoints[10].score;
        console.log(rite);

    }
}




function stop() {
  sainik.stop();
  god.stop();
  document.getElementById("dhokha").innerHTML = "Song: ";

}