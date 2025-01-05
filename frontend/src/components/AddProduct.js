import React, { useState } from "react";

const AddProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(false);
    // button to handle the passed inputs from useState
    const addProduct = async () => {
        console.warn(name)
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.warn(userId)

        if (!name || !price || !category || !company) {
            setError(true);
            return false
        }

        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "Content-type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result)
        alert("Product Added")
       // Reset input fields after successful product addition
       setName('');
       setPrice('');
       setCategory('');
       setCompany('');
       setError(false);

    }
    return (
        <div className="product">
            <h1>Add Product</h1>
            <input className="inputBox" type="text" placeholder="Enter product name"
                onChange={(e) => { setName(e.target.value) }} value={name}
            />
            {error && !name && <span className="invalidInput">Enter valid name</span>}

            <input className="inputBox" type="text" placeholder="Enter product price"
                onChange={(e) => { setPrice(e.target.value) }} value={price}
            />
            {error && !price && <span className="invalidInput">Enter valid price</span>}

            <input className="inputBox" type="text" placeholder="Enter product category"
                onChange={(e) => { setCategory(e.target.value) }} value={category}
            />
            {error && !category && <span className="invalidInput">Enter valid category</span>}

            <input className="inputBox" type="text" placeholder="Enter product company"
                onChange={(e) => { setCompany(e.target.value) }} value={company}
            />
            {error && !company && <span className="invalidInput">Enter valid company</span>}

            <button onClick={addProduct} className="ProductButton">Add Product</button>
        </div>
    )
};

export default AddProduct;