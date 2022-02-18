function preload() {
}

function setup()
{
    canvas = createCanvas(1300,1000);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video, 250, 250, 750, 620);
    stroke(90,50,195);
    fill(90,50,195)
    circle(90, 90, 120);
    circle(90, 925, 120);
    circle(1210, 925, 120);
    circle(1210, 90, 120);
    
    stroke(90,150,10);
    fill(90,150,10);
    rect(147, 80, 1006, 40);
    rect(147, 913, 1006, 40);
    rect(65, 149, 40, 717);
    rect(1190, 149, 40, 717);

}

function take_snapshot ()
{
    save('student_name.png');
}

