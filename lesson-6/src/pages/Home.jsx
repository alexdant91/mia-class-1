import { Link } from "react-router-dom";

const Home = () => {
    const products = [
        { id: "123", name: "Product 1" },
        { id: "132", name: "Product 2" },
        { id: "421", name: "Product 3" },
        { id: "142", name: "Product 4" },
        { id: "564", name: "Product 5" },
        { id: "798", name: "Product 6" },
    ];

    return (
        <div>
            <h1>Home</h1>
            <div>
                {
                    products.map(prod => (
                        <div key={prod.id}>
                            <Link 
                                to={`/products/${prod.id}?name=${prod.name.toLowerCase().replace(/\s/ig, "-")}&token=${prod.name.toLowerCase().replace(/\s/ig, "-")}-${prod.id}`} 
                                className="hover:underline cursor-pointer"
                            >{prod.name}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home