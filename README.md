# Songify


## Project Repository Description

I chose to build Songify, audio playback app, because I love music and I've always wanted to build a project that utilizes Spotify's API. It was a fun challenge learning about the authentication process
and figuring out what information could be used to reach an MVP. 

Songify is a simple full-stack application that allows users to: 
1. Search for a song by entering the title of a track into the search bar 
1. Receive a list of 5 songs that match the searched title 
1. Play each of the 5 songs 
1. Delete individual songs if they would like 

The deployed site can be found [here](https://nostalgic-mirzakhani-fcf196.netlify.app/)

## How to use this Repository
- Clone this repository locally 
- Run `npm install` to pull dependencies 
- Create a spotify developer account [here](https://developer.spotify.com/) 
  - Create an application 
  - Generate `client_id` and `client_secret_key`
- Add the generated `client_id` and `client` to the `.env` folder in the server directory 
- To run the server: `npm run dev` in the server directory 
- To run the client: `npm run start` in the client directory 


## Web App Requirement
- This project was bootstrapped with Create-React-App, Material-UI, and TypeScript on the front-end and Node/Express for the API. 
- The three different ways the user can interact with this application are: searching for a song, playing the song, and deleting a song. 
- The Songify's API is loosely based on the MVC design pattern for achieving separation of concerns. 
- Songify is integrated with Spotify's API. 
- The 5 Material UI Components used were: Grid, Page, Container, Button, and TextField 
- The reusable component I created was an IFrame component 


## Languages Used
- JavaScript compiled with TypeScript 
- Node 
- Express 

## Technologies Used 
- Front-end deployed via Netflify
- Back-end deployed via Heroku 

  
## UI Design
When considering accessibility I tried to go with a simple design (if it's good enough for Google, right?) that included titles for the iframe components, 
buttons that clicked, a text field with a label, and minimal color for minimal contrast. 

![ScreenShot](https://github.com/MobolanleAdebesin/songify/blob/master/client/public/form.png)
![ScreenShot](https://github.com/MobolanleAdebesin/songify/blob/master/client/public/validation%20.png)
![ScreenShot](https://github.com/MobolanleAdebesin/songify/blob/master/client/public/search-results.png)


## Architecture Pattern/Overview 
- The Songify API implements an MVC pattern via: 
  - a single POST endpoint with a searchRoute(handles the HTTP POST request) 
  - searchController (handles the Spotify Integration logic) 
  - allowing a user to retrieve a song list the endpoint is: https://songify-app-api.herokuapp.com/search
 
- Components: 
 - IFrame: takes in two props: song title and id in order to retrieve the song from spotify
 - NestedGrid: used to organize each iframe and capitalizes on Material UI's layout features and built in responsive design 

## Planning/Decision Making 
Some of the decision making: 
- Configuring webpack vs. using Create-react-app
- Parsed and sanitized the data returning from the Spotify API
- Making the single endpoint a GET vs POST request
- Implementing a validation library vs. writing custom validation 
- Using Axios for HTTP requests once I realized that the spotify examples were using a depracated library 
- Updating the asynchronous calls to the Spotify server from `.then` syntax to `async-await` to improve readability 
- Balancing time constraints with a desire to implement more in depth features (a database, login features, a favorites list) 

![ScreenShot](https://github.com/MobolanleAdebesin/songify/blob/master/client/public/planning-notes-1.png)
![ScreenShot](https://github.com/MobolanleAdebesin/songify/blob/master/client/public/planning-notes-2%20.png)

## Version Control
My initial commit was quite large as I forgot to do so early on as I set up my API, but I made an effort to commit more frequently throughtout the project. 
I attempted to use a workflow that utilized a master and develop branch along with feature branches. 


## Future Goals: 
- Implement MVC on the front end to create separation of concerns, increase modularity, flexibility and maintainability 
- Add a login functionality/feature
- Allow users to "favorite" songs that they like and store this information 
- Implement a model/data layer to store favorites list 
- Improve upon the minimalistfront end design 
