/* global variables */
var game = {};
game.bankroll = 0;
game.betSize = 10;
game.deck = [];
game.playersHand = null;
game.dealersHand = null;
game.valueOfPlayersHand = 0;
game.valueOfDealersHand = 0;
game.hardValue = 0;
game.softValue = 0;


function simulateTheGame () {

  for (var i = 0; i < simulation.count; i++) {

    console.log("--- simulation # " + i);
    
    checkDeckSize();
    placeBet(10);
    dealInitialCards();
    calculateValue(game.playersHand);
    calculateValue(game.dealersHand);
    playAccordingToStrategy();
  };
}

/*
* next step: 
* create logic of playAccordingToStrategy();
*
* determine weather HARD or SOFT hand-value
*
*/

function checkDeckSize() {
  if (game.deck.length == 0 ) {
    console.log("deck init.");
    shuffleNewDeck();
  } else if (game.deck.length < general.positionOfCutcard) {
    shuffleNewDeck();
  };
};

function shuffleNewDeck() {
  game.deck = [];

  if (general.numberOfDecks != null) {
    for (var deck = 0; deck < general.numberOfDecks; deck++) {
      for (var suit = 0; suit < 4; suit++) {
        game.deck.push(2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "A");
      };
    };

    shuffle(game.deck);
    console.log("new deck shuffled.");
  };
};

/* create a function to shuffle an Array */
function shuffle(o) {
  for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

function placeBet(bet) {
  game.betSize = bet;
};

function calculateBankroll(amount) {
  game.bankroll += amount;
};

function dealInitialCards() {
  game.playersHand = [];
  game.dealersHand = [];

  game.playersHand.push(game.deck.pop());
  game.dealersHand.push(game.deck.pop());
  game.playersHand.push(game.deck.pop());

  console.log(game.playersHand);
  console.log(game.dealersHand);
  console.log("Initial cards were dealt.");
};

function calculateValue(hand) {

  if (hand == game.dealersHand) {

    game.valueOfDealersHand = 0;

    for (var i = 0; i < hand.length; i++) {
      if (hand[i] == "A") {
        game.valueOfDealersHand += 1;
      } else {
        game.valueOfDealersHand += hand[i];
      };
    };

    // calculate the Ace correctly
    if ((game.valueOfDealersHand < 12) && (game.dealersHand.indexOf("A") != -1)) {
      game.valueOfDealersHand += 10;
    };

    console.log("Dealer shows: " + game.valueOfDealersHand);
    return game.valueOfDealersHand;

  } else if (hand == game.playersHand) {

    game.valueOfPlayersHand = 0;

    for (var i = 0; i < hand.length; i++) {
      if (hand[i] == "A") {
        game.valueOfPlayersHand += 1;
      } else {
        game.valueOfPlayersHand += hand[i];
      };
    };

    // calculate the ace correctly
    if ((game.valueOfPlayersHand < 12) && (hand.indexOf("A") != -1)) {
      game.valueOfPlayersHand += 10;
    };

    // announce blackjack
    if (game.valueOfPlayersHand == 21 && hand.length < 3) {
      console.log("----- Player has won! Player shows BLACKJACK.");

      game.betSize *= 2.5;
      calculateBankroll(game.betSize);
      //startNewGame();
      return "blackjack";
    };

    // announce 21
    if (game.valueOfPlayersHand == 21 && hand.length >= 3) {
      console.log("Player shows: " + game.valueOfPlayersHand);

      return game.valueOfPlayersHand;
      //dealersTurn();
    };

    // announce "busted"
    if (game.valueOfPlayersHand > 21) {
      console.log("----- Player has lost! Player shows: " + game.valueOfPlayersHand);

      game.betSize *= -1;
      calculateBankroll(game.betSize);
      //startNewGame();
      return "busted";
    };

    // announce all other game.valueOfPlayersHands
    if (game.valueOfPlayersHand < 21) {
      console.log("Player shows: " + game.valueOfPlayersHand);
      return game.valueOfPlayersHand;
    };
  } else {
    console.log("how can there be another hand?");
  };
};


function playAccordingToStrategy(){
  console.log(game.valueOfPlayersHand);
  console.log(game.valueOfDealersHand);

  calculateHardValue(game.playersHand);
  calculateSoftValue(game.playersHand);


  if ( game.hardValue == game.softValue ) {
    // play HARD strategy
    console.log("HARD value.");
    if (game.valueOfPlayersHand == 5 && game.valueOfDealersHand == 2) { play(strategy.hard_5_2); };
    if (game.valueOfPlayersHand == 5 && game.valueOfDealersHand == 3) { play(strategy.hard_5_3); };
    if (game.valueOfPlayersHand == 5 && game.valueOfDealersHand == 4) { play(strategy.hard_5_4); };
    if (game.valueOfPlayersHand == 5 && game.valueOfDealersHand == 5) { play(strategy.hard_5_5); };
    if (game.valueOfPlayersHand == 5 && game.valueOfDealersHand == 6) { play(strategy.hard_5_6); };
    if (game.valueOfPlayersHand == 5 && game.valueOfDealersHand == 7) { play(strategy.hard_5_7); };
    if (game.valueOfPlayersHand == 5 && game.valueOfDealersHand == 8) { play(strategy.hard_5_8); };
    if (game.valueOfPlayersHand == 5 && game.valueOfDealersHand == 9) { play(strategy.hard_5_9); };
    if (game.valueOfPlayersHand == 5 && game.valueOfDealersHand == 10) { play(strategy.hard_5_T); };
    if (game.valueOfPlayersHand == 5 && game.valueOfDealersHand == 11) { play(strategy.hard_5_A); };

    if (game.valueOfPlayersHand == 6 && game.valueOfDealersHand == 2) { play(strategy.hard_6_2); };
    if (game.valueOfPlayersHand == 6 && game.valueOfDealersHand == 3) { play(strategy.hard_6_3); };
    if (game.valueOfPlayersHand == 6 && game.valueOfDealersHand == 4) { play(strategy.hard_6_4); };
    if (game.valueOfPlayersHand == 6 && game.valueOfDealersHand == 5) { play(strategy.hard_6_5); };
    if (game.valueOfPlayersHand == 6 && game.valueOfDealersHand == 6) { play(strategy.hard_6_6); };
    if (game.valueOfPlayersHand == 6 && game.valueOfDealersHand == 7) { play(strategy.hard_6_7); };
    if (game.valueOfPlayersHand == 6 && game.valueOfDealersHand == 8) { play(strategy.hard_6_8); };
    if (game.valueOfPlayersHand == 6 && game.valueOfDealersHand == 9) { play(strategy.hard_6_9); };
    if (game.valueOfPlayersHand == 6 && game.valueOfDealersHand == 10) { play(strategy.hard_6_T); };
    if (game.valueOfPlayersHand == 6 && game.valueOfDealersHand == 11) { play(strategy.hard_6_A); };

    if (game.valueOfPlayersHand == 7 && game.valueOfDealersHand == 2) { play(strategy.hard_7_2); };
    if (game.valueOfPlayersHand == 7 && game.valueOfDealersHand == 3) { play(strategy.hard_7_3); };
    if (game.valueOfPlayersHand == 7 && game.valueOfDealersHand == 4) { play(strategy.hard_7_4); };
    if (game.valueOfPlayersHand == 7 && game.valueOfDealersHand == 5) { play(strategy.hard_7_5); };
    if (game.valueOfPlayersHand == 7 && game.valueOfDealersHand == 6) { play(strategy.hard_7_6); };
    if (game.valueOfPlayersHand == 7 && game.valueOfDealersHand == 7) { play(strategy.hard_7_7); };
    if (game.valueOfPlayersHand == 7 && game.valueOfDealersHand == 8) { play(strategy.hard_7_8); };
    if (game.valueOfPlayersHand == 7 && game.valueOfDealersHand == 9) { play(strategy.hard_7_9); };
    if (game.valueOfPlayersHand == 7 && game.valueOfDealersHand == 10) { play(strategy.hard_7_T); };
    if (game.valueOfPlayersHand == 7 && game.valueOfDealersHand == 11) { play(strategy.hard_7_A); };

    if (game.valueOfPlayersHand == 8 && game.valueOfDealersHand == 2) { play(strategy.hard_8_2); };
    if (game.valueOfPlayersHand == 8 && game.valueOfDealersHand == 3) { play(strategy.hard_8_3); };
    if (game.valueOfPlayersHand == 8 && game.valueOfDealersHand == 4) { play(strategy.hard_8_4); };
    if (game.valueOfPlayersHand == 8 && game.valueOfDealersHand == 5) { play(strategy.hard_8_5); };
    if (game.valueOfPlayersHand == 8 && game.valueOfDealersHand == 6) { play(strategy.hard_8_6); };
    if (game.valueOfPlayersHand == 8 && game.valueOfDealersHand == 7) { play(strategy.hard_8_7); };
    if (game.valueOfPlayersHand == 8 && game.valueOfDealersHand == 8) { play(strategy.hard_8_8); };
    if (game.valueOfPlayersHand == 8 && game.valueOfDealersHand == 9) { play(strategy.hard_8_9); };
    if (game.valueOfPlayersHand == 8 && game.valueOfDealersHand == 10) { play(strategy.hard_8_T); };
    if (game.valueOfPlayersHand == 8 && game.valueOfDealersHand == 11) { play(strategy.hard_8_A); };

    if (game.valueOfPlayersHand == 9 && game.valueOfDealersHand == 2) { play(strategy.hard_9_2); };
    if (game.valueOfPlayersHand == 9 && game.valueOfDealersHand == 3) { play(strategy.hard_9_3); };
    if (game.valueOfPlayersHand == 9 && game.valueOfDealersHand == 4) { play(strategy.hard_9_4); };
    if (game.valueOfPlayersHand == 9 && game.valueOfDealersHand == 5) { play(strategy.hard_9_5); };
    if (game.valueOfPlayersHand == 9 && game.valueOfDealersHand == 6) { play(strategy.hard_9_6); };
    if (game.valueOfPlayersHand == 9 && game.valueOfDealersHand == 7) { play(strategy.hard_9_7); };
    if (game.valueOfPlayersHand == 9 && game.valueOfDealersHand == 8) { play(strategy.hard_9_8); };
    if (game.valueOfPlayersHand == 9 && game.valueOfDealersHand == 9) { play(strategy.hard_9_9); };
    if (game.valueOfPlayersHand == 9 && game.valueOfDealersHand == 10) { play(strategy.hard_9_T); };
    if (game.valueOfPlayersHand == 9 && game.valueOfDealersHand == 11) { play(strategy.hard_9_A); };

    if (game.valueOfPlayersHand == 10 && game.valueOfDealersHand == 2) { play(strategy.hard_10_2); };
    if (game.valueOfPlayersHand == 10 && game.valueOfDealersHand == 3) { play(strategy.hard_10_3); };
    if (game.valueOfPlayersHand == 10 && game.valueOfDealersHand == 4) { play(strategy.hard_10_4); };
    if (game.valueOfPlayersHand == 10 && game.valueOfDealersHand == 5) { play(strategy.hard_10_5); };
    if (game.valueOfPlayersHand == 10 && game.valueOfDealersHand == 6) { play(strategy.hard_10_6); };
    if (game.valueOfPlayersHand == 10 && game.valueOfDealersHand == 7) { play(strategy.hard_10_7); };
    if (game.valueOfPlayersHand == 10 && game.valueOfDealersHand == 8) { play(strategy.hard_10_8); };
    if (game.valueOfPlayersHand == 10 && game.valueOfDealersHand == 9) { play(strategy.hard_10_9); };
    if (game.valueOfPlayersHand == 10 && game.valueOfDealersHand == 10) { play(strategy.hard_10_T); };
    if (game.valueOfPlayersHand == 10 && game.valueOfDealersHand == 11) { play(strategy.hard_10_A); };

    if (game.valueOfPlayersHand == 11 && game.valueOfDealersHand == 2) { play(strategy.hard_11_2); };
    if (game.valueOfPlayersHand == 11 && game.valueOfDealersHand == 3) { play(strategy.hard_11_3); };
    if (game.valueOfPlayersHand == 11 && game.valueOfDealersHand == 4) { play(strategy.hard_11_4); };
    if (game.valueOfPlayersHand == 11 && game.valueOfDealersHand == 5) { play(strategy.hard_11_5); };
    if (game.valueOfPlayersHand == 11 && game.valueOfDealersHand == 6) { play(strategy.hard_11_6); };
    if (game.valueOfPlayersHand == 11 && game.valueOfDealersHand == 7) { play(strategy.hard_11_7); };
    if (game.valueOfPlayersHand == 11 && game.valueOfDealersHand == 8) { play(strategy.hard_11_8); };
    if (game.valueOfPlayersHand == 11 && game.valueOfDealersHand == 9) { play(strategy.hard_11_9); };
    if (game.valueOfPlayersHand == 11 && game.valueOfDealersHand == 10) { play(strategy.hard_11_T); };
    if (game.valueOfPlayersHand == 11 && game.valueOfDealersHand == 11) { play(strategy.hard_11_A); };

    if (game.valueOfPlayersHand == 12 && game.valueOfDealersHand == 2) { play(strategy.hard_12_2); };
    if (game.valueOfPlayersHand == 12 && game.valueOfDealersHand == 3) { play(strategy.hard_12_3); };
    if (game.valueOfPlayersHand == 12 && game.valueOfDealersHand == 4) { play(strategy.hard_12_4); };
    if (game.valueOfPlayersHand == 12 && game.valueOfDealersHand == 5) { play(strategy.hard_12_5); };
    if (game.valueOfPlayersHand == 12 && game.valueOfDealersHand == 6) { play(strategy.hard_12_6); };
    if (game.valueOfPlayersHand == 12 && game.valueOfDealersHand == 7) { play(strategy.hard_12_7); };
    if (game.valueOfPlayersHand == 12 && game.valueOfDealersHand == 8) { play(strategy.hard_12_8); };
    if (game.valueOfPlayersHand == 12 && game.valueOfDealersHand == 9) { play(strategy.hard_12_9); };
    if (game.valueOfPlayersHand == 12 && game.valueOfDealersHand == 10) { play(strategy.hard_12_T); };
    if (game.valueOfPlayersHand == 12 && game.valueOfDealersHand == 11) { play(strategy.hard_12_A); };

    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 2) { play(strategy.hard_13_2); };
    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 3) { play(strategy.hard_13_3); };
    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 4) { play(strategy.hard_13_4); };
    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 5) { play(strategy.hard_13_5); };
    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 6) { play(strategy.hard_13_6); };
    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 7) { play(strategy.hard_13_7); };
    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 8) { play(strategy.hard_13_8); };
    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 9) { play(strategy.hard_13_9); };
    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 10) { play(strategy.hard_13_T); };
    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 11) { play(strategy.hard_13_A); };

    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 2) { play(strategy.hard_14_2); };
    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 3) { play(strategy.hard_14_3); };
    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 4) { play(strategy.hard_14_4); };
    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 5) { play(strategy.hard_14_5); };
    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 6) { play(strategy.hard_14_6); };
    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 7) { play(strategy.hard_14_7); };
    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 8) { play(strategy.hard_14_8); };
    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 9) { play(strategy.hard_14_9); };
    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 10) { play(strategy.hard_14_T); };
    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 11) { play(strategy.hard_14_A); };

    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 2) { play(strategy.hard_15_2); };
    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 3) { play(strategy.hard_15_3); };
    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 4) { play(strategy.hard_15_4); };
    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 5) { play(strategy.hard_15_5); };
    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 6) { play(strategy.hard_15_6); };
    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 7) { play(strategy.hard_15_7); };
    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 8) { play(strategy.hard_15_8); };
    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 9) { play(strategy.hard_15_9); };
    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 10) { play(strategy.hard_15_T); };
    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 11) { play(strategy.hard_15_A); };

    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 2) { play(strategy.hard_16_2); };
    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 3) { play(strategy.hard_16_3); };
    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 4) { play(strategy.hard_16_4); };
    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 5) { play(strategy.hard_16_5); };
    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 6) { play(strategy.hard_16_6); };
    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 7) { play(strategy.hard_16_7); };
    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 8) { play(strategy.hard_16_8); };
    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 9) { play(strategy.hard_16_9); };
    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 10) { play(strategy.hard_16_T); };
    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 11) { play(strategy.hard_16_A); };


    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 2) { play(strategy.hard_17_2); };
    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 3) { play(strategy.hard_17_3); };
    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 4) { play(strategy.hard_17_4); };
    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 5) { play(strategy.hard_17_5); };
    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 6) { play(strategy.hard_17_6); };
    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 7) { play(strategy.hard_17_7); };
    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 8) { play(strategy.hard_17_8); };
    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 9) { play(strategy.hard_17_9); };
    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 10) { play(strategy.hard_17_T); };
    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 11) { play(strategy.hard_17_A); };

    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 2) { play(strategy.hard_18_2); };
    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 3) { play(strategy.hard_18_3); };
    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 4) { play(strategy.hard_18_4); };
    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 5) { play(strategy.hard_18_5); };
    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 6) { play(strategy.hard_18_6); };
    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 7) { play(strategy.hard_18_7); };
    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 8) { play(strategy.hard_18_8); };
    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 9) { play(strategy.hard_18_9); };
    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 10) { play(strategy.hard_18_T); };
    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 11) { play(strategy.hard_18_A); };

    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 2) { play(strategy.hard_19_2); };
    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 3) { play(strategy.hard_19_3); };
    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 4) { play(strategy.hard_19_4); };
    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 5) { play(strategy.hard_19_5); };
    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 6) { play(strategy.hard_19_6); };
    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 7) { play(strategy.hard_19_7); };
    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 8) { play(strategy.hard_19_8); };
    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 9) { play(strategy.hard_19_9); };
    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 10) { play(strategy.hard_19_T); };
    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 11) { play(strategy.hard_19_A); };

    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 2) { play(strategy.hard_20_2); };
    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 3) { play(strategy.hard_20_3); };
    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 4) { play(strategy.hard_20_4); };
    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 5) { play(strategy.hard_20_5); };
    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 6) { play(strategy.hard_20_6); };
    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 7) { play(strategy.hard_20_7); };
    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 8) { play(strategy.hard_20_8); };
    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 9) { play(strategy.hard_20_9); };
    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 10) { play(strategy.hard_20_T); };
    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 11) { play(strategy.hard_20_A); };

    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 2) { play(strategy.hard_21_2); };
    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 3) { play(strategy.hard_21_3); };
    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 4) { play(strategy.hard_21_4); };
    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 5) { play(strategy.hard_21_5); };
    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 6) { play(strategy.hard_21_6); };
    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 7) { play(strategy.hard_21_7); };
    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 8) { play(strategy.hard_21_8); };
    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 9) { play(strategy.hard_21_9); };
    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 10) { play(strategy.hard_21_T); };
    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 11) { play(strategy.hard_21_A); };

  } else {
    // play SOFT strategy
    console.log("SOFT value.");
    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 2) { play(strategy.soft_13_2); };
    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 3) { play(strategy.soft_13_3); };
    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 4) { play(strategy.soft_13_4); };
    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 5) { play(strategy.soft_13_5); };
    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 6) { play(strategy.soft_13_6); };
    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 7) { play(strategy.soft_13_7); };
    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 8) { play(strategy.soft_13_8); };
    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 9) { play(strategy.soft_13_9); };
    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 10) { play(strategy.soft_13_T); };
    if (game.valueOfPlayersHand == 13 && game.valueOfDealersHand == 11) { play(strategy.soft_13_A); };

    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 2) { play(strategy.soft_14_2); };
    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 3) { play(strategy.soft_14_3); };
    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 4) { play(strategy.soft_14_4); };
    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 5) { play(strategy.soft_14_5); };
    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 6) { play(strategy.soft_14_6); };
    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 7) { play(strategy.soft_14_7); };
    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 8) { play(strategy.soft_14_8); };
    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 9) { play(strategy.soft_14_9); };
    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 10) { play(strategy.soft_14_T); };
    if (game.valueOfPlayersHand == 14 && game.valueOfDealersHand == 11) { play(strategy.soft_14_A); };

    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 2) { play(strategy.soft_15_2); };
    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 3) { play(strategy.soft_15_3); };
    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 4) { play(strategy.soft_15_4); };
    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 5) { play(strategy.soft_15_5); };
    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 6) { play(strategy.soft_15_6); };
    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 7) { play(strategy.soft_15_7); };
    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 8) { play(strategy.soft_15_8); };
    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 9) { play(strategy.soft_15_9); };
    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 10) { play(strategy.soft_15_T); };
    if (game.valueOfPlayersHand == 15 && game.valueOfDealersHand == 11) { play(strategy.soft_15_A); };

    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 2) { play(strategy.soft_16_2); };
    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 3) { play(strategy.soft_16_3); };
    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 4) { play(strategy.soft_16_4); };
    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 5) { play(strategy.soft_16_5); };
    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 6) { play(strategy.soft_16_6); };
    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 7) { play(strategy.soft_16_7); };
    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 8) { play(strategy.soft_16_8); };
    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 9) { play(strategy.soft_16_9); };
    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 10) { play(strategy.soft_16_T); };
    if (game.valueOfPlayersHand == 16 && game.valueOfDealersHand == 11) { play(strategy.soft_16_A); };

    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 2) { play(strategy.soft_17_2); };
    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 3) { play(strategy.soft_17_3); };
    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 4) { play(strategy.soft_17_4); };
    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 5) { play(strategy.soft_17_5); };
    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 6) { play(strategy.soft_17_6); };
    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 7) { play(strategy.soft_17_7); };
    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 8) { play(strategy.soft_17_8); };
    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 9) { play(strategy.soft_17_9); };
    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 10) { play(strategy.soft_17_T); };
    if (game.valueOfPlayersHand == 17 && game.valueOfDealersHand == 11) { play(strategy.soft_17_A); };

    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 2) { play(strategy.soft_18_2); };
    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 3) { play(strategy.soft_18_3); };
    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 4) { play(strategy.soft_18_4); };
    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 5) { play(strategy.soft_18_5); };
    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 6) { play(strategy.soft_18_6); };
    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 7) { play(strategy.soft_18_7); };
    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 8) { play(strategy.soft_18_8); };
    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 9) { play(strategy.soft_18_9); };
    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 10) { play(strategy.soft_18_T); };
    if (game.valueOfPlayersHand == 18 && game.valueOfDealersHand == 11) { play(strategy.soft_18_A); };

    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 2) { play(strategy.soft_19_2); };
    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 3) { play(strategy.soft_19_3); };
    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 4) { play(strategy.soft_19_4); };
    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 5) { play(strategy.soft_19_5); };
    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 6) { play(strategy.soft_19_6); };
    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 7) { play(strategy.soft_19_7); };
    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 8) { play(strategy.soft_19_8); };
    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 9) { play(strategy.soft_19_9); };
    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 10) { play(strategy.soft_19_T); };
    if (game.valueOfPlayersHand == 19 && game.valueOfDealersHand == 11) { play(strategy.soft_19_A); };

    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 2) { play(strategy.soft_20_2); };
    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 3) { play(strategy.soft_20_3); };
    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 4) { play(strategy.soft_20_4); };
    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 5) { play(strategy.soft_20_5); };
    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 6) { play(strategy.soft_20_6); };
    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 7) { play(strategy.soft_20_7); };
    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 8) { play(strategy.soft_20_8); };
    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 9) { play(strategy.soft_20_9); };
    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 10) { play(strategy.soft_20_T); };
    if (game.valueOfPlayersHand == 20 && game.valueOfDealersHand == 11) { play(strategy.soft_20_A); };

    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 2) { play(strategy.soft_21_2); };
    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 3) { play(strategy.soft_21_3); };
    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 4) { play(strategy.soft_21_4); };
    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 5) { play(strategy.soft_21_5); };
    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 6) { play(strategy.soft_21_6); };
    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 7) { play(strategy.soft_21_7); };
    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 8) { play(strategy.soft_21_8); };
    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 9) { play(strategy.soft_21_9); };
    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 10) { play(strategy.soft_21_T); };
    if (game.valueOfPlayersHand == 21 && game.valueOfDealersHand == 11) { play(strategy.soft_21_A); };

  };

};

function play(letter) {
  if (letter == "H") { hit(game.playersHand) };
  if (letter = "S") { dealersTurn() };
};

function calculateHardValue(hand) {

  game.hardValue = 0;

  for (var i = 0; i < hand.length; i++) {
    if (hand[i] == "A") {
      game.hardValue += 1;
    } else {
      game.hardValue += hand[i];
    };
  };
};

function calculateSoftValue(hand) {

  game.softValue = 0;

  for (var i = 0; i < hand.length; i++) {
    if (hand[i] == "A") {
      game.softValue += 1;
    } else {
      game.softValue += hand[i];
    };
  };

    // calculate the Ace correctly
  if ((game.softValue < 12) && (hand.indexOf("A") != -1)) {
    game.softValue += 10;
  };
};


function hit (hand) {
  if (hand == game.dealersHand) {

    var the_new_card = game.deck.pop();
    game.dealersHand.push(the_new_card);
    console.log("Dealer was dealt a " + the_new_card);
    calculateValue(game.dealersHand);
    return "dealersHand was destinguished successfully.";

  } else {

    if (game.valueOfPlayersHand == 21) {
      console.log("Player has already enough. ;-)");
      return "playersHand is already 21.";

    } else {
      var the_new_card = game.deck.pop();
      game.playersHand.push(the_new_card);
      console.log("Player was dealt a " + the_new_card);
      calculateValue(game.playersHand);
    };

    return "playersHand was destinguished successfully.";
  };
};

function double (hand) {
  if (hand == game.dealersHand) {
    return "dealersHand can't double.";

  } else {
    if (game.playersHand.length < 3) {
      game.betSize *= 2;
      var the_new_card = game.deck.pop();
      game.playersHand.push(the_new_card);
      console.log("Player was dealt a " + the_new_card + " .");
      calculateValue(game.playersHand);
      console.log("Player must stand now.");

      dealersTurn();

      return "playersHand was doubled successfully.";
    } else{
      return "playersHand has more than 2 cards and can not double.";
    };
  };
};

function dealersTurn() {
  console.log("Dealer's turn starts ... ");
  console.log("Dealer currently stands at " + game.valueOfDealersHand);

  do {
    var the_new_card = game.deck.pop();

    game.dealersHand.push(the_new_card);

    console.log("Dealer was dealt a " + the_new_card);

    calculateValue(game.dealersHand);
  }
  while (game.valueOfDealersHand < 17);

  compareHands();
};

function compareHands () {

  // player has more
  if (game.valueOfDealersHand < game.valueOfPlayersHand) {
    console.log("*--- player wins");

    calculateBankroll(game.betSize);
    //startNewGame();
    return "player wins"
  };

  // dealer has more
  if (game.valueOfPlayersHand < game.valueOfDealersHand && game.valueOfDealersHand <= 21) {
    console.log("*--- Player has lost.");

    game.betSize *= -1;
    calculateBankroll(game.betSize);
    //startNewGame();
    return "dealer wins"
  };

  // draw
  if (game.valueOfPlayersHand == game.valueOfDealersHand) {
    console.log("*--- Draw. Player has " + game.valueOfPlayersHand + " and Dealer has " + game.valueOfDealersHand + " as well.")

    game.betSize = 0;
    calculateBankroll(game.betSize);
    //startNewGame();
    return "draw"
  };

  // dealer busts
  if (game.valueOfDealersHand > 21) {
    console.log("*--- Dealer busted. Player wins!")

    calculateBankroll(game.betSize);
    //startNewGame();
    return "dealer busts"
  };
};











