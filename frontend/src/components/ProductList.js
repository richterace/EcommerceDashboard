import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const ProductList = () => {

    const [product, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {

            let result = await fetch('http://localhost:5000/products',{
                headers:{
                    authorization:JSON.parse(localStorage.getItem('token'))
                }
            });
            result = await result.json();
            setProducts(result)

        };
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

    const searchHandle = async (event) => {
        let key = event.target.value;
        if(key){

        
        let result = await fetch(`http://localhost:5000/search/${key}`);
        result = await result.json()

        if (result){
            setProducts(result)
        }
    }
        else{
            getProducts();
        }
    }

    return (
        <div className="prodList">
            <h3>
                Product List
                <input type="" className='search-product-box' placeholder='Search Product'
                onChange={searchHandle}
                />
                <ul>
                    <li>S. No</li>
                    <li>Name</li>
                    <li>Price</li>
                    <li>Category</li>
                    <li>Company</li>
                    <li>Operation</li>
                </ul>
                {
                    product.length > 0 ? product.map((items, index) =>
                        <ul key={items._id}>
                            <li>{index + 1}</li>
                            <li>{items.name}</li>
                            <li>{items.price}</li>
                            <li>{items.category}</li>
                            <li>{items.company}</li>
                            <li><button onClick={() => deleteProduct(items._id)}>Delete</button>
                                <Link to={"/update/" + items._id} >  Update</Link>
                            </li>
                        </ul>
                        )
                        :
                        <h1>No Result Found</h1>
                }
            </h3>
        </div >
    )
};

export default ProductList;