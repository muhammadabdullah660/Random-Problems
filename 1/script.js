// console.log("x");
// var x = parseInt(prompt("Enter a number"));
// function sum() {
//   return x + x;
// }
// var xy = sum();
// console.log(xy);
function firstX() {
  let input = document.getElementById("one").value;
  let xy = [];
  for (let index = 0; index < input.length; index++) {
    let x = input.charCodeAt(index);
    if (x >= 97 && x <= 97 + 26) {
      xy.push(x - 96);
    } else if (x >= 65 && x <= 65 + 26) {
      xy.push(x - 64);
    }
  }
  document.getElementById("xR").innerHTML = `${xy}`;
}
