import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    const location = useLocation();

    const formatActiveClass = (path) => {
        return location.pathname === path || (location.pathname.startsWith(path) && path !== "/") ? "border-red-500" : "border-gray-50"
    }

    return (
        <nav className="flex gap-4 m-4">
            <div>
                <Link to="/" className={`px-4 py-2 rounded border ${formatActiveClass("/")} hover:underline cursor-pointer`}>Home</Link>
            </div>
            <div>
                <Link to="/about" className={`px-4 py-2 rounded border ${formatActiveClass("/about")} hover:underline cursor-pointer`}>About</Link>
            </div>
            <div>
                <Link to="/products/123" className={`px-4 py-2 rounded border ${formatActiveClass("/products")} hover:underline cursor-pointer`}>Products</Link>
            </div>
        </nav>
    )
}

export default Navbar