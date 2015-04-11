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
  assert.equal( test5, 0, "Property game.deck is an empty array.");
  assert.equal( test6, 0, "Property game.playersHand is an empty array.");
  assert.equal( test7, 0, "Property game.dealersHand is an empty array.");
  assert.equal( test8, 0, "Property game.valueOfPlayersHand is set to 0.");
  assert.equal( test9, 0, "Property game.valueOfDealersHand is set to 0.");
});

QUnit.test( "function shuffle()", function( assert ) {
	var shuffle_length = shuffle.length;
	var arr1 = [0,1,2,3,4];
	var arr2 = [0,1,2,3,4];
	var shuffled_arr = shuffle(arr1);

  assert.equal( shuffle_length, "1", "function shuffle() is defined." );
  assert.notEqual( arr1, arr2, "function shuffle() works.");
});