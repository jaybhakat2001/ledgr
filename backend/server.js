import express from 'express'

const app = express()

const products = [
  { id: 1, name: "Ceramic mug", sku: "CM-0114", category: "Tableware", price: 420, stockQty: 84, reorderPoint: 20 },
  { id: 2, name: "Linen tote bag", sku: "LT-0087", category: "Bags", price: 650, stockQty: 6, reorderPoint: 15 },
  { id: 3, name: "Brass desk lamp", sku: "BD-0033", category: "Lighting", price: 2100, stockQty: 0, reorderPoint: 10 },
  { id: 4, name: "Hand-thrown vase", sku: "HV-0021", category: "Decor", price: 890, stockQty: 32, reorderPoint: 12 },
  // add your other products here, following the same shape
]

app.get('/',(req,res)=>{
    res.send('Ledgr API running')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product  = products.find((p)=> p.id===Number(req.params.id))

  if (!product) {
    return res.status(404).json({message:'Page Not Found'})
  }

  res.json(product)
})

app.get('/api/test', (req, res) => {
  res.send('nodemon auto-restart works')
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000")
    console.log("Server is listening")
})