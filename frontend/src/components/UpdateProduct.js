import React, { useState } from "react";

const UpdateProduct = () => {
    const [name, updateName] = useState();
    const [price, updatePrice] = useState();
    const [category, updateCategory] = useState();
    const [company, updateCompany] = useState();

    const UpdateProduct = () => {
        console.warn(name, price, category, company)
    }

    return (
        <div className="UpdateProduct">
            <h1>Update Product</h1>
            <input type="text" className="inputBox" placeholder="Enter name to update"
                onChange={(e) => { updateName(e.target.value) }} value={name}
            />

            <input type="text" className="inputBox" placeholder="Enter price to update"
                onChange={(e) => { updatePrice(e.target.value) }} value={price}
            />

            <input type="text" className="inputBox" placeholder="Enter category to update"
                onChange={(e) => { updateCategory(e.target.value) }} value={category}
            />

            <input type="text" className="inputBox" placeholder="Enter company to update"
                onChange={(e) => { updateCompany(e.target.value) }} value={company}
            />

            <button className="UpdateButton" onClick={UpdateProduct}> Update</button>
        </div>
    )
}

export default UpdateProduct;