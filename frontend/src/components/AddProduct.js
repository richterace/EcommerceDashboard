import React, { useState } from "react";

const AddProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    // button to handle the passed inputs from useState
    const AddProduct = async () => {
        console.warn(name)
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.warn(userId)

        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "Content-type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result)

    }
    return (
        <div className="product">
            <h1>Add Product</h1>
            <input className="inputBox" type="text" placeholder="Enter product name"
                onChange={(e) => { setName(e.target.value) }} value={name}
            />

            <input className="inputBox" type="text" placeholder="Enter product price"
                onChange={(e) => { setPrice(e.target.value) }} value={price}
            />

            <input className="inputBox" type="text" placeholder="Enter product category"
                onChange={(e) => { setCategory(e.target.value) }} value={category}
            />

            <input className="inputBox" type="text" placeholder="Enter product company"
                onChange={(e) => { setCompany(e.target.value) }} value={company}
            />

            <button onClick={AddProduct} className="ProductButton">Add Product</button>
        </div>
    )
};

export default AddProduct;