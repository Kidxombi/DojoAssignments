

var stuff = {

    count: function(x, y){
        var sum = 0;
        for(var i = x; i <= y; i++){
            sum += i;
        }
        console.log(sum);
    },
    min: function(arr){
        var min = arr[0];
        for (i in arr){
            if (arr[i] < min){
                min = arr[i];
            }
        }
        return min;
    },
    avg : function(arr){
        var sum = 0;
        for (i in arr){
            sum += arr[i];
        }
        return sum / arr.length;
    }
}

var person = {
    name: "Sam",
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
console.log(person.distance_traveled);
person.walk();
console.log(person.distance_traveled);
