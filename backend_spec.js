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
}
    
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

var x = 1
export {
    x, test_name, test_validation, test_note, test_indent, test_result_fail, test_result_pass, test_debugging,
    getBlankGrid_spec
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