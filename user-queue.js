// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAYi1VET68DBLv9P06JmcNjP5GIi2x2FzI",
  authDomain: "qup-database-6a42e.firebaseapp.com",
  databaseURL: "https://qup-database-6a42e.firebaseio.com",
  projectId: "qup-database-6a42e",
  storageBucket: "qup-database-6a42e.appspot.com",
  messagingSenderId: "539244085701",
  appId: "1:539244085701:web:a08e1e45f1d481360c4bac",
  measurementId: "G-6LDDFJWKSK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.database();

var table = document.getElementById("queue");
var tbodyArray = document.getElementsByClassName("tbodyElement");

///how to live update
// change 'queues/id' for all data
// var infoObj = {};
var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
console.log(id);
var infoRef = firebase.database().ref('queues/'+id);
infoRef.on('value', function(snapshot) {
var infoObj = snapshot.val();
//console.log(infoObj);
// eventname").value;
//     var hostName = document.getElementById("hostname").value;
//     var location = document.getElementById("location").value;
//     var startTime = document.getElementById("starttime").value;
//     var endTime = document.getElementById("endtime"
document.getElementById("info").innerHTML = "Event Name: " + infoObj.eventName + "         Host Name: " + infoObj.hostName + "        Location: " + infoObj.location;
// document.getElementById("time").innerHTML = "    Start: " + infoObj.startTime + "    End: " + str(infoObj.endTime);
var count = 1;
for(let key in infoObj.people){
  console.log(key);
  addToTable(count, "666-666-6666", infoObj.people[key].name);
  count = count + 1;
}
});
// console.log(infoObj);




function addToTable(num, name, phone) {
 // console.log(table.length);
  var last = table.length;
  var row = table.insertRow(last);
  var cell1 = row.insertCell(last);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(1);
  cell1.innerHTML = num;
  cell2.innerHTML = name;
  cell3.innerHTML = phone;
}
