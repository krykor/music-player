# Music player

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Features](#features)
- [To-do](#to-do-list)

## General info

_Music player_ - recruitment task in one of the companies for the position of
_Frontend Developer_. The task was to create a music player widget [similar to the design](https://dribbble.com/shots/3175482-Music-Player-Freebie).

I based the project on **React.js v16.8 using Hooks** and HoC. I used the **Redux v4 to manage the global state of the application**. I downloaded data from Headless CMS (GraphCMS) using Apollo and forwarded to the global state.

### On Macbook

![music player widget](/github/screen.png 'music player widget')

## Technologies

Aplication is created with:

- ReactJS 16.8 **with Hooks** (useEffects, useRef) and HoC
- Redux 4 with react-redux 7
- Create React App (Babel, Webpack)
- GraphQL 14 with Apollo 2.5.1
- GraphCMS
- Styled-components 4.2
- JS with ES6+
- GIT
- NPM

## Features

- simply music player widget with support for mobile devices
- dynamic change of the song
- showing the current time (with timeline), title and picture
- dynamic edition of styles with **Styled-components**
- Headless CMS: **GraphCMS with GraphQL**
- using React Hooks
- **managing the global state of the application** using useReducer and useContext

## To-do list:

- scroll the song using the timeline
- adding a song database
