
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




///realcode

///how to live update 
// change 'queues/id' for all data
var queuesRef = firebase.database().ref('queues');
theRef.on('value', function(snapshot) {
document.getElementById("lmao").innerHTML = JSON.stringify(snapshot.val());
});



// var theRef = firebase.database().ref();
// theRef.once('', function(snapshot) {
//   update(snapshot);
// });

function createQueue(){
    var eventName = document.getElementById("eventname").value;
    var hostName = document.getElementById("hostname").value;
    var location = document.getElementById("location").value;
    var startTime = document.getElementById("starttime").value;
    var endTime = document.getElementById("endtime").value;
    // console.log(eventName);
    var id = "129483526749024759473";
    console.log("omegalul");
    newQueue(eventName,hostName, location,startTime,endTime,id);
}


function newQueue(eventName, hostName, location,start,end,id){
    var queue = {}
    var theRef = firebase.database().ref('queues');
    var newPostRef = theRef.push();
    console.log(newPostRef.key);
    newPostRef.set({
        "eventName": eventName,
        "hostName": hostName,
        "location": location,
        "id": newPostRef.key,
        "start": start,
        "end": end,
        "people":0,
    });

    // //idtokey
    // var theRef = firebase.database().ref('idtokey');
    // var newPostRef = theRef.push();
    // console.log(newPostRef.key);
    // newPostRef.set({
    //     id:newPostRef.key,
    // });
}

function createUser(){
  var name = document.getElementById("name").value;
  var code = document.getElementById("code").value;
  addUser(name, code);
}

function addUser(name, code) {
  var theRef = firebase.database().ref('queues/people');
  var newUserRef = theRef.push();
  newPostRef.set({
      "name": name,
      "code": code,
  });
}

function readQueue(){
    
}
function update(){
    var theRef = firebase.database().ref('queues');
    theRef.once('value', function(snapshot) {
    document.getElementById("lmao").innerHTML = JSON.stringify(snapshot.val());
    // console.log(snapshot);
    });
}
