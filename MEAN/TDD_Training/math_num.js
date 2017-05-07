var MathNum = function (arg) {

    if (!arg) {
        this.value = 0;
    } else {
        this.value = arg;
    };

    this.val = function(){
        return this.value
    };

    this.add = function(num){
        if (typeof num == "number") {
            this.value += num;
        } else if (num instanceof Array) {
            for (i in num) {
                this.add(num[i]);
            }
        }
    };

    this.multiply = function(num){
        if (typeof num == "number") {
            this.value *= num;
        } else if (num instanceof Array) {
            for (var i = 0; i < num.length; i++) {
                this.multiply(num[i]);
            }
        }
    };

    this.power = function (n) {
        if (typeof n == "number") {
            return this.value**n
        }
    }
}
module.exports = MathNum;
