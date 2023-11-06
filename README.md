# Rock Paper Scissors Javascript game

This is a game of Rock, Paper, Scissors which was built using HTML, CSS and Javascript with Bootstrap framework. It is a one page site that allows the user to input a username at the start via a modul and then play the game. The game is played by choosing rock paper or scissors shown by the images on the screen.

Once the player makes their selection the computer selection is also randomly generated by javascript and the winner is selected by comparing the selections.
The score and the image of the girls face changes according to the results which will be investigated more in the game features section.

## Resubmission notes

As this is a resubmit I addressed the points for failure by making the code more my own, while at the same time adding functions that I made such as the googly eyes that follow the mouseover two buttons. I also changed the scoring system as suggested by my mentor to clean up the code and fixed the lighting scoring system not displaying correctly. This is described in the bugs fixed section. I believe these changes alone improved the game visually and of course functionality by working correcly. I also added functionality to hide certain html sections by targeting their ID's and my mentor suggested I remove the round win scoring and keep it simple and fix the lighting bolts showing up incorrectly and also created a play again and quit button to appear once the game was over.

The alert popups were also changed to html that is displayed once the user won or lost which is hidden or revealed with javascript by targeting elements in the domain and checking what stage the game is in (if other functions have been run and the game is still running or ended/paused so these messages will then be hidden or based on this)

---

![alt text](assets/images/readme/responsiveimage.png)

[Click Here To Visit Live Site](https://adrianskelton.github.io/project-2/)

---

## Table of Contents

- [Rock Paper Scissors Javascript game](#rock-paper-scissors-javascript-game)
- [Resubmission notes](#resubmission-notes)
- [User stories](#user-stories)
- [Target Audience](#target-audience)
- [Visitor Goals](#visitor-goals)
- [Design](#design)
- [Colour Scheme](#colour-scheme)
- [Typography](#typography)
- [Imagery](#imagery)
- [Wireframes](#wireframes)
- [Desktop view - start-up screen](#desktop-view---start-up-screen)
- [Desktop view - start-up screen](#desktop-view---startup-screen-1)
- [Mobile view](#mobile-view)
- [Tablet view](#tablet-view)
- [Features](#features)
- [General features on each page](#general-features-on-each-page)
- [Footer with icons](#footer-with-icons)
- [Features by page](#features-by-page)
- [Landing page](#landing-page)
- [Future Implementations](#future-implementations)
- [Accessibility](#accessibility)
- [Technologies Used](#technologies-used)
- [Languages Used](#languages-used)
- [Frameworks, Libraries \& Programs Used](#frameworks-libraries--programs-used)
- [Deployment \& Local Development](#deployment--local-development)
- [Deployment](#deployment)
- [Local Development](#local-development)
- [How to Clone](#how-to-clone)
- [How to Fork](#how-to-fork)
- [Testing](#testing)
- [Manual Testing](#manual-testing)
- [Jigsaw CSS Validator](#jigsaw-css-validator)
- [W3C Validator](#w3c-validator)
- [Lighthouse](#lighthouse)
- [Full Testing](#full-testing)
- [Credits](#credits)
- [Code Used](#code-used)
- [Content](#content)
- [Media](#media)
- [Acknowledgments](#acknowledgments)

---

# User Stories

## Target Audience

The target audience simply is anyone wanting to play an easy to understand game of rock, paper, scissors.

#### Visitor goals

- As a user, I want to be able to recognise what the game is.
- As a user, I want to easily understand the concepts of the game.
- As a user, I want the game to be simple and fun
- As a user, I want to know my score vs the computer score easily.
- As a user, I want to navigate the games controls easily.
- As a user, I want to easily see who is winning.

## Design

### Colour Scheme

![alt text](assets/images/readme/palletescreenshot.png)

The colour scheme is very basic with two major colours blue and yellow for the graphics. This was to keep the game from looking too busy, especially on smaller devices which makes it easier to navigate and separate the different sections.

### Typography

I went for a google font Bangers because it looked clean and modern and was easy to setup. Below is a screenshot of the font.

![alt text](assets/images/readme/typography.png)

### Imagery

Due to the nature of the project it is not image intensive however I sourced images for the girls reactions in the vs tab from pexels, I thought it would make the game more interactive and quirky with her expression changing if the user lost or won. I tried to display old school comic book style images. I edited all the images that I sourced using photoshop.

### Wireframes

### Desktop view - start-up screen

![alt text](assets/images/wireddesktopstart.png)

### Desktop view - the first screen shown to the user when the page loads (shown above). The footer was later taken off in the actual to make the game look less busy

![alt text](assets/images/wireddesktop.png)

### Desktop view - game screen (shown above)

---

### Mobile view

![alt text](assets/images/readme/wiredmobile.png)br>
Start screen (above left) In game screen (above right)

### Tablet view

![alt text](assets/images/wiredtablet.png)

I used Balsamiq to design my wireframes.

## Features

### Landing page

![alt text](assets/images/readme/firstscreen.png)

The game is only one page with a popup modal automatically set to appear when the page is loaded.

### Popup modal with rules and form for players name

This is a bootstrap modal that pops up automatically on the loading of the homepage.
The user can read the rules of the game in the modal and then enter their name to start.

![alt text](assets/images/readme/headerscreen.png)

### Top menu bar

This contains 3 buttons of:

![alt text](assets/images/readme/screenshot_buttons.png)

### Restart game button

The restart game button resets all the variables to their start stage.
Namely:

- The round score and game score to zero of both player and computer.
- The lightning bolt images of both player and computer.
- The computer choice and user choice image resets to a question mark image.
- The image of the girls face resets to the start image.
- The text above the girl face image resets to the text 'Lets play rock paper scissors!'

**Functionality change of restart game button**

- When the game is over I had to make an if statement checking if the player had pushed the quit game button. This was because a lot of elements that were present before to be reset are now hidden and will bring up errors, so if they player clicked on the quit button the game will reload using the location.reload(); code and the page will refresh. Otherwise it will run the script and set all the variables to their default start game state if they player has not clicked on the quit game button.

### Rules button

When the user clicks on the rules button the rules popup modal pops up. 

### "Sound on/off" toggle button

This button toggles between a "sound on" and a "sound off" state, muting the two mp3 files listed at the bottom of the html.
The text then reflects what the user should push on or off for their desired choice.

---

### User and computer score and lightning bolt

![alt text](assets/images/readme/screenshot_score.png)\
User score with 4 points and computer with none. (shown above)

### Changing facial expression image with appropriate text of who wins and how

There are different states of the images, static when the game starts, a win, a lose and a draw. Then there is the image with glasses when the round is won or lost that has an animation effect that changes the image depending on if the mouse is hovering over the 'play again' or 'quit' button.

Each of these are reflected in the text above the image and the girls expression to match.
These images are shown below.

![alt text](assets/images/readme/screenshot_girl_expression1.png).\
Static image (shown above)

![alt text](assets/images/readme/screenshot_girl_expression3.png).\
Win image (shown above)

![alt text](assets/images/readme/screenshot_girl_expression4.png).\
Player Loses image (shown above)

![alt text](assets/images/readme/screenshot_girl_expression2.png).\
Draw image (shown above)

**

### The 3 option images for the player to select: rock, paper or scissors

![alt text](assets/images/readme/screenshot_user_choice.png)

### Screenshots of a round win and loss

![alt text](assets/images/readme/screenshot_pcwin.png)

![alt text](assets/images/readme/screenshot_userwin.png)

---

### Future Implementations

- A scoreboard that logs the username and their score will be later implemented.
- More options could later be added to the game such as spock and lizard.
- A button option to share the game on Facebook and other platforms.
- When the player hovers over the selection images of rock paper or scissors they will have a css animation.

### Accessibility

Added aria labels where needed.

---

## Technologies Used

**Github** - Used for storage of my site and for publishing online.\
**Codeanywhere** - The IDE used for editing my site and pushing changes.\
**Python** - Used python 3 via terminal to preview my site using a local http server.\
**HTML5** - The core of the site was built with HTML version 5.\`
**Javascript** - Javascript was responsible for all the functionality and interactivity of the website.\
**CSS** - CSS was used to style the website and define fonts and layout.\
**Bootstrap** - Bootstrap was used for the modal, grid system and columns.\
**Google Chrome** - The website was built and tested in google Chrome with developer tools being used.\
**TinyPNG Website** - Used to compress images so they load faster.\
**Codebeautify Website** - Used to clean up css and html code\
**Favicon Generator Website** - Converted PNG file that I made from the logo using photoshop and converted it into a favicon on website favicon.io\
**coolors.co** - Website used for the colour pallete.\
**Lighthouse in chrome** - Used to see the performance of the site.

### Languages Used

HTML, CSS, Javascript.

### Frameworks, Libraries & Programs Used

**Bootstrap** - for the responsiveness of the website despite having to add a media query for the 1000px breakpoint so that the site looked better on mobile and tablets. I also used bootstrap code for the navbar.\
**Github** - I used GitHub for the storage of my site and Gitpages to pubish my website.\
**Photoshop** - Used photoshop for some of my image resizing and editing of the images.

---

## Deployment & Local Development

### Deployment

I deployed the website onto gitpages.

### Local Development

#### How to Clone

1. Log into your account on github
2. Go to the repository of this project /adrianskelton/Project-2/
3. Click on the code button, and copy your preferred clone link.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal, paste the link you copied in step 3 and press enter.

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, adrianskelton/Project-2
3. Click the Fork button in the top right corner.

## Testing

## Manual Testing

### W3C Validator

[W3C](https://validator.w3.org/) was used to validate the HTML of website.

![alt text](assets/images/readme/screenshot_validator_html.png) - HTML Pass

---

### Jigsaw CSS Validator

[Jigsaw](https://jigsaw.w3.org/css-validator/validator) was used to validate the css code

![alt text](assets/images/readme/screenshot_validator_css.png) - CSS Pass

### Lighthouse

![alt text](assets/images/readme/screenshot_lighthouse.png)

### JSHINT

![alt text](assets/images/readme/screenshotjshint.png)

### Full Testing

Full testing was performed on the following devices:

- Laptop:
- Huawei Matebook D
- Mobile Devices:
- iPhone 10
- Google pixel 5

Each device tested the site using the following browsers:

- Google Chrome
- Safari
- Firefox

Additional testing was taken by friends on a variety of devices and screen sizes.

| Feature                                   | Expected Outcome                                                                                                                                                                                                 | Testing Performed                                                 | Result                             | Pass/Fail |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------- | --------- |
|                                           |
|                                           |                                                                                                                                                                                                                  |                                                                   |                                    |           |
| Game title                                | This remains static and unclickable if a user wants the game to reset that can be done using the rest button instead.                                                                                            | Clicked Logo and title                                            | Nothing happens.                   | Pass      |
| Start-up Popup modal                      | Pops up on page load and shows the rules of the game. Allows the user to press start game.                                                                  | Clicked play game                                   | Popup closes and game can start  | Pass      |
| Restart game                              | When clicked during play everything will be reset to the start page, score, images etc.                                                                                                                          | Clicked on restart button                                         | Everything reset to default state. | Pass      |
| Rules button | Should display the rules in a popup modal once clicked | Clicked on the rules button | Rules popup modal displayed              | Pass      |
| Sound toggle button                       | When clicked the sound will turn off for the game and the button text will turn to 'Sound On' When clicked again the sound will then return and the button text will revert to 'Sound Off'.                      | Clicked button                                                    | Performed as expected              | Pass      |
| Yellow images of rock, paper and scissors | When clicked they will result in the scores changing, the girls expression, the text of who wins or loses, the blue images of the choices will also change as well as the lightning bolts until the game is won. | Tested each image individually until a win or loss was the result | Preformed as expected              | Pass      || Yellow images of rock, paper and scissors | When clicked they will result in the scores changing, the girls expression, the text of who wins or loses, the blue images of the choices will also change as well as the lightning bolts until the game is won. | Tested each image individually until a win or loss was the result | Preformed as expected              | Pass      |
| Play again button | This appears after a round is won or lost, when clicked restarts the game | Played game to win and lose and button appeared. Clicked on it in both instances to check for restart of game | Preformed as expected   | Pass      |
| Quit button | This appears after a round is won or lost, when clicked quits game, hides a section of the game and displays a thank you for playing message | Played game to win and lose and button appeared. Clicked on it to check for thank you message being displayed | Preformed as expected              | Pass      |
| Googley eyes | This appears after a round is won or lost, the image of the girls eyes follow the mouse when it hovers over the play again and quit button. | Played game to win and lose and then hovered over the play again and quit buttons | Image performed as expected              | Pass      |
| Lightning bolts/scoring | The number of bolts reflect the points won | Played game multiple times to check if all the options changed the lightning bolts as expected until game was won or lost. | Scoring system worked for both player and computer              | Pass      |




---

## Bugs

### Bugs fixed

**Problem:** The lightning bolts do not reach the 5th bolt for some reason, they only show 4 lightning bolts when it should be 5 to reflect 5 points.\
**Solution:** Called the changeLightning() function from the winGame() function forcing the bolts to update.

**Problem:** When I ran my quitmessage function this caused the hardreload function to stop working properly as there was now html ID's that were hidden and trying to be targeted by the hardreload function.\
**Solution:** I had to make an if statement in the hardreload function to check if the quitgame function had been run. If it had been it would just use the "location.reload();" option instead of running the code affected by the hidden html.

## Credits

### Code Used

- Tutorial I based my game on... [Follow link](https://www.youtube.com/watch?v=jaVNP3nIAv0)\
You can view the origonal code for the game and see where I modified it accordingly and added my code to enhance the game visually and functionally. [Follow link](https://github.com/rldiao/web_practice/blob/master/index.js)
- Tip to over-ride bootstrap modal css [Follow link](https://stackoverflow.com/questions/20854035/is-it-possible-to-customize-style-of-bootstrap-modal)
- Help aligning entire html to centre [Follow link](https://stackoverflow.com/questions/6464592/how-to-align-entire-html-body-to-the-cente)
- When I was stuck I referred to help from w3schools to figure it out [Follow link](https://www.w3schools.com/)

### Gathering knowledge

Was unsure about commit message to use when taking away features [Follow link](https://stackoverflow.com/questions/48075169/semantic-commit-type-when-remove-something>)\
I used w3 schools website a lot when I got stuck with trying out new functions I got stuck on [Follow link](https://www.w3schools.com/jsref/prop_style_display.asp)

### Content

Sound effects used for the loss [Follow link](https://mixkit.co/free-sound-effects/lose/)\
Sound effects used for the win [Follow link](https://pixabay.com/sound-effects/8-bit-victory-sound-101319/)

### Media

Girls facial expression from pixel website [Follow link](https://www.pexels.com/photo/collage-photo-of-woman-3812743/)

Hand Gestures image [Follow link](https://img.freepik.com/free-vector/hand-wrist-gesture-black-engraving-icon-set-with-thumb-up-down-fist-middle-finger-other-gestures-vector-illustration_1284-74114.jpg?t=st=1694768463~exp=1694769063~hmac=9ad88b1414c8b4c9f95ba60a21de19bceb648546784d80ecab60baffd1850111)
(Excuse the direct link to the image above but the sharing link on the website did not work)
Googly eyes added to facial expression sourced from [Follow link](https://commons.wikimedia.org/wiki/File:Big_eyes.png)

Frame image used for hand gestures
[Follow link](https://www.vecteezy.com/vector-art/1952391-explosion-pop-art-style-icon)

### Acknowledgments

I would like to thank my mentors Narender and Spencer as well as all the users on slack for all their opinions and code reviews.
