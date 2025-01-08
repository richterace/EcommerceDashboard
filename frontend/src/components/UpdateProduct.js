import React, { useEffect ,useState } from "react";
import {useParams} from 'react-router-dom';

const UpdateProduct = () => {
    const [name, updateName] = useState();
    const [price, updatePrice] = useState();
    const [category, updateCategory] = useState();
    const [company, updateCompany] = useState();
    const params = useParams();

    const UpdateProduct = () => {
        console.warn(name, price, category, company)
    }

    useEffect(()=>{
        
        getProductDetails();

    },[])

    const getProductDetails= async ()=>{

        console.warn(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        console.warn(result)
        updateName(result.name);
        updatePrice(result.price);
        updateCategory(result.category);
        updateCompany(result.company);
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