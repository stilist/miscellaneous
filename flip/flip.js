var artwork, canvas;
var debugDiv;

var pic = new Image();
pic.src = 'a.gif';

function debug(message) {
 debugDiv.innerHTML += message + '<br>';
}

function drawFlip(startHeight, finalHeight, finalWidth) {
 artwork.clearRect(0, 0, 74, 74);

 // generic vars
 var top = 0, destX = 0, destY = 0, destHeight = 0, topGrade = 0;

 var boxWidth = canvas.clientHeight, boxHeight = canvas.clientWidth;
 var artHeight = pic.height, artWidth = pic.width;

 var topOffset = Math.floor((boxHeight - startHeight) / 2);
 var leftOffset = Math.floor((boxWidth - finalWidth) / 2);
 var srcPixelWidth = artWidth / finalWidth;

 if (startHeight > finalHeight)
  topGrade = (startHeight - finalHeight)
 else
  topGrade = (finalHeight - startHeight)

 topGrade = (topGrade / finalWidth) / 2;

 for (var i = 0; i < finalWidth; i++) {
  top += topGrade;
  destX = leftOffset + i;
  destY = topOffset - top;
  destHeight = startHeight + (top * 2);

  // src, src x, src y, src width, src height, dest x, dest y, dest width, dest height
  // 1    2      3      4          5           6       7       8           9
  //                1    2  3  4  5          6             8  9
  artwork.drawImage(pic, i, 0, 1, artHeight, destX, destY, 1, destHeight);
 }
}

function init() {
 debugDiv = document.getElementById('debug');

 canvas = document.getElementById('artwork');
 artwork = canvas.getContext('2d');

 drawFlip(40, 64, 64);
}
