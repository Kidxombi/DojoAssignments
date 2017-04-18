var app = angular.module('app', ['ngRoute']);


// Routes
app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl:'partials/players.html'
    }).when('/teams', {
        templateUrl:'partials/teams.html'
    }).when('/associations', {
        templateUrl:'partials/associations.html'
    }).otherwise({
        redirectTo:'/'
    })
})
//

// Factories
app.factory('playerFactory', function(){
    var players = [{name:"sam"}, {name:"bob"}, {name:"jon"}];
    var factory = {};
    factory.givePlayers = function(callback){
        callback(players);
    }
    factory.destroy = function(obj){
        var i = players.indexOf(obj);
        players.splice(i, 1);
    }
    factory.assign = function(player, team){
        var p = players.indexOf(player);
        players[p].team = team;
    }
    factory.clearAssign = function(player){
        var p = players.indexOf(player);
        delete players[p].team;
    }

    return factory;
})
app.factory('teamFactory', function(){
    var teams = [{name:"bobcats"}, {name:"sharks"}, {name:"a cactus"}];
    var factory = {};
    factory.giveTeams = function(callback){
        callback(teams);
    }
    factory.destroy = function(obj){
        var i = teams.indexOf(obj);
        teams.splice(i, 1);
    }

    return factory;
})
//

// Controllers
app.controller('playerController', function(playerFactory){
    var self = this;
    playerFactory.givePlayers(function(data){
        self.players = data;
    })
    this.destroy = function(obj){
        playerFactory.destroy(obj);
    }
})
app.controller('teamController', function(teamFactory){
    var self = this;
    teamFactory.giveTeams(function(data){
        self.teams = data;
    })
    this.destroy = function(obj){
        teamFactory.destroy(obj);
    }
})
app.controller('associationController', function(playerFactory, teamFactory){
    var self = this;
    playerFactory.givePlayers(function(data){
        self.players = data;
    });
    teamFactory.giveTeams(function(data){
        self.teams = data;
    });
    this.assign = function(){
        playerFactory.assign(self.player, self.team);
    }
    this.clearAssign = function(player){
        playerFactory.clearAssign(player);
    }
})
