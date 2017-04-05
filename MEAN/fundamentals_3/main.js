function makePerson(theirName){
    var person = {
        name: theirName,
        distance_traveled: 0,
        say_name: function(){
            console.log(this.name);
        },
        say_something: function(something){
            console.log(this.name + " says " + something);
        },
        walk: function(){
            console.log(this.name + " is walking.");
            this.distance_traveled += 3;
        },
        run: function(){
            console.log(this.name + " is running.");
            this.distance_traveled += 10;
        },
        crawl: function(){
            console.log(this.name + " is crawling.");
            this.distance_traveled += 1
        }
    }
    return person;
}

makePerson("frodo").say_name();
