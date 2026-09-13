import { useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'


function Products() {

    const [query, setQuery] = useState('')

    const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.sku.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <div className="max-w-4xl mx-auto px-6 py-10">
            <h1 className="text-2xl font-bold mb-4">All products</h1>

            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or SKU..."
                className="w-full mb-4 px-3 py-2 border border-slate-300"
            />


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
                        <tr key={product.id} className="border-b border-slate-100">
                            <td className="py-2">
                                <Link to={`/products/${product.id}`} className="text-blue-600 hover:underline">
                                    {product.name}
                                </Link>
                            </td>
                            <td>{product.sku}</td>
                            <td>{product.stockQty}</td>
                            <td>₹{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

    )

}

export default Products