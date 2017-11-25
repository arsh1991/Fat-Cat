# User Story with BDD Scenarios - Aditi

//A User Story along with the supporting requirements specifications as BDD Scenarios.  Make sure to use the User Voice format discussed in class and identity at least five scenarios (one for "happy path" and additional "error" scenarios).

# 1
_As_ a game player,  
_I want_ to be able to navigate the main character  
_When_ obstacles and bonuses appear  
_So that_ I can complete a game level within the time limit.   

**Scenario 1:**  
_Given_ that the Fat Cat game is running  
_When_ the right, left, up, down, A, S, D or spacebar buttons are clicked  
_Then_ the main character will move in the correct direction.  
**Scenario 2:**  
_Given_ that the Fat Cat game is running   
_When_ any unmapped key is clicked   
_Then_ the main character will not move at all.   
**Scenario 3:**  
_Given_ that the Fat Cat game is running   
_When_ a mouse button is clicked   
_Then_ the main character will not move at all.    
**Scenario 4:**  
_Given_ that the Fat Cat game is running  
_When_ the up or spacebar buttons are pressed more than once  
_Then_ the main character will jump as many times as the button is clicked.  
**Scenario 5:**  
_Given_ that the Fat Cat game is running   
_When_ the right, left, down, A, S, or D buttons are pressed more than once   
_Then_ the main character will not speed up  
_And_ will continue at its normal pace.  

# 2
As a game player,  
I should be able to see my health, speed, and score changing
When I touch the food objects
So that the game remains challenging.  

**Scenario 1:**  
_Given_ that the Fat Cat game is running   
_When_ the main character runs into a healthy food object  
_Then_ the health, speed, and score will increase.  
**Scenario 2:**  
_Given_ that the Fat Cat game is running    
_When_ the main character runs into an unhealthy food object  
_Then_ the health, speed, and score will decrease.  
**Scenario 3:**   
_Given_ that the Fat Cat game is running  
_When_ the main character does not run into any food object  
_Then_ the health, speed, and score will remain the same.  
**Scenario 4:**  
_Given_ that the Fat Cat game is running   
_When_ the main character jumps above or avoids a food object   
_Then_ the health, speed, and score will remain the same.  
**Scenario 5:**  
_Given_ that the Fat Cat game is running   
_When_ the main character has no visible food objects in the game play view  
_Then_ the health, speed, and score will remain the same.   


# 3

As a game player,
I want to be able to view the high score leaderboard
When the game completes
So that I can see where my current score stands in comparison to other scores.




As a food entity,
I want to be able to disappear and update the character's health
When the main character collides with me
So that my impact on health is visible to the player through the score and speed of the character.

As an underground obstacle,
I should make the main character die and cause the game to end
When the main character falls into an obstacle
So that the game can conclude and also remains challenging.

As an end screen, 
I want to be able to restart the game
When the game completes
So that I can continue playing and try the game again.

As an end screen, 
I want to appear whenever the game ends
When the player dies, runs out of time, or wins the game by completing all the levels within the time limit
So that the game can be ended, restarted, or the leaderboard can be viewed.

As a health bar and health score, 
I want to be able to display and update the character’s current health
When the game is in progress
So that the player knows how healthy or unhealthy the character is.

As a game timer, 
I want to be able to display the amount of time left in the game
While the game is in progress
So that the player knows how much longer they have available to complete the game.



