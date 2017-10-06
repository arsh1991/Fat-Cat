                                 ##Game Design Documentation (GDD)

Fat “Mario” version
Engine: MelonJS

#Game Features List: 
Allows user to choose their characters between a cat, dog, etc
Enemies: pizza, hamburger: makes you slower, fatter, and bigger
“Coins”: Smoothie, etc make you faster and thinner
An exit condition where player needs to cover some specific distance.
Score depends on time, and is given at the end
Scoring -> Health/Cholesterol(+/- 5pts), make it to the exit faster
Eat healthy, health increases, eat junk food, Cholesterol increases, character gets slower  
End screen shows total score up until time: time in which game is completed and health level

#Mario “character” Object attributes and Functions: 
Weight attribute: is modified every time an enemy “unhealthy food” is eaten or when something healthy is eaten
Speed attribute: velocity and acceleration are modified depending on weight
Size attribute: is updated to show weight gain/loss visually to the user
Movement attribute: jumping, running, and navigating the character

#Unhealthy Food object attributes and Functions: 
Speed attribute
Size attribute
Health level: points reduced from character when eaten
Disappears 

#Healthy Food Object attributes and Functions: 
Speed attribute
Size attribute
Health level: points reduced from character when eaten
Disappears 

#Background Object: 
Moving background image

#Health bar Object: 
Current health points: displayed visually 

#Level indicator screen Object: 
Stores current level and displays at end of each completed level


Available to edit at: https://docs.google.com/document/d/1TkzM55nKZ-o5XEywuFTK4ZZHqN2GizUgSkJ3enFs7sA/edit
