var config = {
  apiKey: "AIzaSyCZZvyO6jQoqPlp8oulij7CC44uxkbkyPs",
  authDomain: "rps-multiplayer-14cd0.firebaseapp.com",
  databaseURL: "https://rps-multiplayer-14cd0.firebaseio.com",
  projectId: "rps-multiplayer-14cd0",
  storageBucket: "",
  messagingSenderId: "437159311180"
};
firebase.initializeApp(config);

var database = firebase.database();
var wins1 = 0;
var losses1 = 0;
var wins2 = 0;
var losses2 = 0;
var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");
var playerOneChoice;
var playerTwoChoice;

connectedRef.on("value", function (snap) {
  if (snap.val()) {
    var con = connectionsRef.push(true);
    con.onDisconnect().remove();
  }
});

connectionsRef.on("value", function (snapshot) {
  $("#playersInGame").text(snapshot.numChildren());
})

$(".submitOne").on("click", function () {
  event.preventDefault();
  var playerOne = $("#playerOneInput").val().trim();
  //   console.log(playerOne);
  $("#playerOneInput").val("");
  $("#playerOneUsername").text(playerOne);
})
$(".submitTwo").on("click", function () {
  event.preventDefault();
  var playerTwo = $("#playerTwoInput").val().trim();
  //   console.log(playerTwo);
  $("#playerTwoInput").val("");
  $("#playerTwoUsername").text(playerTwo);
})

$(".choiceOne").on("click", function () {
  var playerOneChoice = $(this).attr("id");
  //   console.log(playerOneChoice);
  database.ref().push({
    playerOneChoice: playerOneChoice
  });



  // if ((playerOneChoice === "rock1") || (playerOneChoice === "paper1") || (playerOneChoice === "scissors1")) {

  //   if ((playerOneChoice === "rock1" && playerTwoChoice === "scissors2") ||
  //     (playerOneChoice === "scissors1" && playerTwoChoice === "paper2") ||
  //     (playerOneChoice === "paper1" && playerTwoChoice === "rock2")) {
  //     wins1++;
  //   } else if (playerOneChoice === playerTwoChoice) {

  //   } else {
  //       losses1++;
  //   }
  // };
})

database.ref().on("value", function (snapshot) {
  if (snapshot.playerOneChoice.exists() && snapshot.playerTwoChoice.exists()) {
    // if (snapshot.child(playerOneChoice).exists() && snapshot.child(playerTwoChoice).exists()) {

    console.log(playerOneChoice);
    console.log(playerTwoChoice);
  }
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

$("#wins1").text(wins1);
$("#losses1").text(losses1);
$("#wins2").text(wins2);
$("#losses2").text(losses2);

database.ref().set({
  wins1: wins1,
  losses1: losses1,
  wins2: wins2,
  losses2: losses2,
})

$(".choiceTwo").on("click", function () {
  var playerTwoChoice = $(this).attr("id");
  //   console.log(playerTwoChoice);
  database.ref().push({
    playerTwoChoice: playerTwoChoice
  });

  // if((playerTwoChoice === "rock1") || (playerTwoChoice === "paper1") || (playerTwoChoice === "scissors1")) {

  //   if ((playerTwoChoice === "rock1" && playerOneChoice === "scissors2") ||
  //     (playerTwoChoice === "scissors1" && playerOneChoice === "paper2") ||
  //     (playerTwoChoice === "paper1" && playerOneChoice === "rock2")) {
  //     wins1++;
  //   } else if (playerTwoChoice === playerOneChoice) {

  //   } else {
  //     losses1++;
  //   }
  // };
})

// playerTwoChoice.on("value", function(snapshot) {
//   console.log(snapshot.val());
// });

$(".chatSubmit").on("click", function () {
  event.preventDefault();
  var chat = $("#inlineChatInput").val().trim();
  $(".chatHistory").append("<p>" + chat);
  //   console.log(chat);
  $("#inlineChatInput").val("");
})
