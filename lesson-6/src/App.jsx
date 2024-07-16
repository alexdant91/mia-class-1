import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import PublicLayout from "./layouts/PublicLayout"
import Product from "./pages/Product"


const App = () => {

    return (
        <> 
            <Routes>
                <Route path="/" element={<PublicLayout />}>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="products/:id" element={<Product />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
