function runningLogger(){
    console.log("I am running!");
}
function multiplyByTen(x){
    var result = x*10;
    return result;
}


function stringReturnOne(){
    return "This is string one!"
}
function stringReturnTwo(){
    return "This is string two!"
}

function caller(x){
    if(typeof(x) == 'function'){
        return x();
    }
}


function myDoubleConsoleLog(x, y){
    if (typeof x == 'function' && typeof y == 'function') {
        console.log(x(), y());
    }
}

function caller2 (x){
    console.log('starting');
    if (typeof x == 'function'){
        setTimeout(x(), 2000);
    }
    console.log('ending');
    return "interesting"
}
console.log(caller2(myDoubleConsoleLog(stringReturnOne(), stringReturnTwo())));
