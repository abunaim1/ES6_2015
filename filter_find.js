const products = [
    {id:1, name:'Apple', price:120, color:"balck"},
    {id:2, name:'xiami', price:220, color:"orange"},
    {id:3, name:'vivo', price:120, color:"blue"},
    {id:4, name:'nokia', price:120, color:"blue"},
    {id:5, name:'motorolla', price:220, color:"orange"},
    {id:6, name:'oppo', price:230, color:"balck"}, 
];

// const result = products.filter(pd=>console.log(pd)); 
const result = products.filter(pd=>pd.color == "balck"); 
// console.log(result);
const result2 = products.find(pd=>pd.id == 1);
console.log(result2);
