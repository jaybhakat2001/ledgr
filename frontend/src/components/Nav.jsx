import Heading from "./Heading"
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-blue-200">
      <Heading text="Ledgr" color="text-blue-600" size="text-2xl" />
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
    </div>
  )
}

export default Nav