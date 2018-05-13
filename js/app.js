/*
 */

 let deck = document.getElementById("deckId"); // let deck= $('.deck');
 console.log(deck);                            // let deck = $("#deckId");
                                               // let deck = document.getElementsByClassName(".deck");
                                               // WHY from 4 commands from above works only active one??
let cards = $('.card');
let cardsArray = Array.from(cards);
console.log(cardsArray);

// starts startGame() function when page is refreshed
document.body.onload = startGame();

// it is implemented in html file with onclick function on restart button

function startGame() {
cardsArray = shuffle(cardsArray);   // shuffles only array (no visual effect)
console.log(cardsArray);
  for (var i = 0; i < cardsArray.length; i++){
    deck.innerHTML = "";      // we delate every card from deck
      [].forEach.call(cardsArray, function(item) { // we choose i-item from cardsArray
        deck.appendChild(item);   // we append to shuffled array i -item ("card") as child to deck
      });
  };
closeAll(cardsArray);
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

// Shuffle function from http://stackoverflow.com/a/2450976
// returns shuffled array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    };
    return array;
};

/*   set up the event listener for a card.
 If a card is clicked:
 - display the card's symbol (put this functionality in another function -> openCard that you call from this one)
 - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one) -> push */

for ( let i = 0; i <cardsArray.length; i++){
  cards = cardsArray[i];
  cards.addEventListener("click", openCard);
  cards.addEventListener("click", push);
  cards.addEventListener("click", ifTwoOpen);
};

 function openCard() {
  this.classList.toggle("open");
  this.classList.toggle("show");  // $( this ).toggleClass( "show");
};

let openedCards = [];   // array for opened cards

function push() {
  openedCards.push(this);
  console.log(openedCards);
  };

function ifTwoOpen() {
  if (openedCards.length === 2) {
    if (openedCards[0].innerHTML === openedCards[1].innerHTML) {
    ifMatch();
  } else
    notMatch();
    openedCards.splice(0, 2);
    }
};

function ifMatch() {
    openedCards[0].classList.add("match");
    openedCards[1].classList.add("match");
  };

function notMatch() {
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
  };

/*
($('.show').length <= 2 )

$('#main-div .specific-class').length
otherwise with plain js (from IE8 included) you could simply write

document.querySelectorAll('#main-div .specific-class').length;
 */

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
