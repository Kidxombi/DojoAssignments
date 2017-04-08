var customObject = {
    name:'California, Eureka',
    onClick:function(){
        console.log("I've been clicked.");
        console.log(this.name);
    }
}

var newObject = {
    name:"West Virginia, Montani semper liberi"
}
$('button').click(customObject.onClick.bind(newObject));
