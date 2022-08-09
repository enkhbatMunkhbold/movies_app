# World of Movies

**World of Movies** app helps user to search any movie he/she wants to learn about and creates a list of movies, that searched. User can sort the list by genre, by clicking a menu button, which is on the top left side and shows list of the movie genres. A user can make a movie favorite if user likes it, by clicking on a heart symbol. If user doesn't want to keep a movie in the list, then can delete it. Also, user can learn about a movie more, by clicking on 'Learn More.' User even can create and insert user's own movie info into the list, by going to 'Create Movie' page. 

# Goal

World of Movies app is built, to demonstrate my skills on React, which I have learned in Phase-2 of the Flatiron school, using React components, states, hooks and routing, plus Material-UI, to build my website, which gives to a user awesome, friendly experience to learn about any movies he or she want to learn. 

## Work environment

The app works locally, using url addresss 'http://localhost:3000' which means it is hosted in node server and on port 3000. Also, one can visit this website with the link https://idyllic-dolphin-bd7a83.netlify.app

## Search Movies

The app uses Open Movie Database API to fetch a movie that an user searched. When a user inputs a movie name into the search bar, it takes the movie title and sends a query to the database. Then, it receives the respond in json format and converts into the readable JavaScript object. If it doesn't find the movie with the inputted title, then an alert message 'A movie you're searching is not fount!' appears. Similarly, if a movie is already in the list, an alert message 'This movie is already exists in the list' shows up. Otherwise, a new movie will add up at the end of the list.

## Create A Movie

If the user wants to insert a new movie, that doesn't exist in the list or even in Open Movie Database, then he/she can create data about that movie, with posture, post, genre list and other information about the movie. When user clicks on the button 'Create Movie' it creates and adds the movie to the list.  

## Sort The Movies By Genre

If user wants to see the movies of certain genre, then should click on the menu button, which is on the top left corner of the screen. Then, drop down menu will appear and show the list of genres. A user can select the genre, to see the movies of that genre, then the app will display the movies of that genre.  

## Delete Movie

If the user want to remove the movie from the list of searched movies, then he/she would click on trash can symbol of a particular movie, which is on the bottom right corner of every movie, and the movie will disappear from the list, will be removed from the backend as well. 

## Demo

Here is an example of how the app work.

https://user-images.githubusercontent.com/33409864/183747862-307ac23a-52f6-4ed1-8bec-81b4724c16a8.mp4

