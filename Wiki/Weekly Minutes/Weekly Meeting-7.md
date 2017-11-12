
# Weekly Meeting-7
Held at: Nov. 4th, 3:00PM

## What did the team do last week?
In the last week, we completed the following tasks:

1. Implemented three javascripts for all end game use cases.
2. Completed the splash screen and implemented leaderbaord.
3. Created and rendered the images with changed player anatomy.
4. Reengineered the maps and rendered them in the game.
5. Incorporated the health bar images and made changes visible in code.

## What is the team going to do next week?
Next week, our primary focus will be on refactoring the code to implement design patterns into our game. We will be adding the command design pattern for when screens are changed/states are changed, the iterator pattern for the leaderboard display, the state pattern for the main character, the decorator pattern for the final score calculation, and the observer pattern for score capture. We will also be working together to fix the remaining bugs in the game and for changing the main character's anatomy once it collides with an unhealthy or healthy object.

**Aditi:** Implement command design pattern to implement screen changes using it, resolve "callback error" at end of game, resolve flashing screen at end of game, update leaderboard UI.

**Suhel:**  Implement iterator design pattern for the leaderboard display. The object should be picked from save object of melon and parsed into a JSON to implement the pattern and to be displayed at the end.

**Dipro:**  Implement proxy pattern for object validation. 

**Arsh:**  Refactor code of main player to implement state pattern using four different states(Stout, chubby, pump, and obese). The player should do transition from one state to another based on the health variable. Redo the the game levels.

**Dishant:**  Work on updating the main character's anatomy at collisions using the newly created images. The player animation should update with changes in health. 

## What are the current blockers/challenges the team is facing?
This week we found some design flaws which leady to some unwanted behaviour in our game . We had to make design changes in order to keep the time and score consistent when player move from one level to another. Furthermore, refactoring code now simultaneously is having impact on the game and lead to some bugs. We need to resolve the bugs together as many changes were done in parallel this week.

## Next meeting is scheduled for: Saturday, November 11th, 2017
