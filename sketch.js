let mic;

let started = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol = mic.getLevel();
  background(0);

  let EllipseX = width / 11;
  let EllipseY = height / 12;
  let EllipseSize = vol;

  //row1
  drawEllipse(EllipseX * 0.75, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 1.8125, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 2.875, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 3.9375, EllipseY, EllipseSize);
  drawOtherEllipse(EllipseX * 5, EllipseY, EllipseSize);
  drawOtherEllipse(EllipseX * 6, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 7.0625, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 8.125, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 9.1875, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 10.25, EllipseY, EllipseSize);

  //row2
  drawEllipse(EllipseX * 0.8125, EllipseY * 2.25, EllipseSize);
  drawEllipse(EllipseX * 1.859375, EllipseY * 2.1875, EllipseSize);
  drawEllipse(EllipseX * 2.90625, EllipseY * 2.125, EllipseSize);
  drawEllipse(EllipseX * 3.953125, EllipseY * 2.0625, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 7.046875, EllipseY * 2.0625, EllipseSize);
  drawEllipse(EllipseX * 8.09375, EllipseY * 2.125, EllipseSize);
  drawEllipse(EllipseX * 9.140625, EllipseY * 2.1875, EllipseSize);
  drawEllipse(EllipseX * 10.1875, EllipseY * 2.25, EllipseSize);

  //row3
  drawEllipse(EllipseX * 0.875, EllipseY * 3.5, EllipseSize);
  drawEllipse(EllipseX * 1.90625, EllipseY * 3.375, EllipseSize);
  drawOtherEllipse(EllipseX * 2.9375, EllipseY * 3.25, EllipseSize);
  drawEllipse(EllipseX * 3.96875, EllipseY * 3.125, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 7.03125, EllipseY * 3.125, EllipseSize);
  drawOtherEllipse(EllipseX * 8.0625, EllipseY * 3.25, EllipseSize);
  drawEllipse(EllipseX * 9.09375, EllipseY * 3.375, EllipseSize);
  drawEllipse(EllipseX * 10.125, EllipseY * 3.5, EllipseSize);

  //row4
  drawEllipse(EllipseX * 0.9375, EllipseY * 4.75, EllipseSize);
  drawEllipse(EllipseX * 1.953125, EllipseY * 4.5625, EllipseSize);
  drawEllipse(EllipseX * 2.96875, EllipseY * 4.375, EllipseSize);
  drawEllipse(EllipseX * 3.984375, EllipseY * 4.1875, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 7.015625, EllipseY * 4.1875, EllipseSize);
  drawEllipse(EllipseX * 8.03125, EllipseY * 4.375, EllipseSize);
  drawEllipse(EllipseX * 9.046875, EllipseY * 4.5625, EllipseSize);
  drawEllipse(EllipseX * 10.0625, EllipseY * 4.75, EllipseSize);
  
  //row5
  drawOtherEllipse(EllipseX, EllipseY * 6, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 5.75, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 5.5, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 5.25, EllipseSize);
  drawOtherEllipse(EllipseX * 5, EllipseY * 5, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 5, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 5.25, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 5.5, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 5.75, EllipseSize);
  drawOtherEllipse(EllipseX * 10, EllipseY * 6, EllipseSize);

  //row6
  drawOtherShort67Ellipse(EllipseX, EllipseY * 7, EllipseSize);
  drawShort6Ellipse(EllipseX * 2, EllipseY * 6.75, EllipseSize);
  drawShort6Ellipse(EllipseX * 3, EllipseY * 6.5, EllipseSize);
  drawShort6Ellipse(EllipseX * 4, EllipseY * 6.25, EllipseSize);
  drawShort6Ellipse(EllipseX * 5, EllipseY * 6, EllipseSize);
  drawOtherShort67Ellipse(EllipseX * 6, EllipseY * 6, EllipseSize);
  drawShort6Ellipse(EllipseX * 7, EllipseY * 6.25, EllipseSize);
  drawShort6Ellipse(EllipseX * 8, EllipseY * 6.5, EllipseSize);
  drawShort6Ellipse(EllipseX * 9, EllipseY * 6.75, EllipseSize);
  drawOtherShort67Ellipse(EllipseX * 10, EllipseY * 7, EllipseSize);

  //row7
  drawShort78Ellipse(EllipseX * 0.78125, EllipseY * 7.5, EllipseSize);
  drawShort78Ellipse(EllipseX * 1.8359375, EllipseY * 7.21875, EllipseSize);
  drawOtherShort67Ellipse(EllipseX * 2.890625, EllipseY * 6.9375, EllipseSize);
  drawShort78Ellipse(EllipseX * 3.9453125, EllipseY * 6.65625, EllipseSize);
  drawShort78Ellipse(EllipseX * 5, EllipseY * 6.375, EllipseSize);
  drawShort78Ellipse(EllipseX * 6, EllipseY * 6.375, EllipseSize);
  drawShort78Ellipse(EllipseX * 7.0546875, EllipseY * 6.65625, EllipseSize);
  drawOtherShort67Ellipse(EllipseX * 8.109375, EllipseY * 6.9375, EllipseSize);
  drawShort78Ellipse(EllipseX * 9.1640625, EllipseY * 7.21875, EllipseSize);
  drawShort78Ellipse(EllipseX * 10.21875, EllipseY * 7.5, EllipseSize);
  
  //row8
  drawShort78Ellipse(EllipseX * 0.5625, EllipseY * 8.25, EllipseSize);
  drawShort78Ellipse(EllipseX * 1.671875, EllipseY * 7.90625, EllipseSize);
  drawShort78Ellipse(EllipseX * 2.78125, EllipseY * 7.5625, EllipseSize);
  drawShort78Ellipse(EllipseX * 3.890625, EllipseY * 7.21875, EllipseSize);
  drawShort78Ellipse(EllipseX * 5, EllipseY * 6.875, EllipseSize);
  drawShort78Ellipse(EllipseX * 6, EllipseY * 6.875, EllipseSize);
  drawShort78Ellipse(EllipseX * 7.109375, EllipseY * 7.21875, EllipseSize);
  drawShort78Ellipse(EllipseX * 8.21875, EllipseY * 7.5625, EllipseSize);
  drawShort78Ellipse(EllipseX * 9.328125, EllipseY * 7.90625, EllipseSize);
  drawShort78Ellipse(EllipseX * 10.4375, EllipseY * 8.25, EllipseSize);
  
  //row9
  drawShort910Ellipse(EllipseX * 0.34375, EllipseY * 9, EllipseSize);
  drawShort910Ellipse(EllipseX * 1.5078125, EllipseY * 8.59375, EllipseSize);
  drawShort910Ellipse(EllipseX * 2.671875, EllipseY * 8.1875, EllipseSize);
  drawShort910Ellipse(EllipseX * 3.8359375, EllipseY * 7.78125, EllipseSize);
  drawShort910Ellipse(EllipseX * 5, EllipseY * 7.375, EllipseSize);
  drawShort910Ellipse(EllipseX * 6, EllipseY * 7.375, EllipseSize);
  drawShort910Ellipse(EllipseX * 7.1640625, EllipseY * 7.78125, EllipseSize);
  drawShort910Ellipse(EllipseX * 8.328125, EllipseY * 8.1875, EllipseSize);
  drawShort910Ellipse(EllipseX * 9.4921875, EllipseY * 8.59375, EllipseSize);
  drawShort910Ellipse(EllipseX * 10.65625, EllipseY * 9, EllipseSize);
  
  //row10
  drawShort910Ellipse(EllipseX * 0.125, EllipseY * 9.75, EllipseSize);
  drawShort910Ellipse(EllipseX * 1.34375, EllipseY * 9.28125, EllipseSize);
  drawShort910Ellipse(EllipseX * 2.5625, EllipseY * 8.8125, EllipseSize);
  drawShort910Ellipse(EllipseX * 3.78125, EllipseY * 8.34375, EllipseSize);
  drawOtherShortEllipse(EllipseX * 5, EllipseY * 7.875, EllipseSize);
  drawOtherShortEllipse(EllipseX * 6, EllipseY * 7.875, EllipseSize);
  drawShort910Ellipse(EllipseX * 7.21875, EllipseY * 8.34375, EllipseSize);
  drawShort910Ellipse(EllipseX * 8.4375, EllipseY * 8.8125, EllipseSize);
  drawShort910Ellipse(EllipseX * 9.65625, EllipseY * 9.28125, EllipseSize);
  drawShort910Ellipse(EllipseX * 10.875, EllipseY * 9.75, EllipseSize);

  function drawEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(255);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 4, vol * 50);
    console.log(vol);
    //look up lerp for smoothness
  }

  function drawOtherEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(200);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 10, vol * 10);
    console.log(vol);
  }
  
    function drawOtherShortEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(200);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 10, vol * 5);
    console.log(vol);
  }
  
    function drawOtherShort67Ellipse(EllipseX, EllipseY, EllipseSize) {
    fill(200);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 10, vol * 3);
    console.log(vol);
  }
  
    function drawShort6Ellipse(EllipseX, EllipseY, EllipseSize) {
    fill(200);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 2.5, vol * 21);
    console.log(vol);
  }
    
    function drawShort78Ellipse(EllipseX, EllipseY, EllipseSize) {
    fill(200);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 2.5, vol * 23);
    console.log(vol);
  }
  
    function drawShort910Ellipse(EllipseX, EllipseY, EllipseSize) {
    fill(200);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 4, vol * 28);
    console.log(vol);
  }


  //row1
  drawVerticalEllipse(EllipseX * 0.75, EllipseY, EllipseSize);
  drawVerticalEllipse(EllipseX * 1.8125, EllipseY, EllipseSize);
  drawVerticalEllipse(EllipseX * 2.875, EllipseY, EllipseSize);
  drawVerticalEllipse(EllipseX * 3.9375, EllipseY, EllipseSize);
  drawVerticalEllipse(EllipseX * 7.0625, EllipseY, EllipseSize);
  drawVerticalEllipse(EllipseX * 8.125, EllipseY, EllipseSize);
  drawVerticalEllipse(EllipseX * 9.1875, EllipseY, EllipseSize);
  drawVerticalEllipse(EllipseX * 10.25, EllipseY, EllipseSize);

  //row2
  drawVerticalEllipse(EllipseX * 0.8125, EllipseY * 2.25, EllipseSize);
  drawVerticalEllipse(EllipseX * 1.859375, EllipseY * 2.1875, EllipseSize);
  drawVerticalEllipse(EllipseX * 2.90625, EllipseY * 2.125, EllipseSize);
  drawVerticalEllipse(EllipseX * 3.953125, EllipseY * 2.0625, EllipseSize);
  drawVerticalEllipse(EllipseX * 5, EllipseY * 2, EllipseSize);
  drawVerticalEllipse(EllipseX * 6, EllipseY * 2, EllipseSize);
  drawVerticalEllipse(EllipseX * 7.046875, EllipseY * 2.0625, EllipseSize);
  drawVerticalEllipse(EllipseX * 8.09375, EllipseY * 2.125, EllipseSize);
  drawVerticalEllipse(EllipseX * 9.140625, EllipseY * 2.1875, EllipseSize);
  drawVerticalEllipse(EllipseX * 10.1875, EllipseY * 2.25, EllipseSize);

  //row3
  drawVerticalEllipse(EllipseX * 0.875, EllipseY * 3.5, EllipseSize);
  drawVerticalEllipse(EllipseX * 1.90625, EllipseY * 3.375, EllipseSize);
  drawVerticalEllipse(EllipseX * 3.96875, EllipseY * 3.125, EllipseSize);
  drawVerticalEllipse(EllipseX * 5, EllipseY * 3, EllipseSize);
  drawVerticalEllipse(EllipseX * 6, EllipseY * 3, EllipseSize);
  drawVerticalEllipse(EllipseX * 7.03125, EllipseY * 3.125, EllipseSize);
  drawVerticalEllipse(EllipseX * 9.09375, EllipseY * 3.375, EllipseSize);
  drawVerticalEllipse(EllipseX * 10.125, EllipseY * 3.5, EllipseSize);

  //row4
  drawVerticalEllipse(EllipseX * 0.9375, EllipseY * 4.75, EllipseSize);
  drawVerticalEllipse(EllipseX * 1.953125, EllipseY * 4.5625, EllipseSize);
  drawVerticalEllipse(EllipseX * 2.96875, EllipseY * 4.375, EllipseSize);
  drawVerticalEllipse(EllipseX * 3.984375, EllipseY * 4.1875, EllipseSize);
  drawVerticalEllipse(EllipseX * 5, EllipseY * 4, EllipseSize);
  drawVerticalEllipse(EllipseX * 6, EllipseY * 4, EllipseSize);
  drawVerticalEllipse(EllipseX * 7.015625, EllipseY * 4.1875, EllipseSize);
  drawVerticalEllipse(EllipseX * 8.03125, EllipseY * 4.375, EllipseSize);
  drawVerticalEllipse(EllipseX * 9.046875, EllipseY * 4.5625, EllipseSize);
  drawVerticalEllipse(EllipseX * 10.0625, EllipseY * 4.75, EllipseSize);
  
  //row5
  drawVerticalEllipse(EllipseX * 2, EllipseY * 5.75, EllipseSize);
  drawVerticalEllipse(EllipseX * 3, EllipseY * 5.5, EllipseSize);
  drawVerticalEllipse(EllipseX * 4, EllipseY * 5.25, EllipseSize);
  drawVerticalEllipse(EllipseX * 6, EllipseY * 5, EllipseSize);
  drawVerticalEllipse(EllipseX * 7, EllipseY * 5.25, EllipseSize);
  drawVerticalEllipse(EllipseX * 8, EllipseY * 5.5, EllipseSize);
  drawVerticalEllipse(EllipseX * 9, EllipseY * 5.75, EllipseSize);

  //row6
  drawShortVert6Ellipse(EllipseX * 2, EllipseY * 6.75, EllipseSize);
  drawShortVert6Ellipse(EllipseX * 3, EllipseY * 6.5, EllipseSize);
  drawShortVert6Ellipse(EllipseX * 4, EllipseY * 6.25, EllipseSize);
  drawShortVert6Ellipse(EllipseX * 5, EllipseY * 6, EllipseSize);
  drawShortVert6Ellipse(EllipseX * 7, EllipseY * 6.25, EllipseSize);
  drawShortVert6Ellipse(EllipseX * 8, EllipseY * 6.5, EllipseSize);
  drawShortVert6Ellipse(EllipseX * 9, EllipseY * 6.75, EllipseSize);

  //row7
  drawShortVert78Ellipse(EllipseX * 0.78125, EllipseY * 7.5, EllipseSize);
  drawShortVert78Ellipse(EllipseX * 1.8359375, EllipseY * 7.21875, EllipseSize);
  drawShortVert78Ellipse(EllipseX * 3.9453125, EllipseY * 6.65625, EllipseSize);
  drawShortVert78Ellipse(EllipseX * 5, EllipseY * 6.375, EllipseSize);
  drawShortVert78Ellipse(EllipseX * 6, EllipseY * 6.375, EllipseSize);
  drawShortVert78Ellipse(EllipseX * 7.0546875, EllipseY * 6.65625, EllipseSize);
  drawShortVert78Ellipse(EllipseX * 9.1640625, EllipseY * 7.21875, EllipseSize);
  drawShortVert78Ellipse(EllipseX * 10.21875, EllipseY * 7.5, EllipseSize);
  
  //row8
  drawShortVert78Ellipse(EllipseX * 0.5625, EllipseY * 8.25, EllipseSize);
  drawShortVert78Ellipse(EllipseX * 1.671875, EllipseY * 7.90625, EllipseSize);
  drawShortVert78Ellipse(EllipseX * 2.78125, EllipseY * 7.5625, EllipseSize);
  drawShortVert78Ellipse(EllipseX * 3.890625, EllipseY * 7.21875, EllipseSize);
  drawShortVert78Ellipse(EllipseX * 5, EllipseY * 6.875, EllipseSize);
  drawShortVert78Ellipse(EllipseX * 6, EllipseY * 6.875, EllipseSize);
  drawShortVert78Ellipse(EllipseX * 7.109375, EllipseY * 7.21875, EllipseSize);
  drawShortVert78Ellipse(EllipseX * 8.21875, EllipseY * 7.5625, EllipseSize);
  drawShortVert78Ellipse(EllipseX * 9.328125, EllipseY * 7.90625, EllipseSize);
  drawShortVert78Ellipse(EllipseX * 10.4375, EllipseY * 8.25, EllipseSize);
  
  //row9
  drawShortVert910Ellipse(EllipseX * 0.34375, EllipseY * 9, EllipseSize);
  drawShortVert910Ellipse(EllipseX * 1.5078125, EllipseY * 8.59375, EllipseSize);
  drawShortVert910Ellipse(EllipseX * 2.671875, EllipseY * 8.1875, EllipseSize);
  drawShortVert910Ellipse(EllipseX * 3.8359375, EllipseY * 7.78125, EllipseSize);
  drawShortVert910Ellipse(EllipseX * 5, EllipseY * 7.375, EllipseSize);
  drawShortVert910Ellipse(EllipseX * 6, EllipseY * 7.375, EllipseSize);
  drawShortVert910Ellipse(EllipseX * 7.1640625, EllipseY * 7.78125, EllipseSize);
  drawShortVert910Ellipse(EllipseX * 8.328125, EllipseY * 8.1875, EllipseSize);
  drawShortVert910Ellipse(EllipseX * 9.4921875, EllipseY * 8.59375, EllipseSize);
  drawShortVert910Ellipse(EllipseX * 10.65625, EllipseY * 9, EllipseSize);
  
  //row10
  drawShortVert910Ellipse(EllipseX * 0.125, EllipseY * 9.75, EllipseSize);
  drawShortVert910Ellipse(EllipseX * 1.34375, EllipseY * 9.28125, EllipseSize);
  drawShortVert910Ellipse(EllipseX * 2.5625, EllipseY * 8.8125, EllipseSize);
  drawShortVert910Ellipse(EllipseX * 3.78125, EllipseY * 8.34375, EllipseSize);
  drawShortVert910Ellipse(EllipseX * 7.21875, EllipseY * 8.34375, EllipseSize);
  drawShortVert910Ellipse(EllipseX * 8.4375, EllipseY * 8.8125, EllipseSize);
  drawShortVert910Ellipse(EllipseX * 9.65625, EllipseY * 9.28125, EllipseSize);
  drawShortVert910Ellipse(EllipseX * 10.875, EllipseY * 9.75, EllipseSize);

  function drawVerticalEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(255);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 50, vol * 4);
    console.log(vol);
    //look up lerp for smoothness
  }    
    
    function drawShortVert6Ellipse(EllipseX, EllipseY, EllipseSize) {
    fill(200);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 56, vol * 1);
    console.log(vol);
  }
  
    function drawShortVert78Ellipse(EllipseX, EllipseY, EllipseSize) {
    fill(200);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 55, vol * 1);
    console.log(vol);
  }
    function drawShortVert910Ellipse(EllipseX, EllipseY, EllipseSize) {
    fill(200);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 55, vol * 2);
    console.log(vol);
  }

}
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }


function mousePressed() {
  started = true;
  userStartAudio();
}
