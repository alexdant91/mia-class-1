import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom"

const Product = () => {
    const params = useParams();
    const [queries] = useSearchParams();

    const [queryParams] = useState(Object.fromEntries(queries.entries()));

    return (
        <div>
            <h1>Product: id = {params.id} | name = {queryParams.name} | token = {queryParams.token} </h1>
        </div>
    )
}

export default Product