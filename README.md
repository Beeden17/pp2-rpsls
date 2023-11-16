# Rock, Paper, Scissors, Lizard, Spock Game

I have decided to create a Rock, Paper, Scissors, Lizard, Spock game (R-P-S-L-S) which introduces a cosmic theme with multiple interactive features to allow the user to personalise the game to their liking which I hope they will enjoy.

R-P-S-L-S Game is a site that hopes to demonstrate how pure JavaScript works in a real-world context. The site will be targeted toward people who not only love to implement more advanced JavaScript concepts but also play games. R-P-S-L-S is a fully responsive JavaScript game that will allow users to play a game of luck against the computer.

![Responsive Mockup]()

## Features

### Existing Features

- __The Rock, Paper, Scissors, Lizard, Spock Game Heading__

  - Featured at the top of the page, the R-P-S-L-S Game heading is easy to see for the user. Upon viewing the page, the user will be able to see the name of the game.

![Heading]()

- __The Input section__

  - Firstly the site will have a text area that allows the user to input a name, which includes form validation. The name entered will then be displayed in the "Game Zone".
  - Secondly the user can select an icon from the Choose Character section to be displayed. The computer will also generate a random Icon to be displayed in the computer's own "Game Zone".
  - Thirdly, a "Get Ready" button to submit the data and start the game, the user will then be alerted to select a weapon.

![Input]()

- __The Game Area__

  - This section will allow the user to play the game. The user will be able to easily see icons for each available weapon and a pointer cursor will be visible when hovered over, the icon will also grow.
  - The user will be able to see the option they have chosen along with the random generated weapon that the computer chooses as they will be displayed as text in the "Game Zone" panels.
  - The round will increment after each selection and the scores will increment depending on who wins, if its a draw there will be no increment in the score.

![Game]()

- __The Score Area__

  - This section will allow the user to see exactly how many rounds they have played and what the scores are.
  - This section will have inntructions that the winner will be the first to score 3, whoever scores 3 first the user will see the diplay showing who the winner is.
  - This section will also have a reset scores button to allow user to reset the score and round to 0.

![Score]()

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

![Form validation]()

- __Weapons Tiles__
  
  - The weapons tiles should be displayed inline and grow, with the cursor changing to pointer when hovered over. This worked as expected.
  - When the user has selected a weapon the corresponding text should be displayed in the player game zone allowing the user to be clear of their choice. This worked as expected.
  - The computer will then randomly generate a choice and this should also be displayed in the computer game zone, as text. This worked as expected.
  - The user should not be able to make another selection until the computer has made its choice. This worked as expected.
  - The outcome should follow the game rules, which are displayed in the footer, if user and computer choose the same weapon it should be a draw. This worked as expected.

![Weapons tiles]()

- __Score Board Area__
- 

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
  - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
    - The following metrics were returned:
    - There are 11 functions in this file.
    - Function with the largest signature takes 2 arguments, while the median is 0.
    - Largest function has 10 statements in it, while the median is 3.
    - The most complex function has a cyclomatic complexity value of 4 while the median is 2.

### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub)

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - <https://code-institute-org.github.io/love-maths/>

## Credits

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism.

You can break the credits section up into Content and Media, depending on what you have included in your project.

### Content

- 

### Media

- The vector graphic I have used for the main background was from [Vecteezy](https://www.vecteezy.com/vector-art/16265607-abstract-space-galaxy-view-with-blue-pink-cloud).
