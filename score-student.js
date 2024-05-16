function youScore(score) {
  if (score >= 80) {
    return "A";
  } else if (score > 70) {
    return "B";
  } else if (score > 50) {
    return "C";
  } else if (score > 40) {
    return "D";
  } else {
    return "F";
  }
}
let linda = 80;
let manop = 56;
console.log(youScore(linda));
console.log(youScore(manop));
