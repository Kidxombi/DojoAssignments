var game = {
    players: [],
    addPlayer: function(player){

        this.players.push(player);
    },
};

function playerConstructor(name){
    player = {};
    player.name = name;
    player.hand = [];
    player.addCard = function(){
        var pokemon;
        var randomNumber = Math.floor(Math.random() * 151) + 1
        var url = 'http://pokeapi.co/api/v2/pokemon/'+randomNumber+'/';
        card = {};
        $.getJSON(url, function(object){
            
            card.name = object.forms[0].name;
            card.speed = object.stats[0].stat.name, " : ", object.stats[0].base_stat;
            card.special_defence = object.stats[1].stat.name, " : ", object.stats[1].base_stat;
            card.special_attack = object.stats[2].stat.name, " : ", object.stats[2].base_stat;
            card.defence = object.stats[3].stat.name, " : ", object.stats[3].base_stat;
            card.attack = object.stats[4].stat.name, " : ", object.stats[4].base_stat;
            card.hp = object.stats[5].stat.name, " : ", object.stats[5].base_stat;
            card.type = object.types[0].type.name;
            });
        this.hand.push(card)
        }
        return player
    };

function newPlayer(name){
    newplayer = playerConstructor(name);
    game.addPlayer(newplayer);

}

var player1 = newPlayer('player1');
var player2 = newPlayer('player2');
console.log(game.players);
for (i in game.players) {
    game.players[i].addCard();
}
for (i in game.players) {
    console.log(game.players[i].name, " : ", game.players[i].hand);
}
