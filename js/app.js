/* We use jQuery to pick HTML DOM elements to by short names
DONE: We need to pick: cards, whole deck, refresh.
TO DO: stars, moves,
*/

let deck = document.getElementById("deckId"); // let deck= $('.deck');
                                            // let deck = $("#deckId");
                                              // let deck = document.getElementsByClassName(".deck");
                                              // WHY from 4 commands from above works only active one??


let cards =  $('.card');   // document.getElementsByClassName("card");

let cardsArray = Array.from(cards); //pickes cards and makes array of them. You can use also [...card]

let move = document.querySelector(".moves"); // pick span "moves"

var stars = document.getElementById("stars"); // pick ul "stars"
var starsLi = stars.children ;

var openedCards = [];

// shuffles and hides cards when page is refreshed
document.body.onload = startGame();
document.body.onload = closeAll(cardsArray);

// shuffles and hides cards when restart button pressed
function startGame() {
cardsArray = shuffle(cardsArray);
openedCards = [];
matchedCards = [];
     for (var i = 0; i < cardsArray.length; i++){
        deck.innerHTML = ""
        move.innerHTML = "0";  // everytime game starts moves counter set to 0 (visually)
        moves = 0; // everytime game starts - moves counter restarts (function "logic")
        closeAll(cardsArray); };  // cardsArray[i].classList.remove("open", "match", "show");  both works
     for (const cards of cardsArray) {  //  cardsArray.forEach.call(cardsArray, function(item) {  both works
         deck.appendChild(cards); // WHY in console I get: Uncaught TypeError: deck.appendChild is not a function if I use other deck selector than by ID ?
       };
               };

// Function which closes all cards - upon: page refresh, restart button and "GAME WINNING -> (TO DO)"
function closeAll(arr) {
  let currentIndex = arr.length;
  while (currentIndex !== 0) {
    currentIndex -= 1;
    arr[currentIndex].classList.remove("open", "match","show");
  }
  return arr;
};
/*   set up the event listener for a card.
 If a card is clicked:
 - display the card's symbol (put this functionality in another function -> openCard that you call from this one)
     -> openCard() function
 - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
     -> push () function
 - if the list already has another card, check to see if the two cards match
     -> ifTwoOpen() function
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
     -> ifMatch() function
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
      -> notMatch() function
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
      -> movesCounter()
  *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
      -> TO DO
 *    + on XX moves hide (or maybe change class?) of the star 1, than star 2 and star 3...
      -> TO DO hideStars
      */


for ( let i = 0; i <cardsArray.length; i++){
  cards = cardsArray[i];
  cards.addEventListener("click", openCard);
  cards.addEventListener("click", push);
  cards.addEventListener("click", ifTwoOpen);
  cards.addEventListener("click", movesCounter);
  cards.addEventListener("click", matchCounter);
};

 function openCard() {
  this.classList.toggle("open");
  this.classList.toggle("show");   // or $( this ).toggleClass( "show");
};

var openedCards = [];
var matchedCards = [];

function push() {
  openedCards.push(this);
  console.log(openedCards);
  };

function ifTwoOpen() {
if (openedCards.length === 2) {
    if ( (openedCards[0].innerHTML === openedCards[1].innerHTML) &&
        (openedCards[0] !== openedCards[1]) ) { // to avoid "match" on double clicking same card
    ifMatch();
    }
};
if (openedCards.length === 3) { // to let second card be opened untill we click third one
    notMatch();
    }
};



function ifMatch() {
    openedCards[0].classList.add("match");
    openedCards[1].classList.add("match");
    pushMatchedCards();
  };

var matchedCards = [];

function pushMatchedCards() {
  matchedCards.push("this");
  console.log(matchedCards);
  };

function notMatch() {
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
    openedCards.splice(0, 2);
  };

move.innerHTML = "0";

 function movesCounter() {
  moves += 1;
  move.innerHTML = moves;
  hideStars();
 };

function hideStars() {
  if (moves> 28) {
    starsLi[2].classList.add("hidden");
    }
  if (moves>32) {
    starsLi[1].classList.add("hidden");}
    ;
  if (moves>36) {
    starsLi[0].classList.add("hidden");}
    ;
};

function matchCounter() {
 if (matchedCards.length === 1) {
   congrats(); };
};

function congrats () {   /* TO DO  */
  $(".win-message").text("You won").fadeIn();
  $(".win-message").classList.add("You won")

};

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
