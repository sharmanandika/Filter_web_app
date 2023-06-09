var Nose_x=0;
var Nose_y=0;
var Mustache="";
function preload(){
Mustache=loadImage("https://i.postimg.cc/BvM4fKf2/images.png");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes);
}

function draw(){
image(video,0,0,300,300)
image(Mustache,Nose_x-15,Nose_y-15,30,30);
}

function take_snapshot(){

    save("myImage.png");
}

function modelLoaded(){
    console.log("posenet is inatilized")
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    Nose_x=results[0].pose.nose.x;
    Nose_y=results[0].pose.nose.y;
    console.log("nose x="+results[0].pose.nose.x);
console.log("nose y="+results[0].pose.nose.y);
}

}