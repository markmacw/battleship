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

Roughly June 30, 2022 - I started this project after seeing it in the "Head First JavaScript Programming" book.

8/30/2022 Initial commit - started 

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

12/1/2022 Thursday - This project is now officially about 5 months in and I am on the second month of attempting to make programming a daily thing. It has not worked at all times, however it has been an overall plus.

Plan: What I am going to do next for this project is refactor a bit.  I am going to basically make some backend data structure that tracks my responses and it is either going to be part of the original grid object, or will be a separate object that corresponds to the original grid object.  Maybe I could record each response, the coordinates, and the result of that response.  This is somewhat similar to the object I created called "hitRecord" or something but it has additional information including for coordinates and also when you miss.  Recursioning thorugh it will be a little more complex, but not bad. Result will either be null or the name of a hit.

12/4/2022 Sunday - I was here. Part of mid-morning habit stack.

12/5/2022 Monday - I was here. 11:36am. Part of mid-morning habit stack.
Need to research import/export here:
https://www.scaler.com/topics/javascript/import-js-file-in-js/

12/6/2022 Tuesday - Two options for running a web server (need this in order to run my ES6ModuleTest example)
https://www.youtube.com/watch?v=nx8E5BF0XuE
https://stackoverflow.com/questions/70283259/include-a-js-file-directly-in-another
I ran a web server and was able to get the module thing working that is part of Visual Studio Code. Next you can see how far you can take this.
Starting to get a programming streak going. Just keep at it.

12/9/2022 Friday - I was here. 12:24pm.
Some cool JS tips: https://javascript.plainenglish.io/12-javascript-tips-tricks-that-i-use-every-day-bonus-126557cb4d62
2. Use console.trace to log with a stack trace. Easily find what’s happening inside your application at a certain point by logging a stack track with console.trace

12/10/2022 Saturday - briefly looked at exporting (separate project currently)

12/11/2022 Sunday - SKIP DAY

12/12/2022 Monday - Read about differences between var, let and const
Added a functiont to the export / import project and it worked well.

12/13/2022 Tuesday - Tried to add import export into my main project, but I got a variety of errors. Back to the drawing board on this one. Or for now, I can simply stick a fork in it and move on to the next issue in my Battleship program...  So that is back to the plan to refactor the code and make objects that track the progress of the player into a javascript object.

12/14/2022 Wednesday - 1:02pm organized objects section of script so I can think critically about what I am tracking and how to track it in one or a few objects.
12/15/2022 Thursday - looked briefly at what is affected by what in prep for refactoring.
12/16 xx
12/17 xx
12/18 xx
12/19/2022 Monday - I was reading about frameworks for JavaScript thinking that I'd like to return to TDD for this project.
What I found especially is that React is easier to learn than Angular, and also that Jest is top of the UNIT testing popularity in 2022 (which is what I am looking for)
I am also thinking that pushing myself to learn some frameworks might actually speed up my learning for even vanilla javascript.  Even though I have had trouble
with import export functionality in JavaScript, you should not take that as prohibiting you from setting up a framework.  Actually - you may find the.

Still a little bit convinced I should use export - import logic in vanilla js:
https://www.geeksforgeeks.org/difference-between-module-exports-and-exports-in-node-js
Next time go over the above and see if you can get it working - then take another stab at your own project.

12/20 xx
12/21/2022 Wednesday - I was reading about frameworks for testing JavaScript.  The one that is labeled as the easiest to learn is
called "Jest" which is supported by the React team.  React seems to be the framework with the most jobs on Indeed... seems like a simple choice.
React has ~180 jobs
Angular has ~170 jobs
nodejs has ~68 jobs

12/22/2022 Thursday - Rather Angular and Jasmine is a sensible stack for front-end.  Also matches what we have at UPMC
UPDATE UPDATE UPDATE - I researched and solved the follwing two errors (first one I figured out a while ago, second one just got it)
1. Uncaught SyntaxError: Cannot use import statement outside a module
The fix for this is to add type="module"  to you script tag in the html document.
2. Uncaught SyntaxError: Export 'x' is not defined in module
The fix for this was to give my variable declaration a "var" (it was missing which is a crazy mistake!!!!!!!!!!!!!)
FINALLY - when I run it now - the import works and my code runs, and even if I use it running with "Open Live Server" the server will
reload the whole thing when you save a file in the directory.j
GIVEN THIS BREAKTHROUGH - I CAN ONCE AGAIN ABANDON USING SOME COMPLICATED FRAMEWORK AND RESUME USING VANILLA JAVASCRIPT :) :) :)

NEXT -> try to break down the javascript bit by bit so that for example:
1. tests are in their own file
2. backend potential stuff in another file
3. frontend potential stuff in another file
ALSO NEXT -> Make sure you make a commit of your work

12/23/2022 Friday - I didn't really code. I just published the branch with all this import export module stuff.
12/24/2022 Saturday (early morning actually starting at midnight) - I determined that I will break out all my testing / spec stuff into 
the newly created "backend_spec.js" file, however I got tired after a while and so that is mid-stream.
12/25 xx
12/26 xx
12/27 xx
12/28 Wednesday - recontinued with moving code over. To be continued...
Feedback from Ross on game - ideas that would require persistence - score keeping, rankings. Names and rankings like an arcade game.
12/29 xx
12/30 xx
12/31 Saturday - I finished splitting out the tests into a spec file, with supporting spec html page.
I could potentially make the html page more ornate to support displaying the unit tests, but I think that is probably overkill.
The next thing you would want to do to get a nicer view of your test cases is probably to use a framework such as Jest.

*** FOR 2023 - STRIVE TO MAKE AN ENTRY TO THIS FILE EVERY DAY UNTIL THE PROJECT IS COMPLETE ***
***WEEK ONE*** 
01/01 xx
01/02 Monday - Okay - so I immediately missed the first day and did not make any entry into this. Part of the problem is that if I don't have my computer,
Then I am not going to make any entry.

Today - it is apparent that I am now able to run the unit tests separate from the application.
This is through the use of import and export and it is functioning now.  Made committ and now the next step is to implement a unit testing framework.
... Jest
01/03 Tuesday -
01/04 Wednesday - 
01/05 Thursday - 
01/06 Friday - 
01/07 Saturday - 