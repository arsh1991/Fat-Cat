
# Adopted XP Core Value - Communication
<b>As of week 7</b>, we have nearly completed the game development and have started testing the game. We communicated and  re-merged our codes, refactored with patterns. As we tested each other's code, communication is required to find and fix bugs. I tried to keep everyone on same page by communicating the progress and bugs so that fix could be performed swiftly. We are constantly communicating the impediments/bugs which were created due to design problems and sat together to decide an approach to fix them. I am trying my best to keep the code in shippable state by communicate and following up on the changes.

<b>As of week 6</b>, we are now moving towards the completion of the game development. We are constantly merging our codes to see the final product which requires team co-ordination and communication. Now remaining features are interdependent on different modules, so we are meeting often so that game could be finished off. In order to avoid code overwrites, we are communicating before pushing into repository. We are constantly in touch on slack and communicating the impediments so that person who is free could work on the tasks which are with other team members and are struck.

<b>As of week 5</b>, we started with the Scrum methodology which required changing our working habits for the project. The Scrum being more prescriptive than KANBAN requires more descipline. I tried to communicate all the changes whole week in order to keep team 
working on a uniform pace. We have also started developing the game and have to merge it very often to keep code in shippable state every week. Communicated and co-ordinated with every one so that to minimise the merging conflicts and integration issues. We met more often this week beacuse development requires more face to face communication as conflicts could not be resolved efficiently on calls or slack.

<b>As of week 4</b>, team finalised a MelonJS game engines, project ideas, design patterns , and object usage in javascript. We tried to keep every one on the same page by sharing the acquired knowledge and communicating the doubts. We were constantly in touch on our team project slack to discuss the problems and solve them. 


<br></br>

## WEEK 1:

## September 17, 2017:
Explored the game engines basics and why are they required. Tried to define parameters based on which comparison of different game engines could be done. Created a document to help every one understand the project 

## September 19, 2017:
Team meeting for the project kick off. Discussed current ideas in team to check their feasibility and choice of language. Couple of ideas were shared and discussed.

## September 20, 2017:
Created Weekly Minutes for the team and discussed it for final review. Updated team Wiki page as was mentioned in  the professor email. Communicated to every one to agree on the required format

## September 22, 2017:
Completed my research on Greenfoot game engine. Checked tutorials, documentation, and figured out the pros and cons of using it. Compiled my research in a document and communicated to everyone to review it.

<br></br>

## WEEK 2:

## September 23, 2017:
Team meeting to discuss the topics on the table and select one of those. Discussed what we need to learn and communicated on how to proceed for next week. Started minutes of meeting for week 2 and started learning design pattern overview.

## September 26, 2017:
Tried to decide the features for the selected game and figure out their implementations and relevant frameworks. Checked samples of CLM library and the library usage in our scenario. Looked into the sample games for game engine workflow. Shared the google document link to everyone.

## September 28, 2017:
Continued with basics of design patterns and their usage. Created a high level document for team to give it a look and understand the basics. Completed the Minutes of meeting for Week 2. Asked every one to review.

## September 29, 2017:
Learnt usage of objects in javascript using prototypes. Explored that we could add functions and properties to objects in javascript which was new to me. Document created and checked in for reference

<br></br>

## WEEK 3:

## September 29, 2017:
Team meeting to discuss the topics the features of our selected game "FAT CAT". Discussed what we need to learn further and communicated on how to proceed for next week. Started jotting down features to be included in the game in google document.

## October 2, 2017:
Tried to setup the environment using the below mentioned links. Unable to create the setup on windows. Grunt failed
https://github.com/melonjs/boilerplate
http://melonjs.org/


## October 5, 2017:
Continued with the environment setup and finished off. Error was with system wide installation of nodejs. Able to run boilerplate code and continued with creating the sample game fowllowing tutorial:
http://melonjs.github.io/tutorial-platformer/

Problem with rendering maps right now.

## October 6, 2017:
Completed the feature list document and published it as readme on in the git hub repo. Completed the Weekly minutes for this week and communicated everyone to review it. Checked with everyone who is not able to create the melonjs environment and helped to resolve the issues.

## October 7, 2017:
Resolved the rendering of issue with tile map. Continued to develop the sample and completed it. Learnt the flow in creating the games in melonjs and able to modify the sample as per need. Explored the TILED tool and tried to create sample screens in it.

<br></br>

## WEEK 4:

## October 8, 2017:
Team meeting to discuss the problems faced by team in creating MelonJS sample game. Discussed the problems we could face while developing the module and define what different components are required. Started to define the different componnets of the game.

## October 11, 2017:
Explored the features of TILED tool and tried to create and play with tile maps and tile sets. Under stood the basic concepts and now we need to deign our different objects required in the game graphics so that maps could be created.

## October 14, 2017:
Weekly team meeting to discuss progress from last week (Midterm week). We decided to keep working on the sample demo as well as  the features Document to solidify the understanding of the system.

## October 18, 2017:
Helped other who were not able to setup the environment and resolving the errors in rendering the game on browser. Tried to help others so that we can kick start coding from next week.

## October 19, 2017:
Researched more on design patterns and implemented some in javascript using the class slides as reference. We could use observer pattern for recording score and state pattern for main objects state changes. Tried to figure out more scenarios for which we can implement patterns

## October 20, 2017:
Worked with team to build a common base game which we will use to build on and helped evryone run that base on their system. Segregated whole game into chunks and helped in assigning key parts to the team. Started working on my part.
<br></br>

## WEEK 5:


## October 22, 2017:
Created a proof of concept by developing a game with main player, enemy, and collectables. Understood various components required to build the game. Checked in the created version and screenshot of working version in repository:
https://github.com/nguyensjsu/cmpe202-oceans11/tree/master/Research/arsh/Platformer_v2

## October 24, 2017:
As we need to render all the objects in TILEMAP, we will need to create a new texture sheet for the project with all the selected sprite sheets. LEarnt a new tool "Texturepacker" for creating the new texture sheet with new sprite resouces. Incorporated the new texture sheet in the code base and successfully rendered new objects in tilemaps object layer. Checked in the created version and screenshot of working version in repository:
https://github.com/nguyensjsu/cmpe202-oceans11/tree/master/Design/Game%20Source%20Code/data/img

Texture packer:
https://www.codeandweb.com/texturepacker

## October 26, 2017:
Found TILE SETS to create new levels for the game. The next level will be urban(city) setup and started with creating the new tile map. Looked into the timer functionality as it was an impediment in the current week. Collaborated with the team to get it completed. 

## October 27, 2017:
Worked on the Health Graph feature with Dishant in order to create custom progress bar which is not available in MelonJS game engine. We found a problem in rendering the new images externally without using the texture file. Constantly running into error but defined the logic. Completed the weekly minutes.

## October 28, 2017:
There was current requirement for adding new objects on the game so need to recreate a new texture and render all the objects correctly. I created the texture again and worked with Dipro to the menu screen working. Checked in all the resources for further reference. Created Burndown chart with team as part of the deliverables
<br></br>

## WEEK 6:


## October 31, 2017:
Researched and found a new tilesheet for the new levels and created a new tileset from it. Started designing the subsequently tough new levels with this new tileset. Create a basic layer and adding objects to it:
https://github.com/nguyensjsu/cmpe202-oceans11/tree/master/Resources/Tileset


## November 1, 2017:
Created a new tilemap using the created tileset for the new levels. Completed a new level and started with th other one. Started working on rendering the new level on screen.
https://github.com/nguyensjsu/cmpe202-oceans11/tree/master/Design/Game%20Source%20Code/data/map


## November 2, 2017:
Created new textures with updated images and redesigned the initial level and layered it for new objects. Doubled width of the intial level and layered all the objects on top of that. Started rendering the updated map. Ran into errors.

## November 3, 2017:
Resolved all the errors in rendering the updated level. There were issues in front and back layer which were leading to to inconsistencies. Updated the level again to resolve the inconsistencies. Made the game operational so that repo is in stable state and is shippable.

## November 4, 2017:
Tested all the merged code in repository to check all the peices are working fine when integrated. Finished off the deliverables for this week. Dipro provided the fatter images so created a new texture to render images on the game. Found a glitch at the game end which is crashing the system. There is a script running in the backend which is freezing system.
<br></br>


## WEEK 7:


## November 5, 2017:
Created new tileset as well as tilemap for the game using the TILED tool. Created all the object layer and collision in map as per design. Rendered the map with all the changes and made it working.
https://github.com/nguyensjsu/cmpe202-oceans11/tree/master/Design/Game%20Source%20Code/data/map


## November 6, 2017:
Resolved bugs in the level and game in general. We together worked on making objects more obviously healthy and unhealthy. Discussed implementation of patterns in game.

## November 8, 2017:
Created the game end entity on map. Rendered the entity on game by creating a new entity in javascript and updated the collision update. Game has now the winning state and screen. Resolved existing bugs to keep the game in shippable state.

## November 10, 2017:
Refactored the code with state pattern of the main player. The code incorporates four states: StoutState, ChubbyState, PlumpState, and ObeseState. The transitions were implemented based on the current animation and change in global health variable.
https://github.com/nguyensjsu/cmpe202-oceans11/blob/b05956b8eaaa8ab8d9ad36e00ebb99611cc198f4/Design/Game%20Source%20Code/js/entities/player.js


## November 11, 2017:
Tested all the merged code in repository to check all the peices are working fine when integrated. Completed the weekly minutes and got it reveiwed. Finished off the deliverables for this week. Worked on the different gliteches in the game introduced by patterns and tried to resolve them.


<br></br>

## WEEK 8:



## November 14, 2017:
Looked into game and listed all the bugs present in the game and communicated to everyone about the same. There are couple of bugs in timing , score and final score section. Asked everyone to work on one bug each and start pushing the fixes. Designed the classes to create a general healthy object and create a set of concrete healthy objects from it.
