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