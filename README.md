# Star Wars API and Card API

<img src="https://farahalh.github.io/star-wars-api-and-card-api/demo.png" width="250" height="200">

[Web demo](https://farahalh.github.io/PickACard/index.html)

Assignment 10 - Practice calling APIs and presenting data in the DOM.

Theory
API stands for Application Programming Interface. A web API consists of one or more public endpoints. HTTP protocol is often used, and the endpoint is simply a URI (web address) where the data we want to retrieve is located on the server. The entire system is based on requests and responses. If we send a request to the endpoint https://github.com/orgs/Lexicon-NET-2023/repositories, we receive a response with all the repositories created for the class (feel free to paste this into your browser and see what you get back). If we want to build a website for weather forecasts, we can make requests to an endpoint in MetaWeather's API instead of collecting the data ourselves. Different APIs support different data formats, but JSON and XML are the most common. This allows us to use the resources (data) available on the API regardless of the programming language we are developing with and the language in which the API is built.

URI stands for Uniform Resource Identifier and is used to make requests to API libraries. https://example.com/api/people?name=Kalle#nose is an example URI structure with different components.

HTTP request methods, also known as HTTP verbs, specify the action to be performed with a request. The five most common methods are listed below. In this exercise, you will only need to use GET.

HTTP-VERB - CRUD
POST - Create
GET - Read
PUT - Update/Replace (full update)
PATCH - Update/Modify (partial update)
DELETE - Delete

Request/response body is the data sent, usually in JSON format.

{
"object": {
"a": "b",
"c": "d",
"e": "f"
},
"array": [
1,
2
],
"string": "Hello World"
}

Postman is a program that can be used to call and test APIs during development. https://www.postman.com/downloads/

Task 1: Star Wars Biometrics
The Star Wars API contains a wealth of data about characters, species, spaceships, planets, etc., from the Star Wars movies. Documentation: https://www.swapi.tech/documentation

For example, you can list all characters by making a GET request: https://www.swapi.tech/api/people

You can also make a GET request with a query string to get a specific character: https://www.swapi.tech/api/people/?name=chewbacca

Your task is to build a page where the user enters the name of a Star Wars character and receives biometric data in response. Some example names are Luke Skywalker, R2-D2, Darth Vader, Leia Organa, and Chewbacca.

Create a text box to accept the name. Use <input></input> and set the type attribute to "text."
Create a button with <button></button>.
Create an output text box with <textarea></textarea> and set the rows attribute to at least 5 rows.
Write a function in the JavaScript file that:
a. Reads the value from the input text box and appends it to the string "https://www.swapi.tech/api/people/?name=" to create a complete URI.
b. Uses the URI as a parameter for a fetch request.
c. Writes the information to the output text box.
javascript

function getApi(){
  /* Write your code here */
  fetch(fullUri)
    .then(res => res.json())
    .then(data => {
      /* And here */
    })
    .catch(err => console.log(err));
}

The data is a JSON object that contains all the retrieved information about the character. Check the documentation or use console.log to see how the object is structured. Extract height, mass, gender, and hair_color, and use them to build a string using template literals (backticks).

Example: let s = Value 1: ${value1}, Value 2: ${value2};

Add an event listener that listens to the button and executes the above function on click.
Task 2: Draw a Card
The Deck of Cards API allows us to draw cards from one or more decks. In the response body, you get the card's value (suit and value) and a URL to an image of the drawn card. Documentation: http://deckofcardsapi.com/

You are to create a page that shows one card at a time when the user clicks a button.

Create a <button></button>.
Create a <div></div> where the image of the card will be displayed.
Write a JavaScript file similar to the previous task with some differences:
a. Use this URI for the fetch: "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
b. Check the documentation to see how to extract the URL of the card image from the data.
c. Use createElement, setAttribute, innerHTML, and appendChild to create an image element, set its src attribute, clear the div, and add the image element to it.
Add an event listener that listens to the button and executes the above function on click.

Extra:
Build a card game :) 
Consult the API documentation. 
You can choose what you want to build. Maybe a simple Blackjack game?
