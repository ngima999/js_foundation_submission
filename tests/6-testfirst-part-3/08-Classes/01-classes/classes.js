/* eslint-disable no-unused-vars */
class Mammal{
    constructor(name){
        this.name=name;
        this.offspring=[];
    }

    sayHello() {
        return `My name is ${this.name}, I'm a Mammal`;
    }

    haveBaby(){
        const baby = new Mammal('Baby Joe');
        this.offspring.push(baby);
        return baby;
    }
}


class Cat extends Mammal{
    constructor(name, color){
        super(name);
        this.color=color;
    }

    meow(){
        return 'meow';
    }

    sayHello() {
        return `My name is ${this.name}, I'm a Cat`;
    }

    haveBaby(color){
        const babyCat = new Cat(`Baby ${this.name}`, color);
        this.offspring.push(babyCat);
        return babyCat;
    }
}


class Dog extends Mammal{
    constructor(name, breed){
        super(name);
        this.breed=breed;

    }

    bark(){
        return 'RUFF RUFF';
    }

    sayHello() {
        return `My name is ${this.name}, I'm a Dog`;
    }

    haveBaby(breed){
        const puppy = new Dog(`Baby ${this.name}`, breed);
        this.offspring.push(puppy);
        return puppy;
    }
}