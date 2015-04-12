/* global variables */
var game = {};
game.bankroll = 100;
game.betSize = 10;
game.deck = [];
game.playersHand = [];
game.dealersHand = [];
game.valueOfPlayersHand = 0;
game.valueOfDealersHand = 0;

/* create a function to shuffle an Array */
function shuffle(o) {
  for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

function shuffleNewDeck() {
  game.deck = [];

  for (var deck = 0; deck < 6; deck++) {
    for (var suit = 0; suit < 4; suit++) {
      game.deck.push(2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "A");
    };
  };

  shuffle(game.deck);
  
  console.log("A new deck of cards has been shuffled.");
};

function placeBet(bet) {
  game.betSize = bet;

  if (isNaN(game.betSize)) {
    console.log("*--- Argument is NaN.");
    return "Argument == NaN.";
  } else {
    console.log("*--- Bet is placed. Betsize is: " + game.betSize);
    return "Everything is fine.";
  };
};

function calculateBankroll(amount) {
  game.bankroll += amount;
  console.log("New bankroll is: " + game.bankroll);
  return game.bankroll;
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

  calculateValue(game.playersHand);
  /* stopped here */
  //calcValPlayerOfDealersHand();
};

function calculateValue(hand) {

  if (hand == game.dealersHand) {

    game.valueOfDealersHand = 0;
    var val = game.valueOfDealersHand;

    for (var i = 0; i < hand.length; i++) {
      if (hand[i] == "A") {
        val += 1;
      } else {
        val += hand[i];
      };
    };

    // calculate the Ace correctly
    if ((val < 12) && (game.dealersHand.indexOf("A") != -1)) {
      val += 10;
    };

    console.log("Dealer has now: " + val);
    return val;

  } else {

    game.valueOfPlayersHand = 0;
    var val = game.valueOfPlayersHand;

    for (var i = 0; i < hand.length; i++) {
      if (hand[i] == "A") {
        val += 1;
      } else {
        val += hand[i];
      };
    };

    // calculate the ace correctly
    if ((val < 12) && (hand.indexOf("A") != -1)) {
      val += 10;
    };

    // announce blackjack
    if (val == 21 && hand.length < 3) {
      console.log("----- Player has won! Player shows BLACKJACK.");

      game.betSize *= 2.5;
      calculateBankroll(game.betSize);
      //startNewGame();
      return "blackjack";
    };

    // announce 21
    if (val == 21 && hand.length >= 3) {
      console.log("Player shows: " + val);
      //beginDealersTurn();
      return val;
    };

    // announce "busted"
    if (val > 21) {
      console.log("----- Player has lost! Player shows: " + val);

      game.betSize *= -1;
      calculateBankroll(game.betSize);
      //startNewGame();
      return "busted";
    };

    // announce all other values
    if (val < 21) {
      console.log("Player shows: " + val);
      return val;
    };
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
      return

    } else {
      var the_new_card = game.deck.pop();
      game.playersHand.push(the_new_card);
      console.log("Player was dealt a " + the_new_card);
      calculateValue(game.playersHand);
    };

    return "playersHand was destinguished successfully.";
  };
};

/* workflow */
shuffleNewDeck();