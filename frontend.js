//////////////////////////////////////////////////////
// ------------------- OLD OR UI --------------------//

function addTableDataToRow(){
    var randomBoardIndex = Math.floor(Math.random()*boardChoices.length);
    board = boardChoices[randomBoardIndex];
    ships = [
        {   "found": false,
            "span": [1,2,3],
            "hits": [0,0,0]
        },
        {   "found": false,
            "span": [8,9,10],
            "hits": [0,0,0]
        }
    ];
    attemptsTaken = 0;
    gameStatus = true;
    sunkenShips = 0;
    var table = document.getElementById("money");
    var row = document.createElement("tr");
    var xIndex = 0;
    table.append(row);
    // table.append(row);  // note that calling this again is useless because it would only 'move' the already named / assigned element.

    board.forEach(element => {
        let square = document.createElement("td")
        square.className = 'masked';
        square.setAttribute("id",xIndex);
        row.append(square.cloneNode(true))
        xIndex++;
    });

    maskedSquares = document.getElementsByClassName("masked");
    Array.from(maskedSquares).forEach(element => {
        element.onclick = processAttempt;
    });   
}

function processAttempt(){
    attemptsTaken++;
    let location = this.id;
    var shipNumber = board[location];
    // update css grid and js objects
    if (shipNumber == 0) {
        this.className = 'miss';
        document.getElementById("gameStatus").innerHTML = "So sad, you missed. Mwo-haha-haha!"
    } else {
        this.className = 'hit';
        document.getElementById("gameStatus").innerHTML = "A hit."
        var thisSpan = ships[shipNumber-1].span;
        for (let i = 0; i < thisSpan.length; i++) {
            if (location == thisSpan[i]) {
                ships[shipNumber-1].hits[i] = 1;
                break;
            }
        }
        // Check if the ship is downed and update js object //
        var thisHits = ships[shipNumber-1].hits;
        for (let index = 0; index < thisHits.length; index++) {
            if (thisHits[index] == 0) {
                break;
            } else if (index + 1 == thisHits.length) {
                ships[shipNumber-1].found = true;
                document.getElementById("gameStatus").innerHTML = "You sunk my battleship!";
                ships[shipNumber-1].span.forEach(element => {
                    document.getElementById(element).className = "sunken";
                });
                sunkenShips++;
            }
        }
    }
    // Check if all ships are sunk
    if(sunkenShips >= ships.length) {
        document.getElementById("gameStatus").innerHTML = "You won!";
}
}

function simpleGame(){

    addTableDataToRow();
    document.getElementById('simpleGame').onclick = null;
}
