var table = document.getElementById("queue");
var tbodyArray = document.getElementsByClassName("tbodyElement");

function addToTable() {
  console.log(table.length);
  var last = table.length;
  var row = table.insertRow(last);
  var cell1 = row.insertCell(last);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
  cell3.innerHTML = "NEW CELL3";
}

function getCode(){
  var code = document.getElementById("code").value;
  return code;
}
