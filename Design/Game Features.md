                                 # Game Design Documentation (GDD)

Fat “Mario” version
Engine: MelonJS

## Game Features List: 
1. Allows user to choose their characters between a cat, dog, etc
2. Enemies: pizza, hamburger: makes you slower, fatter, and bigger
3. “Coins”: Smoothie, etc make you faster and thinner
4. An exit condition where player needs to cover some specific distance.
5. Score depends on time, and is given at the end
6. Scoring -> Health/Cholesterol(+/- 5pts), make it to the exit faster
7. Eat healthy, health increases, eat junk food, Cholesterol increases, character gets slower  
8. End screen shows total score up until time: time in which game is completed and health level

## Mario “character” Object attributes and Functions: 

1. Weight attribute: is modified every time an enemy “unhealthy food” is eaten or when something healthy is eaten
2. Speed attribute: velocity and acceleration are modified depending on weight
3. Size attribute: is updated to show weight gain/loss visually to the user
4. Movement attribute: jumping, running, and navigating the character

## Unhealthy Food object attributes and Functions: 
1. Speed attribute
2. Size attribute
3. Health level: points reduced from character when eaten
4. Disappears 

## Healthy Food Object attributes and Functions: 
1. Speed attribute
2. Size attribute
3. Health level: points reduced from character when eaten
4. Disappears 

## Background Object: 
Moving background image

## Health bar Object: 
Current health points: displayed visually 

## Level indicator screen Object: 
Stores current level and displays at end of each completed level


Available to edit at: https://docs.google.com/document/d/1TkzM55nKZ-o5XEywuFTK4ZZHqN2GizUgSkJ3enFs7sA/edit
