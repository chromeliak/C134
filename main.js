
function setup() {
    canvas = createCanvas(380,380);
    canvas.center();
    video  = createCapture(VIDEO);
    video.size(380,380);
    video = createCapture(VIDEO);
    video.hide();
    r = random(255); 
    g = random(255);
    b = random(255);
    fill(r,g,b);
    stroke(r,g,b)
    document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;
    video.size(380,380);

}

function preload(){
    img = loadImage('dog_cat.jpg');
}

function draw() {
    image(video, 0,0,640,420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350,);
}
