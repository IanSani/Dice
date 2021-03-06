// Business logic
var player1="";
var player2="";

var throwdice= function (){
  return Math.floor(6*Math.random())+1;
}

function Player(turn){
  this.roll=0;
  this.tempscore=0;
  this.totalscore=0;
  this.turn=turn;
  this.playerName;
}
//checking for player 1
Player.prototype.rollone=function(){
  if(this.roll===1){
    this.tempscore=0;
    alert("Oooops"+ this.playerName +", you rolled a 1! Next Player")
  }
  else{
    this.tempscore+= this.roll;
  }
}
// section for hold!
Player.prototype.hold= function(){
  this.totalscore+= this.tempscore;
  this.tempscore=0;
  alert(this.playerName+ " Times up, next player")
}
// check for 100!
Player.prototype.winnerCheck=function(){
  if(this.totalscore>=100){
    alert(this.playerName + " You won!")
  }
}
Player.prototype.startGame= function(){
  this.roll=0;
  this.tempscore=0;
  this.totalscore=0;
  this.playerName="";
}
var clearValues=function(){
  $(".player1Name").val("");
  $(".player2Name").val("");
}

//user interface logic
$(document).ready(function(){
  $("button#Engage").click(function(event){
   player1 = new Player(true);
   player2 =  new Player(false);
   $(".player-console").show();
   $(".start-menu").hide();

   var player1Name = $(".player1Name").val();
   $("#player1Name").text(player1Name);

   var player2Name = $(".player2Name").val();
   $("#player2Name").text(player2Name);

   player1.playerName=player1Name;
   player2.playerName=player2Name;

 });
 $("button#start-game").click(function(event){
   $(".player-console").hide();
   clearValues();
   player1.startGame();
   player2.startGame();
   $("#session-total-1").empty();
   $("#total-score-1").empty();
   $("#die-roll-1").empty();
   $("#session-total-2").empty();
   $("#total-score-2").empty();
   $("#die-roll-2").empty();

   $(".start-menu").show();
 });
 $("button#player1-roll").click(function(event){
     player1.roll = throwdice();
     $("#die-roll-1").text(player1.roll);
     player1.rollone();
     $("#session-total-1").text(player1.tempscore);
   });

   $("button#player2-roll").click(function(event){
     player2.roll = throwdice();
     $("#die-roll-2").text(player2.roll);
     player2.rollone();
     $("#session-total-2").text(player2.tempscore);
   });
   $("button#player1-hold").click(function(event){
    player1.hold();
    $("#total-score-1").text(player1.totalscore);
    $("#session-total-1").empty();
    $("#die-roll-1").empty();
    player1.winnerCheck();
  });
  $("button#player2-hold").click(function(event){
    player2.hold();
    $("#total-score-2").text(player2.totalscore);
    $("#session-total-2").empty();
    $("#die-roll-2").empty();
    player2.winnerCheck();
  });
});
