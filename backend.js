import { x } from './testOnly.js'

  /////////////////////////////////////////////////////
 // ------------------- OBJECTS --------------------//
/////////////////////////////////////////////////////
const gridWidth = 10;
const gridHeight = 10;
const shipLengths = {         // key/value pairs in object
    carrier:    5,
    battleship: 4,
    cruiser:    3,
    submarine:  3,
    destroyer:  2
};
const shipTypes = Object.keys(shipLengths);
const directions = ["horizontal","vertical"];
let mainGrid;
  //////////////////////////////////////////
 // --OBJECTS related to GAME PROGRESS--///
//////////////////////////////////////////
let attemptsTaken = 0;  // processAttempt()
var shipHits = [];      // processAttempt() checkShipStatus()   checkAllShipStatus()
var sunkenShips = [];   // checkShipStatus()
  //////////////////////////////////////////
 // --OBJECTS related to TEST RESULTS-- ///
//////////////////////////////////////////
const test_name = ">>> Test Name: "
const test_validation = "   EXPECT: "
const test_indent = "    >  ";
const test_note = "    *  ";
const test_result_pass = "RESULT: PASS             :)";
const test_result_fail = "RESULT: FAIL                 :(";
const test_debugging = "    !  "
//\\\\\\\\\\\\\\\\\\\
//--END of OBJECTS--\\
//\\\\\\\\\\\\\\\\\\\\\

//////////////////////////////////////////////////////
// ------------------- RUN TESTS --------------------//
//////////////////////////////////////////////////////
window.onload = function() {
    getBlankGrid_spec();
    getRandomDirection_spec();
    getRandomCoordinate_spec();
    shipPlacementAvailability_spec();
    placeOneShip_spec(getBlankGrid());
    buildMainGrid_spec();
//////////////////////////////////////////////////////
// ------------------- MAKE DATA --------------------//
//////////////////////////////////////////////////////
    document.getElementById('simpleGame').onclick = makeGame;
    document.getElementById('giveUpButton').onclick = giveUp;

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
    console.log(test_validation + "grid has 10 columns and 10 rows");
    var grid = getBlankGrid();
    if (grid.length == 10 && grid[0].length == 10) {
        console.log(test_indent + test_result_pass);
    } else {
        console.log(test_indent + test_result_fail);
    }
};

function getRandomDirection(){
    var randomDirection = directions[Math.floor(Math.random()*directions.length)];
    return randomDirection;
}

function getRandomDirection_spec(){
    console.log(test_name + "getRandomDirection_spec");
    console.log(test_validation + "direction is returned");
    var randomDirection = getRandomDirection();
    if(randomDirection == "vertical" || randomDirection == "horizontal"){
        console.log(test_indent + test_result_pass);
    } else {
        console.log(test_indent + test_result_fail);
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
    console.log(test_validation + "coordinate is returned");
    var randomCoordinate = getRandomCoordinate();
    if(randomCoordinate[0] >= 0 && randomCoordinate[0] <= 10
        && randomCoordinate[1] >= 0 && randomCoordinate[1] <= 10){
        console.log(test_indent + test_result_pass);
    } else {
        console.log(test_indent + test_result_fail);
    }
}

function shipPlacementAvailability(direction, grid, shipName, startingCoordinate){
    var shipLength = shipLengths[shipName];
    var row = startingCoordinate[0];
    var column = startingCoordinate[1];
    var confirmedAvailableCoordinates = [];
    switch(direction){
        case "horizontal":        
            for (var index = 0; index < shipLength; index++) {
                if(grid[row][column+index] == undefined){
                    confirmedAvailableCoordinates = [];
                    break;
                }
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
                if(grid[row+index] == undefined){               // for this one i only check that the row is defined... otherwise i get error trying to check the column when row is already undefined.
                    confirmedAvailableCoordinates = [];
                    break;
                }
                if(grid[row+index][column] == 0){
                    confirmedAvailableCoordinates.push([row+index,column]);
                } else {
                    confirmedAvailableCoordinates = [];
                    break;
                }      
            }
            return confirmedAvailableCoordinates;
    }    
}

function shipPlacementAvailability_spec(){
    console.log(test_name + "shipPlacementAvailability_spec");
    function positive_test_horizontal(){
        console.log(test_validation + "Horizontal Positive test - should return a full coordinate set.");
        var testGrid = getBlankGrid();
        var resultCoordinates = shipPlacementAvailability("horizontal", testGrid, "carrier", [8,5]);
        console.log("Result Coordinates:"); console.log(resultCoordinates);
        if(resultCoordinates[4] != null){
            console.log(test_indent + test_result_pass);
        } else {
            console.log(test_indent + test_result_fail);
        }
    }
    function negative_test_horizontal(){
        console.log(test_validation + "Horizontal Negative test - should return a blank coordinate set.");
        var testGrid = getBlankGrid();
        var resultCoordinates = shipPlacementAvailability("horizontal", testGrid, "carrier", [1,8]);
        console.log("Result Coordinates:"); console.log(resultCoordinates);
        if(resultCoordinates[0] == null){
            console.log(test_indent + test_result_pass);
        } else {
            console.log(test_indent + test_result_fail);
        }
    }
    function positive_test_vertical(){
        console.log(test_validation + "Vertical Positive test - should return a full coordinate set.");
        var testGrid = getBlankGrid();
        var resultCoordinates = shipPlacementAvailability("vertical", testGrid, "carrier", [5,8]);
        console.log("Result Coordinates:"); console.log(resultCoordinates);
        if(resultCoordinates[4] != null){
            console.log(test_indent + test_result_pass);
        } else {
            console.log(test_indent + test_result_fail);
        }
    }
    function negative_test_vertical(){
        console.log(test_validation + "Vertical Negative test - should return a blank coordinate set.");
        var testGrid = getBlankGrid();
        var resultCoordinates = shipPlacementAvailability("vertical", testGrid, "carrier", [8,2]);
        console.log("Result Coordinates:"); console.log(resultCoordinates);
        if(resultCoordinates[0] == null){
            console.log(test_indent + test_result_pass);
        } else {
            console.log(test_indent + test_result_fail);
        }
    }
    positive_test_horizontal();
    negative_test_horizontal();
    positive_test_vertical();
    negative_test_vertical();
}

function placeOneShip(grid,shipName){
    var candidateCoordinate;
    var candidateDirection;
    var confirmedCoordinates = [];
    while(confirmedCoordinates.length === 0){
        candidateCoordinate = getRandomCoordinate();
        candidateDirection = getRandomDirection();
        confirmedCoordinates = shipPlacementAvailability(candidateDirection,grid,shipName,candidateCoordinate);
    }
    for(let i = 0; i < confirmedCoordinates.length; i++){
        var row = confirmedCoordinates[i][0];
        var column = confirmedCoordinates[i][1];
        grid[row][column] = shipName;
    }
    return grid;
}

function placeOneShip_spec(grid){
    console.log(test_name + "placeOneShip_spec");    
    var grid = placeOneShip(grid,"carrier");
    console.log(test_validation + "Place a Carrier - positive test case");
    console.log(grid);
    var shipPieceCount = 0;
    for (let row = 0; row < grid.length; row++) {
        var innerArrayLength = grid[row].length;
        for (let column = 0; column < innerArrayLength; column++) {
            if(grid[row][column]=="carrier"){
                shipPieceCount++;
            }
            
        }
    }
    if(shipPieceCount == 5){
        console.log(test_indent + test_result_pass);
    } else {
        console.log(test_indent + test_result_fail);
    }
}

function buildMainGrid(){
    var grid = getBlankGrid();
    for (const [shipName, length] of Object.entries(shipLengths)) {
        placeOneShip(grid,shipName);
    }
    return grid;
}

function buildMainGrid_spec(){
    console.log(test_name + "buildMainGrid_spec");    
    console.log(test_validation + "Check that all ships exist in their full length:");
    var passingShips = 0;
    var testGrid = buildMainGrid();
    for (const [shipName, length] of Object.entries(shipLengths)) {
        var shipLength = 0;
        for (let row = 0; row < testGrid.length; row++) {
            var innerArrayLength = testGrid[row].length;
            for (let column = 0; column < innerArrayLength; column++) {
                if(testGrid[row][column]==shipName){
                    shipLength++;
                }            
            }        
        }
        if(shipLength == shipLengths[shipName]){
            // console.log(test_indent + shipName + " has passed!");
            passingShips++;
        } else {
            console.log(test_indent + test_result_fail);
            break;
        }

    }
    if(passingShips == Object.keys(shipLengths).length) {
        console.log(test_indent + test_result_pass);
    }
    console.log(testGrid);
}

function makeGame(){
    mainGrid = buildMainGrid();
    drawStartingBoard(mainGrid);
    removeStartButton();
}

function drawStartingBoard(grid){
    var table = document.getElementById("currentGameBoard");
    for (let rowId = 0; rowId < grid.length; rowId++) {
        var row = document.createElement("tr");
        row.setAttribute("row",rowId);
        table.appendChild(row);
        for (let columnId = 0; columnId < grid[rowId].length; columnId++) {
            var boardSpace = document.createElement("td")
            boardSpace.className = 'masked';
            boardSpace.setAttribute("column",columnId);
            boardSpace.onclick = processAttempt;
            row.appendChild(boardSpace);
        }        
    }
}

function removeStartButton(){
    var startButton = document.getElementById("simpleGame");
    startButton.remove();
}

function processAttempt(){
    attemptsTaken++;
    var selectedColumn = this.getAttribute("column");
    var selectedRow = this.parentElement.getAttribute("row");
    var valueOfSelection = mainGrid[selectedRow][selectedColumn];
    document.getElementById("gameProgress").innerHTML = "Attempt #" + attemptsTaken + ': row=' + selectedRow + ", column=" + selectedColumn;
    // TODO: search "append text to end of elemnet" and try to fix the above 
    console.log("Attempt #" + attemptsTaken + ': row=' + selectedRow + ", column=" + selectedColumn);
    if (valueOfSelection == 0) {
        this.onclick = null;
        this.className = 'miss';
        document.getElementById("turnResult").innerHTML = "So sad, you missed. Mwo-haha-haha!"
    } else {
        this.onclick = null;
        this.className = 'hit';
        document.getElementById("turnResult").innerHTML = "A hit."
        shipHits.push(valueOfSelection);
    }
    var shipWasSunk = checkShipStatus(valueOfSelection);
    if (shipWasSunk == true){
        checkAllShipsStatus();
    }
}   

function checkShipStatus(valueOfSelection){
    var shipHitCounter = 0;
    shipHits.forEach(ship => {
        if(valueOfSelection == ship){
            shipHitCounter++;
        }
    });
    if (shipHitCounter == shipLengths[valueOfSelection]){
        document.getElementById("turnResult").innerHTML = "You sunk my " + valueOfSelection + " !";
        // new function reveal sunken ship???
        // at this point you need to change the class for each of the coordinates corresponding to the sunken ship.
        sunkenShips.push(valueOfSelection);
        return true;
    }
}

// WORK ON THIS NEXT --- use it inside of the above function to mark sunken ships as such.
function getCoordinateSetForShip(shipName){
    var coordinateSet = [];
    for (let row = 0; row < mainGrid.length; row++) {
        for (let column = 0; column < mainGrid[row].length; column++) {
            if (shipName == mainGrid[row][column]) {
                coordinateSet.push([row,column]);
            }
        }
    }
    return coordinateSet;
}

function giveUp(){
    for (let rowId = 0; rowId < mainGrid.length; rowId++) {
        for (let columnId = 0; columnId < mainGrid[rowId].length; columnId++) {
            var cellValue = mainGrid[rowId][columnId];
            var element = document.querySelector("[row='" + rowId + "'] [column='" + columnId + "']");
            if (cellValue == 0) {
                element.onclick = null;
                element.className = 'miss';
            } else {
                element.onclick = null;
                element.className = 'hit';
            }        
        }
    }
}

function checkAllShipsStatus(){
    var allShipsSunk = false;
    for (let index = 0; index < shipTypes.length; index++) {
        var hitCounter = 0;
        var shipName = shipTypes[index];
        shipHits.forEach(ship => {
            if (ship == shipName){
                hitCounter++;
            }
        });
        if (hitCounter != shipLengths[shipName]){
            break;
        } else if (index == shipTypes.length - 1){
            allShipsSunk = true;
        }
    }
    if(allShipsSunk == true){
        giveUp();
        document.getElementById("turnResult").innerHTML = "You sunk all my ships!!!!!!!!!!!!!!!!!!!!!!!!";
    }
}
