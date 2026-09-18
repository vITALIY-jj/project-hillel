//1 
const queue = ['Аня', 'Богдан']; 

queue.push('gleb');
queue.unshift('vera');
//console.log(queue, queue.length);
//2 
const numbers = [10, 20, 30, 40];

const first = numbers.pop();
const last = numbers.shift();

const result = () => first + last;  


//console.log(numbers, first, last, result());
//3 

const tasks = [
    { id: 4, title: 'make a project', done: false },
    { id: 6, title: 'complete homework', done: true },
    { id: 7, title: 'buy a car', done: false },
    { id: 2, title: 'clean my room', done: true }
]

tasks.shift();
tasks.unshift({ id: 3, title: 'Купити хліб', done: false });

//console.log(tasks);
//4

const users = [
    {id: 1, name: 'john'},
    {id: 2, name: 'vitalii'},
]

const adduser = (name) => {
    const userExists = users.some(user => user.name === name); 

    if (userExists) {
        //console.log ('user is exists');
    } else {
        users.push({id:Math.random(), name: name});
        //console.log('ser is added')
    }
}; 

//5 

const task5 = [10, 50 ,20, 6, 5, 7, 24, ];
    
const result2 = task5.filter(number => number > 10);
//6 

const pets = ['cat', 'dog', 'rabbit', 'fish'];

const petsResult = pets.filter(pet => pet.length >= 4);

//console.log(petsResult);
//7 

const minusNumber = [0, 5, 6, -7, -45];

const result3 = () => {
   const found = minusNumber.find(number => number < 0);
   if (found) {
    console.log(found);
   }

     else {
        console.log('number not found')
    }
}
//result3()
//8/9
const users2 = [
  { id: 1, name: 'Аня', age: 25 },
  { id: 2, name: 'Богдан', age: 17 },
  { id: 3, name: 'Віра', age: 32 },
];

const findUserId = () => {
     const findUser = users2.find(user => user.id === 6); 
     if (findUser) {
        console.log(findUser.name);
     } else {
        console.log('user not found');
     }
           
};

//findUserId();

//10 
const products1 = [
  { name: 'Ноутбук', price: 30000, inStock: true },
  { name: 'Миша', price: 800, inStock: false },
  { name: 'Клавіатура', price: 2500, inStock: false },
];

//const findProduct = () => {
    //const inStockProduct = products.find(product => product.inStock === false);
    //if (inStockProduct) {
        //console.log(inStockProduct.name);
   // }
//};

//findProduct();
//11
const kitty = ["кот", "конь", "собака"]; 

const result4 = kitty.filter(word => word.startsWith('к'));

//console.log(result4);
//13
const products = [
  { name: 'Ноутбук', price: 30000, inStock: true },
  { name: 'Миша', price: 800, inStock: false },
  { name: 'Клавіатура', price: 2500, inStock: true },
  { name: 'Килимок', price: 300, inStock: true },
];

const findProduct2 = () => {
    const productPrice = products.filter(product => product.price < 5000)
    if (productPrice) {
        console.log(productPrice)
    }
}

findProduct2();