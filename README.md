# [*Arcade Mini Games*](https://arcade-mini-games.netlify.app/) :black_joker:




# Introduction

our task this week was to create a game-like website using React.

## Project Concept

we decided to go with an "app drawer like" website containing multiple interactive mini-games.

## Keynote Features
Some of the features that was implemented in our game:
- "login like" form.
- fetch the user's name and image using Github API 
    (so try inserting your real Github username).
- "Multiple" games that you can choose from.
-  Entertaining design :game_die:



## iInitial Design

![](https://i.imgur.com/uE75ML3.png)


## React Components


During the developing process, we defined common components  for the entire project and the components that will be used in a single place, hence;


**1. Shared Components**
Each element of these components were devoloped seperately and each team member was responsible for a part, for example;
     - Game intro
     - Game Header
     - Seconds timer
     - Result popup window
     - Game container

**2. Individual Components**
Components that were used once and in a single place
- Login form
- Game list


**3. The Games**
Every game have it's "sub components"
 - Tic Tac Toe game
     - Square
     - Board - consists of the 9 Square components
     - Game - Strategy
 - Rock Paper Scissors game
     - Round
     - Selection Row
     - Selection Option


## React Component Diagrams


#### layout components
![](https://i.imgur.com/JlZOn9A.png)

---------------------

#### rock paper scissors components
![](https://i.imgur.com/9FY98k4.png)

--------------------



## Stretch Goals:
- Scoring system.
- 2 player mode .
- Add more games (Toss water ring, Head or Tails, Snake..).
- Refactor the game managers in a way that they both use the same common parts of a single component (TTT & RPS).
- #### /play crickets sound effects




## Credits


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


