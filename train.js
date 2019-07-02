// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDWicpZr5wHIGVqmXLKw5mDQ5XsRsOOyK0",
  authDomain: "train-time-1f782.firebaseapp.com",
  databaseURL: "https://train-time-1f782.firebaseio.com",
  projectId: "train-time-1f782",
  storageBucket: "",
  messagingSenderId: "849788908739",
  appId: "1:849788908739:web:01b340cc696c3740"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// Adding new train
$("#add-train-btn").on("click", function (event) {
  console.log("click");
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var trainDes = $("#des-input").val().trim();
  var trainTime = moment($("#train-time").val().trim(), "hh:mm").format("X"); //trying to figure this out
  var trainRate = moment($("#train-rate").val().trim(), "MM:SS").format("Y"); //saying 2019 ??

  var newTrain = {
    name: trainName,
    destination: trainDes,
    time: trainTime,
    frequency: trainRate
  };

  database.ref().push(newTrain);
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);
});