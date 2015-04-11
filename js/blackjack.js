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


/* workflow */
shuffleNewDeck();