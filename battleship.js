//////////////////////////////////////////////////////
// ------------------- OBJECTS --------------------//
//////////////////////////////////////////////////////
export const gridWidth = 10;
const gridHeight = 10;
const shipTypes = {
    carrier:    5,
    battleship: 4,
    cruiser:    3,
    submarine:  3,
    destroyer:  2
};
const directions = ["vertical","horizontal"];
var gameStatus;
var sunkenShips;
var grid;

window.onload = function() {

//////////////////////////////////////////////////////
    /////// CURRENTLY NOT BEING USED /////////////////
    // document.getElementById('simpleGame').onclick = simpleGame;
//////////////////////////////////////////////////////
    grid = makeBlankGrid();
// TODO -> work on the below function.  Try to break things down into simpler examples.  Start with a randomly assigned just one ship picked from the list of ships.
    placeOneShip(grid,shipTypes.cruiser);

    //MAKE THE FOLLOWING SECTION INTO ONE LOOP --- TO ITERATE UNTIL YOU HAVE A SHIP PLACED
    // var currentCoordinate = getRandomCoordinate();
    // var potentialShipCoordinates = []
    // var nextCoordinateIsAvailable = isCoordinateAvailable(currentCoordinate[0],currentCoordinate[1]);
    // if (nextCoordinateIsAvailable){
    //     potentialShipCoordinates.push([currentCoordinate[0],currentCoordinate[1]]);
    // };
    // var direction = getRandomDirection(); // NOTE - I may need to do something about seeding random to ensure it really is random
    // var nextCoordinate = getNextCoordinate(currentCoordinate,direction);
    // nextCoordinateIsAvailable = isCoordinateAvailable(nextCoordinate[0],nextCoordinate[1]);
    // if (nextCoordinateIsAvailable){
    //     potentialShipCoordinates.push([nextCoordinate[0],nextCoordinate[1]]);
    // };
//---------------------------------------------------------------------------------------




    // If free - update the grid...print to console so I have feedback on how this is going.
    // Continue the above until you finish the lenght of the ship (start with a random 4, if that helps simplify things)
    // Once done - repeate the above for the next ship
    // Kepp doing that until all ships are marked.
    // Print grid --- that is your grid.
}

function makeBlankGrid(){ // Create a blank 10x10 grid in Javascript only --- note that it is represented as grid[y][x] which is counterintuitive, but easy to preview in js
    var grid = [];
    for (let row = 0; row < gridWidth; row++) {  // Inserts rows
        grid[row] = [];
        for (let column = 0; column < gridWidth; column++) {
            grid[row][column] = 0;            
        }
    }
    return grid;
}

function getRandomDirection(){
    var randomDirection = directions[Math.floor(Math.random()*directions.length)];
    return randomDirection;
}

function getRandomCoordinate(){
    function getRandomColumn(){
        return Math.floor(Math.random()*gridWidth);
    }
    function getRandomRow(){
        return Math.floor(Math.random()*gridHeight);
    }
    return [getRandomColumn(),getRandomRow()];
}

function isCoordinateAvailable(row,column){
    var coordinateValue = grid[row][column];
    if (coordinateValue == 0) {
        return true;
    } else {
        return false;
    }
}

function getNextCoordinate(currentCoordinate,direction) {
    var nextCoordinate = [];
    switch (direction) {
        case "vertical":
            nextCoordinate = [currentCoordinate[0],currentCoordinate[1]+1];
            break;
        case "horizontal":
            nextCoordinate = [currentCoordinate[0]+1,currentCoordinate[1]];
            break;
        default:
            break;
    }
    return nextCoordinate;
}

function placeOneShip(grid, shipLength){
    var direction = getRandomDirection();
    var currentCoordinate = getRandomCoordinate();
    var column = currentCoordinate[0];
    var row = currentCoordinate[1];
    var candidateCoordinates = [];
    if(direction == "horizontal"){
        console.log("Do the horizontal");
        for (let index = 0; index < shipLength; index++) {
            if(grid[row][column+index] == 0){                                // If grid is free - then add to set of candidate coordinates
                candidateCoordinates.push([row,column+index]);
                console.log("candidateCoordinates:") + console.log(candidateCoordinates);               // LOG - DEV TEST
            } else {
                //TODO: THIS HAS FAILED AND WE NEED TO RETRY WITH A NEW INITIAL COORDINATE in order to run this scenario -I am going to have to have some good mock data.
                // Not really sure how to mock that data - except to make a function that creates a function with data in it... or I could develope this first part and it will
                // create the data for me... either one...maybe make a mock data - that would be good practice and interesting from the QA perspective.
            }      
        }
    } else if(direction == "vertical") { 
        console.log("Do the vertical");
        for (let index = 0; index < shipLength; index++) {
            if(grid[row+index][column] == 0){                                // If grid is free - then add to set of candidate coordinates
                candidateCoordinates.push([row+index,column]);
                console.log("candidateCoordinates:") + console.log(candidateCoordinates);               // LOG - DEV TEST
            } else {
                //TODO: THIS HAS FAILED AND WE NEED TO RETRY WITH A NEW INITIAL COORDINATE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
            }       
        }
    } else {
        console.log("ERROR: Direction not assigned")
    }

    // TODO: COMPLETE THE ARRAY AND ACTUALLY ADD IT TO THE MAIN GRID SOME
}




//////////////////////////////////////////////////////
// ------------------- OLD OR UI --------------------//
//////////////////////////////////////////////////////

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
