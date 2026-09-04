const products = [
    { name: "Ceramic mug", sku: "CM-0114", price: 420, stockQty: 84, reorderPoint: 20 },
    { name: "Linen tote bag", sku: "LT-0087", price: 650, stockQty: 6, reorderPoint: 15 },
    { name: "PowerBank", sku: "PW-9832", price: 3499, stockQty: 122, reorderPoint: 12 },
    { name: "BackCover", sku: "BC-3421", price: 455, stockQty: 564, reorderPoint: 45 },
    { name: "Wallet", sku: "WA-4653", price: 899, stockQty: 500, reorderPoint: 34 },
    { name: "Laptop Stand", sku: "SD-9832", price: 789, stockQty: 111, reorderPoint: 500 },
];


// const formatProduct = (product) => {
//     return `${product.name} (${product.sku} = ${product.stockQty}) in stock`
// }
const formatPrice = (price) => `₹${price}`;
const stockStatus = (qty,rp) =>{
    if(qty<rp){
        return `Low Stock`
    }else{
        return `In Stock`
    }
}
const formatProduct = (product) => `${product.name} (${product.sku}) — ${product.stockQty} in stock | Price ${formatPrice(product.price)} | ${stockStatus(product.stockQty, product.reorderPoint)}`;

// function formatProduct(product) {
//     return `${product.name} (${product.sku} = ${product.stockQty}) in stock`
// }


products.forEach((product) => {
    console.log(formatProduct(product))
})

const nameAndPrice = products.map((product) => `${product.name} — ₹${product.price}`);

console.log(nameAndPrice);



const totalInventoryValue = products.reduce((total, product) => {
  return total + (product.price * product.stockQty);
}, 0);

console.log(`Total inventory value: ₹${totalInventoryValue}`);

const lowStockReport = products.filter((product)=>product.stockQty<product.reorderPoint).map((product)=>`${product.name} - ${product.stockQty} : Price ${formatPrice(product.price)}`)
console.log(lowStockReport)

const updateStock = ((product,change)=>{
    return ({...product,stockQty:product.stockQty + change})
})

const restocked = updateStock(products[0],15)

console.log(restocked)


// const moreProducts = [...products, { name: "New item", sku: "NI-001", price: 300, stockQty: 10, reorderPoint: 5 }];

// console.log(products);      // still 8
// console.log(moreProducts); 


const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
};

getTodos();