                                     Game Design Documentation (GDD)

<B> "Fat Cat" </B>

<B> Engine: MelonJS </B>

<B> Design Pattern: Decorator and State Patterns </B>
## Game Features List: 
1. Allows user to choose their characters between a cat, dog, etc (TBD).
2. Enemies: a collision with pizza, hamburger: makes you slower, fatter, and bigger.
3. “Coins” or Rewards/Incentives: Smoothie and salads to make you faster and thinner.
4. An exit condition where player needs to complete the level by covering some specific distance.
5. Score depends on time taken to complete the level and is given at the end. Time and speed depends on health of character and player skill.
6. Scoring -> Health/Cholesterol(+/- 5pts), make it to the exit faster.
7. Excessive collision with pizza, hamburger will result in zero health and ultimately death of the character. Level failed, restart the level.
8. Eat healthy, health increases and character gets faster. Eat junk food, health decreases and character gets slower.
9. End screen shows total score up until current time. Will include time in which game is completed and health level.

## Mario “character” Object attributes and Functions: 

1. Weight attribute: is modified every time an enemy “unhealthy food” is eaten or when something "healthy" is eaten
2. Speed attribute: velocity and acceleration are modified depending on weight
3. Size attribute: is updated to show weight gain/loss visually to the user
4. Movement attribute: for jumping, running, and navigating the character

## Unhealthy Food object attributes and Functions: 
1. Speed attribute
2. Size attribute
3. Health level: points reduced from character when consumed
4. Disappears after consumption

## Healthy Food Object attributes and Functions: 
1. Speed attribute
2. Size attribute
3. Health level: points added to character when consumed
4. Disappears after consumption

## Background Object: 
Moving background image, to be chosen (TBD)

## Health bar Object: 
Current health points will be displayed visually with a "Health Bar" 

## Level indicator screen Object: 
Stores current level and is displayed at the end of each completed level.


Available to edit at: https://docs.google.com/document/d/1TkzM55nKZ-o5XEywuFTK4ZZHqN2GizUgSkJ3enFs7sA/edit
