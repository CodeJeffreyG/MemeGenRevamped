Redoing original meme gen project with proper typescript typings and proper file management.

The purpose is to show the difference in my skill then compared to now.

Started With NavBar and created a navBar Component and a separate image holding file. Imported NavBar Into the app with decent styling.

See Line 7 on app.tsx created typing interface for meme state to hold memeObject that in the future will display an image of a meme.

The image flip API quite literally returns 100 meme Images from image flip API

See Line 21. Grabbed The images from image flip API set the typing to string | [{}] (string or an array of objects)

#How it works.

When the app renders upon the page loading a useEffect function call is made. The useEffect function call fetches data from Image flip API .then parses it to JSON then sets it to state.

There are two event handlers one for on-click and one for on-change. Every time an input box receives new information the onChange function is run allowing new information to be saved into the mere object.

One input box holds the top string and the other bottom string.

ImageFlips API data is quite literally an object holding an array of 100 of the most popular memes. The Onclick Function which is attached to the "get new meme button" runs every time the button is clicked. Since there are 100 potential memes A simple Math. random() \* 100 algorithm is ran and indexed into the array holding memes. Granting a new meme upon every button click.
