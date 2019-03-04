// Business logic
var player1="";
var player2="";

var throwdice= function (){
  return Math.floor(6*Math.random())+1;
}

function player(turn){
  this.roll=0;
  this.tempscore=0;
  this.totalscore=0;
  this.turn=turn;
  this.playerName;
}
//checking for player 1
player.prototype.rollone=function(){
  if(this.roll===1){
    this.tempscore=0;
    alert("Oooops"+ this.playerName +", you rolled a 1! Next Player")
  }
  else{
    this.tempscore+= this.roll;
  }
}
