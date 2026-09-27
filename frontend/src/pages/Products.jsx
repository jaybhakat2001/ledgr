
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Products() {

    const [query, setQuery] = useState('')
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [form, setForm] = useState({ name: '', sku: '', category: '', price: '', stockQty: '', reorderPoint: '' })

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products')
                const data = await response.json()
                setProducts(data)
            }
            catch (err) {
                setError('Could not load products. Is the backend running?')
            }
            finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.sku.toLowerCase().includes(query.toLowerCase())
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/api/products`,{
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify({
                ...form,
                price:Number(form.price),
                stockQty:Number(form.stockQty) || 0,
                reorderPoint:Number(form.reorderPoint) || 10,
            }),
        })
        const created = await response.json()
        setProducts([...products,created])
        setForm({ name: '', sku: '', category: '', price: '', stockQty: '', reorderPoint: '' })
        setShowForm(false)
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-10">
            <h1 className="text-2xl font-bold mb-4">All products</h1>

            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or SKU..."
                className="w-full mb-4 px-3 py-2 border border-slate-300"
            />

            {loading && <p className="text-slate-500">Loading products...</p>}
            {error && <p className="text-red-600">{error}</p>}

            {!loading && !error && (
                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-left text-slate-500 border-b border-slate-200">
                            <th className="py-2">Product</th>
                            <th>SKU</th>
                            <th>Stock</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((product) => (
                            <tr key={product._id} className="border-b border-slate-100">
                                <td className="py-2">
                                    <Link to={`/products/${product._id}`} className="text-blue-600 hover:underline">
                                        {product.name}
                                    </Link>
                                </td>
                                <td>{product.sku}</td>
                                <td>{product.stockQty}</td>
                                <td>₹{product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>)}



            <button onClick={() => setShowForm(!showForm)} className="mb-4 px-4 py-2 bg-slate-900 text-white">
                {showForm ? 'Cancel' : '+ New entry'}
            </button>

            {showForm && (
                <form onSubmit={handleSubmit} className="mb-6 grid grid-cols-2 gap-3 border border-slate-300 p-4">
                    <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="border p-2" />
                    <input placeholder="SKU" value={form.sku} onChange={(e) => setForm({ ...form, sku: e.target.value })} className="border p-2" />
                    <input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="border p-2" />
                    <input placeholder="Price" type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="border p-2" />
                    <input placeholder="Stock" type="number" value={form.stockQty} onChange={(e) => setForm({ ...form, stockQty: e.target.value })} className="border p-2" />
                    <input placeholder="Reorder point" type="number" value={form.reorderPoint} onChange={(e) => setForm({ ...form, reorderPoint: e.target.value })} className="border p-2" />
                    <button type="submit" className="col-span-2 bg-blue-600 text-white py-2">Save product</button>
                </form>
            )}
        </div>




    )

}

export default Products