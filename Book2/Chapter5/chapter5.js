// document.getElementById("aboutMe").innerHTML = "This is <em>your</em> paragraph!";

var item1;
var item2;
var item3;

function newList() {
  item1 = prompt("Enter a new first thing: ");
  item2 = prompt("Enter a new second thing: ");
  item3 = prompt("Enter a new third thing: ");
  updateList();
}

document.getElementById("changeList").onclick = newList;

function updateList() {
  document.getElementById("firstThing").innerHTML = item1;
  document.getElementById("secondThing").innerHTML = item2;
  document.getElementById("thirdThing").innerHTML = item3;
}
