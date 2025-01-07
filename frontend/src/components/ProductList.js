import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

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

    const deleteProduct = async (id) => {
        console.warn(id)
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            alert("Product Deleted")
            getProducts();
        }

    }
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
                    <li>Operation</li>
                </ul>
                {
                    product.map((items, index) =>
                        <ul key={items._id}>
                            <li>{index + 1}</li>
                            <li>{items.name}</li>
                            <li>{items.price}</li>
                            <li>{items.category}</li>
                            <li>{items.company}</li>
                            <li><button onClick={() => deleteProduct(items._id)}>Delete</button>
                                <Link to={"/update/" + items._id} >  Update</Link>
                            </li>
                        </ul>)
                }
            </h3>
        </div >
    )
};

export default ProductList;