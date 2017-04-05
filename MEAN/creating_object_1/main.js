function Vehicle(name, speed, numberOfWheels, numberOfPassengers){
    var distance_traveled = 0;
    var updateDistanceTraveled = function(){
        distance_traveled += speed;
    }
    this.name = name;
    this.speed = speed;
    this.numberOfWheels = numberOfWheels;
    this.numberOfPassengers = numberOfPassengers;
    this.makeNoise = function(){ console.log("Vroom") }
    this.vinNumber = genVin();
    this.move = function(){
        this.makeNoise();
        console.log('Moving!');
        updateDistanceTraveled();
    }
    this.checkMiles = function(){
        console.log(distance_traveled);
    }
    if (!(this instanceof Vehicle)) {
   return new Vehicle(name, speed, numberOfWheels, numberOfPassengers);
 }
}
genVin = function(){
    var vin = [];
    var alphaNum = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0']
    for (var i = 0; i < 16; i++) {
        var randomIndex = Math.floor(Math.random() * alphaNum.length)
        vin.push(alphaNum[randomIndex]);
    }
    return vin;
}
// My Bike
var bike = Vehicle('Bike', 1, 2, 0);
bike.makeNoise = function(){ console.log('ring ring...') }
// My Sedan
var sedan = Vehicle('Sedan', 10, 4, 0);
sedan.makeNoise = function(){ console.log('Honk Honk!') }
// My Bus
var bus = Vehicle('Bus', 5, 8, 0);
bus.pickUpPassengers = function(howMany){
    console.log("Picking up "+howMany+" passengers!");
    this.numberOfPassengers += howMany;
}

console.log(bike.vinNumber);
console.log(bus.vinNumber);
