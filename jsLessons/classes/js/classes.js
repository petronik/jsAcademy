function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello! ' + this.name);
    };
}
User.prototype.exit = function(name) {
    console.log('Пользователь ' + this.name + ' ушел'); 
}

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20),
    vova = new User( 'Vova', 42);

console.log(ivan);
console.log(alex);
console.log(vova);
 ivan.exit();

