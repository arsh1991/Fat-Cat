# User Story with BDD Scenarios - Aditi

//A User Story along with the supporting requirements specifications as BDD Scenarios.  Make sure to use the User Voice format discussed in class and identity at least five scenarios (one for "happy path" and additional "error" scenarios).

# 1
_As_ a game player,  
_I want_ to be able to "win" the game  
_When_ the game is running  
_So that_ my name is at the top of the leaderboard.  

**Scenario 1:**  
_Given_ that the Fat Cat game is running  
_When_ a high score is achieved after completing all obstacles  
_Then_ the player will win and be placed on the leaderboard.  
**Scenario 2:**  
_Given_ that the Fat Cat game is running  
_When_ the player dies from an obstacle but a high score is achieved  
_Then_ the player will win and be placed on the leaderboard.  
**Scenario 3:**  
_Given_ that the Fat Cat game is running  
_When_ the time runs out but a high score is achieved  
_Then_ the player will win and be placed on the leaderboard.  
**Scenario 4:**  
_Given_ that the Fat Cat game is running    
_When_ all obstacles are completed and a high score is not achieved  
_Then_ the player will not win.  
**Scenario 5:**  
_Given_ that the Fat Cat game is running  
_When_ time runs out and a high score is not achieved  
_Then_ the player will not win.  
**Scenario 6:**  
_Given_ that the Fat Cat game is running  
_When_ the player dies from an obstacle and a high score is not achieved  
_Then_ the player will not win.  
**Scenario 7:**  
_Given_ that the Fat Cat game is running   
_When_ a high score achieved has already been achieved earlier and is already on the leaderboard  
_Then_ the player will not win.  


# 2
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

# 3
_As_ a game player,  
_I want_ to be able to see my health, speed, and score changing  
_When_ I touch the food objects  
_So that_ the game remains challenging.  

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


# 4
_As_ an end screen,  
_I want_ to appear  
_When_ the game ends  
_So that_ the game can be ended, restarted, or the leaderboard can be viewed.  

**Scenario 1:**  
_Given_ that the Fat Cat game is running   
_When_ the main character dies  
_Then_ the end screen associated with character death will appear.    
**Scenario 2:**  
_Given_ that the Fat Cat game is running   
_When_ the main character runs out of time before completing the full game  
_Then_ the end screen associated with time's up will appear.  
**Scenario 3:**  
_Given_ that the Fat Cat game is running   
_When_ the main character completes the entire game within the time limit  
_Then_ the end screen associated with winning the game will appear.   



# 5
_As_ a game character,  
_I want_ to be able to die  
_When_ I fall into an obstacle  
_So that_ the game ends.  

**Scenario 1:**  
_Given_ that the Fat Cat game is running   
_When_ the main character falls into a river     
_Then_ the main character will die and end the game.    
**Scenario 2:**   
_Given_ that the Fat Cat game is running  
_When_ the main character falls into a spike bed    
_Then_ the main character will die and end the game.    
**Scenario 3:**  
_Given_ that the Fat Cat game is running     
_When_ the main character falls into a hole  
_Then_ the main character will die and end the game.  
**Scenario 4:**  
_Given_ that the Fat Cat game is running   
_When_ the main character jumps over an obstacle  
_Then_ the main character will not die and will continue the game.     
**Scenario 5:**  
_Given_ that the Fat Cat game is running   
_When_ the main character does not reach an obstacle or cannot view an obstacle  
_Then_ the main character will not die and will continue the game.  


# 6
_As_ a health bar,  
_I want_ to be able to display and update the character’s current health  
_When_ the game is in progress  
_So that_ the player knows how healthy or unhealthy the character is.  

**Scenario 1:**  
_Given_ that the Fat Cat game is running   
_When_ the main character runs into a healthy food object  
_Then_ the health bar will increase the character's health visually.  
**Scenario 2:**  
_Given_ that the Fat Cat game is running   
_When_ the main character runs into an unhealthy food object  
_Then_ the health bar will decrease the character's health visually.  
**Scenario 3:**  
_Given_ that the Fat Cat game is running   
_When_ the main character does not run into a food object  
_Then_ the health bar will not change visually.  
 
