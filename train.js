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

//var database = firebase.database();

// Adding new train
$("#add-train-btn").on("click", function(event) {
    console.log("click");
    event.preventDefault();

    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDes = $("#des-input").val().trim();
    var trainTime = moment($("#train-time").val().trim(), "HH:MM").format("X");
    var trainRate = moment($("#train-rate").val().trim(), "MM:SS").format("LTS");
});