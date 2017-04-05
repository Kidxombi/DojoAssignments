var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
for (i in x) {console.log(x[i]);}
x.push(100)
x.push(["hello", "world", "JavaScript is Fun"])
console.log(x);
function sum(){
    var sum = 0;
    for (var i = 1; i <= 500; i++){
        sum += i;
    }
    console.log(sum);
}
function min(){
    var arr = [1, 5, 90, 25, -3, 0];
    var min = arr[1];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
        }
    }
    console.log(min);
}
function avg(){
    var arr = [1, 5, 90, 25, -3, 0];
    var sum = 0;
    for (i in arr){
        sum += arr[i];
    }
    console.log(sum / arr.length);
}


var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (key in newNinja) {
    console.log(key, ":", newNinja[key]);
}
