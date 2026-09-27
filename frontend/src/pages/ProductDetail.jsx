import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [stockQty, setStockQty] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`http://localhost:5000/api/products/${id}`)
            if (response.ok) {
                const data = await response.json()
                setProduct(data)
                setStockQty(data.stockQty)
            }
            setLoading(false)
        }
        fetchProducts()
    }, [id])

    if (loading) {
        return <div className="p-6">Loading...</div>
    }

    if (!product) {
        return <div className="p-6">Product not found.</div>
    }

    const adjustStock = async (change) => {
        const newQty = stockQty + change
        const response = await fetch(`http://localhost:5000/api/products/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ stockQty: newQty })
        })
        const updated = await response.json()
        setStockQty(updated.stockQty)
    }

    

    const handleDelete = async () => {
        const confirmed = window.confirm(`Delete the product - ${product.name}, are you sure? `)
        if (!confirmed) return
        
        await fetch(`http://localhost:5000/api/products/${id}`,{
            method : 'DELETE',
        })

        navigate('/products')
    }



    return (
        <div className="max-w-2xl mx-auto px-6 py-10">
            <Link to="/products" className="text-sm text-slate-500 hover:underline">← Back to products</Link>

            <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
            <p className="text-sm text-slate-500 mb-6">{product.sku} · {product.category}</p>

            <div className="flex items-center gap-3">
                <button onClick={() => adjustStock(-1)}>−</button>
                <span className="text-lg w-10 text-center">{stockQty}</span>
                <button onClick={() => adjustStock(+1)}>+</button>
            </div>
            <div>
                <button
                    onClick={handleDelete}
                    className="mt-6 px-4 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                >
                    Delete product
                </button>
            </div>
        </div>
    )
}

export default ProductDetail