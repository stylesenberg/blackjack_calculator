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

QUnit.test( "function shuffle()", function( assert ) {
	var test1 = typeof shuffle;
	var arr1 = [0,1,2,3,4];
	var arr2 = [0,1,2,3,4];
	var shuffled_arr = shuffle(arr1);

  assert.equal( test1, "function", "Function shuffle() is defined." );
  assert.notEqual( arr1, arr2, "Function shuffle() works.");
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