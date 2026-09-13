import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { products } from '../data/products'

function ProductDetail() {
    const { id } = useParams()
    const product = products.find((p) => p.id === Number(id))


    if (!product) {
        return (
            <>
                <div className="text-lg text-center text-slate-500">Product not found.</div>
                <div><Link to="/products" className="text-lg text-center text-slate-500 hover:underline">← Back to products</Link></div>
        
            </>
        )
    }

    const [stockQty, setStockQty] = useState(product.stockQty)

    useEffect(() => {
        setStockQty(product.stockQty)
    }, [id])

    return (
        <div className="max-w-2xl mx-auto px-6 py-10">
            <Link to="/products" className="text-sm text-slate-500 hover:underline">← Back to products</Link>

            <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
            <p className="text-sm text-slate-500 mb-6">{product.sku} · {product.category}</p>

            <div className="flex items-center gap-3">
                <button onClick={() => setStockQty(stockQty - 1)}>−</button>
                <span className="text-lg w-10 text-center">{stockQty}</span>
                <button onClick={() => setStockQty(stockQty + 1)}>+</button>
            </div>
        </div>
    )
}

export default ProductDetail