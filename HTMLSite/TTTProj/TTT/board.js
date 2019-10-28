//used to carry player number and mark, can be expanded later
class Player{
    constructor(token, pNumber){;
    this.token = token;
    // this.name = name
    this.pNumber = pNumber;
    }
}

//start game: creates players 1 and 2, create board, and notify of player info
// function startGame(){

//     newBoard = createBoard();
//     notifyStartInfo();
//     const p1 = new Player("X", 1);
//     const p2 = new Player("O", 2);
//     //create players
//     const list = [p1, p2, newBoard]
//     return list;
// }

//create board, a 1D array sectors 0-8
/*

0  | 1 |  2
   |   |
------------
3  | 4 |  5
   |   |
------------
6  | 7 |  8
   |   |

*/
class Board extends Array{
    constructor(){
        super();
        // board = new Board(9);
    }
}

//creates board/ array
function createBoard() {
    const newBoard = new Board(9).fill(false);
    return newBoard;
}

//notify players of start conditions
function notifyStartInfo(){
    const message = "Player 1 (P1) will go first, \n" +
    "and P1 will be identified by \"X\" on the board. \n" +
    "P2 will be identified by \"O\".\n "
    console.log(message);
    document.getElementById("bottomBox").textContent=message;
}




// //get input
// function getInput(){
//     // var input = prompt("Enter location> ")

//     var readlineSync = require('readline-sync');
    
//     // Wait for user's response.
//     var location = readlineSync.question("Enter location> ");
//     // console.log('Hi ' + userName + '!');
    
//     // Handle the secret text (e.g. password).
//     // var favFood = readlineSync.question('What is your favorite food? ', {
//     // hideEchoBack: true // The typed text on screen is hidden by `*` (default).
//     // });
//     console.log("Lets check if " + location + " is a valid location... boop beep boop.");

//     return location;
// }

    // rl.on('line', function (answer) {
    //     // console.log("you entered : "+answer)
    //     rl.close();
    //     process.stdin.destroy();
    //     // oLine = answer;
    // })
    // return answer
// });
    // rl.close();
    // process.stdin.destroy();
    // return pORf;
    
    // rl.on('line', (line) => {
    // //   switch (line.trim()) {
    //     // case 'hello':
    //     //   console.log('world!');
    //     //   break;
    //     // default:
    //     if (line >8 || line <0){
    //       console.log(`Please enter a valid location`);}
    //     oLine = line;
    
    //     //   break;
    // //   }
    // //   rl.prompt();
    // });
    // rl.write(oLine)
    // return oLine;
    // rl.close();
// };

//check if space is valid
function isValidSpace (board, move, player){
    console.log(board[0])
    // if (board[move]){
    //     errorMsg(player);
    // }else{
    //     board[move] = player.token;
    //     console.log("valid\n")
    // }
}

//error if invalid sector selcted
// mark board
//check if win condition
//change player turn

//end game message
function endGame() {
    const endMsg = "\nThank you for playing. \n";
    console.log(endMsg);    
}



function returnLocation(loc){
    // alert("returned " + loc)
    document.getElementById("bottomBox").textContent="Location: " + loc + " selected.";
    updateTurn(loc);


    
}

function updateTurn(loc){
    var p1Token = "X";
    var p2Token = "O";

    if (token == p1Token){
        // var location = returnLocation();
        token = p2Token; 
        validLocation()

        claimLocation(token, newBoard); 
    }else{
        token = p1Token;
    }
}


function playGame(){
    // const answer = false;
    // var entered = "";
    var p1Token = "X";
    var p2Token = "O";
    var turnToken = p1Token;
    const p1 = new Player("X", 1);
    const p2 = new Player("O", 2);
    var turn = 0;

    newBoard = createBoard();
    notifyStartInfo();




    
    for (var i = 0; i < 10; i++){


    }
    // for (i = 5; i > 0; i--){
        // if ( (i % 2) == 0 ){
            // entered = getInput();
            // console.log(gameList.board )
            // isValidSpace(gameList.board, entered, gameList.p1);
            // console.log(entered);
        // }else{
        //     getInput("location", newBoard, gameList.p2);
        // }
    // }


    // getInput("location", newBoard, gameList.p1);

    // endGame();

}

// playGame();
