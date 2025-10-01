// STYLING THE ROBOT USING JAVASCRIPT
document.getElementById("lefteye").style.backgroundColor = "purple";

document.getElementById("body").style.border = "5px green solid";

document.getElementById("mouth").style.borderRadius = "30px";

document.getElementById("righteye").style.border = "2px purple dotted";

document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
// document.getElementById("leftarm").style.color = "blue";

document.getElementById("body").style.color = "#FF0000";

document.getElementById("head").style.borderTop = "20px brown solid";
document.getElementById("head").style.backgroundColor = "grey";

// EXERCISES
document.getElementById("head").style.transform = "rotate(-15deg)";
document.getElementById("nose").style.borderRadius = "50%";
document.getElementById("rightarm").style.backgroundColor = "green";
document.getElementById("mouth").style.backgroundColor = "pink";


// ANIMATING THE ROBOT
var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var leftArm = document.getElementById("leftarm");

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);


function moveUpDown(e) {
  var robotPart = e.target;
  var top = 0;

  var id = setInterval(frame, 20);

  function frame() {
    robotPart.style.top = top + "%";
    top++;
    if (top === 20 ) {
      clearInterval(id);
    };
  };
};


function moveRightLeft(e) {
  var robotPart = e.target;
  var left = 0;

  var id = setInterval(frame, 20);

  function frame() {
    robotPart.style.left = left + "%";
    left++;
    if (left === 70 ) {
      clearInterval(id);
    };
  };
};



