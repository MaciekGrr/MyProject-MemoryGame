/*
 * Create a list that holds all of your cards
 shuffle(cardsArray);
 closeAll(cardsArray);
 */

let deck= $('.deck');

let pickCards= $('.card');
let cardsArray = Array.from(pickCards);
console.log(cardsArray);

// starts startGame() function when page is refreshed
document.body.onload = startGame();

// it is implemented in html file with onclick function on restart button

function startGame() {
cardsArray = shuffle(cardsArray);   // shuffles only array (no visual effect)
  for (var i = 0; i < cardsArray.length; i++){
    deck.innerHTML = "";      // we delate every card from deck
      [].forEach.call(cardsArray, function(item) {
        deck.appendChild(item);   // we append 0 position shuffled array "card" to li
      });
  };
closeAll(cardsArray);
};

function closeAll(array) {
  let currentIndex = array.length;
  while (currentIndex !== 0) {
    currentIndex -= 1;
    array[currentIndex].classList.remove("open", "match","show");
  }
  return array;
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
    };
    return array;
};


pickCards.on("click", function () {
    $( this ).toggleClass( "show");
    $( this ).toggleClass( "open");
  });


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
