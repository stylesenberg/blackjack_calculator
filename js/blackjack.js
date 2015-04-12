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
  calculateValue(game.dealersHand);
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

    console.log("Dealer has now: " + game.valueOfDealersHand);
    return game.valueOfDealersHand;

  } else {

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
      dealersTurn();
    };

    // announce "busted"
    if (game.valueOfPlayersHand > 21) {
      console.log("----- Player has lost! Player shows: " + game.valueOfPlayersHand);

      game.betSize *= -1;
      calculateBankroll(game.betSize);
      //startNewGame();
      return "busted";
    };

    // announce all other game.valueOfPlayersHandues
    if (game.valueOfPlayersHand < 21) {
      console.log("Player shows: " + game.valueOfPlayersHand);
      return game.valueOfPlayersHand;
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

function checkDeckSize() {
  if (game.deck.length == 0) {
    console.log("game init");
  };

  if (game.deck.length == 0 || game.deck.length < 20) {

    shuffleNewDeck();
    console.log("Number of cards in the current deck: " + game.deck.length);
    return "new deck shuffled"

  } else {
    console.log("Number of cards in the current deck: " + game.deck.length);
    return "deck is still dealable"
  };
};

function startNewGame () {
  checkDeckSize();
  placeBet(10);
  dealInitialCards();
  //gameLogic();
}

function gameLogic () {
  // body...
}

function settings () {
  // body...
}

/* workflow */
shuffleNewDeck();





$(".jumbotron .btn-primary").click(function () {
    startNewGame();
});

$(".jumbotron .btn-success").click(function () {
    dealersTurn();
});

$(".jumbotron .btn-warning").click(function () {
    hit(game.playersHand);
});

$(".jumbotron .btn-danger").click(function () {
    double(game.playersHand);
});







