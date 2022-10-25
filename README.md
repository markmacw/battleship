# battleship
A game of battleship

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

9/30/2022
10/01/2022
# end of week #
10/02/2022
