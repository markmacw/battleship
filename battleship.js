//////////////////////////////////////////////////////
// ------------------- OBJECTS --------------------//
//////////////////////////////////////////////////////
const gridWidth = 10;
const gridHeight = 10;
const shipTypes = {         // key/value pairs in object
    carrier:    5,
    battleship: 4,
    cruiser:    3,
    submarine:  3,
    destroyer:  2
};
const directions = ["horizontal","vertical"];
var gameStatus;
var sunkenShips;
var mainGrid;

const test_name = "||| > TEST: "
const validation = "   EXPECT: "
const indent = "    >  ";
const test_note = "    *  ";
const result_pass = "RESULT: PASS             :)";
const result_fail = "RESULT: FAIL                 :(";

window.onload = function() {
//////////////////////////////////////////////////////
// ------------------- RUN TESTS --------------------//
//////////////////////////////////////////////////////
    getBlankGrid_spec();
    getRandomDirection_spec();
    getRandomCoordinate_spec();
    isCoordinateAvailable_spec();
    // getNextCoordinate_spec();
    tryShipPlacement_spec();
    // but I need to add a number of conditions where the array fails to increment into a legal area...
    // and maybe also ones where the grid being used is not actually empty.
    // WORKING SECTION
    mainGrid = getBlankGrid();
}

function getBlankGrid(){ // Create a blank 10x10 grid in Javascript only --- note that it is represented as grid[y][x] which is counterintuitive, but easy to preview in js
    var grid = [];
    for (let row = 0; row < gridWidth; row++) {  // Inserts rows
        grid[row] = [];
        for (let column = 0; column < gridWidth; column++) {
            grid[row][column] = 0;            
        }
    }
    return grid;
}

function getBlankGrid_spec(){
    console.log(test_name + "getBlankGrid_spec");
    console.log(validation + "grid has 10 columns and 10 rows");
    var grid = getBlankGrid();
    if (grid.length == 10 && grid[0].length == 10) {
        console.log(indent + result_pass);
    } else {
        console.log(indent + result_fail);
    }
};

function getRandomDirection(){
    var randomDirection = directions[Math.floor(Math.random()*directions.length)];
    return randomDirection;
}

function getRandomDirection_spec(){
    console.log(test_name + "getRandomDirection_spec");
    console.log(validation + "direction is returned");
    var randomDirection = getRandomDirection();
    if(randomDirection == "vertical" || randomDirection == "horizontal"){
        console.log(indent + result_pass);
    } else {
        console.log(indent + result_fail);
    }
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

function getRandomCoordinate_spec(){
    console.log(test_name + "getRandomCoordinate_spec");
    console.log(validation + "coordinate is returned");
    var randomCoordinate = getRandomCoordinate();
    if(randomCoordinate[0] >= 0 && randomCoordinate[0] <= 10
        && randomCoordinate[1] >= 0 && randomCoordinate[1] <= 10){
        console.log(indent + result_pass);
    } else {
        console.log(indent + result_fail);
    }
}

function isCoordinateAvailable(grid,row,column){
    var coordinateValue = grid[row][column];
    if (coordinateValue == 0) {
        return true;
    } else {
        return false;
    }
}

function isCoordinateAvailable_spec(){
    console.log(test_name + "isCoordinateAvailable_spec");
    console.log(validation + "checks for coordinate being available -- positive test condition:");
    var testGrid = getBlankGrid();
    var coordinateAvailability = isCoordinateAvailable(testGrid,0,0);
    if(coordinateAvailability == true){
        console.log(indent + result_pass);
    } else {
        console.log(indent + result_fail);
    }
    console.log(validation + "checks for coordinate being available -- negative test condition:");
    testGrid[1,2] = "battleship";
    var coordinateAvailability = isCoordinateAvailable(testGrid,1,2);
    if(coordinateAvailability == true){
        console.log(indent + result_pass);
    } else {
        console.log(indent + result_fail);
    }
}

// function getNextCoordinate(currentCoordinate,direction) {
//     var nextCoordinate = [];
//     switch (direction) {
//         case "vertical":        // vertical changes the first value in the array, which represents the row number
//             nextCoordinate = [currentCoordinate[0]+1,currentCoordinate[1]];
//             break;
//         case "horizontal":      // horizontal changes the second value in the array, which represents the column number.
//             nextCoordinate = [currentCoordinate[0],currentCoordinate[1]+1];
//             break;
//         default:
//             break;
//     }
//     return nextCoordinate;
// }

// function getNextCoordinate_spec(){
//     console.log(test_name + "getNextCoordinate_spec");
//     function test_vertical(){
//         console.log(validation + "Test 1: coordinate is returned and incremented vertically");
//         var nextCoordinate = getNextCoordinate([10,10],"vertical");
//         if(nextCoordinate[0] === 11 && nextCoordinate[1] === 10){
//         console.log(indent + result_pass);
//         } else {
//             console.log(indent + result_fail);
//         }
//         console.log(nextCoordinate);
//         console.log(validation + "Test 2: coordinate is returned and incremented horizontal");
//     }
//     function test_horizontal(){
//         nextCoordinate = getNextCoordinate([10,10],"horizontal");
//         if(nextCoordinate[0] === 10 && nextCoordinate[1] === 11){
//             console.log(indent + result_pass);
//         } else {
//             console.log(indent + result_fail);
//         }
//         console.log(nextCoordinate);
//     }
//     test_vertical();
//     test_horizontal();
// }

function tryShipPlacement(direction, grid, shipType, startingCoordinate){
    var shipLength = shipTypes[shipType];
    var row = startingCoordinate[0];
    var column = startingCoordinate[1];
    var confirmedAvailableCoordinates = [];
    switch(direction){
        case "horizontal":        
            for (var index = 0; index < shipLength; index++) {
                if(grid[row][column+index] == 0){
                    confirmedAvailableCoordinates.push([row,column+index]);
                } else {
                    confirmedAvailableCoordinates = [];
                    break;
                }      
            }
            return confirmedAvailableCoordinates;
        case "vertical":
            for (var index = 0; index < shipLength; index++) {
                
                if(grid[row+index][column] == 0){      // TODO: The problem with my tests lies here somewhere with undefined
                    console.log("before push" + confirmedAvailableCoordinates);
                    confirmedAvailableCoordinates.push([row+index,column]);
                    console.log("after push" + confirmedAvailableCoordinates);
                } else {
                    confirmedAvailableCoordinates = [];
                    break;
                }      
            }
            return confirmedAvailableCoordinates;
    }

    // if(isCoordinateAvailable(grid,row,column)){
    //     console.log("coordinate is available");
    // } else {
    //     console.log("coordinate is not available");
    // }

    

}

function tryShipPlacement_spec(){
    console.log(test_name + "tryShipPlacement_spec");
    function positive_test_horizontal(){
        console.log(validation + "Horizontal Positive test - should return a full coordinate set.");
        var testGrid = getBlankGrid();
        var resultCoordinates = tryShipPlacement("horizontal", testGrid, "carrier", [8,5]);
        console.log(resultCoordinates);
        if(resultCoordinates[4] != null){
            console.log(indent + result_pass);
        } else {
            console.log(indent + result_fail);
        }
    }
    function negative_test_horizontal(){
        console.log(validation + "Horizontal Negative test - should return a blank coordinate set.");
        var testGrid = getBlankGrid();
        var resultCoordinates = tryShipPlacement("horizontal", testGrid, "carrier", [1,8]);
        console.log(resultCoordinates);
        if(resultCoordinates[0] == null){
            console.log(indent + result_pass);
        } else {
            console.log(indent + result_fail);
        }
    }
    function positive_test_vertical(){
        console.log(validation + "Vertical Positive test - should return a full coordinate set.");
        var testGrid = getBlankGrid();
        var resultCoordinates = tryShipPlacement("vertical", testGrid, "carrier", [5,8]);
        console.log(resultCoordinates);
        if(resultCoordinates[4] != null){
            console.log(indent + result_pass);
        } else {
            console.log(indent + result_fail);
        }
    }
    function negative_test_vertical(){
        console.log(validation + "Vertical Negative test - should return a blank coordinate set.");
        var testGrid = getBlankGrid();
        console.log(resultCoordinates);
        var resultCoordinates = tryShipPlacement("vertical", testGrid, "carrier", [8,2]);
        console.log(resultCoordinates);
        if(resultCoordinates[0] == null){
            console.log(indent + result_pass);
        } else {
            console.log(indent + result_fail);
        }
    }

    positive_test_horizontal();
    negative_test_horizontal();
    positive_test_vertical();
    negative_test_vertical();
}


//////////////////////////////////////////////////////
// ------------------- OLD OR UI --------------------//
//////////////////////////////////////////////////////

/**
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

 */