function setup()
{
    video = createCapture(VIDEO);
    video.size(680, 400);
    video.position(40, 200);
    canvas = createCanvas(550, 400);
    canvas.position(860, 200);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#DEF6FC');
}

function modelLoaded()
{
    console.log('PoseNet Carregado!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}





































































































