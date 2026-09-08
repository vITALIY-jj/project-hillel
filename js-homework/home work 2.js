//1
const double = x => x * 2; 
const sum = (a, b) => a + b; 
const isAdult = age => age >=18;
//2 
const userObj = {
    fistName: vitalii,
    lastName: Sosnenko,
    age: 18, 
    city: Munich 
}

userObj.fistName
userObj.city
userObj.email = "vitalijsogenko@gamil.com";
console.log(userObj)
//3 
const product = {
    title: laptop,
    price: 1000, 
    discount: 20,
}

const getFinalPrice = product => product.price * (1 - (product.discount || 0 ) /100);
//4
const book1 = {
    title: aboutMe,
    author: Vitalii, 
    pages: 200
}

const book2 = {
    title: myKitty,
    author: God, 
    pages: 300
}

const getLonger = book1.pages > book2.pages ? book1 : book2;