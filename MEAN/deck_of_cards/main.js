
// Helper functions
function removeAt(array, index){
    for (var i = index; i < array.length-1; i++) {
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
    }
    var card = array.pop()
    return card
};



// The Deck
function Deck () {
    var self = this
    this.cards = [];
    var reset = function () {
        self.cards = [];
        var suits = ['clubs', 'spades', 'diamonds', 'hearts'];
        var numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        for (suitIdx in suits) {
            for (numberIdx in numbers) {
                self.cards.push(new Card(suits[suitIdx], numbers[numberIdx]))
            }
        }
    }

    reset();
};
// Deck prototypes
Deck.prototype.shuffle = function(){
    console.log('testing');
    for (var i = this.cards.length-1; i >= 0; i--){
        console.log('in the loop');
        var randomIndex = Math.floor(Math.random() * this.cards.length);
        var temp = this.cards[i];
        this.cards[i] = this.cards[randomIndex];
        this.cards[randomIndex] = temp;
    }
};
Deck.prototype.deal = function(random=false){
    if (!random) {
        console.log('dealing off the top...');
        return this.cards.pop()
    } else {
        return removeAt(this.cards, Math.floor(Math.random() * this.cards.length))
    }

};



// The Card
function Card(suit, number) {
    this.suit = suit;
    this.number = number;
};



// The Player
function Player(name){
    var chips = 20;
    this.name = name;
    this.hand = [];
    this.drawFromTopOfDeck = function(deck){
        var newCard = deck.deal(random=false)
        this.hand.push(newCard);
        console.log(this.name+" drew a "+newCard.number+" of "+newCard.suit)
    }
    this.drawRandomlyFromDeck = function(deck){
        var newCard = deck.deal(random=true)
        this.hand.push(newCard);
        console.log(this.name+" randomly drew a "+newCard.number+" of "+newCard.suit)
    }
    this.sayName = function(){
        console.log('my name is '+this.name);
    }
    this.clearHand = function(){
        this.hand = [];
    }
    this.showHand = function(){
        if (this.hand){
            for (i in this.hand) {
                console.log(this.name+" has...");
                console.log(this.hand[i].number+" of "+this.hand[i].suit);
                console.log(this.hand.count+" cards in hand");
            }
        } else {
            console.log(this.name+' has nothing in their hand');
        }
    }
};



// The Game
function GameTable(name){
    var self = this;
    var name = name
    var bank = 100;
    var decks = [];
    var players = [];
    var over = false;
    this.addDeck = function(deck){
        decks.push(deck);
        console.log('added a deck to the game');
    }
    this.addPlayer = function(player){
        players.push(player);
        console.log(player.name, 'added to the game');
    }
    this.reset = function(){
        decks = [];
        players = [];
    }
    this.start = function(){
        for (i in players){
            for (var j = 0; j < 7; j++){
                players[j].drawFromTopOfDeck(decks[0])
            }
        }
    }
    console.log(name+" created");
};
var player1 = new Player('player1');
var player2 = new Player('player2');
var deck1 = new Deck();
var game1 = new GameTable('game1');
game1.addDeck(deck1);
game1.addPlayer(player1);
game1.addPlayer(player2);
player1.showHand();
