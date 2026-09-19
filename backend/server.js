import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import Product from './models/Product.js'

const app = express()

app.use(express.json())

app.post('/api/products', async (req, res) => {
  const product = await Product.create(req.body)
  res.status(201).json(product)
})

app.get('/',(req,res)=>{
    res.send('Ledgr API running')
})

app.get('/api/products',async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

app.get('/api/products/:id', async (req, res) => {
  const product  = await Product.findById(req.params.id)

  if (!product) {
    return res.status(404).json({message:'Page Not Found'})
  }

  res.json(product)
})

app.get('/api/test', (req, res) => {
  res.send('nodemon auto-restart works')
})


app.patch('/api/products/:id', async(req,res)=>{
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
  }
  res.json(product)  
})

app.delete('/api/products/:id', async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id)
  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
  }
  res.json({ message: 'Product deleted' })
})


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err.message))

app.listen(5000,()=>{
    console.log("Server is running on port 5000")
    console.log("Server is listening")
})