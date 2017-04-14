var app = angular.module('app', []);

app.controller('controller_1', function($http){
    var self = this
    self.colors = [];

 $http.get("https://gist.githubusercontent.com/jjdelc/1868136/raw/c9160b1e60bd8c10c03dbd1a61b704a8e977c46b/crayola.json").then(function(response){
     console.log(response);
     self.colors = response.data
     console.log(self.colors);
    })

})
