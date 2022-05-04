function uncensor() {
  var findVar = document.getElementById("find").value;
  var missing = document.getElementById("missing").value;

  for (let i = 0; i < findVar.length; i++) {
    findVar = findVar.replace("*", missing[i]);
  }
  document.getElementById("xR").innerHTML = findVar;
}
