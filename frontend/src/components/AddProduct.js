import React, { useState } from "react";

const AddProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    // button to handle the passed inputs from useState
    const AddProduct = () => {
        console.warn(name)
        console.warn(price)
        console.warn(category)
        console.warn(company)
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