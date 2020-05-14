
https://hackmd.io/PlLoti3XSN2DYDpUAMF0Mg?both

# [*Arcade Mini Games*](https://hackmd.io/RBt-7_jgQC6iImJqWkkBUg) :black_joker:

:triangular_flag_on_post: [***Website***](https://arcade-mini-games.netlify.app/)

#### This interactive game was built using React.


Some of the features that was implemented in our game:
- User name input
- Using API (Github API) - the username you insert will be used to fetch your image from Github (so try inserting your real Github username).
- Multiple games that you can choose from.
-  Entertaining design :game_die:


----

During the developing process, we defined components thats common for the whole project and compononets that will be used in a single place, hence;


**1. Shared components**
Each element of these components were devoloped seperately and each team member was responsible for a part, for example;
     - Game intro
     - Game Header
     - Seconds timer
     - Result popup window
     - Game container

**2. Individual components**
Components that were used once and in a single place
- Game list
- single use page
- Login form



**3. The games**
Every game have it's "sub components"
 - Tic Tac Toe game
     - Square
     - Board - consists of the 9 Square components
     - Game - Strategy
 - Rock Paper Scissors game
     - Round
     - Selection Row
     - Option
 - Head or Tails game


![](https://i.imgur.com/uE75ML3.png)


![](https://i.imgur.com/JlZOn9A.png)


<br>
<br>

:::info
### Stretch goals:
- Scoring system.
- 2 player mode .
- Add more games (Toss water ring, Snake..).
- Refactor the game managers in a way that they both use the same common parts of a single component (TTT & RPS).
:::


<br>

if you like to see our prototype design and planning, [please click here](https://hackmd.io/PlLoti3XSN2DYDpUAMF0Mg?both)



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### /play crickets
