/**
 * working on coloring the board for winner.
 */

//game driver
function startGame() {
  notifyStartInfo();
}
//notify players of start conditions
function notifyStartInfo() {
  const message =
    'P1 is "X" and goes first, ' +
    'P2 is "O".\n  Select a location on the board.';
  console.log(message);
  //change the infoBox message to start info
  document.getElementById("bottomBox").textContent = message;
  //allows for location selection after START pressed.
  winBool = false;
}
//creates board/ array
function createBoard() {
  //fill board with false values
  var newBoard = new Array(9).fill(false);
  console.log(newBoard);
  return newBoard;
}
//HTML return click location
function returnLocation(loc) {
  // alert("returned " + loc)
  if (!winBool) {
    //if win, don't mark board
    document.getElementById("bottomBox").textContent =
      "Location: " + loc + " selected.";
    var location = loc;
    //validate and process selection
    checkLocation(location);
  }
}

function newCheck(playerTotal, whichPlayer, winConditions) {
  for (let i = 0; i < winConditions.length; i++) {
    if (
      playerTotal.includes(winConditions[i][0]) &&
      playerTotal.includes(winConditions[i][1]) &&
      playerTotal.includes(winConditions[i][2])
    ) {
      console.log("Win found!");
      winBool = true;
      whoWon = "winBool" + whichPlayer;
      console.log("Who: " + whichPlayer);
    //   document.getElementById("bottomBox").textContent = whichPlayer + " Wins!";
    if (whichPlayer == "P1") {
        winBoolP1 = true;
      } else if (whichPlayer == "P2") {
        winBoolP2 = true;
      }
    }

  }


}

function checkLocation(location) {
  if (turnsTaken == 8) {
    console.log("Tie");
  }
  if (newBoard[location] != false) {
    errorMessage("invalid location " + location + " > try again.");
  } else {
    turnsTaken++;
    newBoard[location] = tokenTurn;
    document.getElementById(location).textContent = tokenTurn;
    if (turnsTaken > 4) {
      checkIfWinner();
    }
    if (tokenTurn == p1Token) {
      tokenTurn = p2Token;
    } else {
      tokenTurn = p1Token;
    }
    console.log(newBoard);
  }
  if (turnsTaken == 9 && !winBool) {
    console.log("Tie");
    let tieArraySpots = [0, 1, 2, 4, 7];
    document.getElementById("bottomBox").textContent = "Players TIE!";
    for (let i = 0; i < 6; i++) {
      document.getElementById(tieArraySpots[i]).style.backgroundColor = "green";
    }
  }
  console.log(turnsTaken);
}

function checkIfWinner() {
  //arrays to hold for player win conditions
  var p1_total = new Array();
  var p2_total = new Array();
  let p1 = "P1";
  let p2 = "P2";
  let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7]
  ];

  //pushes both players moves from board to player array
  for (var i = 0; i < newBoard.length; i++) {
    if (newBoard[i] == p1Token) {
      p1_total.push(i);
    } else if (newBoard[i] == p2Token) {
      p2_total.push(i);
    }
  }

  console.log("P1: " + p1_total + " | P2: " + p2_total);
  newCheck(p1_total, p1, winConditions);
  newCheck(p2_total, p2, winConditions);    

  //If p1 array contains any of the following win conditions
  if (winBoolP1) {
    //notify infoBox and console of a win
    paintBoardForWinner(p1_total, p1, winConditions, "orange");
    // document.getElementById("bottomBox").textContent = "Player1 Wins!";
    //if win for X change winning locations to Orange

  } else if (winBoolP2) {
    
    //notify infoBox and console of a win
    paintBoardForWinner(p2_total, p2, winConditions, "blue");
    // document.getElementById("bottomBox").textContent = "Player2 Wins!";
    //if win for O change winning locations to Blue
  }
}

function paintBoardForWinner(p_total, player, winConditions, color) {
  document.getElementById("bottomBox").textContent = player + " Wins!";

  let playerArray = player + "_total";
  for (let i = 0; i < winConditions.length; i++) {
    if (
      p_total.includes(winConditions[i][0]) &&
      p_total.includes(winConditions[i][1]) &&
      p_total.includes(winConditions[i][2])
    ) {
      for (let j = 0; j < 4; j++) {
        document.getElementById(
          winConditions[i][j]
        ).style.backgroundColor = color;
      }
    }
  }
}

//error emitter
function errorMessage(message) {
  document.getElementById("bottomBox").textContent = "Error: " + message;
}
//resets the board
function resetGame() {
  location.reload();
}

let whoWon = "";
var newBoard = createBoard();
var p1Token = "X";
var p2Token = "O";
var tieToken = "T";
var tokenTurn = p1Token;
var turnsTaken = 0;
var winBoolP1 = false;
var winBoolP2 = false;
let winBool = true;
