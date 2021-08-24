console.log("*****************************Person Details*****************************")

class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age
    }

    setId(newId){
        this.id=newId;
    }
    getId(){
        return this.id;
    }

    setName(newName){
        this.name=newName;
    }
    getName(){
        return this.name;
    }

    setAge(newAge){
        this.age=newAge;
    }
    getAge(){
        return this.age;
    }

}

let person1=new Person(4513,"Sam",25);
console.log(person1)