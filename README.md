# battleship
A game of battleship

The idea for this project was originally generated from the book "Head First JavaScript Programming"
    Within the first two pages of the project explanation, I decided to put down the book so I could generate my own 
    requirements and coding solutions.  This has proven thus far to be a more compelling learning practice for me
    at this point, so the shift has been a success.  I plan to build out the project just to the point that the actual
    game itself is fun to use.  I may garner some feedback from older daughter at points along the way.

    -- PHASE 1 --
    DONE Step 1: Insert a table with one row and five columns
    DONE Step 2: Create a javascript array representing where the ship is
    DONE Step 3: Style the table such that it has three states --- unknown, empty, and full use simple color or shape
    DONE Step 4: Allow user to click a cell to reveal it's true nature
    DONE a. click-action triggers a function. Function determines the value corresponding to the clicked cell
    REMOVED b. missed functionality: add a letter "?" into each cell
    DONE c. give each cell an ID based on it's order so you can use it to correspond to the array
    DONE d. log all actions to the javascript so that I can determine when the player has won or lost.
    DONE Step 5: When all of the ship is revealed, alert the user that they have sunk the battleship
    REMOVED Step 6: Allow only a certain number of misses and game is over
    DONE Step 6.2: Alert user when all ships have been sunk and game is over.
    Step 7: For added complexity - you can add more rows
        DONE a. To allow for more complex game play you may want to update your data models a bit as follows
                DONE i. create an array just for the position of ships, defined by ranges on the grid
                DONE ii. keep existing array just for the placement everything on the grid (extending what you have)
                REMOVED iii. a separate array just for the player's click choices
    Step 8: For added fanciness - you can make the styling a little more smooth so it really look polished like a game you want to play.
    NEXT Step 9: For added gameplay complexity - create more than one hard-coded grid and randomly select from them.
    This one looks like it is going to take some serious refactoring.
    Step 10: For even more gameplay complexity - create random generation of battleships onto the grid instead of using prefabricated grids
    Step 10.5: For added gameplay complexity - make grids that have ships sitting vertically, and diagonally
    DONE Step 11: Update CSS for sunken battleship to show that it is totally sunk

    -- PHASE 2 --
    Abandoning the above steps and not creating new ones based on a new vision, which is to mimic the game Hasbro advertises
    Gameplay as follows:
    HIGH LEVEL - CREATE THE GAME BEGINNING TO END AS CLOSE TO THE REAL THING AS YOU CAN WITHOUT LOSING INTEREST
    I. Start the game: 
        1. Grid is 10 x 10 Numbers and Letters
        2. Total fleet is: Carrier - 5 Holes, Battleship - 4 Holes, Cruiser - 3 Holes, Submarine - 3 Holes, Destroyer - 2 Holes
        3. The computer grid side is set by the system
        4. The user's grid is set by themselves (Drag / drop functionality - or just click the grid and then specify the positioning (up/down or left/right)) 


9/23/2022
Version 0.2.0 => removed all of the Cypress testing files.
Reverting to a less complex design until I understand node and import/export better.

9/26/2022 + 90 days = 12/25/2022
Major takeaway after resuming simple style vanilla javascript:
   1. I really don't know how to do import / export
   2. I really don't know how to do functions... especially those weird arrow functions

Plan for coming days:
   Break down function placeOneShip into smaller component pieces.
For example, you could create a function called tryPlacingShip which
would take coordinates and direction and determine if it is feasible to place.
The feasibility of placement could be based on calculation, or it could be based
on stepwise setting it up... although I think the calculation makes sense.
   In general - when a function gets overly complicated and I have struggling
with it - probably you should be breaking it into sub functions or something along those lines.

9/27/2022
Continue with the plan from yesterday, breaking down the placeOneShip function.

9/28/2022
Worked on the simple in-file testing proof of concept for js testing

9/29/2022
Work in some simple in-file testing for battleshipt.js

10/25/2022 Tuesday
I have not really been keeping track of my work in this readme file for some reason.
I actually think it is a great idea to do, so I will start doing it again.
Today - I committed a month old branch back to main. Now I have the backend stuff
in decent starting order and I am going to start a little front-end work.

I did, however develop a whole bunch of front-end stuff and it would be stupid to let
all that work go to waste... the next thing that I need to do is:

   1. Find a previous version of the repository that included a working version of the front-end code.  This is going to be a little tricky
   because I don't actually know how to do that yet... so it will be a GitHub learning experience. I guess I can make a new branch or repo 
   and just copy over what I need or clone an old version of the thing or maybe even make a duplicate of current repo and then revert to earlier version...

10/26/2022 Wednesday (one month is done... how am i doing?  I think I am making exceptional progress. Just have to keep at it each day. Preferrably even weekend days, even if just to a smaller extent.)
