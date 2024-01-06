const products = [
    {id:1, name:'Apple', price:120, color:"balck"},
    {id:2, name:'xiami', price:220, color:"orange"},
    {id:3, name:'vivo', price:120, color:"blue"},
    {id:4, name:'nokia', price:120, color:"blue"},
    {id:5, name:'motorolla', price:220, color:"orange"},
    {id:6, name:'oppo', price:230, color:"balck"}, 
];
const productsName = document.getElementById("products-name");
products.forEach(pd=>{
    console.log(pd);
    const h1 = document.createElement("h1");
    h1.innerText = pd.name;
    productsName.appendChild(h1);
});