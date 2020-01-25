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


function post(){
    var theRef = firebase.database().ref('queues');
    var updates = {};
    updates['/queues'] = 'Party';
    return firebase.database().ref().update(updates);
}
