import React, { useEffect, useState } from "react";

const ProductList = () => {

    const [product, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {

        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result)

    }



    console.warn(product);
    return (
        <div className="prodList">
            <h3>
                Product List
                <ul>
                    <li>S. No</li>
                    <li>Name</li>
                    <li>Price</li>
                    <li>Category</li>
                    <li>Company</li>
                </ul>
                {
                    product.map((items, index) =>
                        <ul key={items}>
                            <li>{index + 1}</li>
                            <li>{items.name}</li>
                            <li>{items.price}</li>
                            <li>{items.category}</li>
                            <li>{items.company}</li>
                        </ul>)
                }
            </h3>
        </div >
    )
};

export default ProductList;