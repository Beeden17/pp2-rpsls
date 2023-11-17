# Rock, Paper, Scissors, Lizard, Spock Game

I have decided to create a Rock, Paper, Scissors, Lizard, Spock game (R-P-S-L-S) which introduces a cosmic theme with multiple interactive features to allow the user to personalise the game to their liking which I hope they will enjoy.

R-P-S-L-S Game is a site that hopes to demonstrate how pure JavaScript works in a real-world context. The site will be targeted toward people who not only love to implement more advanced JavaScript concepts but also play games. R-P-S-L-S is a fully responsive JavaScript game that will allow users to play a game of luck against the computer.

A live link for the site can be found Here (<https://beeden17.github.io/pp2-rpsls/>)

![Responsive Mockup](/assets/docs/responsive-pp2.png)

## Features

### Existing Features

- __The Rock, Paper, Scissors, Lizard, Spock Game Heading__

  - Featured at the top of the page, the R-P-S-L-S Game heading is easy to see for the user. Upon viewing the page, the user will be able to see the name of the game.

- __The Input section__

  - Firstly the site will have a text area that allows the user to input a name, which includes form validation. The name entered will then be displayed in the "Game Zone".
  - Secondly the user can select an icon from the Choose Character section to be displayed. The computer will also generate a random Icon to be displayed in the computer's own "Game Zone".
  - Thirdly, a "Get Ready" button to submit the data and start the game, the user will then be alerted to select a weapon.

![Input](/assets/docs/input-pp2.png)

- __The Game Area__

  - This section will allow the user to play the game. The user will be able to easily see icons for each available weapon and a pointer cursor will be visible when hovered over, the icon will also grow.
  - The user will be able to see the option they have chosen along with the random generated weapon that the computer chooses as they will be displayed as text in the "Game Zone" panels.
  - The round will increment after each selection and the scores will increment depending on who wins, if its a draw there will be no increment in the score.

![Game](/assets/docs/game-area-pp2.png)

- __The Score Area__

  - This section will allow the user to see exactly how many rounds they have played and what the scores are.
  - This section will have inntructions that the winner will be the first to score 3, whoever scores 3 first the user will see the diplay showing who the winner is.
  - This section will also have a reset scores button to allow user to reset the score and round to 0.

- __The Game Rules Area__

  - This section will show the user which "weapon" wins against eachother.

### Features Left to Implement

- Add more weapons to increase difficulty.
- Add extra player characters to allow more customization.
- Add multiple players to the game.

## Testing

- __Form validation__
  
  - The text input for player's name should only accept 2-10 characters with no spaces. Placeholder text is used to point this out and if not inputted correctly an Alert message will be displayed. This worked as expected.
  - The radio button input was used to allow the user to select an icon as a character, with the astronaut checked to ensure this is not missed, whilst allowing the user to change if desired. This worked as expected.
  - When the user has completed the form, they can click the "GET READY!" button, which should grow and the cursor should turn to a pointer when hovered over, this button should display an Alert message with instructions how to play the game. This all worked as expected.
  - A randomly generated Icon should be chosen by the computer and then displayed in the computer game zone. This worked as expected.
  - The data from the form should be passed in to the player and computer game zones, respectively, to be displayed. This worked as expected.

- __Weapons Tiles__
  
  - The weapons tiles should be displayed inline and grow, with the cursor changing to pointer when hovered over. This worked as expected.
  - When the user has selected a weapon the corresponding text should be displayed in the player game zone allowing the user to be clear of their choice. This worked as expected.
  - The computer will then randomly generate a choice and this should also be displayed in the computer game zone, as text. This worked as expected.
  - The user should not be able to make another selection until the computer has made its choice. This worked as expected.
  - The outcome should follow the game rules, which are displayed in the footer, if user and computer choose the same weapon it should be a draw. This worked as expected.

- __Winner Display Area__

  - When the game is first started the display show "THE WINNER IS FIRST TO SCORE 3!". This worked as expected.
  - If the user wins a round the display should show "You win this round, Well done!". This worked as expected.
  - If the computer wins a round the display should show "You lose this round, try again!". This worke as expected.
  - If user and computer choose the same then display should show "It's a draw, try again!". This worked as expected.
  - If the user reaches the score of 3 first, the display should show "Congratulations! You win the match! Press RESET SCORES! to start again". This worked as expected.
  - If the computer reaches the score of 3 first, the display should show "Computer wins the match. Better luck next time! Press RESET SCORES! to start again". This worked as expected.
  
- __Score Board Area__

  - After the first weapons have been chosen The round counter should display 1, then increment by 1 after each round of selections, until the Match winner is displayed. This worked as expected.
  - If the user wins the round the user score should increment by 1. This worked as expected.
  - If the computer wins the round the computer score should increment by 1. This worked as expected.
  - If both selections are the same the scores should not increment. This worked as expected.
  - If the RESET SCORES! button is clicked, this should return the counters to 0. This worked as expected.

- __Game Zone Areas__

  - The users name, selected icon(character) and weapon choice should be displayed in the player game zone area. This worked as expected.
  - The computer name, selected icon(character) and weapon choice should be displayed in the computer game zone area. This worked as expected.

### Validator Testing

- HTML
  - No errors were returned when passing through the official validator, it did return info about trailing slashes to close out break line input and link tags. I believe this is due to changes in the standards. As these were only info messages I decided I to stick with the methods taught on the course and will research further for the next project. [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbeeden17.github.io%2Fpp2-rpsls%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2F8000-beeden17-pp2-rpsls-9w8r5r6o87.us2.codeanyapp.com%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
  - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
    - The following metrics were returned:
    - There are 20 functions in this file.
    - Function with the largest signature takes 2 arguments, while the median is 0.
    - Largest function has 30 statements in it, while the median is 4.
    - The most complex function has a cyclomatic complexity value of 17 while the median is 2.

### Unfixed Bugs

There are no unfixed bugs to report.

## Deployment


- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - <https://beeden17.github.io/pp2-rpsls//>

## Credits

### Content

- Fonts used from Google fonts
- Favicon from [favicon.ui](https://favicon.io/favicon-generator/)
- Icons from [fontawesome](https://fontawesome.com/)
- Color contrast check [contrastgrid](https://eightshapes.com/)
- Inspiration for how the buttons grow was taken from webdev simplified, a Youtube channel.
- My mentor Matt Bodden, helped me to grasp some core concepts in Javascript.
- A couple of functions were inspired by the Love Maths project i have added comments in the code.

### Media

- The vector graphic I have used for the main background was from [Vecteezy](https://www.vecteezy.com/vector-art/16265607-abstract-space-galaxy-view-with-blue-pink-cloud).
