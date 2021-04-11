function personWithNew (name, age) {
    this.name = name;
    this.age = age;
}

personWithNew.prototype = {
    eat() {
        console.log("${name} is Eating");
    },
    play (){
        console.log("${name} Playing");
    }
}

const obj1 = new personWithNew("Samiul",20);
obj1.eat();