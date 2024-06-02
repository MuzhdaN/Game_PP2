# Find The Bunny

## Purpose of the project

"Find The Bunny" is a super fun game that anyone can enjoy for a quick 20-second break. It's all about finding a cute bunny hidden somewhere on the screen. With colorful pictures and cool sounds, it's a blast for kids and grown-ups alike.

This was a fun project that let me bring a little joy to people's lives through their screens. So, give it a try and see if you can find the bunny!.


Find the bunny [here](https://muzhdan.github.io/Game_PP2/)!
  ![responsive Design Layouts](/assets/images/responisve-img.PNG)

## Table of Contents
  * [Purpose of the project](#purpose-of-the-project)
  * [User Stories](#user-stories)
  * [Features](#features)
  * [Future Features](#future-features)
  * [Typography and color scheme](#typography-and-color-scheme)
  * [Wireframes](#wireframes)
  * [Technology](#technology)
  *  [Testing](#testing)
      * [Validator Testing](#validator-testing)
      * [Lighthouse Testing](#lighthouse-testing)
      * [Supported Screens and Browsers](#supported-screens-and-browsers)
      * [Fixed Bugs](#fixed-bugs)
  *  [Deployment](#deployment)
  *  [Credits](#credits)
      * [Images](#images)
      * [Contents](#contents)
      * [Code](#code)


-----


## User Stories
- as a visiting user i would like to check the rules of the game.
- as a visiting user i would like to check to my score while hitting the rabbits.
- as a visiting user i would like to know the timeleft for the game.
- as a visiting user i would like to check the time.
- as a visiting user i would like to go back to home page in the middle of the game. 
- as a visiting user i would like to check the my score at the end of the game.
- as a visiting user i would like to re-start the game after checking my scores.
- as a visiting user i would like to hear a sound if i hit the rabbit.


## Features

 ### Game Start Page
  <details> <summary> Game Start Page Image </summary>

   ![Start Game Page](/assets/images/StartGamePage.PNG)

   </details>
  
 * In this page there are two buttons:
    * Start Button:
        by clicking this, the user will be forwarded to the playground page.
    * How To Play Button:
        by clicking this, a popup window will apear where the user could get instructions about the game.

### Game playground
<details> <summary>Game Canvas Image </summary>

  ![Playground Page](/assets/images/Playground.PNG)

  </details>

 * The home option (on the right side) will take the user to the homepage (Game Start Page);
 * In this page the user can see her score.
 * The score will increase by one whenever the user hit the rabbit.
 * The time is limited, therefore, the user can consistently check the time which is on the right side.
 * The rabbit will apear and hide behind the fence. 
 * The user needs to hit the rabbit to gain score.
 * Whenver the rabbit is hit, there will be a sound.

### Game Over Page
<details> <summary> Game Over Page Image </summary>

  ![Game Over Page](/assets/images/gameOverPage.PNG)

  </details>

* This page will appear when the time is up and the game is over.
    * The 'Try Again' button, will re-start the game.
    * The highscore button shows the lastest score of the user.


## Future Features
- Save scores in the local storage
- Add levels to the game


## Typography and color scheme
  ### Typography
  - The following google font was used for the website.
     - `'Roboto', sans-serif;`

  ### Color Scheme
  - The website uses Black and White colors for fonts and #2789b0 for button.

## Wireframes / Prototype
  The intial idea was drawn in the paint app. According to that the game was desgined in to the Figma app. From design to developement some changes has occured.
  <details> <summary> Images </summary>

  ![wireframe](/assets/images/wireframe.PNG)
  ![Prototype](/assets/images/Prototype.png)

  </details>


## Technology

  - HTML5
  - CSS3
  - Javascript

 ### Programs that were used:
  - Figma: created the prototype / wireframes.
  - Git
  - Github
  - Gitpod
  - Google Fonts
  - Am I responsive
  - ezgif.com: Changed jpg to webp
  - removebg



## Testing
 ### Validator Testing
* W3C HTML Validator:  No error were found
    ![HTML Results](/assets/images/htmlValidator.PNG)
* W3C CSS Validator (Jigsaw): No error were found
    ![CSS Results](/assets/images/cssValidator.PNG)
* JSHint JavaScript Validator: Testing the JS code for the first time, there were some errors regarding semicolon at the end of the line, but they were fixed immediately.

    <details> <summary> JSHint Results </summary>

     ![JSHint Result](/assets/images/jshint.PNG)

    </details>

### Lighthouse Testing
  Desktop:
    ![Lighthouse Testing in Desktop](/assets/images/lighthouseDesktop.PNG)
  
  Phone:
    ![Lighthouse Testing in Mobile](/assets/images/lighthousePhone.PNG)

* The following bug occured, but rendering css file was not a good option for this project.
  ![LightHouse Bug](/assets/images/bugsLH.PNG)

### Supported Screens and Browsers
   * This website can work properly on Chrome, Apple Ipad Pro, Firefox, Microsoft Edge. Due to time constriant the game might not be reponsive on small mobile devices.

### Fixed bugs
   * Header was not showing in the game playground page. In the cosole it would give error as display undefined.
     * Solved it with the help of [stackoverflow](https://stackoverflow.com/questions/27418104/whats-the-difference-between-displayinline-flex-and-displayflex) and another[stackoverflow problem](https://stackoverflow.com/questions/12194435/cannot-set-property-display-of-undefined)
    
   * Another console error was 'Cannot set properties of null (setting 'textContent')'.
     * solved it with the help of stackoverflow problems that said the following
         >  the "Cannot set property 'textContent' of null" error, make sure that the DOM element you're setting the textContent property on exists. The error most commonly occurs if you use the getElementById() method and pass it an id that is not present in the DOM. Copied! const element = document
   * There was blank space at the bottom of the game.
     * Solved it by adding `top:0` in to the body in css.

## Deployment 
  This website was developed in Gitpod. It was deployed on github. 

  - The site was deployed to GitHub pages. The steps to deploy are as follows:
    - In the GitHub repository, navigate to the Settings tab
    - From the source section drop-down menu, select the Master Branch
    - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

## Credits
  ### Images
  - [Freepik](https://www.freepik.com/popular-photos)
  - [FAVPNG](https://favpng.com/)
  
  ### Contents
  - [Audio](http://www.nonstick.com/bugs-bunny-sounds/) The audio for the game was taken from this website.
 
  
  ### Code
  - [youtube](https://www.youtube.com/watch?v=ec8vSKJuZTk&t=4840s) The idea for the game was taken from this youtube video.
  - [Blog]() The concept to implement boxes within the container in js was taken from this youtube video.
  - [CSS Triks](https://css-tricks.com/overriding-default-button-styles/) With the help of this website I was able to remove the default properties of the button. Although I modifed it, but the idea was taken for this website.
  - [W3school](https://www.w3schools.com/w3css/w3css_modal.asp) The concept of a poupwindow was taken from w3school. Also, The code has been refactored and changed according to the project.
  - [Blog](https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984) & [Autoplay guide](https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide) While implemeting audio in to the game, these two websites helped alot. 
  - [Favicon](https://favicon.io/) The code for favicon links were taken from Favicon website.
  - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event) The concept of DOMContentLoaded event that was implemented in js was taken from here.

 
