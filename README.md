# Miniproj

this project contain Backend and frontend

## To run the backend server

use

```
    nodemon index.js
```

if command not found try

```
    npm i
    nodemon index.js
```

## To run the frontend server

use

```
    npm run start
```

if cannot run properly try

```
    npm i
    npm run start
```

# Pet World

It’s a web application that gather all the pet cafe all around Thailand and provide the information eg. Open-Close time, pictures, price, menu, etc. User will be able to add a review and one can also add their own food, menu or new shop in this platform.

## Features

- Information for each pet cafe, such as opening and closing times, menu items, prices, and
  photos: This feature provides users with detailed information about each pet cafe listed in the database. This information should include the cafe's operating hours, menu items, prices, and photos to help users decide whether to visit the cafe.
- User reviews and ratings for each pet cafe: This feature allows users to share their experiences at pet cafes by writing reviews and ratings. This information is important for other users who are considering visiting a particular cafe and can help them make an informed decision.
- Ability for users to add their own reviews and ratings: This feature allows users to share their experiences at pet cafes by writing their own reviews and ratings. Users can also rate the cafes based on their criteria, which can be used to calculate an overall rating for each cafe.
- Option for users to add new pet cafes to the database: This feature allows users to add new pet cafes that are not already listed in the database. This is important because new cafes are constantly opening, and the database needs to be updated regularly to remain comprehensive.
- Option for owner to add new menu items or other information for existing pet cafes: This feature allows users to add new menu items or other information for existing pet cafes. This is important because menus can change frequently.
- Search functionality to find pet cafes based on location, type, menu items, and other criteria: This feature allows users to search for pet cafes based on their location, type, menu items, and other criteria. This makes it easier for users to find pet cafes that meet their specific needs.
- Filters and sorting options to refine search results: This feature allows users to refine their search results using filters and sorting options. Users can filter the results based on their preferences, such as distance, price range, or cafe type.
- User profiles and preferences to save favorite pet cafes and menu items: This feature allows users to create profiles and save their favorite pet cafes and menu items. This makes it easier for users to access their favorite cafes and menu items in the future.
- Integration with social media platforms for easy sharing and promotion of pet cafes: This feature allows users to share their experiences and reviews on social media platforms, such as Facebook, Twitter, and Instagram. This can help promote the pet cafes and attract new customers.
- Responsive design that works on desktop and mobile devices: This feature ensures that the web application works well on both desktop and mobile devices. This is important because many users access the internet using their smartphones.

## Technologies Used

- Front-end: HTML, CSS, JavaScript
- Back-end: JavaScript
- Frameworks/Libralies: react, MUI, Axios, Express, dotenv, cors, bcrypt, body-parser, cookie-parser, jsonwebtoken, mysql2, nodemon

## Installation

clone by git via this command:

```
    git clone https://github.com/Sunthewhat/Miniproj.git
```

## path for frontend

- / -> homepage
- /login -> login page
- /signup -> sign up page

## endpoint for backend

- get / -> for testing backend system
- post /login -> for logging in
- post /register -> for register new account
- get /profile -> request a user profile
- post /logout -> log user out
- post /cafe -> create new cafe
- get /cafe -> get all cafe list
- patch /cafe/:id -> update specific cafe by their id
- delete /cafe/:id -> delete cafe by it's id
