//1 
const phoneBook = new Map();
phoneBook.set("Оля", "050-111-22-33");
phoneBook.set("Іван", "067-444-55-66");
phoneBook.set("Марія", "093-777-88-99");

const findPhone = (name) => phoneBook.get(name) || "unknown contact";

const removeContact = (name) => {
    if (phoneBook.has(name)) {
        phoneBook.delete(name);
        console.log("delete complete")
    }
        else {
            console.log("unknown contact")   
    }

};

phoneBook.forEach((phone, name) => {
console.log(`${name}: ${phone}`);

});
//2

const allowedCodes = new Set();
allowedCodes.add(101);
allowedCodes.add(205);
allowedCodes.add(333);


const checkCode = (code) => {
    if (allowedCodes.has(code)) {
        console.log("access granted")
    } else {
        console.log("access denied")
    }
};
//3 доп задание от gpt 

const visitors = new Set();

visitors.add("Оля");
visitors.add("Іван");
visitors.add("Марія");
visitors.add("Оля");

const addVisitor = (name) => {
    if (!visitors.has(name)) {
        visitors.add(name);
        console.log("visitor added")
    }
    else {
        console.log("visitor access")
    }
}