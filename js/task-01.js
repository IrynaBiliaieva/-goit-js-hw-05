// Write code under this line
const Account = function (login, email) {
    this.login = login;
    this.email = email;
};
Account.prototype.getInfo = function () {
    let message = `'login : ${this.login}, email: ${this.email}'`;

    return message;
};

console.log(typeof Account.prototype.getInfo);
// 'function'

const mango = new Account('Mangozedog', 'mango@dog.woof');
console.log(mango.getInfo());
// 'login : Mangozedog, email: mango@dog.woof'

const poly = new Account('Poly', 'poly@mail.com');
console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'

// const Hero = function (name, xp) {
//     this.name = name;
//     this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
//     console.log(`${this.name} gained ${amount} experience points`);
//     this.xp += amount;
// };

// const mango = new Hero('Mango', 1000);
// console.log(mango); // Hero { name: 'Mango', xp: 1000 }

// // Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
// mango.gainXp(500); // Mango gained 500 experience points
// console.log(mango); // Hero { name: 'Mango', xp: 1500 }
