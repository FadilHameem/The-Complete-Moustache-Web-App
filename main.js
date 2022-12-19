noseX=0;
noseY=0;

function preload(){
    moustache_image = loadImage('https://i.postimg.cc/nVyGKSKs/moustache.png');
}

function setup(){
    canvas = createCanvas(1000,1000);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(moustache_image, noseX, noseY, 30, 30);
}

function modelLoaded(){
    console.log('Posenet Is Initialized');
}

function take_snapshot(){
    save('Moustache_Image.jpg');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y + 10;
        console.log('Nose X = ' + noseX);
        console.log('Nose Y = ' + noseY);
    }
}