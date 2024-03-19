import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useFetch from '../../Fetch';
import { Link } from 'react-router-dom';

const Products = () => {
    const { data: products, loading, fetchData } = useFetch("http://localhost:2000/products");

    const handleDelete = (productId) => {
        axios
          .delete(`http://localhost:2000/products/${productId}`)
          .then(() => fetchData())
          .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className='row mt-4 '>
            {products.map((product) => (
                <div key={product.id} className="col-md-3 d-flex justify-content-center">
                    <div className="card mb-4" style={{ width: '18rem' }}>
                        <img src={product.thumbnail} className="card-img-top" alt={product.name} style={{ height: '200px', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">Price: {product.price}</p>
                            <div className="d-flex justify-content-between">
                                <button onClick={() => handleDelete(product.id)} className='btn bg-danger text-white'>Delete</button>
                                <Link className='btn btn-primary' to={`/products/${product.id}`}>View</Link>
                                <Link className='btn bg-success text-white' to={`/edit/${product.id}`}>Edit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
