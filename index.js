const Buyer = require("./buyer");
const Seller = require("./seller");
const Database = require('./database');

console.log("Hello world!");

const buyerPerson = new Buyer("Alper Akcan", 28, 10000, "notr", false);

const sellerPerson = new Seller("Gokhan Ozdemir", 35, 20000, "notr", true);

buyerPerson.makeOffer(6000, sellerPerson);

console.log(buyerPerson);
console.log(sellerPerson);

const traders = [];
traders.push(buyerPerson, sellerPerson);

console.log("traders: ", traders);

Database.save(traders);

const loadedFile = Database.load();
