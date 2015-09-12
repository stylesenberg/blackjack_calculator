# blackjack calculator

Built with HTML5, CSS3 &amp; JavaScript.

How to use it:

1. Define your best strategy
2. Define the number of hands you want to simulate an press "start simulation"
3. After the simulation ends, press "draw chart" to see the performance of your blackjack strategy.

Tip:
The icon "magic-wand" defines the basic blackjack strategy


Settings:

- number of decks
- position of cut-card
- number of simulations
- (in progress: blackjack does not win automatically)


Programming logic of the application:

1. shuffle deck,
2. deal initial cards to player and dealer,

3. review the player's hand:
3. a. current hand is blackjack?
3. b. current hand should split (according to strategy)?
3. c. current hand should double (...)?
3. d. current hand should hit (...)?
3. e. current hand should stay (...)?

4. data structure:
4. a. dealersHand = e.g. [[3,4,"T"]];
4. b. player_activeHands = e.g. [[3,4], ["T",5], ...]; //not even played
4. c. player_lostHands = e.g. [["T",4,"T"], [5,5,2,"T"], ...]; //score too high
4. d. player_wonHands = e.g. [["T","A"], ["A","T"], ...]; //blackjack always wins
4. e. player_finishedHands = e.g. [["T",5,3], ["T","T"], [4,5,5], ...]; //already played and waiting for dealersHand

Per default all player's hands are in the player_activeHands.
After the next card is dealt, the player's (currently playing) hand will be reviewed and (if necessary) re-ordered into another category (player_lostHands or player_finishedHands).
After the dealer has played, the only the player's player_finishedHands will be reviewed and (if necessary) re-ordered.
Last step: Winning hands win, lost hands lose and the new bankroll is calculated.
