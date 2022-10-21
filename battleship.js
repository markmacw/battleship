//////////////////////////////////////////////////////
// ------------------- OBJECTS --------------------//
//////////////////////////////////////////////////////
const gridWidth = 10;
const gridHeight = 10;
const ships = {         // key/value pairs in object
    carrier:    5,
    battleship: 4,
    cruiser:    3,
    submarine:  3,
    destroyer:  2
};
const directions = ["horizontal","vertical"];
let mainGrid;

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
    shipPlacementAvailability_spec();
    placeOneShip_spec(getBlankGrid());
    buildMainGrid_spec();
//////////////////////////////////////////////////////
// ------------------- MAKE DATA --------------------//
//////////////////////////////////////////////////////
    mainGrid = buildMainGrid();
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

function shipPlacementAvailability(direction, grid, shipName, startingCoordinate){
    var shipLength = ships[shipName];
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
        console.log(validation + "Horizontal Positive test - should return a full coordinate set.");
        var testGrid = getBlankGrid();
        var resultCoordinates = shipPlacementAvailability("horizontal", testGrid, "carrier", [8,5]);
        console.log("Result Coordinates:"); console.log(resultCoordinates);
        if(resultCoordinates[4] != null){
            console.log(indent + result_pass);
        } else {
            console.log(indent + result_fail);
        }
    }
    function negative_test_horizontal(){
        console.log(validation + "Horizontal Negative test - should return a blank coordinate set.");
        var testGrid = getBlankGrid();
        var resultCoordinates = shipPlacementAvailability("horizontal", testGrid, "carrier", [1,8]);
        console.log("Result Coordinates:"); console.log(resultCoordinates);
        if(resultCoordinates[0] == null){
            console.log(indent + result_pass);
        } else {
            console.log(indent + result_fail);
        }
    }
    function positive_test_vertical(){
        console.log(validation + "Vertical Positive test - should return a full coordinate set.");
        var testGrid = getBlankGrid();
        var resultCoordinates = shipPlacementAvailability("vertical", testGrid, "carrier", [5,8]);
        console.log("Result Coordinates:"); console.log(resultCoordinates);
        if(resultCoordinates[4] != null){
            console.log(indent + result_pass);
        } else {
            console.log(indent + result_fail);
        }
    }
    function negative_test_vertical(){
        console.log(validation + "Vertical Negative test - should return a blank coordinate set.");
        var testGrid = getBlankGrid();
        var resultCoordinates = shipPlacementAvailability("vertical", testGrid, "carrier", [8,2]);
        console.log("Result Coordinates:"); console.log(resultCoordinates);
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
    console.log(validation + "Place a Carrier - positive test case");
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
        console.log(indent + result_pass);
    } else {
        console.log(indent + result_fail);
    }
}

function buildMainGrid(){
    var grid = getBlankGrid();
    for (const [shipName, length] of Object.entries(ships)) {
        placeOneShip(grid,shipName);
    }
    return grid;
}

function buildMainGrid_spec(){
    console.log(test_name + "buildMainGrid_spec");    
    console.log(validation + "Check that all ships exist in their full length:");
    var testGrid = buildMainGrid();
    var numberOfShipsChecked = 0;
    for (const [shipName, length] of Object.entries(ships)) {
        numberOfShipsChecked++;
        var shipLength = 0;
        for (let row = 0; row < testGrid.length; row++) {
            var innerArrayLength = testGrid[row].length;
            for (let column = 0; column < innerArrayLength; column++) {
                if(testGrid[row][column]==shipName){
                    shipLength++;
                }            
            }        
        }
        if(shipLength!=ships.length){
            console.log(indent + result_fail);
            break;
        } else {
            if (ships.length - 1 === numberOfShipsChecked){
                console.log(indent + result_fail);
            }
        }
    }
    console.log(testGrid);
}