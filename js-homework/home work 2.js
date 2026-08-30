// 1

function getRectangleArea(width, height) {
    return width * height;
}

console.log (getRectangleAre(3, 14))
console.log (getRectangleAre(5, 24))
console.log (getRectangleAre(1, 56))

//2 

function applyDiscount(price, discount =0) {
    return price - price * discount /100;
}

console.log(applyDiscount(1000, 50))

//3

function greet(name) {
    function capitalize(name) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase()
    }

    return "Hello, " + capitalize(name) + "!";
}

console.log(greet("витАЛИй"))