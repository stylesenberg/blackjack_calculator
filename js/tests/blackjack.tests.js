QUnit.test( "global variables", function( assert ){
  var test1 = typeof game;

  var test2 = function() {
    var length = 0;
    for (var property in game) {
      if (game.hasOwnProperty(property)){
        length += 1;
      }
    };
    return length;
  };

  var test3 = game.bankroll;
  var test4 = game.betSize;
  var test5 = game.deck.length;
  var test6 = game.playersHand.length;
  var test7 = game.dealersHand.length;
  var test8 = game.valueOfPlayersHand;
  var test9 = game.valueOfDealersHand;

  assert.equal( test1, "object", "Typeof global variable 'game' equals 'object'." );
  assert.equal( test2(), 7, "Global variable 'game' has 7 properties." );
  assert.equal( test3, 100, "Property game.bankroll is set to 100." );
  assert.equal( test4, 10, "Property game.betSize is set to 10." );
  assert.equal( test5, 312, "Property game.deck is a fully loaded deck.");
  assert.equal( test6, 0, "Property game.playersHand is an empty array.");
  assert.equal( test7, 0, "Property game.dealersHand is an empty array.");
  assert.equal( test8, 0, "Property game.valueOfPlayersHand is set to 0.");
  assert.equal( test9, 0, "Property game.valueOfDealersHand is set to 0.");
});

QUnit.test( "function shuffle(arg)", function( assert ) {
  var test1 = typeof shuffle;
  var test_b = shuffle.length;
	var arr1 = [0,1,2,3,4];
	var arr2 = [0,1,2,3,4];
	var shuffled_arr = shuffle(arr1);

  assert.equal( test1, "function", "Function shuffle(arg) is defined." );
  assert.equal( test_b, 1, "Function shuffle(arg) takes 1 argument." );
  assert.notEqual( arr1, arr2, "Function shuffle(arg) works.");
});

QUnit.test( "function shuffleNewDeck()", function( assert ) {
  var test1 = typeof shuffleNewDeck;

  var test2 = function() {
    card = 3;
    count = 0;

    for (var i = 0; i < game.deck.length; i++) {
      if (game.deck[i] == card) {
        count++;
      };
    };

    return count;
  };

  var test3 = function() {
    card = "A";
    count = 0;

    for (var i = 0; i < game.deck.length; i++) {
      if (game.deck[i] == card) {
        count++;
      };
    };

    return count;
  };

  var test4 = function() {
    card = 10;
    count = 0;

    for (var i = 0; i < game.deck.length; i++) {
      if (game.deck[i] == card) {
        count++;
      };
    };

    return count;
  };

  assert.equal( test1, "function", "Function shuffleNewDeck() is defined." );
  assert.equal( test2(), 24, "Facevalue '3' appears correctly 24 times." );
  assert.equal( test3(), 24, "Facevalue 'A' appears correctly 24 times." );
  assert.equal( test4(), 96, "Facevalue '10' appears correctly 96 times." );
});

QUnit.test( "function placeBet(arg)", function( assert ) {
  var test1 = typeof placeBet;
  var test_b = placeBet.length;

  var initialValue = game.betSize; //stores initial value
  console.log("LOGS: " + initialValue);
  var test2 = placeBet("string");
  var test3 = placeBet(37);
  placeBet(initialValue); //restores initial value

  assert.equal( test1, "function", "Function placeBet(arg) is defined." );
  assert.equal( test_b, 1, "Function placeBet(arg) takes 1 argument." );
  assert.equal( test2, "Argument == NaN.", "Case: isNaN(arg) works." );
  assert.equal( test3, "Everything is fine.", "Case: argument == number works." );
});

QUnit.test( "function calculateBankroll(arg)", function( assert ) {
  var test1 = typeof calculateBankroll;
  var test_b = calculateBankroll.length;

  var initialValue = game.bankroll; //stores initial value
  game.bankroll = 0;

  var test2 = calculateBankroll(7);
  game.bankroll = 0;

  var test3 = calculateBankroll(-137);
  game.bankroll = 0;

  var test4 = calculateBankroll(0.557);
  game.bankroll = 0;

  var test5 = calculateBankroll(-2.0);
  game.bankroll = initialValue; //restores initial value

  assert.equal( test1, "function", "Function calculateBankroll(arg) is defined." );
  assert.equal( test_b, 1, "Function calculateBankroll(arg) takes 1 argument." );
  assert.equal( test2, 7, "Function calculateBankroll(arg) works correctly." );
  assert.equal( test3, -137, "Function calculateBankroll(arg) works correctly." );
  assert.equal( test4, 0.557, "Function calculateBankroll(arg) works correctly." );
  assert.equal( test5, -2.0, "Function calculateBankroll(arg) works correctly." );
});

QUnit.test( "function dealInitialCards()", function( assert ) {
  var test1 = typeof dealInitialCards;

  assert.equal( test1, "function", "Function dealInitialCards() is defined." );
});

QUnit.test( "function calculateValue(arg)", function( assert ) {
  var test_a = typeof calculateValue;
  var test_b = calculateValue.length;

  var arr1 = [2];
  var test1 = calculateValue(arr1);

  var arr2 = [10];
  var test2 = calculateValue(arr2);

  var arr3 = ["A"];
  var test3 = calculateValue(arr3);

  var arr4 = [10,"A"];
  var test4 = calculateValue(arr4);
  game.betSize = 10;
  game.bankroll = 100;

  var arr5 = [10,"A", 3, "A", 3, "A", 2];
  var test5 = calculateValue(arr5);
  game.betSize = 10;
  game.bankroll = 100;

  var arr6 = [10,2,10];
  var test6 = calculateValue(arr6);
  game.betSize = 10;
  game.bankroll = 100;

  var arr7 = [4,2,3,4,"A","A",2,3,2];
  var test7 = calculateValue(arr7);
  game.betSize = 10;
  game.bankroll = 100;

  var arr8 = [6,6,6,2,2];
  var test8 = calculateValue(arr8);
  game.betSize = 10;
  game.bankroll = 100;

  game.dealersHand = [10];
  var arr9 = game.dealersHand;
  var test9 = calculateValue(arr9);
  game.betSize = 10;
  game.bankroll = 100;
  game.dealersHand = [];

  game.dealersHand = ["A",10];
  var arr10 = game.dealersHand;
  var test10 = calculateValue(arr10);
  game.betSize = 10;
  game.bankroll = 100;
  game.dealersHand = [];

  game.dealersHand = [2,4,3,3,10];
  var arr11 = game.dealersHand;
  var test11 = calculateValue(arr11);
  game.betSize = 10;
  game.bankroll = 100;
  game.dealersHand = [];

  game.dealersHand = ["A","A","A","A","A","A",2,"A","A",10];
  var arr12 = game.dealersHand;
  var test12 = calculateValue(arr12);
  game.betSize = 10;
  game.bankroll = 100;
  game.dealersHand = [];

  assert.equal( test_a, "function", "Function calculateValue() is defined." );
  assert.equal( test_b, 1, "Function calculateValue() takes 1 argument." );
  assert.equal( test1, 2, "Function calculateValue() counts [2] correctly." );
  assert.equal( test2, 10, "Function calculateValue() counts [10] correctly." );
  assert.equal( test3, 11, "Function calculateValue() counts ['A'] correctly." );
  assert.equal( test4, "blackjack", "Function calculateValue() counts [10,'A'] correctly." );
  assert.equal( test5, 21, "Function calculateValue() counts [10,'A', 3, 'A', 3, 'A', 2] correctly." );
  assert.equal( test6, "busted", "Function calculateValue() counts [10,2,10] correctly." );
  assert.equal( test7, "busted", "Function calculateValue() counts [4,2,3,4,'A','A',2,3,2] correctly." );
  assert.equal( test8, "busted", "Function calculateValue() counts [6,6,6,2,2] correctly." );
  assert.equal( test9, 10, "Function calculateValue() counts dealersHand correctly." );
  assert.equal( test10, 21, "Function calculateValue() counts dealersHand correctly." );
  assert.equal( test11, 22, "Function calculateValue() counts dealersHand correctly." );
  assert.equal( test12, 20, "Function calculateValue() counts dealersHand correctly." );
});

QUnit.test( "function hit(arg)", function( assert ) {
  var test_a = typeof hit;
  var test_b = hit.length;

  var initialValue = game.deck; //stores initial deck
  game.deck = [9];
  game.dealersHand = [2,10];
  var arr1 = game.dealersHand;
  var test1 = hit(arr1);
  game.betSize = 10;
  game.bankroll = 100;
  game.dealersHand = [];
  game.deck = initialValue; //restores initial deck

  var initialValue = game.deck; //stores initial deck
  game.deck = [9];
  game.playersHand = [2,10];
  var arr2 = game.playersHand;
  var test2 = hit(arr2);
  game.betSize = 10;
  game.bankroll = 100;
  game.playersHand = [];
  game.deck = initialValue; //restores initial deck

  assert.equal( test_a, "function", "Function hit(arg) is defined." );
  assert.equal( test_b, 1, "Function hit(arg) takes 1 argument." );
  assert.equal( test1, "dealersHand was destinguished successfully.", "Function hit(arg) works correctly on dealersHand." );
  assert.equal( test2, "playersHand was destinguished successfully.", "Function hit(arg) works correctly on playersHand." );
});

QUnit.test( "function double(arg)", function( assert ) {
  var test_a = typeof double;
  var test_b = double.length;

  game.dealersHand = [10];
  var arr1 = game.dealersHand;
  var test1 = double(arr1);
  game.dealersHand = [];

  var initialValue = game.deck; //stores initial deck
  game.deck = [9];
  game.playersHand = [6,6];
  var arr2 = game.playersHand;
  var test2 = double(arr2);
  game.playersHand = [];
  game.deck = initialValue; //restores initial deck

  var initialValue = game.deck; //stores initial deck
  game.deck = [9];
  game.playersHand = [6,5,10];
  var arr3 = game.playersHand;
  var test3 = double(arr3);
  game.playersHand = [];
  game.deck = initialValue; //restores initial deck

  assert.equal( test_a, "function", "Function double(arg) is defined." );
  assert.equal( test_b, 1, "Function double(arg) takes 1 argument." );
  assert.equal( test1, "dealersHand can't double.", "dealersHand can not double." );
  assert.equal( test2, "playersHand was doubled successfully.", "playersHand can double with [6,6]." );
  assert.equal( test3, "playersHand has more than 2 cards and can not double.", "playersHand can not double with more than 2 cards." );
});

QUnit.test( "function dealersTurn()", function( assert ) {
  var test_a = typeof dealersTurn;
  var test_b = dealersTurn.length;

  assert.equal( test_a, "function", "Function dealersTurn() is defined." );
  assert.equal( test_b, 0, "Function dealersTurn() takes 1 argument." );
});

QUnit.test( "function compareHands()", function( assert ) {
  var test_a = typeof compareHands;
  var test_b = compareHands.length;

  // player has more
  game.valueOfPlayersHand = 17;
  game.valueOfDealersHand = 16;
  var test1 = compareHands();
  game.bankroll = 100;
  game.betSize = 10;
  game.valueOfPlayersHand = 0;
  game.valueOfDealersHand = 0;

  // dealer has more
  game.valueOfPlayersHand = 20;
  game.valueOfDealersHand = 21;
  var test2 = compareHands();
  game.bankroll = 100;
  game.betSize = 10;
  game.valueOfPlayersHand = 0;
  game.valueOfDealersHand = 0;

  // draw
  game.valueOfPlayersHand = 21;
  game.valueOfDealersHand = 21;
  var test3 = compareHands();
  game.bankroll = 100;
  game.betSize = 10;
  game.valueOfPlayersHand = 0;
  game.valueOfDealersHand = 0;

  // dealer busts
  game.valueOfPlayersHand = 14;
  game.valueOfDealersHand = 22;
  var test4 = compareHands();
  game.bankroll = 100;
  game.betSize = 10;
  game.valueOfPlayersHand = 0;
  game.valueOfDealersHand = 0;

  assert.equal( test_a, "function", "Function compareHands(arg) is defined." );
  assert.equal( test_b, 0, "Function compareHands(arg) takes 1 argument." );
  assert.equal( test1, "player wins", "Player wins correctly." );
  assert.equal( test2, "dealer wins", "Dealer wins correctly." );
  assert.equal( test3, "draw", "Draw stands correctly." );
  assert.equal( test4, "dealer busts", "Dealer busts correctly." );
});







