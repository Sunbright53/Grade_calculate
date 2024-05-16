let score = prompt("You score");
if (score >= 80) {
  document.getElementById("result").innerHTML = "You grade are A";
} else if (score > 70) {
  document.getElementById("result").innerHTML = "You grade are B";
} else if (score > 60) {
  document.getElementById("result").innerHTML = "You grade are C";
} else if (score > 50) {
  document.getElementById("result").innerHTML = "You grade are D";
} else {
  document.getElementById("result").innerHTML = "You grade are F";
}
