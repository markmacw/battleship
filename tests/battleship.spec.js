const fart = require('../backend');

test('gridWidth is set to 10', () => {expect(gridWidth).toBe(10)});

// import {
//     gridWidth, gridHeight, attemptsTaken, buildMainGrid, checkAllShipsStatus, checkShipStatus, directions, drawStartingBoard, 
//     getBlankGrid, getCoordinateSetForShip, getRandomCoordinate, getRandomDirection, giveUp, mainGrid, makeGame, placeOneShip, processAttempt,
//     removeStartButton, shipHits, shipLengths, shipPlacementAvailability, shipTypes, sunkenShips
// } from './backend.js';



// function getRandomDirection_spec(){
//     console.log(test_name + "getRandomDirection_spec");
//     console.log(test_validation + "direction is returned");
//     var randomDirection = getRandomDirection();
//     if(randomDirection == "vertical" || randomDirection == "horizontal"){
//         console.log(test_indent + test_result_pass);
//     } else {
//         console.log(test_indent + test_result_fail);
//     }
// }

// function getBlankGrid_spec(){
//     console.log(test_name + "getBlankGrid_spec");
//     console.log(test_validation + "grid has 10 columns and 10 rows");
//     var grid = getBlankGrid();
//     if (grid.length == 10 && grid[0].length == 10) {
//         console.log(test_indent + test_result_pass);
//     } else {
//         console.log(test_indent + test_result_fail);
//     }
// }

// function getRandomCoordinate_spec(){
//     console.log(test_name + "getRandomCoordinate_spec");
//     console.log(test_validation + "coordinate is returned");
//     var randomCoordinate = getRandomCoordinate();
//     if(randomCoordinate[0] >= 0 && randomCoordinate[0] <= 10
//         && randomCoordinate[1] >= 0 && randomCoordinate[1] <= 10){
//         console.log(test_indent + test_result_pass);
//     } else {
//         console.log(test_indent + test_result_fail);
//     }
// }

// function shipPlacementAvailability_spec(){
//     console.log(test_name + "shipPlacementAvailability_spec");
//     function positive_test_horizontal(){
//         console.log(test_validation + "Horizontal Positive test - should return a full coordinate set.");
//         var testGrid = getBlankGrid();
//         var resultCoordinates = shipPlacementAvailability("horizontal", testGrid, "carrier", [8,5]);
//         console.log("Result Coordinates:"); console.log(resultCoordinates);
//         if(resultCoordinates[4] != null){
//             console.log(test_indent + test_result_pass);
//         } else {
//             console.log(test_indent + test_result_fail);
//         }
//     }
//     function negative_test_horizontal(){
//         console.log(test_validation + "Horizontal Negative test - should return a blank coordinate set.");
//         var testGrid = getBlankGrid();
//         var resultCoordinates = shipPlacementAvailability("horizontal", testGrid, "carrier", [1,8]);
//         console.log("Result Coordinates:"); console.log(resultCoordinates);
//         if(resultCoordinates[0] == null){
//             console.log(test_indent + test_result_pass);
//         } else {
//             console.log(test_indent + test_result_fail);
//         }
//     }
//     function positive_test_vertical(){
//         console.log(test_validation + "Vertical Positive test - should return a full coordinate set.");
//         var testGrid = getBlankGrid();
//         var resultCoordinates = shipPlacementAvailability("vertical", testGrid, "carrier", [5,8]);
//         console.log("Result Coordinates:"); console.log(resultCoordinates);
//         if(resultCoordinates[4] != null){
//             console.log(test_indent + test_result_pass);
//         } else {
//             console.log(test_indent + test_result_fail);
//         }
//     }
//     function negative_test_vertical(){
//         console.log(test_validation + "Vertical Negative test - should return a blank coordinate set.");
//         var testGrid = getBlankGrid();
//         var resultCoordinates = shipPlacementAvailability("vertical", testGrid, "carrier", [8,2]);
//         console.log("Result Coordinates:"); console.log(resultCoordinates);
//         if(resultCoordinates[0] == null){
//             console.log(test_indent + test_result_pass);
//         } else {
//             console.log(test_indent + test_result_fail);
//         }
//     }
//     positive_test_horizontal();
//     negative_test_horizontal();
//     positive_test_vertical();
//     negative_test_vertical();
// }

// function placeOneShip_spec(grid){
//     console.log(test_name + "placeOneShip_spec");    
//     var grid = placeOneShip(grid,"carrier");
//     console.log(test_validation + "Place a Carrier - positive test case");
//     console.log(grid);
//     var shipPieceCount = 0;
//     for (let row = 0; row < grid.length; row++) {
//         var innerArrayLength = grid[row].length;
//         for (let column = 0; column < innerArrayLength; column++) {
//             if(grid[row][column]=="carrier"){
//                 shipPieceCount++;
//             }
            
//         }
//     }
//     if(shipPieceCount == 5){
//         console.log(test_indent + test_result_pass);
//     } else {
//         console.log(test_indent + test_result_fail);
//     }
// }

// function buildMainGrid_spec(){
//     console.log(test_name + "buildMainGrid_spec");    
//     console.log(test_validation + "Check that all ships exist in their full length:");
//     var passingShips = 0;
//     var testGrid = buildMainGrid();
//     for (const [shipName, length] of Object.entries(shipLengths)) {
//         var shipLength = 0;
//         for (let row = 0; row < testGrid.length; row++) {
//             var innerArrayLength = testGrid[row].length;
//             for (let column = 0; column < innerArrayLength; column++) {
//                 if(testGrid[row][column]==shipName){
//                     shipLength++;
//                 }            
//             }        
//         }
//         if(shipLength == shipLengths[shipName]){
//             passingShips++;
//         } else {
//             console.log(test_indent + test_result_fail);
//             break;
//         }

//     }
//     if(passingShips == Object.keys(shipLengths).length) {
//         console.log(test_indent + test_result_pass);
//     }
//     console.log(testGrid);
// }