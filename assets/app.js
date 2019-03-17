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

  $(".submitOne").on("click", function() {
      event.preventDefault();
      var playerOne = $("#playerOneInput").val().trim();
    //   console.log(playerOne);
      $("#playerOneInput").val("");
      $("#playerOneUsername").text(playerOne);
  })
  $(".submitTwo").on("click", function() {
      event.preventDefault();
      var playerTwo = $("#playerTwoInput").val().trim();
    //   console.log(playerTwo);
      $("#playerTwoInput").val("");
      $("#playerTwoUsername").text(playerTwo);
  })

  $(".choiceOne").on("click", function() {
      var playerOneChoice = $(this).attr("id");
    //   console.log(playerOneChoice);
  })
  $(".choiceTwo").on("click", function() {
      var playerTwoChoice = $(this).attr("id");
    //   console.log(playerTwoChoice);
  })

  $(".chatSubmit").on("click", function() {
      event.preventDefault();
      var chat = $("#inlineChatInput").val().trim();
      $(".chatHistory").append("<p>" + chat);
    //   console.log(chat);
      $("#inlineChatInput").val("");
  })
