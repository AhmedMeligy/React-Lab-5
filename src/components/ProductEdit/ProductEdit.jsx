import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductEdit() {
    const { productId } = useParams();
    const [product, setProduct] = useState({
        title: '',
        thumbnail: '',
        price: 0,
        stock: 0
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:2000/products/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:2000/products/${productId}`, product);
            console.log('Product updated successfully');
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="title" placeholder="title" name="title" value={product.title} onChange={handleChange}/>
                    <label htmlFor="title">Product Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="thumbnail" placeholder="thumbnail" name="thumbnail" value={product.thumbnail} onChange={handleChange}/>
                    <label htmlFor="thumbnail">Product Image</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="price" placeholder="Price" name="price" value={product.price} onChange={handleChange}/>
                    <label htmlFor="price">Product Price</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="stock" placeholder="stock" name="stock" value={product.stock} onChange={handleChange}/>
                    <label htmlFor="stock">Product Quantity</label>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </div>
    );
}
