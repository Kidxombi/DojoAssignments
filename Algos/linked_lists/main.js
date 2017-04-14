var SLL = function(){
    this.head = null;
    this.addFront = function(val){
        var node = new Node(val);
        node.next = this.head;
        this.head = node;
    }
    this.print = function(){
        var runner = this.head;
        while (runner) {
            console.log(runner.value);
            runner = runner.next
        }
    }
    this.reverse = function(){
        var runner = this.head;
        while (runner.next) {
            var temp = this.head;
            this.head = runner.next;
            runner.next = runner.next.next;
            this.head.next = temp;
        }
        return this
    }
}

var Node = function(val){
    this.value = val;
    this.next = null;
}

var list = new SLL();
for (var i = 1; i < 11; i++) {
    list.addFront(i);
}
list.print();
list.reverse();
console.log("==============");
list.print();
