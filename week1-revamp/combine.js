const products = [
    { name: "Ceramic mug", sku: "CM-0114", price: 420, stockQty: 84, reorderPoint: 20 },
    { name: "Linen tote bag", sku: "LT-0087", price: 650, stockQty: 6, reorderPoint: 15 },
    { name: "PowerBank", sku: "PW-9832", price: 3499, stockQty: 122, reorderPoint: 12 },
    { name: "BackCover", sku: "BC-3421", price: 455, stockQty: 564, reorderPoint: 45 },
    { name: "Wallet", sku: "WA-4653", price: 899, stockQty: 22, reorderPoint: 34 },
    { name: "Laptop Stand", sku: "SD-9832", price: 789, stockQty: 34, reorderPoint: 500 },
];


const searchProducts = (products, query) => {
    return products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
    )
}
// console.log(searchProducts(products, "mug"));

const lowStockReport = (products) => {
    return products
        .filter((product) =>
            product.stockQty < product.reorderPoint
        )
        .map((product)=>`${product.name} - only  left ${product.stockQty} in stock`)
}

// console.log(lowStockReport(products));

const updateStock  = (product,change) => {
    return {
        ...product,stockQty: product.stockQty+change
    }
}
// console.log(updateStock(products[2],23));


const totalInventoryValue = products.reduce((total,product) =>{
    return total+ (product.price * product.stockQty)
},0)


// console.log(`Total inventory value: ₹${totalInventoryValue}`);


const fetchExtraInfo = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Failed to fetch extra info:", error.message);
    return null;
  }
};


const run = async () => {
  console.log("--- Search results for 'tote' ---");
  console.log(searchProducts(products, "tote"));

  console.log("--- Low stock report ---");
  console.log(lowStockReport(products));

  console.log("--- Restocking the first product by 20 ---");
  const restocked = updateStock(products[0], 20);
  console.log(restocked);

  console.log("--- Fetching extra data from the network ---");
  const extra = await fetchExtraInfo();
  console.log(extra);
};

run();